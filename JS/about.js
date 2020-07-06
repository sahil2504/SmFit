function change(){
	if(screen.width>1200){
		document.getElementById("certificate").classList.add('col-xl-12');
	    document.getElementById("certificate").classList.remove('col-xl-6');
	    document.getElementById("abtme").classList.add('col-xl-12');
	    document.getElementById("abtme").classList.remove('col-xl-6');
	}
}

function normal(){
	if(screen.width>1200){
		document.getElementById("certificate").classList.add('col-xl-6');
	    document.getElementById("certificate").classList.remove('col-xl-12');
	    document.getElementById("abtme").classList.add('col-xl-6');
	    document.getElementById("abtme").classList.remove('col-xl-12');
	}
}