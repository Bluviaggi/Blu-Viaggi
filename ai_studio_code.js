/**
 * VIAGGI INSIEME - SCRIPT PRINCIPALE E INTERATTIVITÀ
 * Gestisce la navigazione, il filtro dei viaggi, le modali di dettaglio,
 * la galleria fotografica, il form contatti ed il pannello di configurazione.
 */

document.addEventListener('DOMContentLoaded', () => {
  const config = window.AGENCY_CONFIG;
  if (!config) {
    console.error("Configurazione agency-config.js non trovata!");
    return;
  }

  // Inizializza Render della Pagina
  initHeaderAndBrand(config.agency);
  renderTrips(config.trips);
  renderAccessibilitySection(config.accessibilitySection);
  renderSeniorSection(config.seniorSection);
  renderReviews(config.reviews);
  renderGallery(config.gallery);
  initFormAndDropdowns(config.trips);
  initMobileDrawer();
  initModals();
  initAgencyConfigurator(config);
});

/**
 * Inizializza Marca e Intestazione
 */
function initHeaderAndBrand(agency) {
  // Popola elementi con classe o id corrispondente
  document.querySelectorAll('.agency-name').forEach(el => el.textContent = agency.name);
  document.querySelectorAll('.agency-phone').forEach(el => {
    el.textContent = agency.phoneDisplay;
    if (el.tagName === 'A') el.href = `tel:${agency.phone.replace(/\s+/g, '')}`;
  });
  document.querySelectorAll('.agency-email').forEach(el => {
    el.textContent = agency.email;
    if (el.tagName === 'A') el.href = `mailto:${agency.email}`;
  });
  document.querySelectorAll('.agency-address').forEach(el => el.textContent = agency.address);
  document.querySelectorAll('.agency-vat').forEach(el => el.textContent = agency.vatNumber);
}

/**
 * Render della griglia "I Nostri Viaggi"
 */
