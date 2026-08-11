/**
 * VIAGGI INSIEME - SCRIPT PRINCIPALE E INTERATTIVITÀ
 * Gestisce la navigazione, il filtro dei viaggi, la flotta bus GT, le modali di dettaglio,
 * lo slider fotografico moderno, il form contatti ed il pannello di configurazione agenzia.
 */

let currentSlideIndex = 0;
let slideInterval = null;

document.addEventListener('DOMContentLoaded', () => {
  const config = window.AGENCY_CONFIG;
  if (!config) {
    console.error("Configurazione agency-config.js non trovata!");
    return;
  }

  initHeaderAndBrand(config.agency);
  renderFleetSection(config.fleetDetails);
  renderTrips(config.trips);
  renderAccessibilitySection(config.accessibilitySection);
  renderSeniorSection(config.seniorSection);
  renderReviews(config.reviews);
  renderSliderGallery(config.gallery);
  initFormAndDropdowns(config.trips);
  initMobileDrawer();
  initModals();
  initAgencyConfigurator(config);
});

/**
 * Inizializza Marca e Intestazione
 */
function initHeaderAndBrand(agency) {
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
 * Render Sezione Flotta Autobus GT
 */
function renderFleetSection(fleet) {
  const container = document.getElementById('fleet-container');
  if (!container || !fleet) return;

  container.innerHTML = fleet.features.map(f => `
    <div class="fleet-card">
      <div class="fleet-icon">${f.icon}</div>
      <h3 class="fleet-title">${f.title}</h3>
      <p class="fleet-desc">${f.desc}</p>
    </div>
  `).join('');
}

/**
 * Render Griglia Viaggi
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
        ${trip.isAccessibleSpecial ? '<span class="trip-accessible-tag">♿ 100% Accessibile</span>' : ''}
      </div>
      
      <div class="trip-card-content">
        <div class="trip-card-dates">
          📅 ${trip.dates}
        </div>
        
        <h3 class="trip-card-title">${trip.title}</h3>
        
        <ul class="trip-meta-list">
          <li class="trip-meta-item">🚍 <strong>Trasporto:</strong> ${trip.transport}</li>
          <li class="trip-meta-item">🏨 <strong>Sistemazione:</strong> ${trip.hotel}</li>
          <li class="trip-meta-item">⚡ <strong>Comfort:</strong> ${trip.difficulty}</li>
        </ul>

        <div class="trip-highlights-box">
          <strong>In Evidenza:</strong>
          <ul>
            ${trip.highlights.slice(0, 3).map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>

        <div class="trip-card-footer">
          <div class="trip-price-box">
            <span class="trip-price-label">Prezzo Finito</span>
            <span class="trip-price-val">${trip.priceLabel}</span>
          </div>
          <button class="btn btn-primary btn-sm" onclick="openTripModal('${trip.id}')">
            Vedi Programma
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

window.filterTrips = function(category, btnElement) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  renderTrips(window.AGENCY_CONFIG.trips, category);
};

/**
 * Modale Programma Viaggio
 */
window.openTripModal = function(tripId) {
  const trip = window.AGENCY_CONFIG.trips.find(t => t.id === tripId);
  if (!trip) return;

  const modalBody = document.getElementById('trip-modal-body');
  const modalTitle = document.getElementById('trip-modal-title');
  
  modalTitle.textContent = trip.title;

  modalBody.innerHTML = `
    <div style="margin-bottom: 20px;">
      <img src="${trip.image}" alt="${trip.title}" style="width:100%; height:260px; object-fit:cover; border-radius:var(--radius-md); border:1px solid var(--color-border);" referrerPolicy="no-referrer">
      <div style="display:flex; gap:10px; margin-top:12px; flex-wrap:wrap; align-items:center;">
        <span style="background:var(--bg-surface); color:var(--color-yellow); font-weight:700; font-size:0.85rem; padding:4px 12px; border-radius:var(--radius-pill); border:1px solid var(--color-border);">
          📅 ${trip.dates}
        </span>
        <span style="background:var(--bg-surface); color:var(--color-cyan-glow); font-weight:700; font-size:0.85rem; padding:4px 12px; border-radius:var(--radius-pill); border:1px solid var(--color-border);">
          ⏱️ ${trip.duration}
        </span>
        <span style="background:var(--color-marine); color:#FFFFFF; font-weight:700; font-size:0.85rem; padding:4px 12px; border-radius:var(--radius-pill);">
          ${trip.transportIcon} ${trip.transport}
        </span>
      </div>
    </div>

    <div style="background:var(--bg-surface); padding:16px; border-radius:var(--radius-md); border-left:4px solid var(--color-yellow); margin-bottom:24px;">
      <h4 style="color:var(--color-yellow); margin-bottom:4px;">♿ Comfort, Accessibilità & Ritmi di Viaggio</h4>
      <p style="font-size:0.9rem; color:var(--color-text-main);">${trip.accessibilityInfo}</p>
    </div>

    <h3 style="color:#FFFFFF; margin-bottom:16px; font-size:1.3rem;">Itinerario Dettagliato Giorno per Giorno</h3>
    <div style="display:flex; flex-direction:column; gap:14px; margin-bottom:28px;">
      ${trip.program.map(p => `
        <div style="background:var(--bg-surface); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:16px;">
          <strong style="color:var(--color-yellow); font-size:0.82rem; text-transform:uppercase;">${p.day}</strong>
          <h4 style="color:#FFFFFF; margin:4px 0 6px 0; font-size:1.05rem;">${p.title}</h4>
          <p style="font-size:0.88rem; color:var(--color-text-muted); line-height:1.5;">${p.description}</p>
        </div>
      `).join('')}
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:28px;">
      <div style="background:rgba(16, 185, 129, 0.1); border:1px solid rgba(16, 185, 129, 0.3); padding:16px; border-radius:var(--radius-md);">
        <h4 style="color:#34D399; margin-bottom:8px;">✅ La Quota Comprende</h4>
        <ul style="font-size:0.85rem; color:#E2E8F0; padding-left:18px; display:flex; flex-direction:column; gap:6px;">
          ${trip.included.map(i => `<li>${i}</li>`).join('')}
        </ul>
      </div>

      <div style="background:rgba(239, 68, 68, 0.1); border:1px solid rgba(239, 68, 68, 0.3); padding:16px; border-radius:var(--radius-md);">
        <h4 style="color:#F87171; margin-bottom:8px;">❌ La Quota NON Comprende</h4>
        <ul style="font-size:0.85rem; color:#E2E8F0; padding-left:18px; display:flex; flex-direction:column; gap:6px;">
          ${trip.excluded.map(e => `<li>${e}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-surface); border:1px solid var(--color-yellow); padding:20px; border-radius:var(--radius-md); flex-wrap:wrap; gap:16px;">
      <div>
        <span style="font-size:0.8rem; color:var(--color-text-muted); display:block; text-transform:uppercase;">Quota per Persona</span>
        <strong style="font-size:1.8rem; color:var(--color-yellow);">${trip.priceLabel}</strong>
        <span style="font-size:0.8rem; display:block; color:var(--color-text-muted);">${trip.priceSub}</span>
      </div>
      <button class="btn btn-primary" onclick="requestTripAvailability('${trip.id}')">
        Richiedi Disponibilità Posti
      </button>
    </div>
  `;

  openModal('trip-modal');
};

/**
 * Sezione Accessibilità
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
 * Sezione Recensioni Reali
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
        <div>
          <div class="review-name">${r.name}</div>
          <div class="review-role">${r.role}</div>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * Slider Fotografico Moderno
 */
function renderSliderGallery(gallery) {
  const track = document.getElementById('slider-track');
  const dotsContainer = document.getElementById('slider-dots');
  if (!track || !gallery || !gallery.items) return;

  track.innerHTML = gallery.items.map((item, index) => `
    <div class="slide-item">
      <img src="${item.image}" alt="${item.title}" loading="lazy" referrerPolicy="no-referrer">
      <div class="slide-caption">
        <div class="slide-caption-title">${item.title}</div>
        <div class="slide-caption-desc">${item.desc}</div>
      </div>
    </div>
  `).join('');

  if (dotsContainer) {
    dotsContainer.innerHTML = gallery.items.map((_, index) => `
      <span class="dot ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})"></span>
    `).join('');
  }

  startAutoSlide();
}

window.goToSlide = function(index) {
  const track = document.getElementById('slider-track');
  const dots = document.querySelectorAll('.dot');
  const total = window.AGENCY_CONFIG.gallery.items.length;

  if (!track) return;

  if (index >= total) currentSlideIndex = 0;
  else if (index < 0) currentSlideIndex = total - 1;
  else currentSlideIndex = index;

  track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentSlideIndex);
  });
};

window.nextSlide = function() {
  goToSlide(currentSlideIndex + 1);
};

window.prevSlide = function() {
  goToSlide(currentSlideIndex - 1);
};

function startAutoSlide() {
  if (slideInterval) clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    nextSlide();
  }, 5000);
}

/**
 * Form e Contatti
 */
function initFormAndDropdowns(trips) {
  const select = document.getElementById('trip-select');
  if (!select) return;

  select.innerHTML = `
    <option value="">-- Seleziona il viaggio o chiedi informazioni --</option>
    ${trips.map(t => `<option value="${t.title}">${t.title} (${t.duration}) - ${t.priceLabel}</option>`).join('')}
    <option value="Informazioni Generali">Informazioni Generali / Altro Itinerario</option>
  `;

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const privacyCheck = document.getElementById('privacy-check');
      if (!privacyCheck || !privacyCheck.checked) {
        alert("Per favore accetta l'informativa sulla privacy prima di inviare.");
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

function showSuccessModal(name, email, phone, trip) {
  const body = document.getElementById('success-modal-body');
  body.innerHTML = `
    <div style="text-align:center; padding:10px 0;">
      <div style="font-size:3rem; color:var(--color-yellow); margin-bottom:12px;">✓</div>
      <h3 style="color:#FFFFFF; font-size:1.6rem; margin-bottom:12px;">Richiesta Inviata con Successo!</h3>
      <p style="color:var(--color-text-main); font-size:1rem; margin-bottom:20px;">
        Grazie <strong>${name}</strong>, abbiamo ricevuto la tua richiesta per il viaggio <strong>"${trip}"</strong>.
      </p>
      <div style="background:var(--bg-surface); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:16px; text-align:left; font-size:0.88rem; margin-bottom:20px;">
        <strong style="color:var(--color-yellow);">Riepilogo recapiti:</strong>
        <ul style="margin-top:6px; list-style:none; color:var(--color-text-muted);">
          <li>📧 Email: ${email}</li>
          <li>📞 Telefono: ${phone}</li>
        </ul>
        <p style="margin-top:10px; color:var(--color-cyan-glow);">
          Il nostro ufficio ti ricontatterà via telefono o email entro 24 ore.
        </p>
      </div>
      <button class="btn btn-primary" onclick="closeModal('success-modal')">
        Torna al Sito
      </button>
    </div>
  `;
  openModal('success-modal');
}

/**
 * Navigation Drawer per Mobile
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
 * Modali
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

window.openLegalModal = function(type) {
  const titleEl = document.getElementById('legal-modal-title');
  const bodyEl = document.getElementById('legal-modal-body');

  if (type === 'privacy') {
    titleEl.textContent = "Informativa sulla Privacy";
    bodyEl.innerHTML = `
      <p style="font-size:0.88rem; line-height:1.6; color:var(--color-text-muted);">
        Informativa resa ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR). I dati forniti attraverso il modulo di contatto di <strong>${window.AGENCY_CONFIG.agency.name}</strong> saranno trattati esclusivamente per rispondere alle richieste di informazioni ed organizzazione viaggi di gruppo.
      </p>
      <h4 style="margin-top:14px; color:var(--color-yellow);">1. Titolare del Trattamento</h4>
      <p style="font-size:0.88rem; color:var(--color-text-muted);">${window.AGENCY_CONFIG.agency.name} - ${window.AGENCY_CONFIG.agency.address} - Email: ${window.AGENCY_CONFIG.agency.email}</p>
    `;
  } else if (type === 'cookie') {
    titleEl.textContent = "Informativa sui Cookie";
    bodyEl.innerHTML = `
      <p style="font-size:0.88rem; line-height:1.6; color:var(--color-text-muted);">
        Questo sito web utilizza unicamente cookie tecnici essenziali al corretto funzionamento della navigazione e per memorizzare le preferenze di visualizzazione. Non vengono utilizzati cookie di profilazione o tracciamento commerciale di terze parti.
      </p>
    `;
  } else if (type === 'terms') {
    titleEl.textContent = "Condizioni Generali di Vendita";
    bodyEl.innerHTML = `
      <p style="font-size:0.88rem; line-height:1.6; color:var(--color-text-muted);">
        Tutti i pacchetti e servizi proposti da <strong>${window.AGENCY_CONFIG.agency.name}</strong> sono soggetti a verifica di disponibilità al momento della prenotazione effettiva. I viaggi sono effettuati esclusivamente in autobus Gran Turismo e traghetto (senza voli aerei).
      </p>
    `;
  }
  openModal('legal-modal');
};

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
      alert(`Dati aggiornati con successo!`);
    });
  }
}
