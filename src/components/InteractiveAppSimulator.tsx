import { useState } from "react";
import { ChevronLeft, Play, Volume2, VolumeX, Smartphone, RotateCw, Music } from "lucide-react";
import { harmonicFieldsData, HarmonicField, ChordInfo } from "../data/harmonicFields";
import { motion, AnimatePresence } from "motion/react";

// Web Audio API chord player helper
class ChordSynth {
  private ctx: AudioContext | null = null;
  private activeOscillators: OscillatorNode[] = [];
  private gainNode: GainNode | null = null;

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    // resume if suspended (browser security policies)
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  // Map notes to frequencies
  private getNoteFreq(note: string, octave: number = 4): number {
    const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    // Convert flat or alternate symbols if any
    let cleanNote = note.replace("dim", "").replace("m", "").trim();
    if (cleanNote === "B♭") cleanNote = "A#";
    if (cleanNote === "E♭") cleanNote = "D#";
    if (cleanNote === "A♭") cleanNote = "G#";
    if (cleanNote === "D♭") cleanNote = "C#";
    if (cleanNote === "E#") cleanNote = "F";
    if (cleanNote === "B#") cleanNote = "C";

    const baseIndex = notes.indexOf(cleanNote);
    if (baseIndex === -1) return 261.63; // Return C4 as fallback

    // Standard formula: A4 = 440Hz is index 9 in octave 4.
    const steps = baseIndex + (octave - 4) * 12 - 9;
    return 440 * Math.pow(Math.exp(Math.log(2) / 12), steps);
  }

  // Plays a standard triad chord
  playChord(chordName: string) {
    this.stop();
    this.init();

    if (!this.ctx) return;

    // Create a master volume envelope
    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(0, this.ctx.currentTime);
    this.gainNode.gain.linearRampToValueAtTime(0.15, this.ctx.currentTime + 0.1); // Slow rise
    this.gainNode.connect(this.ctx.destination);

    // Parse root note and chord structure
    let root = chordName;
    let isMinor = false;
    let isDiminished = false;

    if (chordName.endsWith("dim")) {
      root = chordName.replace("dim", "");
      isDiminished = true;
    } else if (chordName.endsWith("m") && !chordName.endsWith("dim")) {
      root = chordName.slice(0, -1);
      isMinor = true;
    }

    // Standard major triad: 0, 4, 7 steps
    // Minor triad: 0, 3, 7 steps
    // Diminished triad: 0, 3, 6 steps
    let intervals = [0, 4, 7];
    if (isMinor) intervals = [0, 3, 7];
    if (isDiminished) intervals = [0, 3, 6];

    const notesScale = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    let rootClean = root.replace("♭", "b");
    if (rootClean === "B♭" || rootClean === "Bb") rootClean = "A#";
    if (rootClean === "E♭" || rootClean === "Eb") rootClean = "D#";
    if (rootClean === "A♭" || rootClean === "Ab") rootClean = "G#";
    if (rootClean === "D♭" || rootClean === "Db") rootClean = "C#";

    const rootIdx = notesScale.indexOf(rootClean);

    // Play 4 voices: bass root (octave 3) + chord (octave 4)
    const voiceNotesFreqs: number[] = [];
    
    // Bass note
    voiceNotesFreqs.push(this.getNoteFreq(rootClean, 3));

    // Triad notes
    intervals.forEach(interval => {
      const idx = (rootIdx + interval) % 12;
      const octaveOffset = Math.floor((rootIdx + interval) / 12);
      const noteFreq = this.getNoteFreq(notesScale[idx], 4 + octaveOffset);
      voiceNotesFreqs.push(noteFreq);
    });

    voiceNotesFreqs.forEach((freq) => {
      if (!this.ctx || !this.gainNode) return;
      const osc = this.ctx.createOscillator();
      
      // Use warm triangle waves for cozy church organ / pad feeling
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      
      // Add slight detune for a rich chorus element
      osc.detune.setValueAtTime((Math.random() - 0.5) * 12, this.ctx.currentTime);

      osc.connect(this.gainNode);
      osc.start();
      this.activeOscillators.push(osc);
    });
  }

  stop() {
    // Graceful fadeout to avoid clicks
    if (this.gainNode && this.ctx) {
      const currentGain = this.gainNode.gain.value;
      this.gainNode.gain.cancelScheduledValues(this.ctx.currentTime);
      this.gainNode.gain.setValueAtTime(currentGain, this.ctx.currentTime);
      this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
    }
    
    setTimeout(() => {
      this.activeOscillators.forEach(osc => {
        try {
          osc.stop();
          osc.disconnect();
        } catch (e) {}
      });
      this.activeOscillators = [];
    }, 160);
  }
}

const synthPlayer = new ChordSynth();

