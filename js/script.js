
const ctx = document.getElementById('grafico').getContext('2d');
let valores = [];
for (let i = 0; i < 20; i++) {
  valores.push(Math.floor(Math.random() * 100));
}
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: Array(20).fill(''),
    datasets: [{
      label: 'Produção',
      data: valores,
      borderColor: '#0f0',
      tension: 0.4,
    }]
  },
  options: {
    animation: {
      duration: 1000
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#0f0' },
        grid: { color: '#060' }
      },
      x: {
        ticks: { color: '#0f0' },
        grid: { color: '#060' }
      }
    },
    plugins: {
      legend: {
        labels: { color: '#0f0' }
      }
    }
  }
});

function atualizarGrafico() {
  chart.data.datasets[0].data.shift();
  chart.data.datasets[0].data.push(Math.floor(Math.random() * 100));
  chart.update();
}
setInterval(atualizarGrafico, 3000);

// Atualizar info da máquina
function atualizarInfoMaquina() {
  const temperatura = (60 + Math.random() * 20).toFixed(1);
  const producao = (10 + Math.random() * 5).toFixed(1);
  const consumo = (3 + Math.random() * 2).toFixed(2);
  const status = "Online";
  document.getElementById("machineInfo").innerHTML = `
    <h2>Extrusora 3000</h2>
    <p>Status: <span class="status online">${status}</span></p>
    <p>Temperatura: <strong>${temperatura}°C</strong> / 100°C</p>
    <p>Produção: <strong>${producao} peças/min</strong></p>
    <p>Consumo: <strong>${consumo} kWh</strong></p>
    <p>Última Manutenção: <strong>15/03/2025</strong></p>
    <p class="alert">⚠️ Sem alertas no momento</p>
  `;
}
setInterval(atualizarInfoMaquina, 5000);
atualizarInfoMaquina();

// Botões
function gerarRelatorio() {
  const blob = new Blob(["Relatório de produção gerado com sucesso."], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = "relatorio.txt";
  link.click();
}

function iniciarSimulacao() {
  alert("Redirecionando para simulação...");
  // Redirecionamento simulado
}

function exportarDados() {
  alert("Exportando dados entre datas... (simulado)");
}

function gerarRelatorio() {
  const texto = `Relatório de Produção:\nTemperatura: 55°C\nProdução: 750 peças/h\nConsumo de Energia: 3.4 kWh\nStatus: Operando`;
  const blob = new Blob([texto], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'relatorio.txt';
  a.click();
  URL.revokeObjectURL(url);
}

function iniciarSimulacao() {
  window.location.href = 'simulacao.html';
}

function exportarDados() {
  const dataAtual = new Date().toLocaleString();
  const dadosExportados = `Exportação de dados desde 01/04/2025 até ${dataAtual}\n\nTemperatura média: 55°C\nConsumo médio: 3.4 kWh`;
  const blob = new Blob([dadosExportados], { type: 'application/octet-stream' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'dados_exportados.txt';
  a.click();
  URL.revokeObjectURL(url);
}

// Partículas
const canvasParticles = document.getElementById('particles');
const ctxParticles = canvasParticles.getContext('2d');
canvasParticles.width = window.innerWidth;
canvasParticles.height = window.innerHeight;

const particles = [];

for (let i = 0; i < 100; i++) {
    particles.push({
        x: Math.random() * canvasParticles.width,
        y: Math.random() * canvasParticles.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5
    });
}

function animateParticles() {
    ctxParticles.clearRect(0, 0, canvasParticles.width, canvasParticles.height);
    ctxParticles.fillStyle = '#00ffcc';
    particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvasParticles.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvasParticles.height) p.speedY *= -1;

        ctxParticles.beginPath();
        ctxParticles.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctxParticles.fill();
    });
    requestAnimationFrame(animateParticles);
}

animateParticles();

// Reajustar quando redimensionar janela
window.addEventListener('resize', () => {
  canvasParticles.width = window.innerWidth;
  canvasParticles.height = window.innerHeight;
});

const dados = document.getElementById('dados');
function simularMaquina() {
  const temperatura = (50 + Math.random() * 10).toFixed(2);
  const producao = Math.floor(Math.random() * 1000);
  const consumo = (Math.random() * 5).toFixed(2);
  const status = Math.random() > 0.1 ? 'Operando' : 'Parada';
  dados.innerHTML = `
    <p>Status: <strong>${status}</strong></p>
    <p>Temperatura: <strong>${temperatura} °C</strong></p>
    <p>Produção Atual: <strong>${producao} peças/h</strong></p>
    <p>Consumo de Energia: <strong>${consumo} kWh</strong></p>
  `;
}
setInterval(simularMaquina, 2000);