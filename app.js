var body = document.body;
var prefix = 'guest@vps:~$ ';

var messages = [
  {type:'server', message:'Linux Ubuntu 16.04 LTS'},
  {type:'server', message:'<br/>'},
  {type:'server', message:'The programs included with the Ubuntu system are free software; the exact distribution terms for each program are described in the individual files in /usr/share/doc/*/copyright.<br/>'},
  {type:'server', message:'<br/>'},
  {type:'server', message:'Ubuntu comes with ABSOLUTELY NO WARRANTY, to the extent permitted by applicable law.'},
  {type:'server', message:'<br/>'},
  {type:'server', message:'Last login: Mon Dec 24 13:37:00 2017 from 42.42.42.42'},
  {type:'server', message:'<br/>'},
  {type:'client', message:'cat docs/curriculum-vitae3.1/draft1.txt'},
  {type:'server', message:'<br/>'},
  {type:'server', message:'  _____             _          __                  _ __          '},
  {type:'server', message:' / ___/_ __________(_)_____ __/ /_ ____ _    _  __(_) /____ ____ '},
  {type:'server', message:'/ /__/ // / __/ __/ / __/ // / / // /  \' \\  | |/ / / __/ _ `/ -_)'},
  {type:'server', message:'\\___/\\_,_/_/ /_/ /_/\\__/\\_,_/_/\\_,_/_/_/_/  |___/_/\\__/\\_,_/\\__/ '},
  {type:'server', message:'<br/>'},
  {type:'server', message:'Name: Fredrik Andersson      Age: 24      Nationality: Swedish'},
  {type:'server', message:'<br/>'},
  {type:'server', message:'Languages: Swedish (native), English (fluent)'},
  {type:'server', message:'<br/>'},
  {type:'server', message:'-------------'},
  {type:'server', message:'C U R R E N T'},
  {type:'server', message:'-------------'},
  {type:'server', message:'<br/>'},
  {type:'server', message:'Programme: Bachelor in Computer Science'},
  {type:'server', message:'Location: Uppsala University, Uppsala, Sweden'},
  {type:'server', message:'Duration: 16\' - current'},
  {type:'server', message:'<br/>'},
  {type:'server', message:'-------'},
  {type:'server', message:'P A S T'},
  {type:'server', message:'-------'},
  {type:'server', message:'<br/>'},
  {type:'server', message:'Programme: Mobile Design and Development'},
  {type:'server', message:'Location: Hyper Island, Karlskrona, Sweden'},
  {type:'server', message:'Duration: 13\' - 14\''},
  {type:'server', message:'<br/>'},
  {type:'server', message:'More information coming soon.'},
];

function animateCharacter(p, message, cIndex, tIndex){
  var c = message.charAt(cIndex);
  p.innerHTML += c;

  if(cIndex < message.length){
    setTimeout(function(){ animateCharacter(p, message, cIndex + 1, tIndex) }, 35);
  }else{
    setTimeout(function(){ type(tIndex + 1) }, 100);
  }
}

function animateMessage(tIndex){
  var p = document.createElement('p');
  p.innerHTML = prefix;
  body.appendChild(p);

  animateCharacter(p, messages[tIndex]['message'], 0, tIndex);
}

function type(tIndex){
  if(tIndex >= messages.length) return;

  if(messages[tIndex]['type'] == 'client'){
    animateMessage(tIndex);
  }else{
    var p = document.createElement('p');
    p.innerHTML = messages[tIndex]['message'];
    body.appendChild(p);

    type(tIndex + 1);
  }
}

type(0);
