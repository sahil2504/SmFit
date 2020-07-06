function emailcheck(){
	var x = document.getElementById('email');
	var y = document.getElementById('cnfemail');
	if(x.value != y.value){
		alert("Emails do not match!");
	}
}

function heightcheck(){
	var a = document.getElementById('height');
	var b = document.getElementById('inch');
	if(+a.value>0){
		if((+b.value>0) && (+b.value<=11)){
	    	return true;
		}
		else if(+b.value>=12){
		    c=+b.value/12;
		    d=Math.floor(c);
		    a.value= +a.value+d;
		    b.value= +b.value%12;
		    return(a.value,b.value);
		}
	}
    else{
		alert("Check the value of feet");
		return false;
	}
}

function finalcheck(){
	var x = document.getElementById('email');
	var y = document.getElementById('cnfemail');
	var a = document.getElementById('height');
	var b = document.getElementById('inch');
	var z = document.getElementById('mobnumber');
	var w = document.getElementById('age');
	var e = document.getElementById("appttime");
	var f = "";
	var pno = /^[789]\d{9}$/;
	if(x.value == y.value){
		if(+a.value>0){
			if(z.value.match(pno))
			{
				if(+w.value>16)
				{
					if(e.value!=f)
					{
						alert("Response Successfully Submitted");
					    return true;
					}
					else
					{
						alert("Select Appointment Timing");
						return false;
					}
				}
				else
				{
					alert("Age should be above 16");
					return false;
				}
			}
			else
			{
				alert("Check the Mobile Number Entered")
				return false;
			}
		}
		else{
			alert("Check the value of feet");
			return false;
		}
	}
	else{
		alert("Emails do not match!");
		return false;
	}
}