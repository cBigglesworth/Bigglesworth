var voice=document.getElementById("voice");
var voice_gif=document.getElementsByClassName("voice_gif")[0];
var voice_off=document.getElementsByClassName("voice_off")[0];
var mp3=document.getElementsByClassName("mp3")[0];
var flag=1;
voice.onclick=function(){
	if (flag==0) {
		voice_off.style.animation='none';
		voice_gif.style.display='none';
		mp3.pause();
		flag=1;
	}
	else if(flag==1){
		voice_off.style.animation='musicrun 2s linear infinite';
		voice_gif.style.display='block';
		mp3.play();
		flag=0;
	}
}
