new Vue({
  el: '#app',

  data: {
    name: 'James Woods', // James Woods. nomes default, serão alterados com input do usuário.
    job: 'Lead Operation Engineer' // Lead Operation Engineer
  },

  methods: {
    submit: function() {
      if (name === '' || name === null) {
        alert('Por favor, preencha com seu nome!');
      }
      if (job === '' || job === null ) {
        alert('Por favor, preencha com seu nome!');
      }
    },

    changeTab: function(arg, tabName){
      // Variáveis
      var i, tabcontent, tablinks;
      
      // Ocultando elementos com a classe 'tabcontent'.
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      
      // Removendo a classe 'active' de todos os elementos com a classe 'tablinks'.
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
      }
      
      // Exibe a tab atual, e adiciona a classe 'active'.
      document.getElementById(tabName).style.display = "block";
      arg.currentTarget.className += "active";
    }
  }
});

// Definindo uma tab padrão
document.getElementById("default").click();

var modal = document.getElementById('simpleModal');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

document.addEventListener('load', openModal);
//closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal(){
  modal.style.display = 'block';
}

function closeModal(){
  modal.style.display = 'none';
}

function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}