function renderTrips(trips, categoryFilter = 'all') {
  const container = document.getElementById('trips-container');
  if (!container) return;

  const filtered = categoryFilter === 'all' 
    ? trips 
    : trips.filter(t => t.category === categoryFilter || (categoryFilter === 'accessibile' && t.isAccessibleSpecial));

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--color-text-muted);">
        Nessun viaggio trovato per questa categoria.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(trip => `
    <article class="trip-card">
      <div class="trip-card-image">
        <img src="${trip.image}" alt="${trip.title}" loading="lazy" referrerPolicy="no-referrer">
        <span class="trip-category-badge">${trip.transportIcon} ${trip.duration}</span>
        ${trip.isAccessibleSpecial ? '<span class="trip-accessible-tag">♿ Accessibile</span>' : ''}
      </div>
      
      <div class="trip-card-content">
        <div class="trip-card-dates">
          📅 ${trip.dates}
        </div>
        
        <h3 class="trip-card-title">${trip.title}</h3>
        
        <ul class="trip-meta-list">
          <li class="trip-meta-item">Calma / Inclusione: <strong>Trasporto:</strong> ${trip.transport}</li>
          <li class="trip-meta-item">🏨 <strong>Sistemazione:</strong> ${trip.hotel}</li>
          <li class="trip-meta-item">⚡ <strong>Difficoltà:</strong> ${trip.difficulty}</li>
        </ul>

        <div class="trip-highlights-box">
          <strong>Highlights del viaggio:</strong>
          <ul>
            ${trip.highlights.slice(0, 3).map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>

        <div class="trip-card-footer">
          <div class="trip-price-box">
            <span class="trip-price-label">Da circa</span>
            <span class="trip-price-val">${trip.priceLabel}</span>
          </div>
          <button class="btn btn-blue btn-sm" onclick="openTripModal('${trip.id}')">
            Vedi Programma
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

/**
 * Filtro Categorie Viaggio
 */
window.filterTrips = function(category, btnElement) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  renderTrips(window.AGENCY_CONFIG.trips, category);
};

/**
 * Modale Dettaglio Programma Viaggio
 */
window.openTripModal = function(tripId) {
  const trip = window.AGENCY_CONFIG.trips.find(t => t.id === tripId);
  if (!trip) return;

  const modalBody = document.getElementById('trip-modal-body');
  const modalTitle = document.getElementById('trip-modal-title');
  
  modalTitle.textContent = trip.title;

  modalBody.innerHTML = `
    <div style="margin-bottom: 20px;">
      <img src="${trip.image}" alt="${trip.title}" style="width:100%; height:260px; object-fit:cover; border-radius:var(--radius-md);" referrerPolicy="no-referrer">
      <div style="display:flex; gap:12px; margin-top:12px; flex-wrap:wrap; align-items:center;">
        <span style="background:var(--color-blue-light); color:var(--color-navy); font-weight:700; font-size:0.85rem; padding:4px 12px; border-radius:var(--radius-pill);">
          📅 ${trip.dates}
        </span>
        <span style="background:var(--color-gold-light); color:var(--color-gold-hover); font-weight:700; font-size:0.85rem; padding:4px 12px; border-radius:var(--radius-pill);">
          ⏱️ ${trip.duration}
        </span>
        <span style="background:var(--color-navy); color:var(--color-white); font-weight:700; font-size:0.85rem; padding:4px 12px; border-radius:var(--radius-pill);">
          ${trip.transportIcon} ${trip.transport}
        </span>
      </div>
    </div>

    <div style="background:var(--color-cream); padding:16px; border-radius:var(--radius-md); border-left:4px solid var(--color-blue); margin-bottom:24px;">
      <h4 style="color:var(--color-navy); margin-bottom:4px;">♿ Informazioni Accessibilità e Ritmo</h4>
      <p style="font-size:0.9rem; color:var(--color-text-main);">${trip.accessibilityInfo}</p>
    </div>

    <h3 style="font-family:var(--font-heading); color:var(--color-navy); margin-bottom:16px;">Programma Giorno per Giorno</h3>
    <div style="display:flex; flex-direction:column; gap:16px; margin-bottom:28px;">
      ${trip.program.map(p => `
        <div style="background:var(--color-white); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:16px;">
          <strong style="color:var(--color-blue); font-size:0.85rem; text-transform:uppercase;">${p.day}</strong>
          <h4 style="color:var(--color-navy); margin:4px 0 8px 0; font-size:1.1rem;">${p.title}</h4>
          <p style="font-size:0.9rem; color:var(--color-text-muted); line-height:1.5;">${p.description}</p>
        </div>
      `).join('')}
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:28px;">
      <div style="background:#F0FDF4; border:1px solid #BBF7D0; padding:16px; border-radius:var(--radius-md);">
        <h4 style="color:#166534; margin-bottom:8px;">✅ Cosa è Incluso</h4>
        <ul style="font-size:0.85rem; color:#14532D; padding-left:18px; display:flex; flex-direction:column; gap:6px;">
          ${trip.included.map(i => `<li>${i}</li>`).join('')}
        </ul>
      </div>

      <div style="background:#FEF2F2; border:1px solid #FECACA; padding:16px; border-radius:var(--radius-md);">
        <h4 style="color:#991B1B; margin-bottom:8px;">❌ Cosa NON è Incluso</h4>
        <ul style="font-size:0.85rem; color:#7F1D1D; padding-left:18px; display:flex; flex-direction:column; gap:6px;">
          ${trip.excluded.map(e => `<li>${e}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div style="display:flex; justify-content:space-between; align-items:center; background:var(--color-navy); color:var(--color-white); padding:20px; border-radius:var(--radius-md); flex-wrap:wrap; gap:16px;">
      <div>
        <span style="font-size:0.8rem; color:var(--color-gold-light); display:block; text-transform:uppercase;">Prezzo Indicativo</span>
        <strong style="font-size:1.8rem;">${trip.priceLabel}</strong>
        <span style="font-size:0.8rem; display:block; opacity:0.8;">${trip.priceSub}</span>
      </div>
      <button class="btn btn-primary" onclick="requestTripAvailability('${trip.id}')">
        Richiedi Disponibilità per Questo Viaggio
      </button>
    </div>
  `;

  openModal('trip-modal');
};

/**
 * Sezione Speciale Accessibilità
 */
function renderAccessibilitySection(accConfig) {
  const container = document.getElementById('accessibility-guarantees-container');
  if (!container) return;

  container.innerHTML = accConfig.guarantees.map(g => `
    <div class="accessibility-card">
      <div class="accessibility-card-icon">${g.icon}</div>
      <h3 class="accessibility-card-title">${g.title}</h3>
      <p class="accessibility-card-desc">${g.desc}</p>
    </div>
  `).join('');
}

/**
 * Sezione Senior
 */
function renderSeniorSection(seniorConfig) {
  const container = document.getElementById('senior-features-container');
  if (!container) return;

  container.innerHTML = seniorConfig.features.map(f => `
    <div class="senior-feature-card">
      <div class="senior-feature-icon">${f.icon}</div>
      <h4 class="senior-feature-title">${f.title}</h4>
      <p class="senior-feature-desc">${f.text}</p>
    </div>
  `).join('');
}

/**
 * Sezione Recensioni
 */
function renderReviews(reviewsConfig) {
  const container = document.getElementById('reviews-container');
  if (!container) return;

  container.innerHTML = reviewsConfig.items.map(r => `
    <div class="review-card">
      <div class="review-stars">
        ${'★'.repeat(r.rating)}
      </div>
      <p class="review-quote">"${r.quote}"</p>
      <div class="review-author">
        <div class="review-avatar">${r.name.charAt(0)}</div>
        <div class="review-info">
          <span class="review-name">${r.name}</span>
          <span class="review-role">${r.role}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * Sezione Galleria Foto
 */
function renderGallery(galleryConfig) {
  const container = document.getElementById('gallery-container');
  if (!container) return;

  container.innerHTML = galleryConfig.items.map((item, idx) => `
    <div class="gallery-item" onclick="openLightbox(${idx})">
      <img src="${item.image}" alt="${item.title}" loading="lazy" referrerPolicy="no-referrer">
      <div class="gallery-overlay">
        <span class="gallery-item-title">${item.title}</span>
        <span class="gallery-item-desc">${item.desc}</span>
      </div>
    </div>
  `).join('');
}

/**
 * Lightbox Galleria
 */
window.openLightbox = function(index) {
  const item = window.AGENCY_CONFIG.gallery.items[index];
  if (!item) return;

  const body = document.getElementById('lightbox-modal-body');
  body.innerHTML = `
    <div style="text-align:center;">
      <img src="${item.image}" alt="${item.title}" class="lightbox-img" referrerPolicy="no-referrer">
      <h3 style="font-family:var(--font-heading); color:var(--color-navy); margin-top:16px;">${item.title}</h3>
      <p style="color:var(--color-text-muted); font-size:0.95rem;">${item.desc}</p>
    </div>
  `;
  openModal('lightbox-modal');
};

/**
 * Gestione Form e Selezioni Viaggio
 */
function initFormAndDropdowns(trips) {
  const select = document.getElementById('trip-select');
  if (!select) return;

  select.innerHTML = `
    <option value="">-- Seleziona un viaggio o chiedi informazioni generali --</option>
    ${trips.map(t => `<option value="${t.title}">${t.title} (${t.dates}) - ${t.priceLabel}</option>`).join('')}
    <option value="Informazioni Generali">Informazioni Generali / Altre Esigenze</option>
  `;

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const privacyCheck = document.getElementById('privacy-check');
      if (!privacyCheck || !privacyCheck.checked) {
        alert("Per favore accetta l'informativa sulla privacy prima di inviare la richiesta.");
        return;
      }

      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const phone = document.getElementById('form-phone').value;
      const trip = document.getElementById('trip-select').value || 'Generale';

      showSuccessModal(name, email, phone, trip);
      form.reset();
    });
  }
}

/**
 * Seleziona Viaggio nel Form dai Pulsanti Dettaglio
 */
window.requestTripAvailability = function(tripId) {
  closeModal('trip-modal');
  const trip = window.AGENCY_CONFIG.trips.find(t => t.id === tripId);
  if (trip) {
    const select = document.getElementById('trip-select');
    if (select) select.value = trip.title;
  }
  
  const contactSection = document.getElementById('contatti');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Modale di Conferma Invio Form
 */
function showSuccessModal(name, email, phone, trip) {
  const body = document.getElementById('success-modal-body');
  body.innerHTML = `
    <div style="text-align:center; padding:20px 0;">
      <div style="font-size:3.5rem; color:#16A34A; margin-bottom:16px;">✓</div>
      <h3 style="font-family:var(--font-heading); color:var(--color-navy); font-size:1.8rem; margin-bottom:12px;">Grazie ${name}!</h3>
      <p style="color:var(--color-text-main); font-size:1.05rem; margin-bottom:20px;">
        La tua richiesta per <strong>"${trip}"</strong> è stata ricevuta con successo.
      </p>
      <div style="background:var(--color-cream); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:16px; text-align:left; font-size:0.9rem; margin-bottom:24px;">
        <strong>I tuoi dati di contatto:</strong>
        <ul style="margin-top:6px; list-style:none;">
          <li>📧 Email: ${email}</li>
          <li>📞 Telefono: ${phone}</li>
        </ul>
        <p style="margin-top:10px; color:var(--color-blue); font-weight:600;">
          Un nostro consulente di Viaggi Insieme ti contatterà telefonicamente o via email entro 24 ore lavorative.
        </p>
      </div>
      <button class="btn btn-primary" onclick="closeModal('success-modal')">
        Perfetto, grazie
      </button>
    </div>
  `;
  openModal('success-modal');
}

/**
 * Mobile Drawer Menu Handlers
 */
function initMobileDrawer() {
  const hamburger = document.getElementById('hamburger-btn');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('drawer-overlay');
  const closeBtn = document.getElementById('drawer-close-btn');

  if (hamburger && drawer && overlay) {
    hamburger.addEventListener('click', () => {
      drawer.classList.add('open');
      overlay.classList.add('active');
    });

    const closeDrawer = () => {
      drawer.classList.remove('open');
      overlay.classList.remove('active');
    };

    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }
}

/**
 * Gestione Modali Generiche
 */
function initModals() {
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });
}

window.openModal = function(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('active');
};

window.closeModal = function(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('active');
};

/**
 * Modali Legali (Privacy, Cookie, Termini)
 */
window.openLegalModal = function(type) {
  const titleEl = document.getElementById('legal-modal-title');
  const bodyEl = document.getElementById('legal-modal-body');

  if (type === 'privacy') {
    titleEl.textContent = "Informativa sulla Privacy";
    bodyEl.innerHTML = `
      <p style="font-size:0.9rem; line-height:1.6; color:var(--color-text-main);">
        Informativa resa ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR). I dati forniti attraverso il modulo di contatto di <strong>${window.AGENCY_CONFIG.agency.name}</strong> saranno trattati esclusivamente per rispondere alle richieste di informazioni ed organizzazione viaggi di gruppo.
      </p>
      <h4 style="margin-top:16px; color:var(--color-navy);">1. Titolare del Trattamento</h4>
      <p style="font-size:0.9rem;">${window.AGENCY_CONFIG.agency.name} - ${window.AGENCY_CONFIG.agency.address} - Email: ${window.AGENCY_CONFIG.agency.email}</p>
      <h4 style="margin-top:16px; color:var(--color-navy);">2. Finalità e Base Giuridica</h4>
      <p style="font-size:0.9rem;">I dati personali (nome, telefono, email, esigenze di mobilità) vengono trattati al solo scopo di fornire informazioni sui pacchetti viaggio richiedendo il consenso preventivo dell'interessato.</p>
    `;
  } else if (type === 'cookie') {
    titleEl.textContent = "Informativa sui Cookie";
    bodyEl.innerHTML = `
      <p style="font-size:0.9rem; line-height:1.6;">
        Questo sito web utilizza unicamente cookie tecnici essenziali al corretto funzionamento della navigazione e per memorizzare le preferenze di visualizzazione. Non vengono utilizzati cookie di profilazione o tracciamento commerciale di terze parti.
      </p>
    `;
  } else if (type === 'terms') {
    titleEl.textContent = "Condizioni Generali di Vendita";
    bodyEl.innerHTML = `
      <p style="font-size:0.9rem; line-height:1.6;">
        Tutti i pacchetti e servizi proposti da <strong>${window.AGENCY_CONFIG.agency.name}</strong> sono soggetti a verifica di disponibilità al momento della prenotazione effettiva. I prezzi, le date e gli itinerari riportati nella presente versione dimostrativa sono puramente indicativi e da confermarsi prima della stipula del contratto di viaggio.
      </p>
    `;
  }
  openModal('legal-modal');
};

/**
 * Pannello Personalizzazione Agenzia (per il Proprietario del Sito)
 */
function initAgencyConfigurator(config) {
  const btn = document.getElementById('open-configurator-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const nameInput = document.getElementById('config-agency-name');
    const phoneInput = document.getElementById('config-agency-phone');
    const emailInput = document.getElementById('config-agency-email');

    if (nameInput) nameInput.value = config.agency.name;
    if (phoneInput) phoneInput.value = config.agency.phone;
    if (emailInput) emailInput.value = config.agency.email;

    openModal('configurator-modal');
  });

  const configForm = document.getElementById('configurator-form');
  if (configForm) {
    configForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const newName = document.getElementById('config-agency-name').value;
      const newPhone = document.getElementById('config-agency-phone').value;
      const newEmail = document.getElementById('config-agency-email').value;

      config.agency.name = newName;
      config.agency.phone = newPhone;
      config.agency.phoneDisplay = newPhone;
      config.agency.email = newEmail;

      initHeaderAndBrand(config.agency);
      closeModal('configurator-modal');
      alert(`Dati aggiornati con successo! Ora la tua agenzia si chiama "${newName}".`);
    });
  }
}