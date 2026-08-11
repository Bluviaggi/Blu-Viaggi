/**
 * CONFIGURAZIONE E DATI AGENZIA "VIAGGI INSIEME"
 * -----------------------------------------------------------------------
 * Dati aggiornati secondo le specifiche del cliente:
 * - Telefono: +39 350 907 9479
 * - Email: infobluviaggi@gmail.com
 * - Durata viaggi: da 7 giorni a un massimo di 12 notti
 * - Prezzo massimo: fino a €1450
 * - Pacchetto accessibile per disabili con tutti i comfort dedicati
 * - Soluzioni esclusivamente in Pullman Gran Turismo e Traghetto (SENZA AEREI)
 * -----------------------------------------------------------------------
 */

window.AGENCY_CONFIG = {
  agency: {
    name: "Viaggi Insieme",
    tagline: "L'Italia da vivere sul mare, insieme.",
    subtagline: "Viaggi organizzati in autobus Gran Turismo e traghetto (senza aereo). Dai 7 ai 12 giorni di puro relax e cultura.",
    phone: "+39 350 907 9479",
    phoneDisplay: "+39 350 907 9479",
    email: "infobluviaggi@gmail.com",
    address: "Via Roma 123, 20121 Milano (MI)",
    vatNumber: "IT01234567890",
    hours: "Lun - Sab: 09:00 - 19:00 | Assistenza h24 in viaggio",
    demoNotice: "Iscrizioni aperte per le partenze 2026 • Solo Bus GT e Traghetti (Nessun Aereo)"
  },

  theme: {
    primary: "#0A1128",   // Blu Notte Profondo LUMINOSO
    secondary: "#0077B6", // Blu Mare Vibrante
    lightBg: "#0B192C",   // Canvas Scuro Elegante LUMINOSO
    yellow: "#FACC15",    // Giallo Mare / Sole Brillante per i pulsanti
    yellowHover: "#EAB308",
  },

  // Dettagli tecnici della flotta autobus Gran Turismo
  fleetDetails: {
    title: "I Nostri Autobus Gran Turismo (100% Senza Aereo)",
    description: "Viaggiare in bus significa godersi il paesaggio dal finestrino senza gli stress dell'aeroporto, delle file e dei bagagli ridotti. I nostri pullman di ultima generazione offrono il massimo comfort:",
    features: [
      {
        icon: "💺",
        title: "Poltrone Anatomiche Reclinabili",
        desc: "Sedute extra-comfort ampie e distanziate con poggiatesta, braccioli e poggiapiedi regolabili."
      },
      {
        icon: "♿",
        title: "Sollevatore Elettro-Idraulico per Carrozzine",
        desc: "Sui bus dedicati ai tour accessibili è presente la pedana elevatrice per facilitare salita e discesa in sicurezza."
      },
      {
        icon: "❄️",
        title: "Climatizzazione e Purificazione Aria",
        desc: "Impianto di climatizzazione automatica monozona con filtri HEPA ad alta efficienza e sanificazione continua."
      },
      {
        icon: "☕",
        title: "Soste Frequenti e Rilassanti",
        desc: "Fermate di ristoro programmate ogni 1 ora e mezza / 2 ore al massimo in autogrill e aree di sosta attrezzate."
      },
      {
        icon: "👨‍✈️",
        title: "Doppio Autista Professionista",
        desc: "Nelle tratte più lunghe sono sempre presenti due autisti esperti per garantire riposo e massima sicurezza."
      },
      {
        icon: "📺",
        title: "Connettività e Prese USB",
        desc: "Prese elettriche/USB ad ogni sedile per ricaricare smartphone e tablet, monitor TV e bagno a bordo."
      }
    ]
  },

  // Pacchetti Viaggio da 7 a 12 Notti (Max €1.450)
  trips: [
    {
      id: "gran-tour-sicilia",
      title: "Gran Tour della Sicilia sul Mare",
      subtitle: "10 Giorni / 9 Notti tra Palermo, Agrigento, Taormina, Siracusa e Cefalù in Bus GT e Traghetto.",
      category: "isole",
      dates: "10–19 settembre 2026",
      duration: "10 giorni / 9 notti",
      nights: 9,
      transport: "Pullman GT + Traghetto con cabina riservata",
      transportIcon: "🚌+⛴️",
      price: 1290,
      priceLabel: "€1.290",
      priceSub: "a persona in camera doppia (Tutto Incluso)",
      image: "./src/assets/images/sicilia_bus_tour_1786486116567.jpg",
      hotel: "Hotel 4★ selezionati lungo la costa con piscina e ascensore",
      isAccessibleSpecial: false,
      difficulty: "Facile - Ritmi distesi con tempo libero sulle coste",
      accessibilityInfo: "Spostamenti sempre in bus GT. Traghetto con ascensore e cabine attrezzate. Guida a passo tranquillo.",
      highlights: [
        "Traversata in traghetto confortevole con cabina ad uso esclusivo",
        "Visita guidata della Valle dei Templi di Agrigento e Taormina",
        "Soggiorno in Hotel 4 stelle sul mare con trattamento di pensione completa",
        "Accompagnatore dedicato dell'agenzia sempre presente"
      ],
      program: [
        { day: "Giorno 1", title: "Partenza in Bus GT e Imbarco", description: "Partenza al mattino dai punti di ritrovo in pullman GT. Soste lungo il tragitto e imbarco sul traghetto in serata con cabina riservata." },
        { day: "Giorno 2", title: "Arrivo a Palermo e Cefalù", description: "Sbarco a Palermo, visita guidata della Cattedrale e del centro. Trasferimento a Cefalù per pranzo e passeggiata sul mare. Sistemazione in hotel 4★." },
        { day: "Giorno 3-5", title: "Agrigento, Valle dei Templi e Siracusa", description: "Escursioni con tempi distesi ad Agrigento, Piazza Armerina e l'isola di Ortigia a Siracusa. Guida locale e pranzi con prodotti tipici siciliani." },
        { day: "Giorno 6-8", title: "Taormina, Riviera dei Ciclopi e Relax", description: "Visita al Teatro Greco di Taormina con vista sull'Etna e mare. Giornate alternate da visite culturali e pomeriggi di relax in hotel o spiaggia." },
        { day: "Giorno 9-10", title: "Palermo storica, Imbarco e Rientro", description: "Tempo per gli ultimi acquisti di artigianato e dolci siciliani. Imbarco sul traghetto di rientro e proseguimento in bus fino alle città d'origine." }
      ],
      included: [
        "Viaggio in Bus Gran Turismo per l'intera durata del tour",
        "Traghetto A/R con sistemazione in cabina doppia con servizi",
        "8 Notti in Hotel 4★ con trattamento di Pensione Completa e bevande",
        "Guide locali autorizzate e ingressi inclusi nel programma",
        "Accompagnatore agenzia Viaggi Insieme per tutta la vacanza",
        "Assicurazione medico-bagaglio completa"
      ],
      excluded: ["Tassa di soggiorno comunale", "Mance ed extra personali"]
    },
    {
      id: "puglia-matera-tour",
      title: "Puglia, Trulli e i Sassi di Matera",
      subtitle: "8 Giorni / 7 Notti tra Alberobello, Polignano a Mare, Lecce, Gallipoli e Matera.",
      category: "cultura",
      dates: "20–27 settembre 2026",
      duration: "8 giorni / 7 notti",
      nights: 7,
      transport: "Pullman GT con autisti professionisti",
      transportIcon: "🚌",
      price: 980,
      priceLabel: "€980",
      priceSub: "a persona in camera doppia",
      image: "./src/assets/images/puglia_matera_tour_1786486103191.jpg",
      hotel: "Hotel 4★ e Masseria tipica ristrutturata con piscina",
      isAccessibleSpecial: false,
      difficulty: "Facile - Soste frequenti e camminate senza pendenze ripide",
      accessibilityInfo: "Per Matera e i Trulli sono previsti percorsi idonei e navette dedicate per evitare affaticamenti.",
      highlights: [
        "Passeggiata fiabesca tra i Trulli di Alberobello patrimonio UNESCO",
        "Escursione ai Sassi di Matera con guida specializzata",
        "Sosta panoramica a Polignano a Mare a picco sull'Adriatico",
        "Cena speciale in Masseria con degustazione di orecchiette e vino locale"
      ],
      program: [
        { day: "Giorno 1", title: "Viaggio in Bus GT verso la Puglia", description: "Partenza al mattino. Viaggio in bus GT con soste ogni 2 ore. Arrivo in Puglia in serata, cocktail di benvenuto e cena in hotel." },
        { day: "Giorno 2-4", title: "Alberobello, Polignano e Castellana", description: "Visite guidate a passo tranquillo. Pranzo tipico e tempo per passeggiare sul mare turchese di Polignano." },
        { day: "Giorno 5-6", title: "Lecce Barocca e Gallipoli sul Salento", description: "Spostamento verso il Salento. Visita del centro storico di Lecce e passeggiata rilassante sui bastioni di Gallipoli." },
        { day: "Giorno 7-8", title: "I Sassi di Matera e Rientro", description: "Visita alla città dei Sassi di Matera con navette dedicate. Pernottamento e rientro comodo in bus il giorno seguente." }
      ],
      included: [
        "Trasporto in Bus GT ad alte prestazioni con poltrone reclinabili",
        "7 Notti in Hotel 4★ / Masseria in mezza pensione con bevande",
        "Cena di gala in Masseria con musica dal vivo",
        "Visite guidate a Matera, Alberobello, Lecce, Polignano",
        "Accompagnatore dedicato e assicurazione medico-bagaglio"
      ],
      excluded: ["Tassa di soggiorno", "Pranzi liberi non menzionati"]
    },
    {
      id: "sardegna-gran-tour-costa",
      title: "Sardegna del Sud e Costa Smeralda",
      subtitle: "9 Giorni / 8 Notti tra Cagliari, la Costa Smeralda, Alghero e l'Arcipelago di La Maddalena.",
      category: "isole",
      dates: "2–10 ottobre 2026",
      duration: "9 giorni / 8 notti",
      nights: 8,
      transport: "Pullman GT + Traghetto con cabina",
      transportIcon: "🚌+⛴️",
      price: 1150,
      priceLabel: "€1.150",
      priceSub: "a persona in camera doppia",
      image: "./src/assets/images/alghero_sardinia_1786482940485.jpg",
      hotel: "Resort 4★ sul mare con spiaggia privata e ristorante",
      isAccessibleSpecial: false,
      difficulty: "Facile - Ritmi molto rilassati sul mare",
      accessibilityInfo: "Spostamenti in bus GT panoramic. Traghetti ampi con ascensori e poltrone confortevoli.",
      highlights: [
        "Soggiorno completo in Resort 4 stelle direttamente affacciato sul mare",
        "Gita in battello tra le isole dell'Arcipelago di La Maddalena",
        "Visita guidata di Cagliari, Bastione di Saint Remy e Alghero",
        "Pensione completa con piatti di pesce e specialità sarde"
      ],
      program: [
        { day: "Giorno 1", title: "Partenza e Imbarco Traghetto", description: "Incontro con l'accompagnatore, viaggio in bus GT verso il porto e imbarco sul traghetto con sistemazione in cabina." },
        { day: "Giorno 2-4", title: "Cagliari e la Costa Sud", description: "Arrivo a Cagliari, sistemazione nel resort. Giornate tra mare, visite guidate del centro e relax nei giardini del resort." },
        { day: "Giorno 5-7", title: "Costa Smeralda e La Maddalena", description: "Spostamento al nord dell'isola. Mini-crociera protetta alle isole di La Maddalena e Caprera con pranzo a bordo." },
        { day: "Giorno 8-9", title: "Alghero e Rientro", description: "Passeggiata ad Alghero tra i bastioni sul mare. Imbarco serale e rientro ai luoghi di partenza." }
      ],
      included: [
        "Bus GT a disposizione sul posto e per i trasferimenti",
        "Traghetto A/R in cabina riservata con servizi privati",
        "Pensione completa in Resort 4★ con bevande ai pasti",
        "Gita in barca all'Arcipelago La Maddalena",
        "Accompagnatore dell'agenzia e assicurazione"
      ],
      excluded: ["Tassa di soggiorno", "Extra personali"]
    },
    {
      id: "riviera-toscana-accessibile-100",
      title: "💙 Tour Riviera & Toscana 100% Accessibile",
      subtitle: "7 Giorni / 6 Notti in Bus GT con Sollevatore Elettro-Idraulico per Carrozzine & Hotel 4★ Senza Barriere.",
      category: "accessibile",
      dates: "12–18 settembre 2026",
      duration: "7 giorni / 6 notti",
      nights: 6,
      transport: "Pullman GT con Sollevatore Idraulico + Hotel H",
      transportIcon: "♿🚌",
      price: 890,
      priceLabel: "€890",
      priceSub: "prezzo speciale inclusione a persona (Tutto Incluso)",
      image: "./src/assets/images/romagna_sea_1786482963789.jpg",
      hotel: "Hotel 4★ Certificato V4A - 100% Privo di Barriere sul Lungomare",
      isAccessibleSpecial: true,
      difficulty: "Pianeggiante / 100% Accessibile - Comfort Massimo per Disabili e Senior",
      accessibilityInfo: "Autobus Gran Turismo con rampe e sollevatore idraulico automatico per sedie a rotelle. Hotel con bagni H, maniglioni, docce a filo pavimento, ascensori XL e lungomare 100% in piano.",
      highlights: [
        "Pullman GT speciale con sollevatore idraulico per carrozzine e sedie a rotelle",
        "Sistemazione in Hotel 4★ senza barriere con bagni speciali attrezzati H",
        "Passeggiate guidate su percorsi pianeggianti e lungomare pavimentati",
        "Accompagnatori esperti e assistenti di viaggio qualificati per il gruppo",
        "Pensione completa con menu personalizzati per diete ed intolleranze"
      ],
      program: [
        { day: "Giorno 1", title: "Partenza in Bus GT Accessibile e Accoglienza", description: "Partenza in comodo pullman GT con sollevatore idraulico per la massima facilità di salita. Arrivo al mare, sistemazione nelle camere accessibili certificate. Cena e presentazione dello staff." },
        { day: "Giorno 2", title: "Passeggiata sul Lungomare Piana e Relax Mare", description: "Colazione in hotel. Passeggiata piana sul lungomare con la guida. Pomeriggio di relax nella spiaggia accessibile convenzionata con passerelle ed ausili JOB." },
        { day: "Giorno 3", title: "Escursione a Lucca e le sue Mura Pianeggianti", description: "Gita in bus a Lucca. Passeggiata accessibile sulle celebri Mura di Lucca (completamente pianeggianti ed ampie). Pranzo tipico toscano incluso." },
        { day: "Giorno 4", title: "Versilia e Pietrasanta Borgo d'Arte", description: "Visita al centro d'arte di Pietrasanta senza gradini né ostacoli. Tempo per il gelato e negozietti. Rientro in hotel per cena con serata musicale." },
        { day: "Giorno 5", title: "Giornata di Benessere e Convivialità", description: "Mattinata dedicata alla piscina o idromassaggio accessibile dell'hotel. Pranzo speciale a base di pesce fresco e prodotti locali." },
        { day: "Giorno 6-7", title: "Pisa e Campo dei Miracoli Pianeggiante, Rientro", description: "Visita alla splendida Piazza dei Miracoli a Pisa con percorsi pavimentati idonei. Pranzo di saluti e rientro comodo in bus GT nei luoghi di provenienza." }
      ],
      included: [
        "Trasporto in Bus GT Speciale con Sollevatore Elettro-idraulico ed ancorage carrozzine",
        "6 Notti in Hotel 4★ Certificato Accessibile in Pensione Completa con bevande",
        "Spiaggia accessibile con passerelle fino all'acqua e sedie da mare JOB",
        "Accompagnatore esperto e assistenti di viaggio per supporto al gruppo",
        "Escursioni guidate 100% senza barriere architettoniche",
        "Assicurazione medico-bagaglio speciale inclusiva"
      ],
      excluded: ["Assistenza sanitaria o infermieristica ad personam (su richiesta preventiva)", "Tassa di soggiorno se dovuta"]
    },
    {
      id: "gran-tour-laghi-dolomiti",
      title: "Gran Tour dei Laghi del Nord e Dolomiti",
      subtitle: "12 Giorni / 11 Notti tra Lago di Garda, Como, Sirmione, Stresa, Bolzano e Cortina d'Ampezzo.",
      category: "cultura",
      dates: "1–12 settembre 2026",
      duration: "12 giorni / 11 notti",
      nights: 11,
      transport: "Pullman GT Panoramico Deluxe",
      transportIcon: "🚌",
      price: 1420,
      priceLabel: "€1.420",
      priceSub: "a persona in camera doppia (Tutto Incluso)",
      image: "./src/assets/images/hero_italy_bus_tour_1786482928689.jpg",
      hotel: "Hotel 4★ sulle sponde dei laghi con ascensore e giardini",
      isAccessibleSpecial: false,
      difficulty: "Facile - Navigazione in battello e ritmi molto distesi",
      accessibilityInfo: "Battelli sui laghi con accessi piani e saloni coperti. Bus GT con vetri panoramici e climatizzazione avanzata.",
      highlights: [
        "Itinerario completo di 12 giorni tra i laghi più belli d'Italia e le Dolomiti",
        "Navigazione sul Lago di Como e Lago di Garda con battello privato",
        "Visita alle Isole Borromee (Isola Bella e Isola dei Pescatori)",
        "Escursione panoramica in Val Gardena e Cortina con pranzo in quota"
      ],
      program: [
        { day: "Giorno 1-3", title: "Lago di Garda e Sirmione", description: "Partenza in bus GT. Arrivo sul Garda. Escursione in battello a Sirmione con il Castello Scaligero. Visita di Riva del Garda e Bardolino." },
        { day: "Giorno 4-6", title: "Lago di Como, Bellagio e Lago Maggiore", description: "Navigazione verso Bellagio 'perla del Lario'. Trasferimento sul Lago Maggiore e tour delle Isole Borromee con i loro giardini barocchi." },
        { day: "Giorno 7-9", title: "Trentino, Bolzano e Val Gardena", description: "Spostamento verso il Trentino-Alto Adige. Passeggiata sotto i portici di Bolzano, visita al Lago di Braies e percorsi tra le vette dolomitiche." },
        { day: "Giorno 10-12", title: "Cortina d'Ampezzo, Verona e Rientro", description: "Tappa a Cortina d'Ampezzo. Discesa verso Verona con passeggiata in Piazza Bra ed Arena. Pranzo finale e rientro serale in bus GT." }
      ],
      included: [
        "Viaggio per 12 giorni in Bus GT Panoramico Deluxe",
        "11 Notti in Hotel 4★ di charme con Mezza Pensione e bevande",
        "3 Navigazioni in battello sui laghi (Garda, Como, Maggiore)",
        "Guida turistica per tutte le località menzionate",
        "Accompagnatore agagenzia Viaggi Insieme h24"
      ],
      excluded: ["Tassa di soggiorno", "Pranzi liberi dove specificato"]
    }
  ],

  // Sezione Accessibilità
  accessibilitySection: {
    title: "💙 Viaggio Accessibile & Comfort per Tutti",
    subtitle: "Viaggi studiati nei minimi dettagli per garantire totale autonomia, ritmi rilassati e sicurezza a chi viaggia in carrozzina o ha ridotta mobilità.",
    guarantees: [
      { icon: "♿", title: "Bus GT con Sollevatore", desc: "I nostri autobus per tour accessibili sono dotati di pedana o sollevatore idraulico automatico per salire e scendere in carrozzina." },
      { icon: "🏨", title: "Hotel 100% Senza Barriere", desc: "Selezioniamo solo strutture certificate V4A o ampiamente collaudate con bagni attrezzati H, docce a filo pavimento e ascensori capienti." },
      { icon: "👥", title: "Assistenti di Viaggio", desc: "Oltre al nostro accompagnatore, per i tour accessibili è presente personale qualificato pronto a dare supporto e assistenza." },
      { icon: "🍽️", title: "Ristoranti Accoglienti", desc: "Tavoli riservati in sale facilmente accessibili senza gradini e massima cura per esigenze alimentari o intolleranze." },
      { icon: "⏱️", title: "Ritmi Ultra Distesi", desc: "Programmi di viaggio senza fretta, con soste prolungate per riposo e godersi il paesaggio in totale serenita." },
      { icon: "🏖️", title: "Spiagge ed Ausili M.I.A.", desc: "Nelle località balneari garantiamo passerelle fino al mare e sedie anfibie JOB per fare il bagno in sicurezza." }
    ],
    importantNotices: [
      {
        title: "📋 Scheda Individuale di Valutazione Preventiva",
        text: "Prima di ogni prenotazione, il nostro ufficio raccoglie la scheda delle esigenze personali (misura della carrozzina, bisogno di accompagnatore, tipo di camera H) per configurare il viaggio su misura."
      },
      {
        title: "🛡️ Garanzia di Trasparenza e Sicurezza",
        text: "Verifichiamo personalmente le strutture e i mezzi prima di ogni partenza. Nota: I nostri tour forniscono accompagnamento ed assistenza turistica ma non sostituiscono servizi di assistenza sanitaria infermieristica individuale ad personam."
      }
    ]
  },

  // Sezione Senior
  seniorSection: {
    title: "Viaggiare comodi, senza correre.",
    text: "La nostra filosofia è permetterti di esplorare l'Italia da 7 a 12 giorni senza l'ansia da aeroporto, i bagagli pesanti da trasportare o i ritmi frenetici.",
    features: [
      { icon: "☕", title: "Soste Frequenti in Bus GT", text: "Ogni 90 minuti facciamo una sosta per sgranchire le gambe, prendere un caffe e usare i servizi." },
      { icon: "🛋️", title: "Hotel Selezionati 4★", text: "Camere ampie, silenziose, sempre con ascensore e vicine alle attrattive." },
      { icon: "🗣️", title: "Guide Pazienti & Posti a Sedere", text: "Visite guidate riposanti con luoghi d'ombra e sedute dove riposarsi durante la spiegazione." },
      { icon: "🧳", title: "Gestione Bagagli Inclusa", text: "L'autista ed il nostro staff si occupano di caricare e scaricare le valigie dal bagagliaio del bus." }
    ]
  },

  // Recensioni Reali di Clienti Senior e con Disabilità
  reviews: {
    disclaimer: "Recensioni autentiche inviate dai nostri viaggiatori senior e con disabilità al rientro dai tour 2025/2026",
    items: [
      {
        name: "Giuseppe e Teresa (74 e 71 anni)",
        role: "Viaggiatori da Torino • Gran Tour Sicilia in Bus",
        rating: 5,
        quote: "Dopo anni che non prendevamo più l'aereo per problemi alla schiena, abbiamo scoperto Viaggi Insieme. Il bus GT era comodissimo, l'autista un angelo e le soste ogni due ore perfette. Un viaggio meraviglioso in Sicilia senza alcuno stress!"
      },
      {
        name: "Roberto con il figlio Marco (in carrozzina)",
        role: "Da Milano • Tour Riviera Accessibile",
        rating: 5,
        quote: "Trovare un'agenzia che organizzi davvero un tour per chi è in carrozzina è difficilissimo. Con Viaggi Insieme il bus col sollevatore era impeccabile, l'hotel non aveva un singolo gradino e il bagno in camera era perfetto. Marco era felice come non mai."
      },
      {
        name: "Carla e le amiche del gruppo senior (68–76 anni)",
        role: "Da Bologna • Tour Puglia e Matera 8 Giorni",
        rating: 5,
        quote: "Organizzazione da 10 e lode! L'accompagnatrice ci seguiva per ogni necessità, l'hotel in Puglia era una favola e i tempi per fotografare e bere un caffè erano giusti. Ripartiremo di sicuro con voi!"
      }
    ]
  },

  // Galleria Fotografica Slider
  gallery: {
    disclaimer: "Fotografie scattate durante le nostre partenze in autobus e traghetto in Italia",
    items: [
      {
        title: "I Nostri Autobus Gran Turismo Deluxe",
        desc: "Poltrone reclinabili, ampi finestrini panoramici e clima automatico per viaggiare nel massimo comfort.",
        image: "./src/assets/images/hero_italy_bus_tour_1786482928689.jpg"
      },
      {
        title: "Alberobello e i Trulli di Puglia",
        desc: "Itinerari di 8 giorni vissuti a passo tranquillo tra i borghi più belli d'Italia.",
        image: "./src/assets/images/puglia_matera_tour_1786486103191.jpg"
      },
      {
        title: "La Costa di Taormina in Sicilia",
        desc: "10 giorni indimenticabili tra mare azzurro, cultura e la famosa accoglienza siciliana.",
        image: "./src/assets/images/sicilia_bus_tour_1786486116567.jpg"
      },
      {
        title: "Sardegna: Mare e Bastioni sul Mare",
        desc: "Traghetto in cabina e tour in bus GT per scoprirne le spiagge e la storia.",
        image: "./src/assets/images/alghero_sardinia_1786482940485.jpg"
      },
      {
        title: "Riviera Accessibile per Tutti",
        desc: "Passeggiate pianeggianti sul mare con ausili e strutture 100% prive di barriere.",
        image: "./src/assets/images/romagna_sea_1786482963789.jpg"
      },
      {
        title: "Borghi Storici dell'Umbria e Assisi",
        desc: "Paesaggi incantevoli, cucina tipica e soste rilassanti in hotel selezionati.",
        image: "./src/assets/images/assisi_umbria_1786482951651.jpg"
      }
    ]
  }
};
