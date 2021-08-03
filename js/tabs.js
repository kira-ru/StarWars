//  $('.tabs_container>ul>li').hover(function () {
//    $(this)
//     .addClass('active_tab-link')
//     .siblings()
//     .removeClass('active_tab-link')
//     .closest(".contacts_block")
//     .find('div.tabs_content_container')
//     .removeClass('active_tab-content')
//     .eq($(this).index())
//     .addClass('active_tab-content')
//  })


let data = [
  {
    name:'github',
    contentLink:'https://github.com/Mitrr',
    contentLinkText:'@github/Mitrr',
    contentText:'Здесь вы можете посмотреть мои проекты'
},
{
    name:'email',
    contentLink:'https://github.com/Mitrr',
    contentLinkText:'@github/Mitrr',
    contentText:'Ваши предложения'
},
{
    name:'skype',
    contentLink:'https://github.com/Mitrr',
    contentLinkText:'@github/Mitrr',
    contentText:'Связь со мной'
},
]

// tabs
function TabList(tabs) {
  return `<ul>${tabs.map((tab, index) => Tab(tab, index)).join('')}</ul>`
}

function Tab(data, index) {
  return `<li class="tab-link_tab" id="${index}"><span></span>${data.name}</li>`
}


function TabLink(tab) {
  return `<div class="tabs_content_container" style="display: block">
  <a href="${tab.contentLink}" target="_blank">${tab.contentLinkText}</a>
  <p>${tab.contentText}</p></div>`
}

$('.tabs_container')[0].innerHTML = TabList(data);

$('.tab-link_tab').on('click', function() {
  $('.tab-content_wrapper')[0].innerHTML = TabLink(data[+this.id])
})
