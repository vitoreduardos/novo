// script.js

// Função para mostrar e esconder o menu de navegação
function toggleMenu() {
    const menu = document.querySelector('nav ul');
    const toggleButton = document.querySelector('nav button');
  
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
      toggleButton.textContent = 'Menu';
    } else {
      menu.classList.add('show');
      toggleButton.textContent = 'Fechar';
    }
  }
  
  // Adicionar evento de clique ao botão de toggle do menu
  document.querySelector('nav button').addEventListener('click', toggleMenu);
  
  // Função para mostrar e esconder as informações de cada ponto turístico
  function toggleInfo(event) {
    const info = event.target.nextElementSibling;
    const toggleButton = event.target;
  
    if (info.classList.contains('show')) {
      info.classList.remove('show');
      toggleButton.textContent = 'Mais informações';
    } else {
      info.classList.add('show');
      toggleButton.textContent = 'Menos informações';
    }
  }
  
  // Adicionar evento de clique aos botões de toggle de informações
  document.querySelectorAll('.pontos-turisticos li button').forEach(button => {
    button.addEventListener('click', toggleInfo);
  });
  
  // Função para mostrar e esconder as informações de cada restaurante
  function toggleRestauranteInfo(event) {
    const info = event.target.nextElementSibling;
    const toggleButton = event.target;
  
    if (info.classList.contains('show')) {
      info.classList.remove('show');
      toggleButton.textContent = 'Mais informações';
    } else {
      info.classList.add('show');
      toggleButton.textContent = 'Menos informações';
    }
  }
  
  // Adicionar evento de clique aos botões de toggle de informações de restaurantes
  document.querySelectorAll('.restaurantes li button').forEach(button => {
    button.addEventListener('click', toggleRestauranteInfo);
  });
  
  // Função para mostrar e esconder as informações de cada hotel
  function toggleHotelInfo(event) {
    const info = event.target.nextElementSibling;
    const toggleButton = event.target;
  
    if (info.classList.contains('show')) {
      info.classList.remove('show');
      toggleButton.textContent = 'Mais informações';
    } else {
      info.classList.add('show');
      toggleButton.textContent = 'Menos informações';
    }
  }
  
  // Adicionar evento de clique aos botões de toggle de informações de hotéis
  document.querySelectorAll('.hoteis li button').forEach(button => {
    button.addEventListener('click', toggleHotelInfo);
  });
  
  // Função para buscar pontos turísticos, restaurantes e hotéis
  function buscar(event) {
    event.preventDefault();
    const destino = document.querySelector('#destino').value;
    const data = document.querySelector('#data').value;
  
    // Fazer requisição AJAX para buscar pontos turísticos, restaurantes e hotéis
    fetch(`https://api.turistche.com/buscar?destino=${destino}&data=${data}`)
      .then(response => response.json())
      .then(data => {
        // Mostrar resultados da busca
        const resultados = document.querySelector('#resultados');
        resultados.innerHTML = '';
        data.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item.nome;
          resultados.appendChild(li);
        });
      })
      .catch(error => console.error(error));
  }
  
  // Adicionar evento de clique ao botão de buscar
  document.querySelector('#buscar').addEventListener('click', buscar);