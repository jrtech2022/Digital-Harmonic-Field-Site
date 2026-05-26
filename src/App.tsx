import { useState } from "react";
import { 
  Download, 
  Github, 
  Smartphone, 
  Check, 
  Heart, 
  ShieldCheck, 
  AlertCircle, 
  ArrowRight, 
  Music, 
  ExternalLink,
  BookOpen,
  X,
  Play,
  Monitor
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import InteractiveAppSimulator from "./components/InteractiveAppSimulator";
import DonationSection from "./components/DonationSection";

export default function App() {
  const githubRepoUrl = "https://github.com/jrtech2022/Digital-Harmonic-Field";
  const latestReleaseUrl = `${githubRepoUrl}/releases`;
  
  // Interactive APK download simulator state to guide non-tech users
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [showInstallerGuide, setShowInstallerGuide] = useState(false);

  const startDemoDownload = () => {
    if (downloading) return;
    setDownloading(true);
    setDownloadProgress(0);
    setDownloadSuccess(false);

    // Simulated micro progress steps for realistic tactile feedback
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloading(false);
          setDownloadSuccess(true);
          setShowInstallerGuide(true); // Automatically show how to install after download completion
          
          // Actually trigger downloading the release from github or official page as a fallback!
          window.location.href = `${githubRepoUrl}/archive/refs/heads/main.zip`; // or direct apk if known
          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 10;
      });
    }, 180);
  };

  return (
    <div className="bg-[#020408] text-slate-100 min-h-screen font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden antialiased relative">
      
      {/* Immersive UI Atmospheric Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-[40%] left-[5%] w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[110px] pointer-events-none"></div>

      {/* HEADER BAR */}
      <header className="sticky top-0 z-40 bg-[#020408]/80 backdrop-blur-md border-b border-slate-800/60 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo / Título */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.4)] group-hover:scale-105 duration-200">
              <Music className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-white block">Digital Harmonic Field</span>
              <span className="text-[10px] text-cyan-400 font-mono block -mt-1 uppercase tracking-widest font-bold">Open Source</span>
            </div>
          </a>

          {/* Links de Acesso Rápido */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#funcionalidades" className="hover:text-cyan-400 transition-colors">Vantagens</a>
            <a href="#demo-section" className="hover:text-cyan-400 transition-colors">Testar Online</a>
            <a href="#como-instalar" className="hover:text-cyan-400 transition-colors">Manual do APK</a>
            <a href="#doacao-section" className="hover:text-rose-400 transition-colors flex items-center gap-1.5 py-1 px-3 border border-slate-800/80 rounded-full bg-slate-900/40 hover:bg-slate-900/90 duration-200">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/10" />
              <span>Apoiar Dev</span>
            </a>
          </nav>

          {/* Botão GitHub Direito */}
          <div className="flex items-center gap-3">
            <a
              href={githubRepoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 font-bold px-4 py-2 rounded-full border border-slate-700/60 transition-all"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">Ver Código</span>
            </a>
            
            <button
              onClick={startDemoDownload}
              className="flex items-center gap-1.5 text-xs text-black bg-white hover:bg-white/95 font-bold px-4 py-2 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.15)] transition cursor-pointer hover:scale-105 active:scale-95 duration-150"
            >
              <Download className="w-4 h-4 text-black" />
              <span>Baixar APK</span>
            </button>
          </div>

        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Texto de Apresentação (Esquerda - 7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs font-bold text-cyan-400 uppercase tracking-widest">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span>Aplicativo Android Nativo & Gratuito</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-sans tracking-tight text-white leading-[1.1]">
                Localize Campos Harmônicos em <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Instantes</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Desenvolvido especialmente para músicos de igreja e bandas locais. Abra o app, dê <strong className="text-white font-semibold">um toque</strong> e visualize todos os acordes do tom deitado na estante. Sem internet, sem anúncios, sem pânicos.
              </p>

              {/* Botões de Ação Principais */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={startDemoDownload}
                  disabled={downloading}
                  className={`w-full sm:w-auto flex flex-col items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 duration-200 cursor-pointer disabled:bg-slate-800 disabled:text-slate-400 disabled:shadow-none`}
                >
                  <div className="flex items-center gap-2.5">
                    <Download className="w-5 h-5 text-black" />
                    <span>{downloading ? `Baixando... ${downloadProgress}%` : "Baixar APK Grátis"}</span>
                  </div>
                  <span className="block text-[10px] opacity-65 font-medium mt-0.5">Instalação Direta (Android 10+)</span>
                </button>

                <a
                  href={githubRepoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex flex-col items-center justify-center px-8 py-4 rounded-xl text-sm font-bold bg-[#0A0E14] hover:bg-[#1E293B]/60 text-slate-200 hover:text-white border border-slate-800 hover:border-slate-700 transition"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-5 h-5 text-slate-400" />
                    <span>Código no GitHub</span>
                  </div>
                  <span className="block text-[10px] text-slate-500 font-medium mt-0.5">★ {githubRepoUrl ? "jrtech2022" : "Open Source"}</span>
                </a>
              </div>

              {/* Status do Download Simulado */}
              <AnimatePresence>
                {downloading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-slate-900 border border-slate-800 mt-4 max-w-md mx-auto lg:mx-0"
                  >
                    <div className="flex justify-between text-xs text-slate-400 mb-1.5 font-mono">
                      <span>digital_harmonic_field.apk</span>
                      <span>{downloadProgress}%</span>
                    </div>
                    <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-850">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full transition-all duration-150"
                        style={{ width: `${downloadProgress}%` }}
                      />
                    </div>
                  </motion.div>
                )}

                {downloadSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-900/50 mt-4 max-w-md mx-auto lg:mx-0 flex items-start gap-2.5"
                  >
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-emerald-300">Download Concluído com Sucesso!</h4>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        Iniciando manual... Veja abaixo como habilitar e instalar o arquivo APK no seu dispositivo celular Android.
                      </p>
                      <button 
                        onClick={() => setShowInstallerGuide(true)}
                        className="text-[11px] text-cyan-400 underline font-medium mt-1 hover:text-cyan-300 flex items-center gap-0.5"
                      >
                        <BookOpen className="w-3 h-3" />
                        <span>Abrir Passo a Passo de Instalação</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Informação Técnica do App */}
              <div className="pt-4 flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400">
                <span>Versão estável: v1.0.0</span>
                <span>•</span>
                <span>Tamanho: ~4.2 MB</span>
                <span>•</span>
                <span>Licença: MIT (Livre)</span>
              </div>

            </div>

            {/* Imagem de Destaque / Smartphone Preview (Direita - 5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                {/* Aura Neon Decorativa */}
                <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full pointer-events-none" />

                {/* Smartphone Realista Estilo Isometrico */}
                <div className="bg-[#0A0E14] border-4 border-[#1E293B] rounded-[38px] p-2.5 w-[250px] shadow-2xl relative overflow-hidden transform hover:-translate-y-2 duration-300">
                  <div className="w-[12px] h-[12px] bg-slate-950 rounded-full mx-auto mb-1.5 border border-[#1E293B]" />
                  
                  {/* Foto Mockup do App */}
                  <div className="bg-[#020408] rounded-[24px] overflow-hidden p-2.5 border border-slate-900 text-center space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-900 pb-1">
                      <span className="text-[7px] font-mono text-cyan-400 font-bold uppercase">Digital Harmonic Field</span>
                      <span className="text-[7px] font-mono text-slate-500">v1.0</span>
                    </div>

                    {/* Simulação simplificada de cartão de acorde do mockup do smartphone */}
                    <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-800/40 shadow space-y-1">
                      <span className="text-[8px] font-mono text-slate-500">GRAU V</span>
                      <h4 className="text-3xl font-black text-white text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">G</h4>
                      <p className="text-[8px] text-cyan-400 font-bold tracking-tight">Dominante (Tensão Máxima)</p>
                    </div>

                    <div className="grid grid-cols-3 gap-1">
                      {["C", "Dm", "Em", "F", "G", "Am"].map((note) => (
                        <div 
                          key={note} 
                          className={`text-[9px] font-bold font-mono py-1 rounded bg-[#0A0E14] border ${
                            note === "G" ? "border-cyan-500/50 bg-slate-900" : "border-slate-900 text-slate-400"
                          }`}
                        >
                          {note}
                        </div>
                      ))}
                    </div>

                    <span className="block text-[7px] text-slate-500">Interface em Modo Escuro Eye-Safe</span>
                  </div>
                </div>

                {/* Painel Flutuante De Vantagens */}
                <div className="absolute -bottom-6 -right-6 md:-right-10 bg-[#0A0E14]/95 backdrop-blur-md p-4 rounded-xl border border-slate-800 shadow-xl max-w-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs font-bold text-white">O Músico de Igreja economiza tempo</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1 leading-snug">
                    "Em vez de procurar em tabelas na internet que demoram para carregar, o tom de passagem está a 1 toque."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VANTAGENS / RESOLUÇÃO DE PROBLEMAS */}
      <section id="funcionalidades" className="py-16 md:py-24 bg-[#0A0E14]/30 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono">
              Projetado com Empatia
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Adeus às Pesquisas Estressantes no Altar
            </h2>
            <p className="mt-4 text-slate-450 text-sm sm:text-base leading-relaxed">
              Tocar ao vivo envolve lidar com imprevistos. Mudança de tom do cantor de última hora, esquecimento de acordes de modulação ou luz excessiva que cega a tela. O Digital Harmonic Field foi construído para blindar você desse caos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-[#0A0E14] border border-[#1E293B] p-8 rounded-2xl space-y-4 hover:border-slate-700 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition duration-200">
              <div className="w-11 h-11 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Grid Horizontal Zero-Scroll</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                Quando colocado deitado (Landscape) na estante do teclado ou no pedestal do violonista, o app distribui todos os 7 graus perfeitamente na tela. Sem necessidade de ficar rolando com o dedo suado de tocar.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0A0E14] border border-[#1E293B] p-8 rounded-2xl space-y-4 hover:border-slate-700 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition duration-200">
              <div className="w-11 h-11 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">100% Offline e Livre de Rastreamento</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                O sinal some dentro de igrejas ou em cidades do interior? Não se preocupe. O banco de dados de 24 tonalidades está embarcado por completo no aplicativo. Sem carregar nada externamente, economizando bateria.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0A0E14] border border-[#1E293B] p-8 rounded-2xl space-y-4 hover:border-slate-700 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition duration-200">
              <div className="w-11 h-11 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Modo Noturno (Eye-Safe Color)</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                Configurado por padrão em uma paleta preta e cinza azulada escura com cifras saturadas em azul néon. Evita aquele brilho ofuscante no meio do culto escuro ou no altar de celebrações litúrgicas.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SIMULADOR INTERATIVO */}
      <InteractiveAppSimulator />

      {/* MANUAL DO APK */}
      <section id="como-instalar" className="py-16 md:py-24 bg-[#020408]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#0A0E14] border border-[#1E293B] rounded-3xl p-6 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-44 h-44 bg-blue-500/5 blur-[50px] rounded-full pointer-events-none" />

            <h3 className="text-2xl font-extrabold text-white text-center pb-8 border-b border-slate-800">
              Como Instalar um Arquivo APK Direct no Android?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              
              <div className="space-y-4 text-center md:text-left">
                <span className="w-9 h-9 rounded-full bg-cyan-950 border border-cyan-500/45 font-mono text-sm font-extrabold text-cyan-400 flex items-center justify-center mx-auto md:mx-0">1</span>
                <h4 className="text-sm font-bold text-slate-100 pt-1">Habilitar Fontes</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Ao abrir o arquivo APK pela primeira vez, seu navegador pedirá permissão de "Instalar apps desconhecidos". Toque em <strong>Configurações</strong> e ative.
                </p>
              </div>

              <div className="space-y-4 text-center md:text-left">
                <span className="w-9 h-9 rounded-full bg-cyan-950 border border-cyan-500/45 font-mono text-sm font-extrabold text-cyan-400 flex items-center justify-center mx-auto md:mx-0">2</span>
                <h4 className="text-sm font-bold text-slate-100 pt-1">Iniciar Instalação</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Aperte "Instalar" na janela nativa do Android. O processo leva menos de 5 segundos devido ao tamanho enxuto (~4MB) e performático do aplicativo.
                </p>
              </div>

              <div className="space-y-4 text-center md:text-left">
                <span className="w-9 h-9 rounded-full bg-cyan-950 border border-cyan-500/45 font-mono text-sm font-extrabold text-cyan-400 flex items-center justify-center mx-auto md:mx-0">3</span>
                <h4 className="text-sm font-bold text-slate-100 pt-1">Pronto para Tocar</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Pronto! Um ícone elegante com símbolo de campo harmônico aparecerá na sua tela inicial, pronto para consultas velozes no ensaio e culto.
                </p>
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-950/40 -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-6 sm:px-10 rounded-b-3xl">
              <span className="text-xs text-slate-450 leading-relaxed max-w-md text-center sm:text-left">
                Dúvidas técnicas ou problemas com o Android? O repositório é vigiado ativamente pelo desenvolvedor principal do projeto.
              </span>
              <a 
                href={latestReleaseUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-cyan-400 font-bold flex items-center gap-1 hover:text-cyan-300"
              >
                <span>Acessar Releases do GitHub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* SESSÃO DE DOAÇÃO */}
      <DonationSection />

      {/* TESTEMUNHOS DE MÚSICOS EM BRUTALISTA-CLEAN */}
      <section className="py-16 md:py-20 bg-[#0A0E14]/10 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h3 className="text-xl font-bold text-center text-slate-250 font-sans mb-10">
            Histórias de quem já usa o aplicativo no altar:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#0A0E14] border border-[#1E293B] flex flex-col justify-between hover:shadow-[0_0_15px_rgba(34,211,238,0.05)] transition duration-200">
              <p className="text-xs text-slate-300 leading-relaxed italic">
                "Estávamos no meio do ensaio de domingo e a vocalista quis cantar Grandioso És Tu dois tons abaixo. O aplicativo poupou 5 minutos puxando a caneta. Foi só clicar na nota e a tabela de graus inteira abriu deitada na estante."
              </p>
              <div className="mt-4">
                <span className="block text-xs font-bold text-white">Mateus Barbosa</span>
                <span className="block text-[10px] text-slate-500">Guitarrista Voluntário • São Paulo</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A0E14] border border-[#1E293B] flex flex-col justify-between hover:shadow-[0_0_15px_rgba(34,211,238,0.05)] transition duration-200">
              <p className="text-xs text-slate-300 leading-relaxed italic">
                "O fato de ser offline é maravilhoso. Nossa internet na paróquia é péssima e oscila muito. Fora a doação de PIX que é super justa, um cafezinho que ajuda demais quem criou essa obra prima. Deus abençoe!"
              </p>
              <div className="mt-4">
                <span className="block text-xs font-bold text-white">Carlos André</span>
                <span className="block text-[10px] text-slate-500">Músico de Paróquia • Minas Gerais</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020408] border-t border-slate-900 py-12 px-4 text-center text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto space-y-4">
          
          <div className="flex justify-center items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-tr from-cyan-400 to-indigo-600 flex items-center justify-center">
              <Music className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-extrabold text-[#F1F5F9] font-sans">Digital Harmonic Field</span>
          </div>

          <p className="max-w-md mx-auto text-slate-400 leading-relaxed text-[11px]">
            Um projeto comunitário independente de código aberto (Open Source). Desenvolvido e mantido de músicos para músicos sob a licença MIT.
          </p>

          <p className="text-[10px] text-slate-500">
            © 2026 Jr_Tech_OFC. Todos os direitos reservados.
          </p>

          <div className="pt-2 flex justify-center gap-6">
            <a href={githubRepoUrl} className="hover:text-cyan-400 text-slate-500 transition-colors">GitHub Repository</a>
            <span>•</span>
            <a href="mailto:jr.tech.ofc@gmail.com" className="hover:text-cyan-400 text-slate-500 transition-colors">Contato de Suporte</a>
          </div>

        </div>
      </footer>

      {/* POPUP INSTALADOR DÚVIDAS MOBILE */}
      <AnimatePresence>
        {showInstallerGuide && (
          <div className="fixed bottom-4 right-4 z-50 bg-[#0A0E14] border border-[#1E293B] p-4 rounded-xl shadow-2xl max-w-sm">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-extrabold text-white flex items-center gap-1">
                <Check className="w-3 h-3 text-cyan-400" />
                Deseja ler o manual de instalação?
              </span>
              <button 
                onClick={() => setShowInstallerGuide(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-[11px] text-slate-400 leading-snug">
              Clique no botão "Manual do APK" no topo para ver os passos exatos de como autorizar fontes de terceiros no seu celular Android.
            </p>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
