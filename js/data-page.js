import {theme} from './theme.js';

$(function(){
  let includes = $('[data-include]');
  //document.querySelector("[data-include]").innerText;
  includes.each(function() {
      let file = 'components/' + $(this).data('include') + '.html';
      $(this).load(file);
  });
});

theme.coolUpdate();

window.addEventListener('storage', function() {
  theme.coolUpdate();
})


let persons = [];
let cutPersons = [];
let nextPage;
let prevPage;

function Personage(person) {
  return `<div class="personage-item_container" style="flex: 1;transform: translateY(70%)">${person.name}
        <p>Рожден ${person.birth_year}</p>
        </div>`
}

function drawPers() {
  // 3 блока с персонажами
  cutPersons = persons.slice(0, 3);

  let Html = cutPersons.map( (person) => Personage(person));

  document.querySelector('.personages_container').innerHTML = Html.join('')

  $('.personage-item_container').on('click',function () {
    if (this.style.transform === "translate(0%, 10%) matrix(1, 0, 0, 1, 0, 0)") {
       TweenMax.to(this,0.6,{y:'70%',ease:Power4.easeOut})
    } else {
       TweenMax.to(this,0.6,{y:'10%',ease:Back.easeOut})
    }
 })
}

let load = async function(url) {
  let {next, previous, results}  = await fetch(url).then(res => res.json());

  nextPage = next;
  prevPage = previous;
  persons = results.map((elem, index) => {
    elem.index = index;
    return elem
  });

  drawPers();
}

window.onload = async function () {
  let result = await fetch('https://swapi.dev/api/people').then(res => res.json());

  persons = result.results.map((elem, index) => {
    elem.index = index;
    return elem
  })

  nextPage = result.next;
  prevPage = result.previous;
  drawPers();
}


document.getElementById("next").addEventListener('click', function () {
  let lastInCup = cutPersons[length-1].index;

  if (lastInCup !== persons.length - 1) {
    drawPers(lastInCup+1, lastInCup+4)
  } else {
    if (nextPage !== null) {
      load(nextPage);
    }
  }
})

document.getElementById("prev").addEventListener('click', function () {
  let firstInCup = cutPersons[0].index;

  if (firstInCup != 0) {
    drawPers(firstInCup-3, lastInCup)
  } else {
    if (prevPage !== null) {
      load(prevPage);
    }
  }
})