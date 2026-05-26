import { useState } from "react";
import { Heart, Copy, Check, Info, Shield, Coffee, Gift, Wallet, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface DonationTier {
  id: string;
  amount: number;
  label: string;
  emoji: string;
  description: string;
  psychologicalHook: string;
}

export default function DonationSection() {
  const pixKey = "jr.tech.ofc@gmail.com";
  const [selectedTier, setSelectedTier] = useState<string>("string");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [showPixDialog, setShowPixDialog] = useState(false);
  const [activeTab, setActiveTab] = useState<"pix" | "paypal" | "coffee">("pix");

  const tiers: DonationTier[] = [
    {
      id: "coffee",
      amount: 500,
      label: "Café para o Dev",
      emoji: "☕",
      description: "Equivale a R$ 5,00",
      psychologicalHook: "Mantém os olhos do desenvolvedor abertos nas revisões de código de madrugada!"
    },
    {
      id: "strings",
      amount: 1500,
      label: "Uma Corda de Violão",
      emoji: "🎸",
      description: "Equivale a R$ 15,00",
      psychologicalHook: "Ajuda o app a continuar no ar, livre de anúncios chatos e 100% gratuito."
    },
    {
      id: "lunch",
      amount: 3500,
      label: "Almoço de Domingo",
      emoji: "🍛",
      description: "Equivale a R$ 35,00",
      psychologicalHook: "Garante energia total para implementação de novos tons e escalas na v2.0."
    }
  ];

  const handleCopyKey = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const currentAmountDisplay = () => {
    if (selectedTier === "custom") {
      return customAmount ? `R$ ${parseFloat(customAmount).toFixed(2)}` : "Qualquer valor";
    }
    const tier = tiers.find(t => t.id === selectedTier);
    return tier ? tier.description.replace("Equivale a ", "") : "R$ 15,00";
  };

  return (
    <section id="doacao-section" className="py-16 md:py-24 bg-[#020408] relative overflow-hidden">
      
      {/* Immersive UI Atmospheric Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header de Doação */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-rose-400 bg-rose-950/40 border border-rose-900/30">
            <Heart className="w-3 h-3 fill-rose-500/30 text-rose-400" />
            <span>Apoie o Projeto Open Source</span>
          </div>
          
          <h2 className="mt-4 text-3xl font-extrabold font-sans tracking-tight text-white sm:text-4xl">
            Sua Doação Mantém o Som Aceso
          </h2>
          
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            O <strong className="text-white">Digital Harmonic Field</strong> é feito com paixão de forma 100% gratuita, sem anúncios irritantes e sem coletar nenhum dados seu. 
            Doar não é obrigatório para usar, mas é o combustível simbólico que permite manter o projeto vivo e atualizado.
          </p>
        </div>

        {/* Caixas de Estratégia de Marketing e Psicologia de Reciprocidade */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          
          {/* Caixa de Transparência */}
          <div className="bg-[#0A0E14] p-6 rounded-2xl border border-[#1E293B] flex items-start gap-4 hover:shadow-[0_0_15px_rgba(34,211,238,0.03)] duration-200">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-900 text-cyan-400 flex-shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wide">Código 100% Transparente</h4>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                Qualquer pessoa na comunidade pode inspecionar o código do app no GitHub. Não há rastreadores de anúncios que comem sua franquia de dados no altar. É música pura.
              </p>
            </div>
          </div>

          {/* Caixa de Empatia / Reciprocidade */}
          <div className="bg-[#0A0E14] p-6 rounded-2xl border border-[#1E293B] flex items-start gap-4 hover:shadow-[0_0_15px_rgba(244,63,94,0.03)] duration-200">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-900 text-rose-450 flex-shrink-0">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wide">Para Músicos Voltados ao Serviço</h4>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                Sabemos o valor das equipes de louvor e adoração nas igrejas brasileiras. O app foi feito para que a falta de tabelas rápidas nunca seja uma barreira.
              </p>
            </div>
          </div>

        </div>

        {/* Caixa de Opções de Doação Intelectualmente Desenhada */}
        <div className="bg-[#0A0E14] border border-[#1E293B] rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          <h3 className="text-lg font-bold text-center text-slate-200 font-sans mb-8">
            Escolha um valor proporcional e apoie:
          </h3>

          {/* Value Anchors (Tiers) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {tiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => {
                  setSelectedTier(tier.id);
                  setShowPixDialog(true);
                  setActiveTab("pix");
                }}
                className={`p-5 rounded-2xl border text-left flex flex-col justify-between transition-all duration-200 hover:scale-[1.02] cursor-pointer ${
                  selectedTier === tier.id
                    ? "bg-[#020408] border-cyan-400 shadow-lg shadow-cyan-950/20"
                    : "bg-[#020408]/40 border-slate-900 hover:border-slate-800"
                }`}
              >
                <div>
                  <span className="text-3xl" role="img" aria-label={tier.label}>
                    {tier.emoji}
                  </span>
                  <h4 className="mt-3 text-base font-bold text-white">{tier.label}</h4>
                  <p className="text-xs text-slate-400 font-mono mt-1">{tier.description}</p>
                </div>
                
                <p className="mt-4 text-[11px] text-slate-450 leading-snug font-medium italic">
                  "{tier.psychologicalHook}"
                </p>
              </button>
            ))}
          </div>

          {/* Opção Personalizada ou Doar outro valor */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-4 rounded-2xl bg-[#020408]/65 col-span-3 border border-slate-900">
            <div className="text-center sm:text-left">
              <h4 className="text-sm font-bold text-slate-200">Quer colaborar com outro valor?</h4>
              <p className="text-xs text-slate-450 mt-0.5 font-medium">Seja R$ 1, R$ 10 ou R$ 100, toda ajuda importa igualmente.</p>
            </div>
            
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-36">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-500 font-mono">R$</span>
                <input
                  type="number"
                  placeholder="20,00"
                  value={customAmount}
                  onChange={(e) => {
                    setSelectedTier("custom");
                    setCustomAmount(e.target.value);
                  }}
                  className="w-full pl-8 pr-3 py-2 text-sm bg-slate-950 rounded-lg border border-slate-900 focus:outline-none focus:border-cyan-400 font-mono text-slate-100"
                />
              </div>

              <button
                onClick={() => {
                  setSelectedTier("custom");
                  setShowPixDialog(true);
                  setActiveTab("pix");
                }}
                className="px-5 py-2 rounded-lg bg-white text-black font-sans font-bold text-sm hover:bg-white/95 transition cursor-pointer"
              >
                Prosseguir
              </button>
            </div>
          </div>

        </div>

        {/* Diálogo / Modal de Doação Ativo (Simulação) */}
        <AnimatePresence>
          {showPixDialog && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="bg-[#0A0E14] border border-[#1E293B] rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative"
              >
                
                {/* Cabeçalho do Modal */}
                <div className="bg-[#020408] px-6 py-5 border-b border-slate-900 flex justify-between items-center">
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                      <Wallet className="w-5 h-5 text-cyan-400" />
                      Detalhes da Doação
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Você escolheu contribuir com: <strong className="text-cyan-400 font-bold">{currentAmountDisplay()}</strong>
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => setShowPixDialog(false)}
                    className="text-slate-400 hover:text-white bg-[#0A0E14]/80 p-1.5 rounded-lg text-xs cursor-pointer border border-slate-800"
                  >
                    Fechar
                  </button>
                </div>

                {/* Abas de Opções */}
                <div className="flex border-b border-canvas-800 border-slate-900 px-4 pt-2">
                  <button
                    onClick={() => setActiveTab("pix")}
                    className={`px-4 py-2 text-xs font-bold font-mono transition border-b-2 cursor-pointer ${
                      activeTab === "pix" 
                        ? "border-cyan-500 text-cyan-400" 
                        : "border-transparent text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    Chave PIX (E-mail)
                  </button>
                  <button
                    onClick={() => setActiveTab("coffee")}
                    className={`px-4 py-2 text-xs font-bold font-mono transition border-b-2 cursor-pointer ${
                      activeTab === "coffee" 
                        ? "border-cyan-400 text-cyan-400" 
                        : "border-transparent text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    Buy Me a Coffee
                  </button>
                  <button
                    onClick={() => setActiveTab("paypal")}
                    className={`px-4 py-2 text-xs font-bold font-mono transition border-b-2 cursor-pointer ${
                      activeTab === "paypal" 
                        ? "border-cyan-400 text-cyan-400" 
                        : "border-transparent text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    PayPal internacional
                  </button>
                </div>

                {/* Conteúdo da Aba */}
                <div className="p-6">
                  
                  {activeTab === "pix" && (
                    <div className="space-y-5">
                      <div className="flex justify-center flex-col items-center">
                        {/* Simulação de Código QR Pix */}
                        <div className="p-4 bg-white rounded-2xl w-44 h-44 flex items-center justify-center relative overflow-hidden border">
                          {/* Desenho do QR Code em SVG Puro para evitar imagens externas fora do ar */}
                          <svg className="w-full h-full text-slate-900" viewBox="0 0 100 100">
                            <rect x="0" y="0" width="30" height="30" fill="currentColor" />
                            <rect x="5" y="5" width="20" height="20" fill="white" />
                            <rect x="10" y="10" width="10" height="10" fill="currentColor" />

                            <rect x="70" y="0" width="30" height="30" fill="currentColor" />
                            <rect x="75" y="5" width="20" height="20" fill="white" />
                            <rect x="80" y="10" width="10" height="10" fill="currentColor" />

                            <rect x="0" y="70" width="30" height="30" fill="currentColor" />
                            <rect x="5" y="75" width="20" height="20" fill="white" />
                            <rect x="80" y="80" width="10" height="10" fill="currentColor" />

                            <rect x="40" y="40" width="20" height="20" fill="currentColor" />
                            <rect x="45" y="45" width="10" height="10" fill="white" />

                            <rect x="45" y="10" width="5" height="15" fill="currentColor" />
                            <rect x="15" y="45" width="20" height="5" fill="currentColor" />
                            <rect x="45" y="75" width="25" height="5" fill="currentColor" />
                            <rect x="75" y="45" width="5" height="25" fill="currentColor" />
                          </svg>
                          <div className="absolute inset-0 bg-slate-950/5 flex items-center justify-center">
                            <span className="bg-[#020408] border border-cyan-500/20 text-cyan-400 font-bold px-2 py-0.5 rounded text-[10px] tracking-wide shadow-md font-mono">PIX ATIVO</span>
                          </div>
                        </div>

                        <span className="text-[10px] text-slate-500 mt-3 font-mono">
                          QR Code gerador para {pixKey}
                        </span>
                      </div>

                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-900">
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="block text-[10px] text-slate-500 font-mono uppercase tracking-wider">Chave PIX (E-mail do dev)</span>
                            <span className="text-sm font-bold text-slate-100 font-mono block select-all">
                              {pixKey}
                            </span>
                          </div>

                          <button
                            onClick={handleCopyKey}
                            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-sans text-xs font-bold transition cursor-pointer ${
                              copied
                                ? "bg-emerald-950 border-emerald-500 text-emerald-400 border"
                                : "bg-white hover:bg-white/95 text-black"
                            }`}
                          >
                            {copied ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>Copiado!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copiar Chave</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 text-xs text-slate-400">
                        <Info className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>
                          Para fazer a doação, abra o aplicativo do seu banco, escolha a opção <strong>PIX por E-mail</strong>, cole a chave copiada acima e digite o valor correspondente. Obrigado pelo carinho!
                        </span>
                      </div>
                    </div>
                  )}

                  {activeTab === "coffee" && (
                    <div className="text-center py-6 space-y-4">
                      <div className="w-14 h-14 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mx-auto border border-amber-500/20">
                        <Coffee className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-100 font-sans">Buy Me a Coffee</h4>
                        <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                          Se você reside no exterior ou deseja fazer uma doação via cartão de crédito de forma global:
                        </p>
                      </div>

                      <a
                        href={`https://buymeacoffee.com/jrtech2022`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-2.5 rounded-xl transition font-sans text-sm"
                      >
                        <span>Visitar Buy Me A Coffee</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )}

                  {activeTab === "paypal" && (
                    <div className="text-center py-6 space-y-4">
                      <div className="w-14 h-14 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mx-auto animate-pulse">
                        <Gift className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-100">Paypal Seguro</h4>
                        <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                          Envie sua contribuição via PayPal para o email conectado ao projeto. Simples, global e extremamente seguro.
                        </p>
                      </div>

                      <a
                        href={`https://paypal.me/jrtech`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-2.5 rounded-xl transition font-sans text-sm"
                      >
                        <span>Ir para o PayPal</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )}

                </div>

                {/* Rodapé do Modal */}
                <div className="bg-[#020408] px-6 py-4 border-t border-slate-900 text-center">
                  <span className="text-[10px] text-slate-500">
                    O app continuará gratuito para sempre para todos, independentemente de doação.
                  </span>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
