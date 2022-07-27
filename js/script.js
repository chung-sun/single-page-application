'use strict';

var routes = {
  '':              'introduction.html',
  '/':             'introduction.html',
  '#introduction': 'introduction.html',
  '#projects':     'projects.html',
  '#educations':   'education.html',
  '#works':        'work.html',
  '#contact-me':   'contactme.html'
}

function router () {
  
  console.log('location hash : ', location.hash);

  var link = window.location.hash;
  var route = routes[link];

  if (route) loadPage(route);

};

async function loadPage(url) {

  const response = await fetch(url);
  const content = await response.text();
  const element = document.getElementById('content');

  element.innerHTML = content;

}

router();

window.addEventListener('hashchange', router);