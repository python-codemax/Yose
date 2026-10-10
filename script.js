/* ✏️ PERSONALIZA AQUÍ */
const NOMBRE = "Yose";
const TU_NOMBRE = "Gera";
const PREGUNTA = "¿quieres ser mi novia?";
const INTRO = "Desde que te conozco, mis días son mejores. Tenía que decírtelo con el corazón en la mano.";
const MENSAJE_SI = "Hiciste al hombre más feliz de hoy. Prometo cuidarte, hacerte reír y elegirte cada día. — " + TU_NOMBRE;
const MENSAJE_NO = "Gracias por ser sincera conmigo y por leer esto hasta aquí. Tu amistad vale muchísimo para mí. — " + TU_NOMBRE;

document.getElementById('titulo').textContent = NOMBRE + ", " + PREGUNTA;
document.getElementById('intro').textContent = INTRO;
document.getElementById('msg-si').textContent = MENSAJE_SI;
document.getElementById('msg-no').textContent = MENSAJE_NO;

function show(id) {
  document.querySelectorAll('.view').forEach(function (v) { v.hidden = true; });
  document.getElementById(id).hidden = false;
}

function lluvia() {
  const emojis = ['💖', '💗', '💕', '🌹', '✨', '💘'];
  for (let i = 0; i < 45; i++) {
    const s = document.createElement('span');
    s.className = 'fall';
    s.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    s.style.left = Math.random() * 100 + 'vw';
    s.style.fontSize = (16 + Math.random() * 26) + 'px';
    s.style.animationDuration = (3 + Math.random() * 4) + 's';
    s.style.animationDelay = (Math.random() * 3) + 's';
    document.body.appendChild(s);
    setTimeout(function () { s.remove(); }, 11000);
  }
}

let intervaloLluvia = null;

document.getElementById('si').addEventListener('click', function () {
  show('resp-si');
  lluvia();
  if (!intervaloLluvia) intervaloLluvia = setInterval(lluvia, 6000);
});

document.getElementById('no').addEventListener('click', function () {
  show('resp-no');
});

show('pregunta');
