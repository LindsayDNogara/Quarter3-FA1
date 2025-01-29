var nickname= "Lindsy";
var height= 62;
var weight= 61;

var inch= Math.round(height%12);
var feet= Math.round(Math.round(height)/12);
var nweight=weight*2.205;

alert("Name: "+ nickname+"\n"+"Height: "+ feet + "'"+inch+"''"+"\n"+"Weight: "+ nweight+"lbs"+"\n");
