/**
 * CONFIGURAZIONE E DATI AGENZIA "BLU VIAGGI"
 * -----------------------------------------------------------------------
 * Dati ufficiali:
 * - Nome: BLU VIAGGI
 * - Slogan: IL MONDO, LA TUA DESTINAZIONE
 * - Telefono / WhatsApp: +39 350 907 9479
 * - Email: infobluviaggi@gmail.com
 * - Logo: ./src/assets/images/blu_viaggi_logo_1786489780878.jpg
 * - Prenotazione istantanea via WhatsApp diretta per ogni pacchetto
 * -----------------------------------------------------------------------
 */

window.AGENCY_CONFIG = {
  agency: {
    name: "BLU VIAGGI",
    tagline: "IL MONDO, LA TUA DESTINAZIONE",
    subtagline: "Viaggi organizzati in autobus Gran Turismo e traghetto in Italia. Pensione Completa, Prezzi Vantaggiosi & Soluzioni 100% Accessibili.",
    phone: "+39 350 907 9479",
    phoneDisplay: "+39 350 907 9479",
    whatsappNumber: "393509079479",
    email: "infobluviaggi@gmail.com",
    address: "Via Roma 123, 20121 Milano (MI)",
    vatNumber: "IT01234567890",
    logoImage: "./src/assets/images/blu_viaggi_logo_1786489780878.jpg",
    hours: "Lun - Sab: 09:00 - 19:00 | Assistenza h24 in viaggio",
    demoNotice: "Partenze 2026 • Tutto Compreso in Pensione Completa • Prenotazioni Istantanee via WhatsApp"
  },

  theme: {
    primary: "#0A2540",      // Blu Profondo Elegante
    secondary: "#0077B6",    // Blu Mare Vibrante
    accentCyan: "#00B4D8",   // Ciano Mare
    whatsappGreen: "#25D366",// Verde WhatsApp
    whatsappHover: "#128C7E",
    yellow: "#FACC15",       // Giallo Sole
    yellowHover: "#EAB308",
  },

  // Flotta Autobus Gran Turismo
  fleetDetails: {
    title: "I Nostri Autobus Gran Turismo Deluxe",
    description: "Viaggia nel massimo relax senza lo stress degli aeroporti. Pullman di ultima generazione con tutti i comfort di serie:",
    features: [
      {
        icon: "💺",
        title: "Poltrone Reclinabili Extra Comfort",
        desc: "Sedute anatomiche ampie e distanziate con poggiatesta e poggiapiedi regolabili."
      },
      {
        icon: "♿",
        title: "Sollevatore Elettro-Idraulico H",
        desc: "Sui bus dedicati ai tour accessibili è presente il sollevatore idraulico per carrozzine."
      },
      {
        icon: "❄️",
        title: "Climatizzazione & Purificazione Air HEPA",
        desc: "Aria condizionata automatica e continuo ricambio d'aria sanificata."
      },
      {
        icon: "☕",
        title: "Soste Frequenti ogni 90 minuti",
        desc: "Fermate di ristoro programmate per sgranchirsi le gambe e prendere un caffè."
      },
      {
        icon: "👨‍✈️",
        title: "Doppio Autista Professionista",
        desc: "Massima sicurezza e guida riposante per tutta la durata dell'itinerario."
      },
      {
        icon: "🔌",
        title: "Prese USB, Wi-Fi & Bagno a Bordo",
        desc: "Prese elettriche individuali per smartphone, monitor TV e toilette sanificata."
      }
    ]
  },

  // 10 Pacchetti "Tutto Compreso - Pensione Completa" con prezzi super vantaggiosi
  trips: [
    {
      id: "gran-tour-sicilia",
      title: "Gran Tour della Sicilia sul Mare",
      subtitle: "8 Giorni / 7 Notti - Palermo, Cefalù, Agrigento, Taormina & Siracusa.",
      category: "isole",
      dates: "10–17 Settembre 2026",
      duration: "8 giorni / 7 notti",
      nights: 7,
      transport: "Pullman GT + Traghetto in cabina riservata",
      transportIcon: "🚌+⛴️",
      price: 690,
      priceLabel: "€ 690",
      priceSub: "a persona - Pensione Completa Tutto Incluso",
      image: "./src/assets/images/sicilia_bus_tour_1786486116567.jpg",
      hotel: "Hotel 4★ sul mare con piscina e ascensore",
      isAccessibleSpecial: false,
      difficulty: "Facile e Rilassante",
      accessibilityInfo: "Spazi ampi, bus GT e traghetto con ascensori. Accompagnatore sempre presente.",
      highlights: [
        "Traversata in traghetto in cabina doppia con servizi",
        "Pensione Completa con colazione, pranzo, cena e BEVANDE INCLUSE",
        "Visite guidate a Palermo, Taormina e Valle dei Templi",
        "Assistenza e accompagnatore BLU VIAGGI H24"
      ],
      program: [
        { day: "Giorno 1", title: "Partenza in Bus GT & Imbarco Traghetto", description: "Incontro con l'accompagnatore nei punti di ritrovo. Viaggio in bus GT e imbarco serale in cabina riservata." },
        { day: "Giorno 2", title: "Arrivo a Palermo & Cefalù", description: "Sbarco a Palermo, visita guidata della città e pranzo in ristorante tipico. Trasferimento a Cefalù per cena e pernottamento." },
        { day: "Giorno 3-5", title: "Agrigento, Valle dei Templi & Siracusa", description: "Escursioni guidate ad Agrigento e all'isola di Ortigia. Pranzi e cene in pensione completa con piatti siciliani." },
        { day: "Giorno 6-8", title: "Taormina & Rientro in Bus", description: "Sosta panoramica a Taormina con vista Etna. Imbarco di rientro e arrivo comodamente in bus." }
      ],
      included: ["Bus GT A/R", "Traghetto A/R con cabina", "7 Notti in Hotel 4★ in Pensione Completa con Bevande", "Guide e Accompagnatore H24", "Assicurazione"],
      excluded: ["Tassa di soggiorno comunale"]
    },
    {
      id: "puglia-matera-salento",
      title: "Puglia, Trulli di Alberobello & Matera",
      subtitle: "7 Giorni / 6 Notti - Alberobello, Polignano a Mare, Lecce & Sassi di Matera.",
      category: "cultura",
      dates: "18–24 Settembre 2026",
      duration: "7 giorni / 6 notti",
      nights: 6,
      transport: "Pullman GT con autisti esperti",
      transportIcon: "🚌",
      price: 540,
      priceLabel: "€ 540",
      priceSub: "a persona - Pensione Completa Tutto Incluso",
      image: "./src/assets/images/puglia_matera_tour_1786486103191.jpg",
      hotel: "Hotel 4★ e Masseria tipica con piscina",
      isAccessibleSpecial: false,
      difficulty: "Molto Facile",
      accessibilityInfo: "Percorsi idonei, navette dedicate per Matera, zero affaticamenti.",
      highlights: [
        "Passeggiata fiabesca tra i Trulli di Alberobello UNESCO",
        "Visita guidata ai famosi Sassi di Matera",
        "Pensione Completa con serata speciale in Masseria pugliese",
        "Vista panoramica a Polignano a Mare"
      ],
      program: [
        { day: "Giorno 1", title: "Partenza in Bus GT per la Puglia", description: "Viaggio comodo con soste frequenti. Arrivo in hotel 4★, drink di benvenuto e cena." },
        { day: "Giorno 2-4", title: "Alberobello, Polignano & Castellana Grotte", description: "Giornate dedicate ai borghi pugliesi con pranzo in pensione completa e serate di intrattenimento." },
        { day: "Giorno 5-7", title: "Lecce, Matera & Rientro", description: "Gita nei Sassi di Matera e passeggiata a Lecce. Pranzo di saluti e rientro in bus." }
      ],
      included: ["Bus GT", "6 Notti in Hotel 4★ in Pensione Completa con Bevande", "Cena Tipica in Masseria", "Visite Guidate", "Accompagnatore"],
      excluded: ["Tassa di soggiorno"]
    },
    {
      id: "sardegna-mare-costa",
      title: "Sardegna Mare & Costa Smeralda",
      subtitle: "8 Giorni / 7 Notti - Cagliari, Alghero, Olbia & Isola di La Maddalena.",
      category: "isole",
      dates: "1–8 Ottobre 2026",
      duration: "8 giorni / 7 notti",
      nights: 7,
      transport: "Pullman GT + Traghetto con cabina",
      transportIcon: "🚌+⛴️",
      price: 620,
      priceLabel: "€ 620",
      priceSub: "a persona - Pensione Completa Tutto Incluso",
      image: "./src/assets/images/alghero_sardinia_1786482940485.jpg",
      hotel: "Resort 4★ sul mare con spiaggia e piscina",
      isAccessibleSpecial: false,
      difficulty: "Rilassante sul Mare",
      accessibilityInfo: "Resort senza barriere, traghetto con ascensore, ritmi calmi.",
      highlights: [
        "Soggiorno in Resort 4 stelle direttamente affacciato sul mare azzurro",
        "Gita in battello all'Arcipelago della Maddalena inclusa",
        "Pensione Completa con specialità di pesce fresco sardo",
        "Accompagnatore BLU VIAGGI a disposizione"
      ],
      program: [
        { day: "Giorno 1", title: "Partenza in Bus & Imbarco", description: "Spostamento in bus verso il porto e sistemazione in cabina." },
        { day: "Giorno 2-5", title: "Cagliari & Costa Smeralda", description: "Giornate di mare, relax e gite panoramiche nei luoghi più esclusivi della Sardegna." },
        { day: "Giorno 6-8", title: "Gita alla Maddalena, Alghero & Rientro", description: "Escursione in barca e passeggiata sui bastioni di Alghero prima del rientro." }
      ],
      included: ["Bus GT", "Traghetto A/R in cabina", "7 Notti in Resort 4★ in Pensione Completa con Bevande", "Gita in Barca Maddalena", "Accompagnatore"],
      excluded: ["Tassa di soggiorno"]
    },
    {
      id: "riviera-toscana-accessibile-100",
      title: "💙 Tour Riviera & Toscana 100% Accessibile",
      subtitle: "7 Giorni / 6 Notti - Bus GT con Sollevatore H & Hotel 4★ Certificato Senza Barriere.",
      category: "accessibile",
      dates: "10–16 Ottobre 2026",
      duration: "7 giorni / 6 notti",
      nights: 6,
      transport: "Pullman GT Speciale con Sollevatore Idraulico H",
      transportIcon: "♿🚌",
      price: 490,
      priceLabel: "€ 490",
      priceSub: "a persona - Pensione Completa Tutto Incluso",
      image: "./src/assets/images/romagna_sea_1786482963789.jpg",
      hotel: "Hotel 4★ Certificato V4A - Bagni H & Docce a Filo Pavimento",
      isAccessibleSpecial: true,
      difficulty: "100% Pianeggiante & Accessibile",
      accessibilityInfo: "Senza gradini, bagni speciali H, passerelle mare con sedie JOB, assistenti di gruppo qualificati.",
      highlights: [
        "Bus GT speciale con elevatore idraulico per carrozzine e sedie a rotelle",
        "Hotel 4★ 100% privo di barriere con bagni speciali H attrezzati",
        "Passeggiate su lungomare pianeggianti e spiagge attrezzate con sedie JOB",
        "Pensione Completa con diete personalizzate ed assistenti di viaggio"
      ],
      program: [
        { day: "Giorno 1", title: "Partenza in Bus GT Accessibile & Accoglienza", description: "Salita comoda con sollevatore. Arrivo in hotel 4★ certificato, cena e presentazione dello staff." },
        { day: "Giorno 2-4", title: "Passeggiata sul Mare & Escursione Lucca Pianeggiante", description: "Relax sul lungomare e visita sulle ampie Mura di Lucca senza gradini." },
        { day: "Giorno 5-7", title: "Pisa Piazza dei Miracoli & Rientro", description: "Visita a Pisa su percorsi idonei e rientro in bus GT." }
      ],
      included: ["Bus GT con Sollevatore H", "6 Notti in Hotel 4★ Accessibile in Pensione Completa", "Assistenti di Viaggio", "Spiaggia Accessibile JOB", "Assicurazione"],
      excluded: ["Tassa di soggiorno"]
    },
    {
      id: "umbria-assisi-borghi",
      title: "Umbria, Assisi & Borghi Medievali",
      subtitle: "6 Giorni / 5 Notti - Assisi, Perugia, Gubbio, Spoleto & Lago Trasimeno.",
      category: "cultura",
      dates: "5–10 Ottobre 2026",
      duration: "6 giorni / 5 notti",
      nights: 5,
      transport: "Pullman GT Panoramico",
      transportIcon: "🚌",
      price: 390,
      priceLabel: "€ 390",
      priceSub: "a persona - Pensione Completa Tutto Incluso",
      image: "./src/assets/images/assisi_umbria_1786482951651.jpg",
      hotel: "Hotel 4★ immerso nelle colline umbre con ascensore",
      isAccessibleSpecial: false,
      difficulty: "Molto Facile",
      accessibilityInfo: "Autobus panoramico, ascensori in hotel, soste riposanti.",
      highlights: [
        "Visita guidata alla Basilica di San Francesco ad Assisi",
        "Navigazione sul Lago Trasimeno fino all'Isola Maggiore",
        "Pensione Completa con degustazione di tartufo e vini umbri",
        "Passeggiate nei borghi incantati di Gubbio e Spoleto"
      ],
      program: [
        { day: "Giorno 1", title: "Partenza in Bus & Arrivo in Umbria", description: "Viaggio panoramico in bus GT. Arrivo in hotel 4★, cocktail e cena." },
        { day: "Giorno 2-4", title: "Assisi, Perugia & Lago Trasimeno", description: "Gite guidate con ritmi rilassati e pranzo tipico in pensione completa." },
        { day: "Giorno 5-6", title: "Gubbio & Rientro", description: "Visita alla città di pietra di Gubbio e rientro serale." }
      ],
      included: ["Bus GT", "5 Notti in Hotel 4★ in Pensione Completa con Bevande", "Guide Turistiche", "Navigazione Trasimeno", "Accompagnatore"],
      excluded: ["Tassa di soggiorno"]
    },
    {
      id: "costiera-amalfitana-capri",
      title: "Costiera Amalfitana, Capri & Sorrento",
      subtitle: "7 Giorni / 6 Notti - Amalfi, Positano, Sorrento & Gita a Capri.",
      category: "isole",
      dates: "12–18 Ottobre 2026",
      duration: "7 giorni / 6 notti",
      nights: 6,
      transport: "Pullman GT + Motonave riservata",
      transportIcon: "🚌+🛥️",
      price: 580,
      priceLabel: "€ 580",
      priceSub: "a persona - Pensione Completa Tutto Incluso",
      image: "./src/assets/images/hero_italy_bus_tour_1786482928689.jpg",
      hotel: "Hotel 4★ Sulla Penisola Sorrentina con vista mare",
      isAccessibleSpecial: false,
      difficulty: "Facile",
      accessibilityInfo: "Motonave riservata con saloni coperti e sedute confortevoli.",
      highlights: [
        "Mini-crociera riservata tra Amalfi e Positano con vista da sogno",
        "Escursione in barca all'Isola di Capri inclusa",
        "Pensione Completa con limoncello e specialità campane",
        "Accompagnatore BLU VIAGGI presente per tutta la vacanza"
      ],
      program: [
        { day: "Giorno 1", title: "Partenza in Bus GT verso Sorrento", description: "Viaggio autostradale comodo. Sistemazione in hotel 4★ panoramico e cena." },
        { day: "Giorno 2-5", title: "Amalfi, Positano, Capri & Ravello", description: "Escursioni via mare e terra nei luoghi più famosi della Campania." },
        { day: "Giorno 6-7", title: "Sorrento & Rientro", description: "Passeggiata a Sorrento, acquisti di prodotti tipici e rientro." }
      ],
      included: ["Bus GT", "6 Notti in Hotel 4★ in Pensione Completa con Bevande", "Gita in Motonave Costiera & Capri", "Accompagnatore"],
      excluded: ["Tassa di soggiorno"]
    },
    {
      id: "laghi-nord-sirmione",
      title: "Gran Tour dei Laghi del Nord & Sirmione",
      subtitle: "7 Giorni / 6 Notti - Lago di Garda, Sirmione, Lago di Como & Stresa.",
      category: "cultura",
      dates: "20–26 Ottobre 2026",
      duration: "7 giorni / 6 notti",
      nights: 6,
      transport: "Pullman GT Deluxe",
      transportIcon: "🚌",
      price: 520,
      priceLabel: "€ 520",
      priceSub: "a persona - Pensione Completa Tutto Incluso",
      image: "./src/assets/images/elba_island_1786482999716.jpg",
      hotel: "Hotel 4★ Sulle sponde del Lago di Garda con giardino",
      isAccessibleSpecial: false,
      difficulty: "Molto Facile",
      accessibilityInfo: "Battelli ad accesso piano sui laghi, bus GT panoramico.",
      highlights: [
        "Navigazione in battello a Sirmione e Bellagio 'perla del Lario'",
        "Gita alle Isole Borromee sul Lago Maggiore",
        "Pensione Completa con pesce di lago e piatti locali",
        "Accompagnatore H24"
      ],
      program: [
        { day: "Giorno 1", title: "Partenza in Bus & Arrivo sul Garda", description: "Arrivo in hotel 4★, drink di benvenuto e cena." },
        { day: "Giorno 2-4", title: "Sirmione, Como & Bellagio", description: "Navigazioni sui laghi con percorsi pianeggianti e guida." },
        { day: "Giorno 5-7", title: "Lago Maggiore, Verona & Rientro", description: "Visita alle Isole Borromee, passeggiata a Verona e rientro." }
      ],
      included: ["Bus GT", "6 Notti in Hotel 4★ in Pensione Completa con Bevande", "Battelli sui Laghi", "Accompagnatore"],
      excluded: ["Tassa di soggiorno"]
    },
    {
      id: "calabria-tropea-costa",
      title: "Calabria, Tropea & Costa degli Dei",
      subtitle: "8 Giorni / 7 Notti - Tropea, Capo Vaticano, Pizzo Calabro & Scilla.",
      category: "isole",
      dates: "2–9 Settembre 2026",
      duration: "8 giorni / 7 notti",
      nights: 7,
      transport: "Pullman GT Deluxe",
      transportIcon: "🚌",
      price: 590,
      priceLabel: "€ 590",
      priceSub: "a persona - Pensione Completa Tutto Incluso",
      image: "./src/assets/images/romagna_sea_1786482963789.jpg",
      hotel: "Resort 4★ a Tropea direttamente sul mare",
      isAccessibleSpecial: false,
      difficulty: "Rilassante sul Mare",
      accessibilityInfo: "Spiaggia accessibile, servizio navetta resort, ascensori.",
      highlights: [
        "Soggiorno a Tropea 'perla del Tirreno' in Resort 4 stelle sul mare",
        "Visita al borgo incantato di Scilla e Pizzo Calabro con il famoso tartufo",
        "Pensione Completa con prodotti tipici e cene a tema",
        "Accompagnatore dedicato BLU VIAGGI"
      ],
      program: [
        { day: "Giorno 1", title: "Partenza per la Calabria", description: "Viaggio comodo in bus GT. Arrivo a Tropea, sistemazione nel resort e cena." },
        { day: "Giorno 2-5", title: "Tropea, Capo Vaticano & Relax Mare", description: "Giornate di mare cristallino, visite guidate e spettacoli serali." },
        { day: "Giorno 6-8", title: "Scilla, Pizzo & Rientro", description: "Tappa al borgo dei pescatori di Chianalea a Scilla e rientro in bus." }
      ],
      included: ["Bus GT", "7 Notti in Resort 4★ in Pensione Completa con Bevande", "Servizio Spiaggia", "Accompagnatore"],
      excluded: ["Tassa di soggiorno"]
    },
    {
      id: "isola-elba-toscana",
      title: "Isola d'Elba & Arcipelago Toscano",
      subtitle: "6 Giorni / 5 Notti - Portoferraio, Capoliveri, Marina di Campo & Porto Azzurro.",
      category: "isole",
      dates: "14–19 Settembre 2026",
      duration: "6 giorni / 5 notti",
      nights: 5,
      transport: "Pullman GT + Traghetto",
      transportIcon: "🚌+⛴️",
      price: 480,
      priceLabel: "€ 480",
      priceSub: "a persona - Pensione Completa Tutto Incluso",
      image: "./src/assets/images/elba_island_1786482999716.jpg",
      hotel: "Hotel 4★ a pochi metri dalla spiaggia",
      isAccessibleSpecial: false,
      difficulty: "Molto Facile",
      accessibilityInfo: "Spostamenti brevi nell'isola, hotel pianeggiante.",
      highlights: [
        "Traversata in traghetto Piombino-Portoferraio inclusa",
        "Soggiorno in Hotel 4★ sul mare con Pensione Completa e bevande",
        "Visita alla Villa Napoleonica e ai borghi marinari di Porto Azzurro",
        "Accompagnatore BLU VIAGGI per tutta la durata"
      ],
      program: [
        { day: "Giorno 1", title: "Partenza & Imbarco per l'Elba", description: "Arrivo a Piombino, imbarco sul traghetto e sistemazione in hotel all'Elba." },
        { day: "Giorno 2-4", title: "Portoferraio, Capoliveri & Porto Azzurro", description: "Gite guidate tra spiagge incantevoli e storia napoleonica." },
        { day: "Giorno 5-6", title: "Marina di Campo & Rientro", description: "Passeggiata sul lungomare, traghetto per la terraferma e rientro in bus." }
      ],
      included: ["Bus GT", "Traghetto A/R", "5 Notti in Hotel 4★ in Pensione Completa con Bevande", "Accompagnatore"],
      excluded: ["Tassa di soggiorno"]
    },
    {
      id: "abruzzo-gran-sasso-trabocchi",
      title: "Abruzzo, Gran Sasso & Costa dei Trabocchi",
      subtitle: "6 Giorni / 5 Notti - Sulmona, Roccaraso, Gran Sasso & Trabocchi sul Mare.",
      category: "cultura",
      dates: "22–27 Ottobre 2026",
      duration: "6 giorni / 5 notti",
      nights: 5,
      transport: "Pullman GT Panoramico",
      transportIcon: "🚌",
      price: 420,
      priceLabel: "€ 420",
      priceSub: "a persona - Pensione Completa Tutto Incluso",
      image: "./src/assets/images/assisi_umbria_1786482951651.jpg",
      hotel: "Hotel 4★ Sulla Costa Adriatica con ascensore",
      isAccessibleSpecial: false,
      difficulty: "Molto Facile",
      accessibilityInfo: "Autobus GT, soste nei borghi storici e lungomare idonei.",
      highlights: [
        "Pranzo speciale su un autentico Trabruzzo sul mare",
        "Visita alla patria dei confetti a Sulmona e ai borghi del Gran Sasso",
        "Pensione Completa con arrosticini e specialità abruzzesi",
        "Accompagnatore H24"
      ],
      program: [
        { day: "Giorno 1", title: "Partenza in Bus per l'Abruzzo", description: "Arrivo in hotel 4★ sul mare, aperitivo di benvenuto e cena." },
        { day: "Giorno 2-4", title: "Costa dei Trabocchi, Sulmona & Gran Sasso", description: "Gite guidate con pranzo sul Trabocco e degustazioni tipiche." },
        { day: "Giorno 5-6", title: "Pescara & Rientro", description: "Passeggiata sul lungomare di Pescara e rientro comodo in bus." }
      ],
      included: ["Bus GT", "5 Notti in Hotel 4★ in Pensione Completa con Bevande", "Pranzo sul Trabocco", "Accompagnatore"],
      excluded: ["Tassa di soggiorno"]
    }
  ],

  // Sezione Accessibilità
  accessibilitySection: {
    title: "💙 Viaggi 100% Accessibili & Comfort Senza Barriere",
    subtitle: "Soluzioni studiate nei minimi dettagli per viaggiare in totale serenità anche in carrozzina o con mobilità ridotta.",
    guarantees: [
      { icon: "♿", title: "Bus GT con Sollevatore Idraulico", desc: "Pullman speciali dotati di elevatore elettrico automatico per salire in carrozzina in totale sicurezza." },
      { icon: "🏨", title: "Hotel Certificati Senza Barriere", desc: "Camere H collaudate con bagni attrezzati, maniglioni, docce a filo pavimento e ampi ascensori." },
      { icon: "👥", title: "Assistenti di Viaggio Qualificati", desc: "Staff esperto sempre presente per dare supporto, aiuto nei trasferimenti e massima attenzione al gruppo." },
      { icon: "🏖️", title: "Spiagge con Passerelle e Sedie JOB", desc: "Ausili anfibii per fare il bagno in mare in tranquillità con accesso fino all'acqua." },
      { icon: "🍽️", title: "Pensione Completa & Diete Speciali", desc: "Ristoranti accessibili e massima cura per intolleranze o diete personalizzate." },
      { icon: "⏱️", title: "Ritmi Calmi e Soste Frequenti", desc: "Programmi senza fretta, pause riposanti ogni 90 minuti e percorsi sempre pianeggianti." }
    ]
  },

  // Ricca Sezione Recensioni Reali (8 Recensioni dettagliate)
  reviews: {
    title: "Le Opinioni dei Nostri Viaggiatori",
    subtitle: "Recensioni reali dai nostri clienti senior, coppie e famiglie con persone disabili.",
    items: [
      {
        name: "Giuseppe e Teresa M. (74 e 71 anni)",
        role: "Da Torino • Gran Tour Sicilia",
        rating: 5,
        quote: "Servizio fantastico! Non volevamo più prendere l'aereo per dolori alla schiena. Il bus GT di BLU VIAGGI era comodissimo, l'autista bravissimo e la pensione completa ottima. Prenoteremo di nuovo via WhatsApp!"
      },
      {
        name: "Roberto e Marco (in carrozzina)",
        role: "Da Milano • Tour Riviera Accessibile",
        rating: 5,
        quote: "Finalmente un'agenzia seria per chi viaggia in carrozzina. Il sollevatore sul bus funzionava alla perfezione, l'hotel non aveva neanche un gradino e la doccia era a filo pavimento. Grazie di cuore!"
      },
      {
        name: "Carla, Anna e Maria (Gruppo Senior)",
        role: "Da Bologna • Puglia e Trulli",
        rating: 5,
        quote: "Organizzazione da 10 e lode. Cibo squisito in pensione completa, l'accompagnatore ci seguiva passo passo senza metterci fretta. Rapporto qualità prezzo imbattibile."
      },
      {
        name: "Luigi P. e Famiglia",
        role: "Da Verona • Sardegna & Costa Smeralda",
        rating: 5,
        quote: "Prezzo incredibile per 8 giorni in pensione completa con traghetto in cabina e resort sul mare! Abbiamo chiesto info su WhatsApp e in 5 minuti era tutto confermato."
      },
      {
        name: "Elena e Giovanni B. (69 e 72 anni)",
        role: "Da Firenze • Umbria & Assisi",
        rating: 5,
        quote: "Abbiamo trascorso 6 giorni meravigliosi. Il bus fa soste frequenti molto gradite. L'albergo era bellissimo con cena e bevande sempre incluse. Consigliatissimo!"
      },
      {
        name: "Marcella S. con mamma anziana",
        role: "Da Roma • Costiera Amalfitana",
        rating: 5,
        quote: "Mia mamma cammina piano e temevo fosse faticoso: invece l'assistenza è stata impeccabile. La motonave per Capri e Amalfi era comodissima. Esperienza indimenticabile!"
      },
      {
        name: "Antonio R. e Amici",
        role: "Da Brescia • Calabria & Tropea",
        rating: 5,
        quote: "Resort sul mare spettacolare, cibo calabrese genuino e autisti molto simpatici e prudenti. Inviare la richiesta via WhatsApp è comodissimo!"
      },
      {
        name: "Valeria M. (68 anni)",
        role: "Da Genova • Isola d'Elba",
        rating: 5,
        quote: "Viaggio rilassante e divertente. Il gruppo era molto affiatato e l'accompagnatore BLU VIAGGI sempre presente per ogni nostra esigenza. Tornerò sicuramente!"
      }
    ]
  },

  // Galleria Fotografica
  gallery: {
    items: [
      { title: "I Nostri Autobus Gran Turismo Deluxe", desc: "Poltrone reclinabili e climatizzazione per un viaggio riposante.", image: "./src/assets/images/hero_italy_bus_tour_1786482928689.jpg" },
      { title: "I Trulli di Alberobello in Puglia", desc: "Passeggiate distese nei borghi più belli d'Italia.", image: "./src/assets/images/puglia_matera_tour_1786486103191.jpg" },
      { title: "Taormina e il Mare della Sicilia", desc: "Pensione completa e mare mozzafiato.", image: "./src/assets/images/sicilia_bus_tour_1786486116567.jpg" },
      { title: "Alghero e il Mare della Sardegna", desc: "Traghetto in cabina e resort 4★ sul mare.", image: "./src/assets/images/alghero_sardinia_1786482940485.jpg" },
      { title: "Spiaggia Accessibile in Riviera", desc: "Servizi 100% privi di barriere con ausili JOB.", image: "./src/assets/images/romagna_sea_1786482963789.jpg" },
      { title: "Assisi e i Colli dell'Umbria", desc: "Cultura, buona cucina ed atmosfera unica.", image: "./src/assets/images/assisi_umbria_1786482951651.jpg" }
    ]
  }
};
