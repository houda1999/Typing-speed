let time = 0;
let running = 0;

let tab = ["Nous savons que les ordinateurs fondes sur les principes d'une machine de Von Neumann.",
           "En fait, chaque processus peut lui-meme fonctionner comme le systeme d'exploitation.",
           "La commutation entre les threads d'un procesus  fonctionne de le meme facon que la commutation entre les processus."
          ]


let textArea = document.getElementById("textArea");
let seconds =  document.getElementById("seconds");
let mseconds = document.getElementById("milliseconds");
let minutes = document.getElementById("minutes");

function commencer()
{
    if(running == 0){
		running = 1;
		increment();
    }
    let str = document.getElementById("paragraphe").innerHTML;
    let len = textArea.value.length;
    let text = str.substring(0,len);
    
    if(textArea.value!=text)
    {
        textArea.style.borderColor="red";
        textArea.style.borderWidth="5px";
    }
    else
    {
        textArea.style.borderColor="gray";
        textArea.style.borderWidth="5px";
    }
    if(len==str.length)
    {
        running = 0;
    }
}
function increment(){
	if(running == 1){
		setTimeout(function(){
            time++;
            let msecs = time%60;
            var secs = Math.floor(time/10 % 60);
			let mins = Math.floor(time/10/60);
			var hours = Math.floor(time/10/60/60); 
			if(mins < 10){
				mins = "0" + mins;
			} 
			if(secs < 10){
				secs = "0" + secs;
            }
            if(msecs < 10){
				msecs = "0" + secs;
            }
            seconds.innerHTML = secs;
            minutes.innerHTML = mins;
            mseconds.innerHTML = msecs;
			increment();
		},1)
	}
}
function reset()
{
    let i = Math.floor(Math.random() * Math.floor(3));
    document.getElementById("paragraphe").innerHTML=tab[i];
   
    running = 0;
	time = 0;
    textArea.value='';
    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
    mseconds.innerHTML = "00";
    textArea.style.borderColor="gray";
}