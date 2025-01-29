document.write("Click here for the other problems ->");
function problem2(){
    let firstname=prompt("What's your first name?");
    let lastname=prompt("What is your last name?");
    let yearofbirth=prompt("What is your birthyear?");
    var age=2025-yearofbirth;

    if (firstname !=null && lastname !=null && yearofbirth != null)
    {
        document.getElementById("yo").innerHTML= "Hello " + firstname + " " + lastname+"!"+ " How does it feel to be "+ age+ " years old?";
    }
}