// Menu Toggle
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const menuOverlay = document.getElementById('menu-overlay');

menuOpen.onclick = () => menuOverlay.classList.add('active');
menuClose.onclick = () => menuOverlay.classList.remove('active');
document.querySelectorAll('.menu-links a').forEach(a => {
    a.onclick = () => menuOverlay.classList.remove('active');
});

// Render Viaggi
const tripsGrid = document.getElementById('trips-container');
agencyConfig.packages.forEach(pkg => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${pkg.image}" alt="${pkg.title}">
        <div class="card-body">
            <small style="color:var(--primary)">${pkg.date}</small>
            <h3>${pkg.title}</h3>
            <p style="font-size:0.85rem; margin:10px 0; color:#94a3b8;">${pkg.desc}</p>
            <div class="card-price">€${pkg.price}</div>
            <a href="https://wa.me/393762884036?text=Info su: ${pkg.title}" class="btn-wa-card"><i class="fab fa-whatsapp"></i> Prenota ora</a>
        </div>
    `;
    tripsGrid.appendChild(card);
});

// Render Recensioni
const reviewsGrid = document.getElementById('reviews-container');
agencyConfig.reviews.forEach(rev => {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
        <img src="${rev.photo}" class="review-img">
        <p>"${rev.text}"</p>
        <div class="review-author">${rev.name}</div>
    `;
    reviewsGrid.appendChild(card);
});

// Scroll Navbar
window.onscroll = () => {
    const nav = document.querySelector('.navbar');
    if(window.scrollY > 100) nav.style.background = "rgba(1, 10, 22, 0.95)";
    else nav.style.background = "transparent";
};
