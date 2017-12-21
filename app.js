var body = document.body;
var prefix = 'fredde@vps:~$';
var age = (new Date()).getFullYear() - 1993;

var messages = [
  {type:'server', message:'Linux Ubuntu 16.04 LTS'},
  {type:'server', message:'<br/>'},
  {type:'server', message:'The programs included with the Ubuntu system are free software; the exact distribution terms for each program are described in the individual files in /usr/share/doc/*/copyright.<br/>'},
  {type:'server', message:'<br/>'},
  {type:'server', message:'Ubuntu comes with ABSOLUTELY NO WARRANTY, to the extent permitted by applicable law.'},
  {type:'server', message:'<br/>'},
  {type:'server', message:'Last login: Mon Dec 24 13:37:00 2017 from 42.42.42.42'},
  {type:'server', message:'<br/>'},
  {type:'client', message:'cd docs/curriculum-vitae'},
  {type:'prefix', message:'fredde@vps:~/docs/curriculum-vitae$'},
  {type:'client', message:'ls'},
  {type:'server', message:'draft-first.txt    draft2.0.txt    draftnew.txt    <strong>catimages</strong>    <strong>gifs</strong>'},
  {type:'client', message:'cat draft2.0.txt'},
  {type:'server', message:'<br/>'},
  {type:'server', message:'  ______   __'},
  {type:'server', message:' / ___/ | / /'},
  {type:'server', message:'/ /__ | |/ / '},
  {type:'server', message:'\\___/ |___/  '},
  {type:'server', message:'<br/>'},
  {type:'server', message:'Name: Fredrik Andersson    Age: ' + age + '    Nationality: Swedish'},
  {type:'server', message:'<br/>'},
  {type:'server', message:'Languages: Swedish (native), English (fluent)'},
  {type:'server', message:'<br/>'},
  {type:'server', message:'-------------'},
  {type:'server', message:'{ L I N K S }'},
  {type:'server', message:'-------------'},
  {type:'server', message:'<br/>'},
  {type:'server', message:'<a href="https://github.com/freddedotme">Github</a>    <a href="https://se.linkedin.com/in/freddedotme">Linkedin</a>    <a href="https://dribbble.com/freddedotme">Dribbble</a>'},
  {type:'server', message:'<br/>'},
  {type:'server', message:'-----------------'},
  {type:'server', message:'{ C U R R E N T }'},
  {type:'server', message:'-----------------'},
  {type:'server', message:'<br/>'},
  {type:'server', message:'# Type: Education'},
  {type:'server', message:'  Programme: Bachelor in Computer Science'},
  {type:'server', message:'  Location: Uppsala University, Uppsala, Sweden'},
  {type:'server', message:'  Duration: 16\' - current'},
  {type:'server', message:'<br/>'},
  {type:'server', message:'-----------'},
  {type:'server', message:'{ P A S T }'},
  {type:'server', message:'-----------'},
  {type:'server', message:'<br/>'},
  {type:'server', message:'# Type: Internship'},
  {type:'server', message:'  Company: Spring/Summer (Agency)'},
  {type:'server', message:'  Location: Copenhagen, Denmark'},
  {type:'server', message:'  Duration: 14\' (3 months)'},
  {type:'server', message:'<br/>'},
  {type:'server', message:'# Type: Internship'},
  {type:'server', message:'  Company: Agentur Loop (Agency)'},
  {type:'server', message:'  Location: Salzburg, Austria'},
  {type:'server', message:'  Duration: 14\' (2 months)'},
  {type:'server', message:'<br/>'},
  {type:'server', message:'# Type: Education'},
  {type:'server', message:'  Programme: Mobile Design and Development'},
  {type:'server', message:'  Location: Hyper Island, Karlskrona, Sweden'},
  {type:'server', message:'  Duration: 13\' - 14\''},
  {type:'server', message:'<br/>'},
  {type:'server', message:'(<a href="https://github.com/freddedotme/freddedotme.github.io/commits/master">Last commit</a>)'},
  {type:'server', message:'<br/>'},
  {type:'server', message:prefix},
  {type:'server', message:'Connection to vps.fredde.me closed.'},
];

function animateCharacter(p, message, cIndex, tIndex){
  var c = message.charAt(cIndex);
  p.innerHTML += c;

  if(cIndex < message.length){
    setTimeout(function(){ animateCharacter(p, message, cIndex + 1, tIndex) }, 75);
  }else{
    setTimeout(function(){ simulate(tIndex + 1) }, 100);
  }
}

function animateMessage(tIndex){
  var p = document.createElement('p');
  p.innerHTML = prefix + " ";
  body.appendChild(p);

  animateCharacter(p, messages[tIndex]['message'], 0, tIndex);
}

function simulate(tIndex){
  if(tIndex >= messages.length) return;

  var type = messages[tIndex]['type'];
  var message = messages[tIndex]['message'];

  if(type == 'client'){
    animateMessage(tIndex);
  }else if(type == 'prefix'){
    prefix = message;
    simulate(tIndex + 1);
  }else{
    var p = document.createElement('p');
    p.innerHTML = message;
    body.appendChild(p);
    simulate(tIndex + 1);
  }
}

setTimeout(function(){ simulate(0) }, 125);
