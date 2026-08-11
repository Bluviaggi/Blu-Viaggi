/**
 * BLU VIAGGI - IL MONDO, LA TUA DESTINAZIONE
 * Script Interattivo: 10 Pacchetti Pensione Completa, Prenotazione WhatsApp Diretta,
 * Menu a 3 Lineette con Scorciatoie Pacchetti, Recensioni & Flotta GT.
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
  renderDrawerPackagesList(config.trips);
  renderAccessibilitySection(config.accessibilitySection);
  renderReviews(config.reviews);
  renderSliderGallery(config.gallery);
  initFormAndDropdowns(config.trips);
  initMobileDrawer();
  initModals();
});

/**
 * Inizializza Dati Agenzia
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
 * Renderizzatore Lista dei 10 Pacchetti nel Menu a 3 Lineette (Hamburger Drawer)
 */
function renderDrawerPackagesList(trips) {
  const container = document.getElementById('drawer-packages-list');
  if (!container || !trips) return;

  container.innerHTML = trips.map(t => `
    <li class="drawer-pkg-item">
      <a href="#viaggi" onclick="scrollToPackage('${t.id}')">
        <span>${t.title}</span>
        <span class="drawer-pkg-price">${t.priceLabel}</span>
      </a>
    </li>
  `).join('');
}

