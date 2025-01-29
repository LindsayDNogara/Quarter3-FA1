var nickname= "Lindsy";
var height= 62;
var weight= 61;

var inch= Math.round(height%12);
var feet= Math.round(Math.round(height)/12);
var nweight=weight*2.205;

function problem3(){
    let question= "Would you like to share personal information with our site?";
    if (confirm(question)== true) {
        question= console.log("Name: "+ nickname+"\n"+"Height: "+ feet + "'"+inch+"''"+"\n"+"Weight: "+ nweight+"lbs"+"\n");
    }
    else {
        question= console.log("User does not wish to share his/her information.");
    }
}