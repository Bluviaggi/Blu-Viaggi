// Gestione Menu Mobile
const hamburgerBtn = document.getElementById('hamburger-btn');
const closeBtn = document.getElementById('drawer-close-btn');
const drawer = document.getElementById('mobile-drawer');

hamburgerBtn.addEventListener('click', () => drawer.classList.add('open'));
closeBtn.addEventListener('click', () => drawer.classList.remove('open'));

// Rendering Viaggi
const tripsContainer = document.getElementById('trips-container');

function renderTrips() {
    agencyConfig.packages.forEach(pkg => {
        const card = document.createElement('div');
        card.className = 'trip-card';
        card.innerHTML = `
            <img src="${pkg.image}" alt="${pkg.title}">
            <div class="trip-content">
                <small style="color:var(--color-yellow)">${pkg.duration}</small>
                <h3>${pkg.title}</h3>
                <p style="font-size:0.8rem; color:#94A3B8; margin:10px 0;">${pkg.description}</p>
                <div class="trip-price">da € ${pkg.price}</div>
                <a href="https://wa.me/393762884036?text=Salve, vorrei informazioni sul pacchetto: ${pkg.title}" target="_blank" class="btn btn-whatsapp-hero" style="width:100%; text-align:center">Prenota su WhatsApp</a>
            </div>
        `;
        tripsContainer.appendChild(card);
    });
}

// Form Contatti Redirect
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('form-name').value;
    const phone = document.getElementById('form-phone').value;
    const message = `Salve BLU VIAGGI, sono ${name} (Tel: ${phone}). Vorrei essere ricontattato per informazioni sui vostri viaggi.`;
    window.open(`https://wa.me/393762884036?text=${encodeURIComponent(message)}`, '_blank');
});

document.addEventListener('DOMContentLoaded', renderTrips);