window.scrollToPackage = function(tripId) {
  // Chiudi drawer
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('drawer-overlay');
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('active');

  // Filtra se necessario o individua l'elemento
  renderTrips(window.AGENCY_CONFIG.trips, 'all');
  
  setTimeout(() => {
    const el = document.getElementById(`trip-card-${tripId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.style.borderColor = 'var(--color-yellow)';
      el.style.boxShadow = '0 0 20px rgba(250, 204, 21, 0.6)';
      setTimeout(() => {
        el.style.borderColor = '';
        el.style.boxShadow = '';
      }, 3000);
    } else {
      const section = document.getElementById('viaggi');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
};

/**
 * Render Flotta Bus GT
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
 * Helper per Generare Link WhatsApp con Testo Precompilato
 */
function getWhatsAppLink(tripTitle, dates, priceLabel) {
  const phone = window.AGENCY_CONFIG.agency.whatsappNumber || '393509079479';
  const message = `Salve BLU VIAGGI, vorrei maggiori informazioni e verificare disponibilità per il pacchetto:\n\n*${tripTitle}*\n📅 *Date:* ${dates}\n💶 *Prezzo:* ${priceLabel} (Pensione Completa Alles Inklusive)\n\nPotete fornirmi i dettagli e i punti di carico del bus GT?`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Render Griglia dei 10 Pacchetti Viaggio
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
        Nessun pacchetto trovato in questa categoria.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(trip => {
    const waLink = getWhatsAppLink(trip.title, trip.dates, trip.priceLabel);

    return `
      <article class="trip-card" id="trip-card-${trip.id}">
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
          
          <span class="trip-pensione-badge">🍽️ Pensione Completa + Bevande</span>

          <ul class="trip-meta-list">
            <li class="trip-meta-item">🚌 <strong>Trasporto:</strong> ${trip.transport}</li>
            <li class="trip-meta-item">🏨 <strong>Sistemazione:</strong> ${trip.hotel}</li>
          </ul>

          <div class="trip-card-footer">
            <div class="trip-card-price-row">
              <span class="trip-price-label">Prezzo Finito</span>
              <span class="trip-price-val">${trip.priceLabel}</span>
            </div>

            <div class="trip-btn-row">
              <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-wa-card" title="Prenota direttamente su WhatsApp">
                💬 Prenota WhatsApp
              </a>
              <button class="btn-detail-card" onclick="openTripModal('${trip.id}')">
                Dettagli Tour
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

window.filterTrips = function(category, btnElement) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  renderTrips(window.AGENCY_CONFIG.trips, category);
};

/**
 * Modale Dettagli Programma con Pulsante Diretto WhatsApp
 */
window.openTripModal = function(tripId) {
  const trip = window.AGENCY_CONFIG.trips.find(t => t.id === tripId);
  if (!trip) return;

  const modalBody = document.getElementById('trip-modal-body');
  const modalTitle = document.getElementById('trip-modal-title');
  const waLink = getWhatsAppLink(trip.title, trip.dates, trip.priceLabel);

  modalTitle.textContent = trip.title;

  modalBody.innerHTML = `
    <div style="margin-bottom: 20px;">
      <img src="${trip.image}" alt="${trip.title}" style="width:100%; height:260px; object-fit:cover; border-radius:var(--radius-md); border:1px solid var(--color-border);" referrerPolicy="no-referrer">
      <div style="display:flex; gap:10px; margin-top:12px; flex-wrap:wrap; align-items:center;">
        <span style="background:var(--bg-surface); color:var(--color-yellow); font-weight:800; font-size:0.85rem; padding:4px 12px; border-radius:var(--radius-pill);">
          📅 ${trip.dates}
        </span>
        <span style="background:var(--bg-surface); color:var(--color-cyan-glow); font-weight:800; font-size:0.85rem; padding:4px 12px; border-radius:var(--radius-pill);">
          ⏱️ ${trip.duration}
        </span>
        <span style="background:rgba(37, 211, 102, 0.2); color:var(--color-whatsapp); font-weight:800; font-size:0.85rem; padding:4px 12px; border-radius:var(--radius-pill); border:1px solid var(--color-whatsapp);">
          🍽️ Pensione Completa Inclusa
        </span>
      </div>
    </div>

    <div style="background:var(--bg-surface); padding:16px; border-radius:var(--radius-md); border-left:4px solid var(--color-yellow); margin-bottom:24px;">
      <h4 style="color:var(--color-yellow); margin-bottom:4px;">♿ Accessibilità & Servizi Inclusi</h4>
      <p style="font-size:0.9rem; color:var(--color-text-main);">${trip.accessibilityInfo}</p>
    </div>

    <h3 style="color:#FFFFFF; margin-bottom:16px; font-size:1.25rem;">Programma di Viaggio</h3>
    <div style="display:flex; flex-direction:column; gap:12px; margin-bottom:24px;">
      ${trip.program.map(p => `
        <div style="background:var(--bg-surface); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:14px;">
          <strong style="color:var(--color-yellow); font-size:0.8rem; text-transform:uppercase;">${p.day}</strong>
          <h4 style="color:#FFFFFF; margin:2px 0 6px 0; font-size:1rem;">${p.title}</h4>
          <p style="font-size:0.88rem; color:var(--color-text-muted); line-height:1.5;">${p.description}</p>
        </div>
      `).join('')}
    </div>

    <div style="background:rgba(37, 211, 102, 0.08); border:1px solid var(--color-whatsapp); padding:16px; border-radius:var(--radius-md); margin-bottom:24px;">
      <h4 style="color:var(--color-whatsapp); margin-bottom:8px;">✅ Quota Tutto Compreso</h4>
      <ul style="font-size:0.85rem; color:#E2E8F0; padding-left:18px; display:flex; flex-direction:column; gap:6px;">
        ${trip.included.map(i => `<li>${i}</li>`).join('')}
      </ul>
    </div>

    <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-surface); border:2px solid var(--color-whatsapp); padding:20px; border-radius:var(--radius-md); flex-wrap:wrap; gap:16px;">
      <div>
        <span style="font-size:0.75rem; color:var(--color-text-muted); text-transform:uppercase; display:block;">Prezzo Finito per Persona</span>
        <strong style="font-size:1.8rem; color:var(--color-yellow);">${trip.priceLabel}</strong>
        <span style="font-size:0.78rem; display:block; color:var(--color-whatsapp); font-weight:700;">Pensione Completa + Bevande Inchiuse</span>
      </div>
      <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp-hero">
        💬 Prenota Ora su WhatsApp (+39 350 907 9479)
      </a>
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
 * Sezione Recensioni Reali (8 Recensioni)
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
 * Slider Fotografico
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
 * Form Contatti con Reindirizzamento WhatsApp Automatico
 */
function initFormAndDropdowns(trips) {
  const select = document.getElementById('trip-select');
  if (!select) return;

  select.innerHTML = `
    <option value="">-- Seleziona il viaggio desiderato --</option>
    ${trips.map(t => `<option value="${t.title}">${t.title} - ${t.priceLabel} (Pensione Completa)</option>`).join('')}
    <option value="Informazioni Generali">Richiesta Informazioni Generali</option>
  `;

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('form-name').value;
      const phone = document.getElementById('form-phone').value;
      const trip = document.getElementById('trip-select').value || 'Generale';
      const participants = document.getElementById('form-participants').value;
      const needs = document.getElementById('form-needs').value;
      const message = document.getElementById('form-message').value;

      const waPhone = window.AGENCY_CONFIG.agency.whatsappNumber || '393509079479';
      
      let text = `Salve BLU VIAGGI, vorrei richiedere la prenotazione o informazioni per:\n\n`;
      text += `🧳 *Pacchetto:* ${trip}\n`;
      text += `👤 *Nome e Cognome:* ${name}\n`;
      text += `📞 *Telefono:* ${phone}\n`;
      text += `👥 *Partecipanti:* ${participants}\n`;
      if (needs) text += `♿ *Esigenze Mobilità:* ${needs}\n`;
      if (message) text += `💬 *Note:* ${message}\n`;

      const url = `https://wa.me/${waPhone}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
      form.reset();
    });
  }
}

/**
 * Navigation Drawer (Hamburger Menu)
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
        Informativa resa ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR). I dati forniti a <strong>${window.AGENCY_CONFIG.agency.name}</strong> saranno trattati unicamente per rispondere alle tue richieste di viaggio in autobus Gran Turismo e traghetto.
      </p>
      <h4 style="margin-top:14px; color:var(--color-yellow);">Titolare del Trattamento</h4>
      <p style="font-size:0.88rem; color:var(--color-text-muted);">${window.AGENCY_CONFIG.agency.name} - ${window.AGENCY_CONFIG.agency.address} - Email: ${window.AGENCY_CONFIG.agency.email}</p>
    `;
  } else if (type === 'cookie') {
    titleEl.textContent = "Informativa sui Cookie";
    bodyEl.innerHTML = `
      <p style="font-size:0.88rem; line-height:1.6; color:var(--color-text-muted);">
        Questo sito web utilizza solo cookie tecnici essenziali al corretto funzionamento della navigazione.
      </p>
    `;
  }
  openModal('legal-modal');
};