export default function InteractiveAppSimulator() {
  const [selectedField, setSelectedField] = useState<HarmonicField | null>(harmonicFieldsData[0]); // Starts in C Major
  const [isLandscape, setIsLandscape] = useState(true);
  const [activeChordIdx, setActiveChordIdx] = useState<number | null>(null);
  const [audioEnabled, setAudioEnabled] = useState(true);

  const handleChordClick = (chord: ChordInfo, index: number) => {
    setActiveChordIdx(index);
    if (audioEnabled) {
      synthPlayer.playChord(chord.chord);
    }
  };

  const handleCloseField = () => {
    setSelectedField(null);
    setActiveChordIdx(null);
    synthPlayer.stop();
  };

  const toggleRotation = () => {
    setIsLandscape(!isLandscape);
    setActiveChordIdx(null);
    synthPlayer.stop();
  };

  const toggleAudio = () => {
    if (audioEnabled) {
      synthPlayer.stop();
    }
    setAudioEnabled(!audioEnabled);
  };

  return (
    <div id="demo-section" className="w-full relative py-12 md:py-20 bg-[#0A0E14]/20 border-t border-b border-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.06),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.06),transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Seção */}
        <div className="text-center mb-12">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 rounded-full">
            Experimente Grátis
          </span>
          <h2 className="mt-4 text-3xl font-extrabold font-sans tracking-tight text-white sm:text-4xl">
            Simulador Interativo do App
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-400 leading-relaxed">
            Sinta na pele como o aplicativo funciona no seu celular. Teste a velocidade de 
            localização e <strong className="text-cyan-400 font-bold">clique nos acordes para escutar o som</strong> do campo harmônico real.
          </p>
        </div>

        {/* Console de Contribuição / Simulador Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:items-start">
          
          {/* Coluna de Instruções e Detalhes da Música (Esquerda) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0A0E14] backdrop-blur-md rounded-2xl p-6 border border-[#1E293B]">
              <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2">
                <Music className="w-5 h-5 text-blue-400" />
                Como usar o app:
              </h3>
              <ul className="mt-4 space-y-3.5 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 text-xs flex items-center justify-center font-bold mt-0.5 border border-cyan-800/30">1</span>
                  <span><strong>Escolha o Tom:</strong> Na tela inicial do app, clique na nota ou campo que você quer visualizar.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 text-xs flex items-center justify-center font-bold mt-0.5 border border-cyan-800/30">2</span>
                  <span><strong>Modo Stand (Deitado):</strong> Gire a tela do simulador para testar a grade horizontal contínua de 7 acordes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 text-xs flex items-center justify-center font-bold mt-0.5 border border-cyan-800/30">3</span>
                  <span><strong>Escute a Harmonia:</strong> Toque em qualquer grau harmônico para reproduzir um som rico de sintetizador em tempo real.</span>
                </li>
              </ul>
              
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap gap-4 justify-between items-center">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={toggleAudio}
                    className={`p-2.5 rounded-lg border transition-all cursor-pointer ${
                      audioEnabled 
                        ? 'bg-cyan-950/40 border-cyan-500/30 text-cyan-400 hover:bg-cyan-900/40' 
                        : 'bg-[#1E293B]/40 border-slate-800 text-slate-500 hover:bg-slate-800'
                    }`}
                    title={audioEnabled ? "Desativar Áudio" : "Ativar Áudio"}
                  >
                    {audioEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                  </button>
                  <span className="text-xs text-slate-400 font-mono">
                    {audioEnabled ? "Áudio do Sintetizador Ligado" : "Sintetizador Mutado"}
                  </span>
                </div>

                <button 
                  onClick={toggleRotation}
                  className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-[#020408] hover:bg-slate-900 duration-200 px-3 py-1.5 rounded-lg border border-slate-800 cursor-pointer"
                >
                  <RotateCw className="w-3.5 h-3.5 text-cyan-400" />
                  Girar Tela ({isLandscape ? "Retrato" : "Deitado"})
                </button>
              </div>
            </div>

            {/* Caixa Informativa do Acorde Selecionado */}
            <AnimatePresence mode="wait">
              {selectedField && activeChordIdx !== null ? (
                <motion.div
                  key={`${selectedField.keyCipher}-${activeChordIdx}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.18 }}
                  className="bg-[#0A0E14] border border-[#1E293B] rounded-2xl p-6 shadow-xl"
                >
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono px-2 py-0.5 bg-cyan-950 text-cyan-400 border border-cyan-800/40 rounded-full">
                      Grau {selectedField.chords[activeChordIdx].degree}
                    </span>
                    <span className="text-xs text-slate-500">Função Harmônica</span>
                  </div>
                  
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-white">
                      {selectedField.chords[activeChordIdx].chord}
                    </span>
                    <span className="text-sm font-medium text-slate-400">
                      — {selectedField.chords[activeChordIdx].descriptionPt}
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
                    <div>
                      <span className="block text-xs font-mono text-slate-500">Relação/Papel:</span>
                      <span className="text-sm font-medium text-cyan-400">
                        {selectedField.chords[activeChordIdx].functionPt}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs font-mono text-slate-500">Sentimento/Clima:</span>
                      <span className="text-sm font-medium text-purple-400">
                        {selectedField.chords[activeChordIdx].feelingPt}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="bg-[#0A0E14]/10 border border-dashed border-slate-800 rounded-2xl p-6 text-center text-slate-500 text-sm">
                  Selecione um tom no celular ao lado e toque em qualquer cartão de acorde para disparar o som e ver a sua função harmônica detalhada aqui.
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Coluna do Aparelho Celular Virtual (Direita - 8 cols) */}
          <div className="lg:col-span-8 flex justify-center items-center">
            
            {/* Corpo do Celular */}
            <div 
              className={`relative bg-slate-950 rounded-[38px] border-4 border-[#1E293B] shadow-2xl transition-all duration-300 ease-in-out p-3 ${
                isLandscape 
                  ? "w-full max-w-[680px] h-[375px]" 
                  : "w-[340px] h-[610px]"
              }`}
              style={{
                boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px 1px rgba(34, 211, 238, 0.15)"
              }}
            >
              
              {/* Entalhe/Câmera do Celular */}
              <div className={`absolute bg-slate-800 rounded-full pointer-events-none z-30 ${
                isLandscape
                  ? "left-0 top-1/2 -translate-y-1/2 translate-x-1.5 w-2 h-14"
                  : "top-0 left-1/2 -translate-x-1/2 translate-y-1.5 w-14 h-2"
              }`} />

              {/* Botões do Celular */}
              <div className={`absolute bg-slate-800 rounded-lg w-1.5 h-10 pointer-events-none ${
                isLandscape ? "-top-[12px] right-24" : "-right-[12px] top-24"
              }`} />
              <div className={`absolute bg-slate-800 rounded-lg w-1.5 h-10 pointer-events-none ${
                isLandscape ? "-top-[12px] right-36" : "-right-[12px] top-36"
              }`} />

              {/* Tela do Aplicativo */}
              <div className="w-full h-full bg-[#020408] rounded-[30px] overflow-hidden flex flex-col relative text-slate-100 p-3 select-none">
                
                {/* Barra de Status */}
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 px-3 pt-1 pb-1.5 border-b border-slate-900">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>Digital Harmonic Field v1.0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#0A0E14] border border-slate-805/45 px-1 py-0.5 rounded text-[8px] tracking-widest uppercase font-bold text-slate-450">Offline</span>
                    <span>100% Bateria</span>
                  </div>
                </div>

                {/* Área de Conteúdo da Tela */}
                <div className="flex-1 overflow-y-auto relative py-2 mb-1">
                  <AnimatePresence mode="wait">
                    
                    {!selectedField ? (
                      // TELA INITIAL: GRADE DE SELEÇÃO DE TOM
                      <motion.div
                        key="key-picker"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="h-full flex flex-col justify-between"
                      >
                        <div className="text-center py-2">
                          <h4 className="text-sm font-bold font-sans tracking-wide text-white">
                            Selecione uma tonalidade para adoração:
                          </h4>
                          <span className="text-[10px] text-slate-450">Mudar a música requer apenas 1 toque em campo</span>
                        </div>

                        {/* Grade de Tons Maiores */}
                        <div className="space-y-4 px-2 my-auto">
                          <div>
                            <div className="text-[10px] uppercase tracking-wider text-cyan-400 font-bold font-mono mb-2">Tons Maiores (Naturais)</div>
                            <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5">
                              {harmonicFieldsData.filter(f => !f.isMinor).map((field) => (
                                <button
                                  key={field.keyCipher}
                                  onClick={() => setSelectedField(field)}
                                  className="py-2.5 text-xs font-bold font-mono rounded-lg bg-[#0A0E14] hover:bg-slate-900 border border-slate-800 text-slate-100 transition duration-150 shadow-[0_0_10px_rgba(255,255,255,0.01)] hover:border-cyan-500/40 cursor-pointer"
                                >
                                  {field.keyCipher}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Grade de Tons Menores */}
                          <div>
                            <div className="text-[10px] uppercase tracking-wider text-purple-400 font-bold font-mono mb-2">Tons Menores (Naturais e Relativos)</div>
                            <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5">
                              {harmonicFieldsData.filter(f => f.isMinor).map((field) => (
                                <button
                                  key={field.keyCipher}
                                  onClick={() => setSelectedField(field)}
                                  className="py-2.5 text-xs font-bold font-mono rounded-lg bg-[#0A0E14] hover:bg-slate-900 border border-slate-800 text-slate-100 transition duration-150 shadow-[0_0_10px_rgba(255,255,255,0.01)] hover:border-purple-300/40 cursor-pointer"
                                >
                                  {field.keyCipher}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="text-[9px] text-center text-slate-500 py-1 font-mono">
                          Desenvolvido por Jr_Tech_OFC • Night-Mode Eye-Safe
                        </div>
                      </motion.div>
                    ) : (
                      // TELA DO CAMPO HARMÔNICO DETALHADO
                      <motion.div
                        key="field-viewer"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="h-full flex flex-col justify-between"
                      >
                        {/* Header Campo */}
                        <div className="flex items-center justify-between px-2 pt-0.5">
                          <button
                            onClick={handleCloseField}
                            className="flex items-center gap-1 text-[11px] font-bold text-slate-400 hover:text-white bg-[#0A0E14] hover:bg-slate-900 px-2.5 py-1.5 rounded-lg border border-slate-800 cursor-pointer"
                          >
                            <ChevronLeft className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Tons</span>
                          </button>

                          <div className="text-right">
                            <span className="text-xs font-extrabold text-cyan-300 font-sans">
                              {selectedField.keyNamePt}
                            </span>
                            <span className="block text-[9px] text-slate-500 font-mono">
                              Escala: {selectedField.scaleNotes}
                            </span>
                          </div>
                        </div>

                        {/* Grade Vertical vs Grid de 7 Acordes Plano (Em pé vs Deitado) */}
                        <div className="flex-1 my-auto flex items-center justify-center py-2 h-full">
                          {isLandscape ? (
                            // Modo Horizontal (7 acordes lado a lado sem nenhuma rolagem)
                            <div className="w-full grid grid-cols-7 gap-1.5 px-1">
                              {selectedField.chords.map((chord, i) => (
                                <button
                                  key={chord.degree}
                                  onClick={() => handleChordClick(chord, i)}
                                  className={`p-2 rounded-xl border flex flex-col items-center justify-between h-[160px] relative transition-all duration-150 group overflow-hidden cursor-pointer ${
                                    activeChordIdx === i
                                      ? "bg-slate-900 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.25)]"
                                      : "bg-[#0A0E14] border-slate-800/80 hover:border-slate-700 hover:bg-slate-900"
                                  }`}
                                >
                                  {/* Acorde Superior Aura */}
                                  <div className="text-[10px] font-bold tracking-tight text-slate-500">{chord.degree}</div>
                                  
                                  {/* Nota principal grande */}
                                  <div className={`text-xl font-black font-sans tracking-tight transition-transform duration-100 ${
                                    activeChordIdx === i ? "scale-110 text-cyan-400" : "text-slate-100 group-hover:text-blue-300"
                                  }`}>
                                    {chord.chord}
                                  </div>

                                  {/* Função Inferior Pequena */}
                                  <div className="text-[9px] font-mono leading-none tracking-tight text-slate-500 font-semibold text-center truncate w-full">
                                    {chord.functionPt}
                                  </div>

                                  {/* Play Indicator Overlay on Hover */}
                                  <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Play className="w-2.5 h-2.5 text-cyan-400 fill-cyan-400/20" />
                                  </div>
                                </button>
                              ))}
                            </div>
                          ) : (
                            // Modo Retrato (Estrutura vertical para rolar)
                            <div className="w-full max-h-[385px] overflow-y-auto space-y-1.5 px-3">
                              {selectedField.chords.map((chord, i) => (
                                <button
                                  key={chord.degree}
                                  onClick={() => handleChordClick(chord, i)}
                                  className={`w-full p-2.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                                    activeChordIdx === i
                                      ? "bg-slate-900 border-cyan-400 text-white"
                                      : "bg-[#0A0E14] border-slate-800 hover:bg-slate-900 text-slate-200"
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    <span className="text-xs font-mono font-bold bg-slate-950 px-2 py-0.5 rounded text-cyan-400 w-8 text-center border border-slate-800/80">{chord.degree}</span>
                                    <span className="text-base font-extrabold text-white">{chord.chord}</span>
                                    <span className="text-[10px] text-slate-405">— {chord.functionPt}</span>
                                  </div>
                                  <Play className={`w-3.5 h-3.5 ${activeChordIdx === i ? "text-cyan-400 fill-cyan-400" : "text-slate-500"}`} />
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Rodapé Interno */}
                        <div className="text-[9px] flex justify-between items-center px-2 py-1 text-slate-500 border-t border-slate-900">
                          <span>Toque em um acorde para ouvir</span>
                          <span className="font-mono text-cyan-400">Zero Scroll Actived ⚡</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
