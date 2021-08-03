export let theme = {
  selectedTheme: 'indigo-theme',
  secondtheme: '#4ebdd4',

  coolUpdate: function() {
    let secondaryColor = localStorage.getItem('secondtheme') || this.secondtheme;
    let themeType = localStorage.getItem('selectedTheme') || this.selectedTheme;

    if (document.getElementById('edit') !==null) {
      document.getElementById('edit').style.backgroundColor = secondaryColor;
    }
  
    $('.content-wrapper')[0].classList.value = `content-wrapper ${themeType}`;
    document.getElementById('nav').classList.value = `nav-wrapper navbar-fixed ${themeType}`;
    
    $('.menu-btn')[0].childNodes.forEach( el => {
      if (el.nodeType != 3) {
        el.style.backgroundColor = secondaryColor;
      }
    });
  }
}

