var i=0;

function timedCount(){
	i=i+1;
	postMessage(i);
	setTimeout("timeCount()",500);
}

timedCount();