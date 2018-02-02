function changeTab(arg, tabName) {

  'use strict';
  // Variáveis
  var i, tabcontent, tab;

  // Oculta elementos com a classe 'tabcontent'.
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove a classe 'active' de todos os elementos com a classe 'tab'.
  tab = document.getElementsByClassName("tab");
  for (i = 0; i < tab.length; i++) {
    tab[i].className = tab[i].className.replace(" active", "");
  }

  // Exibe a tab atual, e adiciona a classe 'active'.
  document.getElementById(tabName).style.display = "block";
  arg.currentTarget.className += " active";
}

// Definindo uma tab padrão
document.getElementById("default").click();