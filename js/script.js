// Arquivo script.js (scripts de animação e controle)

const imgEnvelope = document.getElementById('img-envelope');
const botao1 = document.getElementById('botao-abrir1');
const botao2 = document.getElementById('botao-abrir2');
const envelopeContainer = document.getElementById('envelope-container');
const convite = document.getElementById('convite');
const flipSound = document.getElementById('flip-sound');
const musicaFundo = document.getElementById('musica-fundo');

// Clique no selo (1ª etapa)
botao1.addEventListener('click', () => {
  flipSound.play();
  imgEnvelope.src = 'img/envelope_aberto_convite_pc.png'; // troca imagem
  imgEnvelope.classList.add('aberto');
  botao1.style.display = 'none';
  setTimeout(() => {
    botao2.style.display = 'block'; // mostra novo botão
  }, 800);
});

// Clique na aba aberta (2ª etapa)
botao2.addEventListener('click', () => {
  botao2.style.display = 'none';
  flipSound.play(); // 🔊 Toca novamente para simular retirada do convite
  envelopeContainer.style.opacity = 0;
  
  setTimeout(() => {
    envelopeContainer.style.display = 'none';
    convite.style.display = 'flex';
    musicaFundo.volume = 0.5;
    musicaFundo.play();
  }, 1000);
});

  function criarPetala() {
  const petala = document.createElement('div');
  petala.classList.add('petal');
  petala.style.left = Math.random() * window.innerWidth + 'px';
  petala.style.animationDuration = (8 + Math.random() * 5) + 's';
  document.getElementById('petalas-container').appendChild(petala);

  // Remover pétala após o ciclo
  setTimeout(() => petala.remove(), 15000);
}

// Criar pétalas a cada 500ms
setInterval(criarPetala, 500);
