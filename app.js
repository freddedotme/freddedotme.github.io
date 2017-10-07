var database = [];
var index = 0;
var offset = 0;

var requestURL = 'https://api.myjson.com/bins/17h2hh';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response;
  var slides = response['slides'];

  for(var i = 0; i < slides.length; i++)
  {
    var slide = slides[i];
    createSlide(slide['image'], slide['sound']);
  }

  createSlideshow();
}

function createSlide(imageURL, soundURL)
{
  var entry = document.createElement('div');

  entry.style.backgroundImage  = 'url(\'' + imageURL + '\')';
  entry.setAttribute('data-sound', soundURL);

  database.push(entry);
}

function createSlideshow()
{
  document.body.style.width = (database.length * 100) + "%";

  for(var i = 0; i < database.length; i++)
  {
    database[i].style.width = ((1/database.length) * 100) + "%";
    document.body.appendChild(database[i]);
  }

  var audio = new Audio(database[1].getAttribute('data-sound'));
  audio.play();
}

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
  xDown = evt.touches[0].clientX;
  yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
  if ( ! xDown || ! yDown ) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
    if ( xDiff > 0 ) {
      index--;
      offset -= (1/database.length) * 100;
    } else {
      index++;
      offset += (1/database.length) * 100;
    }

    document.body.style.transform = 'translate3d(' + offset + '%, 0, 0)';
  }

  xDown = null;
  yDown = null;
};
