window.onload = function() {

    document.getElementById("submit").addEventListener("click", function(){
        var searchBox = document.getElementById("search-box");
        alert("You searched for: " + searchBox.value);
        searchBox.value = "";
    });

    document.getElementById("signup-button").addEventListener("click", function(){
        var emailField = document.getElementById("email-field");
        alert("You registered: " + emailField.value);
        emailField.value = "";
    });

    document.getElementById("menu-button").addEventListener("click", function(){
        document.getElementById("cellphone-menu").style.width = "100%";
    });
      
    document.getElementById("close-menu").addEventListener("click", function(){
        document.getElementById("cellphone-menu").style.width = "0";
    });
}