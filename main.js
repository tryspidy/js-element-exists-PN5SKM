var element = document.getElementById("test");
    //If it isn't "undefined" and it isn't "null", then it exists.
if(typeof(element) != 'undefined' && element != null){
    alert('Element exists');
} else{
	alert('Element does not exist');
}
