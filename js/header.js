let navHeader = $('#navbar-header')[0];

//Здравствуйте, {имя}!
class NavBarHeader {
  constructor(str) {
    this.startStr = str;
  }
  set fio(name) {
    this.name = name;
    this.updateName();
  }
  get fio() {
    return this.name;
  }
  set greening(str) {
    this.greeningMsg = str;
  }
  get greening() {
    return this.greeningMsg;
  }
  get HeaderHtml() {
    return `<p>${this.startStr}, <span id="userName"> ${this.name} </span>, 
    ${this.greeningMsg===undefined||this.greeningMsg===''?'как настрой?':this.greeningMsg}`;
  }
  updateName() {
     let nameBlocks = $('#userName');

     for (let elem of nameBlocks) {
       elem.innerText = this.fio;
     }
  }
}

window.onload = function() {
  let name = localStorage.getItem('UserName');

  if (name===null) {
    let newname = prompt("What is your name?", 'Dude');
    localStorage.setItem('UserName', newname);
  }

  let navheader = new NavBarHeader("Hello");
  navheader.fio = localStorage.getItem('UserName');

  navHeader.innerHTML = navheader.HeaderHtml;


  // Смена name
  $('#userName').on('click', function() {
    let newName = prompt('Смена имени на', 'newNane');
    this.innerText = newName;
    localStorage.setItem('UserName', newName);
  })
}


