const trips = [

[
"5–7 SET",
"Costiera Amalfitana",
"Campania",
"3 giorni · Bus GT",
"€ 389",
"https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85"
],

[
"12–15 SET",
"Puglia & Alberobello",
"Puglia",
"4 giorni · Bus GT",
"€ 469",
"https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=1200&q=85"
],

[
"19–21 SET",
"Cinque Terre",
"Liguria",
"3 giorni · Bus GT",
"€ 399",
"https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1200&q=85"
],

[
"26–28 SET",
"Lago di Garda",
"Lombardia · Veneto",
"3 giorni · Bus GT",
"€ 349",
"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85"
],

[
"3–6 OTT",
"Sicilia Occidentale",
"Sicilia",
"4 giorni · Bus + traghetto",
"€ 529",
"https://images.unsplash.com/photo-1534445867742-43195f401b6c?auto=format&fit=crop&w=1200&q=85"
],

[
"10–12 OTT",
"Roma & Castelli",
"Lazio",
"3 giorni · Bus GT",
"€ 329",
"https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=85"
],

[
"17–20 OTT",
"Toscana d'Autunno",
"Toscana",
"4 giorni · Bus GT",
"€ 449",
"https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=1200&q=85"
],

[
"24–26 OTT",
"Napoli & Costiera",
"Campania",
"3 giorni · Bus GT",
"€ 379",
"https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1200&q=85"
],

[
"30 OTT–1 NOV",
"Venezia & Dolomiti",
"Veneto",
"3 giorni · Bus GT",
"€ 359",
"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=85"
]

];


const grid = document.querySelector("#tripGrid");

const number =
window.BLU_VIAGGI?.whatsapp ||
"393762884036";


grid.innerHTML = trips.map(t => {

const msg =
`Ciao Blu Viaggi! Vorrei prenotare il viaggio "${t[1]}" (${t[0]}), ${t[3]}. Vorrei ricevere informazioni su disponibilità e pagamento.`;

return `

<article class="card">

<div class="photo">

<img
src="${t[5]}"
alt="${t[1]}"
loading="lazy"
onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85'"
>

<span class="date">
${t[0]}
</span>

</div>

<div class="body">

<h3>
${t[1]}
</h3>

<div class="meta">
📍 ${t[2]}<br>
🚌 ${t[3]}
</div>

<div class="price">
${t[4]} <small>a persona</small>
</div>

<a
class="btn trip-btn"
target="_blank"
href="https://wa.me/${number}?text=${encodeURIComponent(msg)}">
💬 Prenota su WhatsApp
</a>

</div>

</article>

`;

}).join("");
