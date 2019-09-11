var myVideo1 = document.getElementById("video1"); 

function playPause1() { 
	if (myVideo1.paused){ 
		myVideo1.play(); 
  	}else{ 
		myVideo1.pause(); 
 	}
}

function voltar1() {				
	myVideo1.currentTime = 0;
	myVideo1.pause(); 
}