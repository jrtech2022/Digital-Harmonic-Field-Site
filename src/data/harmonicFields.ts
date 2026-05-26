export interface ChordInfo {
  degree: string;
  chord: string;
  functionPt: string;
  feelingPt: string;
  descriptionPt: string;
}

export interface HarmonicField {
  keyCipher: string;
  keyNamePt: string;
  isMinor: boolean;
  scaleNotes: string;
  chords: ChordInfo[];
}

export const harmonicFieldsData: HarmonicField[] = [
  // --- CAMPOS MAIORES ---
  {
    keyCipher: "C",
    keyNamePt: "Dó Maior",
    isMinor: false,
    scaleNotes: "Dó — Ré — Mi — Fá — Sol — Lá — Si",
    chords: [
      { degree: "I", chord: "C", functionPt: "Tônica", feelingPt: "Repouso total", descriptionPt: "Dó Maior (Acorde estável de partida)" },
      { degree: "ii", chord: "Dm", functionPt: "Supertônica", feelingPt: "Tensão leve", descriptionPt: "Ré menor (Caráter melancólico de transição)" },
      { degree: "iii", chord: "Em", functionPt: "Mediante", feelingPt: "Suave / Flutuante", descriptionPt: "Mi menor (Substituto suave da tônica)" },
      { degree: "IV", chord: "F", functionPt: "Subdominante", feelingPt: "Abertura / Direção", descriptionPt: "Fá Maior (Prepara o caminho, sensação de voo)" },
      { degree: "V", chord: "G", functionPt: "Dominante", feelingPt: "Grande tensão", descriptionPt: "Sol Maior (Tensão máxima que pede resolução)" },
      { degree: "vi", chord: "Am", functionPt: "Submediante", feelingPt: "Tristeza / Conforto", descriptionPt: "Lá menor (Tônica menor, tom relativo)" },
      { degree: "vii°", chord: "Bdim", functionPt: "Sensível", feelingPt: "Tensão extrema", descriptionPt: "Si diminuto (Acorde instável que puxa de volta para o C)" }
    ]
  },
  {
    keyCipher: "D",
    keyNamePt: "Ré Maior",
    isMinor: false,
    scaleNotes: "Ré — Mi — Fá# — Sol — Lá — Si — Dó#",
    chords: [
      { degree: "I", chord: "D", functionPt: "Tônica", feelingPt: "Repouso total", descriptionPt: "Ré Maior (Brilhante e solene)" },
      { degree: "ii", chord: "Em", functionPt: "Supertônica", feelingPt: "Tensão leve", descriptionPt: "Mi menor (Muito usado em adorações)" },
      { degree: "iii", chord: "F#m", functionPt: "Mediante", feelingPt: "Suave / Flutuante", descriptionPt: "Fá sustenido menor (Introspectivo)" },
      { degree: "IV", chord: "G", functionPt: "Subdominante", feelingPt: "Abertura / Direção", descriptionPt: "Sol Maior (Sólido e aberto)" },
      { degree: "V", chord: "A", functionPt: "Dominante", feelingPt: "Grande tensão", descriptionPt: "Lá Maior (Puxa com energia de volta ao D)" },
      { degree: "vi", chord: "Bm", functionPt: "Submediante", feelingPt: "Tristeza / Conforto", descriptionPt: "Si menor (Abraço reconfortante, relativo menor)" },
      { degree: "vii°", chord: "C#dim", functionPt: "Sensível", feelingPt: "Tensão extrema", descriptionPt: "Dó sustenido diminuto (Altamente instável)" }
    ]
  },
  {
    keyCipher: "E",
    keyNamePt: "Mi Maior",
    isMinor: false,
    scaleNotes: "Mi — Fá# — Sol# — Lá — Si — Dó# — Ré#",
    chords: [
      { degree: "I", chord: "E", functionPt: "Tônica", feelingPt: "Repouso total", descriptionPt: "Mi Maior (Enérgico e encorpado no violão)" },
      { degree: "ii", chord: "F#m", functionPt: "Supertônica", feelingPt: "Tensão leve", descriptionPt: "Fá sustenido menor (Elegante e suave)" },
      { degree: "iii", chord: "G#m", functionPt: "Mediante", feelingPt: "Suave / Flutuante", descriptionPt: "Sol sustenido menor (Calmo e profundo)" },
      { degree: "IV", chord: "A", functionPt: "Subdominante", feelingPt: "Abertura", descriptionPt: "Lá Maior (Limpo e resoluto)" },
      { degree: "V", chord: "B", functionPt: "Dominante", feelingPt: "Grande tensão", descriptionPt: "Si Maior (Prepara o retorno com vigor)" },
      { degree: "vi", chord: "C#m", functionPt: "Submediante", feelingPt: "Tristeza / Conforto", descriptionPt: "Dó sustenido menor (Emocional, tom relativo)" },
      { degree: "vii°", chord: "D#dim", functionPt: "Sensível", feelingPt: "Tensão extrema", descriptionPt: "Ré sustenido diminuto" }
    ]
  },
  {
    keyCipher: "F",
    keyNamePt: "Fá Maior",
    isMinor: false,
    scaleNotes: "Fá — Sol — Lá — Si♭ — Dó — Ré — Mi",
    chords: [
      { degree: "I", chord: "F", functionPt: "Tônica", feelingPt: "Repouso total", descriptionPt: "Fá Maior (Equilibrado e seguro)" },
      { degree: "ii", chord: "Gm", functionPt: "Supertônica", feelingPt: "Tensão leve", descriptionPt: "Sol menor (Sóbrio e aconchegante)" },
      { degree: "iii", chord: "Am", functionPt: "Mediante", feelingPt: "Suave / Flutuante", descriptionPt: "Lá menor (Melancólico e flutuante)" },
      { degree: "IV", chord: "B♭", functionPt: "Subdominante", feelingPt: "Abertura / Direção", descriptionPt: "Si bemol Maior (Expansivo)" },
      { degree: "V", chord: "C", functionPt: "Dominante", feelingPt: "Grande tensão", descriptionPt: "Dó Maior (Tensão brilhante)" },
      { degree: "vi", chord: "Dm", functionPt: "Submediante", feelingPt: "Tristeza / Conforto", descriptionPt: "Ré menor (Emotivo e marcante)" },
      { degree: "vii°", chord: "Edim", functionPt: "Sensível", feelingPt: "Tensão extrema", descriptionPt: "Mi diminuto" }
    ]
  },
  {
    keyCipher: "G",
    keyNamePt: "Sol Maior",
    isMinor: false,
    scaleNotes: "Sol — Lá — Si — Dó — Ré — Mi — Fá#",
    chords: [
      { degree: "I", chord: "G", functionPt: "Tônica", feelingPt: "Repouso total", descriptionPt: "Sol Maior (O tom mais popular de adoração)" },
      { degree: "ii", chord: "Am", functionPt: "Supertônica", feelingPt: "Tensão leve", descriptionPt: "Lá menor (Suave e de fácil transição)" },
      { degree: "iii", chord: "Bm", functionPt: "Mediante", feelingPt: "Suave / Flutuante", descriptionPt: "Si menor (Acolhedor e reflexivo)" },
      { degree: "IV", chord: "C", functionPt: "Subdominante", feelingPt: "Abertura / Direção", descriptionPt: "Dó Maior (Alegre e revigorante)" },
      { degree: "V", chord: "D", functionPt: "Dominante", feelingPt: "Grande tensão", descriptionPt: "Ré Maior (Grande força direcional)" },
      { degree: "vi", chord: "Em", functionPt: "Submediante", feelingPt: "Tristeza / Conforto", descriptionPt: "Mi menor (Frequente e nostálgico)" },
      { degree: "vii°", chord: "F#dim", functionPt: "Sensível", feelingPt: "Tensão extrema", descriptionPt: "Fá sustenido diminuto" }
    ]
  },
  {
    keyCipher: "A",
    keyNamePt: "Lá Maior",
    isMinor: false,
    scaleNotes: "Lá — Si — Dó# — Ré — Mi — Fá# — Sol#",
    chords: [
      { degree: "I", chord: "A", functionPt: "Tônica", feelingPt: "Repouso total", descriptionPt: "Lá Maior (Quente e ressonante)" },
      { degree: "ii", chord: "Bm", functionPt: "Supertônica", feelingPt: "Tensão leve", descriptionPt: "Si menor (Sóbrio e expressivo)" },
      { degree: "iii", chord: "C#m", functionPt: "Mediante", feelingPt: "Suave / Flutuante", descriptionPt: "Dó sustenido menor (Espacial e tocante)" },
      { degree: "IV", chord: "D", functionPt: "Subdominante", feelingPt: "Abertura", descriptionPt: "Ré Maior (Brilhante)" },
      { degree: "V", chord: "E", functionPt: "Dominante", feelingPt: "Grande tensão", descriptionPt: "Mi Maior (Poderosa condução para a tônica)" },
      { degree: "vi", chord: "F#m", functionPt: "Submediante", feelingPt: "Tristeza / Conforto", descriptionPt: "Fá sustenido menor (Introspectivo e belo)" },
      { degree: "vii°", chord: "G#dim", functionPt: "Sensível", feelingPt: "Tensão extrema", descriptionPt: "Sol sustenido diminuto" }
    ]
  },
  {
    keyCipher: "B",
    keyNamePt: "Si Maior",
    isMinor: false,
    scaleNotes: "Si — Dó# — Ré# — Mi — Fá# — Sol# — Lá#",
    chords: [
      { degree: "I", chord: "B", functionPt: "Tônica", feelingPt: "Repouso total", descriptionPt: "Si Maior (Elegante e moderno nos teclados)" },
      { degree: "ii", chord: "C#m", functionPt: "Supertônica", feelingPt: "Tensão leve", descriptionPt: "Dó sustenido menor (Melancólico)" },
      { degree: "iii", chord: "D#m", functionPt: "Mediante", feelingPt: "Suave", descriptionPt: "Ré sustenido menor (Altamente emotivo)" },
      { degree: "IV", chord: "E", functionPt: "Subdominante", feelingPt: "Abertura / Direção", descriptionPt: "Mi Maior (Cheio e enérgico)" },
      { degree: "V", chord: "F#", functionPt: "Dominante", feelingPt: "Grande tensão", descriptionPt: "Fá sustenido Maior (Tensão marcante)" },
      { degree: "vi", chord: "G#m", functionPt: "Submediante", feelingPt: "Tristeza / Conforto", descriptionPt: "Sol sustenido menor (Espiritual)" },
      { degree: "vii°", chord: "A#dim", functionPt: "Sensível", feelingPt: "Tensão extrema", descriptionPt: "Lá sustenido diminuto" }
    ]
  },
  {
    keyCipher: "F#",
    keyNamePt: "Fá Sustenido Maior",
    isMinor: false,
    scaleNotes: "Fá# — Sol# — Lá# — Si — Dó# — Ré# — Mí#",
    chords: [
      { degree: "I", chord: "F#", functionPt: "Tônica", feelingPt: "Repouso total", descriptionPt: "Fá sustenido Maior (Celestial e nítido)" },
      { degree: "ii", chord: "G#m", functionPt: "Supertônica", feelingPt: "Tensão leve", descriptionPt: "Sol sustenido menor" },
      { degree: "iii", chord: "A#m", functionPt: "Mediante", feelingPt: "Suave", descriptionPt: "Lá sustenido menor" },
      { degree: "IV", chord: "B", functionPt: "Subdominante", feelingPt: "Abertura", descriptionPt: "Si Maior" },
      { degree: "V", chord: "C#", functionPt: "Dominante", feelingPt: "Grande tensão", descriptionPt: "Dó sustenido Maior" },
      { degree: "vi", chord: "D#m", functionPt: "Submediante", feelingPt: "Tristeza", descriptionPt: "Ré sustenido menor" },
      { degree: "vii°", chord: "E#dim", functionPt: "Sensível", feelingPt: "Extrema", descriptionPt: "Mi sustenido diminuto" }
    ]
  },

  // --- CAMPOS MENORES ---
  {
    keyCipher: "Am",
    keyNamePt: "Lá Menor",
    isMinor: true,
    scaleNotes: "Lá — Si — Dó — Ré — Mi — Fá — Sol",
    chords: [
      { degree: "i", chord: "Am", functionPt: "Tônica menor", feelingPt: "Melancolia segura", descriptionPt: "Lá menor (Tônica e repouso sombrio)" },
      { degree: "ii°", chord: "Bdim", functionPt: "Supertônica diminuta", feelingPt: "Tensão sombria", descriptionPt: "Si diminuto (Carregar tenso e instável)" },
      { degree: "III", chord: "C", functionPt: "Mediante Maior", feelingPt: "Esperança / Alívio", descriptionPt: "Dó Maior (Porto seguro relativo)" },
      { degree: "iv", chord: "Dm", functionPt: "Subdominante menor", feelingPt: "Desespero controlado", descriptionPt: "Ré menor (Profundo movimento melódico)" },
      { degree: "v", chord: "Em", functionPt: "Dominante menor", feelingPt: "Espera suave", descriptionPt: "Mi menor (Frequente e reflexivo, às vezes tocado E/E7)" },
      { degree: "VI", chord: "F", functionPt: "Submediante Maior", feelingPt: "Crescimento épico", descriptionPt: "Fá Maior (Grande força de preenchimento)" },
      { degree: "VII", chord: "G", functionPt: "Subtônica Maior", feelingPt: "Luz transicional", descriptionPt: "Sol Maior (Caminho natural de volta)" }
    ]
  },
  {
    keyCipher: "Bm",
    keyNamePt: "Si Menor",
    isMinor: true,
    scaleNotes: "Si — Dó# — Ré — Mi — Fá# — Sol — Lá",
    chords: [
      { degree: "i", chord: "Bm", functionPt: "Tônica menor", feelingPt: "Nostalgia profunda", descriptionPt: "Si menor (O tom emotivo definitivo)" },
      { degree: "ii°", chord: "C#dim", functionPt: "Supertônica", feelingPt: "Instável", descriptionPt: "Dó sustenido diminuto" },
      { degree: "III", chord: "D", functionPt: "Mediante", feelingPt: "Brilho / Alívio", descriptionPt: "Ré Maior" },
      { degree: "iv", chord: "Em", functionPt: "Subdominante", feelingPt: "Movimento triste", descriptionPt: "Mi menor" },
      { degree: "v", chord: "F#m", functionPt: "Dominante", feelingPt: "Introspectivo", descriptionPt: "Fá sustenido menor" },
      { degree: "VI", chord: "G", functionPt: "Submediante", feelingPt: "Heroico / Épico", descriptionPt: "Sol Maior" },
      { degree: "VII", chord: "A", functionPt: "Subtônica", feelingPt: "Transição aberta", descriptionPt: "Lá Maior" }
    ]
  },
  {
    keyCipher: "Cm",
    keyNamePt: "Dó Menor",
    isMinor: true,
    scaleNotes: "Dó — Ré — Mi♭ — Fá — Sol — Lá♭ — Si♭",
    chords: [
      { degree: "i", chord: "Cm", functionPt: "Tônica menor", feelingPt: "Drama solene", descriptionPt: "Dó menor (Melancólico e pesado)" },
      { degree: "ii°", chord: "Ddim", functionPt: "Supertônica", feelingPt: "Tensão dramática", descriptionPt: "Ré diminuto" },
      { degree: "III", chord: "E♭", functionPt: "Mediante", feelingPt: "Luz majestosa", descriptionPt: "Mi bemol Maior" },
      { degree: "iv", chord: "Fm", functionPt: "Subdominante", feelingPt: "Tristeza suave", descriptionPt: "Fá menor" },
      { degree: "v", chord: "Gm", functionPt: "Dominante", feelingPt: "Calmo", descriptionPt: "Sol menor" },
      { degree: "VI", chord: "A♭", functionPt: "Submediante", feelingPt: "Poderoso", descriptionPt: "Lá bemol Maior" },
      { degree: "VII", chord: "B♭", functionPt: "Subtônica", feelingPt: "Amplo", descriptionPt: "Si bemol Maior" }
    ]
  },
  {
    keyCipher: "Dm",
    keyNamePt: "Ré Menor",
    isMinor: true,
    scaleNotes: "Ré — Mi — Fá — Sol — Lá — Si♭ — Dó",
    chords: [
      { degree: "i", chord: "Dm", functionPt: "Tônica", feelingPt: "Drama profundo", descriptionPt: "Ré menor (Muito expressivo)" },
      { degree: "ii°", chord: "Edim", functionPt: "Supertônica", feelingPt: "Grande tensão", descriptionPt: "Mi diminuto" },
      { degree: "III", chord: "F", functionPt: "Mediante", feelingPt: "Alívio harmônico", descriptionPt: "Fá Maior" },
      { degree: "iv", chord: "Gm", functionPt: "Subdominante", feelingPt: "Caminho suave", descriptionPt: "Sol menor" },
      { degree: "v", chord: "Am", functionPt: "Dominante", feelingPt: "Melancolia", descriptionPt: "Lá menor (Pode ser Am ou A7)" },
      { degree: "VI", chord: "B♭", functionPt: "Submediante", feelingPt: "Épico", descriptionPt: "Si bemol Maior" },
      { degree: "VII", chord: "C", functionPt: "Subtônica", feelingPt: "Direcional", descriptionPt: "Dó Maior" }
    ]
  },
  {
    keyCipher: "Em",
    keyNamePt: "Mi Menor",
    isMinor: true,
    scaleNotes: "Mi — Fá# — Sol — Lá — Si — Dó — Ré",
    chords: [
      { degree: "i", chord: "Em", functionPt: "Tônica", feelingPt: "Introspectivo e calmo", descriptionPt: "Mi menor (Profundo nos violões)" },
      { degree: "ii°", chord: "F#dim", functionPt: "Supertônica", feelingPt: "Instável", descriptionPt: "Fá sustenido diminuto" },
      { degree: "III", chord: "G", functionPt: "Mediante", feelingPt: "Brilhante", descriptionPt: "Sol Maior" },
      { degree: "iv", chord: "Am", functionPt: "Subdominante", feelingPt: "Suave transição", descriptionPt: "Lá menor" },
      { degree: "v", chord: "Bm", functionPt: "Dominante", feelingPt: "Sombrio/Calmo", descriptionPt: "Si menor (Comumente usado em adoração)" },
      { degree: "VI", chord: "C", functionPt: "Submediante", feelingPt: "Crescente", descriptionPt: "Dó Maior" },
      { degree: "VII", chord: "D", functionPt: "Subtônica", feelingPt: "Forte abertura", descriptionPt: "Ré Maior" }
    ]
  },
  {
    keyCipher: "F#m",
    keyNamePt: "Fá Sustenido Menor",
    isMinor: true,
    scaleNotes: "Fá# — Sol# — Lá — Si — Dó# — Ré — Mi",
    chords: [
      { degree: "i", chord: "F#m", functionPt: "Tônica", feelingPt: "Solidão brilhante", descriptionPt: "Fá sustenido menor (Sujo e emotivo)" },
      { degree: "ii°", chord: "G#dim", functionPt: "Supertônica", feelingPt: "Instável", descriptionPt: "Sol sustenido diminuto" },
      { degree: "III", chord: "A", functionPt: "Mediante", feelingPt: "Quente", descriptionPt: "Lá Maior" },
      { degree: "iv", chord: "Bm", functionPt: "Subdominante", feelingPt: "Caminho denso", descriptionPt: "Si menor" },
      { degree: "v", chord: "C#m", functionPt: "Dominante", feelingPt: "Espacial", descriptionPt: "Dó sustenido menor" },
      { degree: "VI", chord: "D", functionPt: "Submediante", feelingPt: "Lindo crescer", descriptionPt: "Ré Maior" },
      { degree: "VII", chord: "E", functionPt: "Subtônica", feelingPt: "Energético", descriptionPt: "Mi Maior" }
    ]
  },
  {
    keyCipher: "Gm",
    keyNamePt: "Sol Menor",
    isMinor: true,
    scaleNotes: "Sol — Lá — Si♭ — Dó — Ré — Mi♭ — Fá",
    chords: [
      { degree: "i", chord: "Gm", functionPt: "Tônica", feelingPt: "Mistério denso", descriptionPt: "Sol menor (Triste e forte)" },
      { degree: "ii°", chord: "Adim", functionPt: "Supertônica", feelingPt: "Tenso", descriptionPt: "Lá diminuto" },
      { degree: "III", chord: "B♭", functionPt: "Mediante", feelingPt: "Grandioso", descriptionPt: "Si bemol Maior" },
      { degree: "iv", chord: "Cm", functionPt: "Subdominante", feelingPt: "Fechado", descriptionPt: "Dó menor" },
      { degree: "v", chord: "Dm", functionPt: "Dominante", feelingPt: "Introspectivo", descriptionPt: "Ré menor" },
      { degree: "VI", chord: "E♭", functionPt: "Submediante", feelingPt: "Poderoso", descriptionPt: "Mi bemol Maior" },
      { degree: "VII", chord: "F", functionPt: "Subtônica", feelingPt: "Amplo", descriptionPt: "Fá Maior" }
    ]
  }
];
