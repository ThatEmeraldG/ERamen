validation = () => {
    let name = document.getElementById("nameInput").value;let email = document.getElementById("emailInput").value;
    let phone = document.getElementById("phoneInput").value;
    let preference = document.getElementById("preferences").value;
    let agreement = document.getElementById("agreement");
    let message = document.getElementById("messagetxt").value;
    

    if(name == ""){
        alert("Please input your name!");
        return false;
    } else if(name.length < 3){
        alert("Please input your full name!");
        return false;
    }

    if(phone == ""){
        alert("Please fill in Phone Number!");
        return false;
    }

    if(email == ""){
        alert("Please fill in your email!");
        return false;
    }
    else if (!email.includes("@")){
        alert("Email needs to include the character @");
        return false;
    }

    if(preference == ""){
        alert("Please select your preference on Ramen!");
        return false;
    }

    if(!agreement.checked){
        alert("Please check the agreement box!");
        return false;
    }

    alert("Message successfully sent!");
    return true;
    
}