// Render dei Viaggi
function renderTrips() {
    const container = document.getElementById('trips-container');
    agencyConfig.packages.forEach(pkg => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <img src="${pkg.image}" alt="${pkg.title}">
            <div class="card-content">
                <small style="color:var(--color-yellow)">${pkg.date}</small>
                <h3>${pkg.title}</h3>
                <p style="font-size:0.85rem; color:#94A3B8; margin:10px 0;">${pkg.desc}</p>
                <div class="card-price">€${pkg.price}</div>
                <a href="https://wa.me/393762884036?text=Salve, vorrei info su: ${pkg.title}" class="btn btn-whatsapp-hero" style="width:100%; text-align:center; margin-top:15px;">Prenota WhatsApp</a>
            </div>
        `;
        container.appendChild(div);
    });
}

// Render delle Recensioni
function renderReviews() {
    const container = document.getElementById('reviews-container');
    agencyConfig.reviews.forEach(rev => {
        const div = document.createElement('div');
        div.className = 'card';
        div.style.padding = '20px';
        div.innerHTML = `
            <p style="font-style:italic;">"${rev.text}"</p>
            <h4 style="margin-top:15px; color:var(--color-yellow);">- ${rev.name}</h4>
        `;
        container.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderTrips();
    renderReviews();
});
