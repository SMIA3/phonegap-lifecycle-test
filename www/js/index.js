var paused_count =0; //Define paused_count
var resumed_count = 0; //define resumed_count
var launched_count = 0; //define launched_count

document.addEventListener("deviceready", onDeviceReady, false);// Event Listener - Check if App is loaded
		
	
function updateDisplay() { //create function updateDisplay
	$("#launched").text("Application launched: " + launched_count); 
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
}


// device APIs are available
//
    function onDeviceReady() {// If device is ready
	
	document.addEventListener("resume", onResume, false); // Add Event Listener - Check if app has been resumed from the background
	document.addEventListener("pause", onPause, false); // Add Event Listener - Check is app has been paused and put into the background
	
	launched_count++; // increase launched_count by 1
	updateDisplay(); //Update display showing new launched_count
	    
	alert("device ready"); //Tell event listener state of device/app?
    }


    function onPause() { //If app is paused
	
	paused_count++; // increase paused_count by 1
	updateDisplay(); // Update display showing new paused_count
	    
	alert("pause"); //Tell event listener state of device/app?
    }
	

    function onResume() { //If app is resumed to foreground
		
	resumed_count++; //increase resume_count by 1
	updateDisplay(); //update display showing new resume_count
	    
	alert("resume"); //Tell event listener state of device/app?
    }
