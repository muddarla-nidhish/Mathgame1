function addUser() {
    player1_name_input = document.getElementById("player1_name").value;
    player2_name_input = document.getElementById("player2_name").value;
    localStorage.setItem("player1_name", player1_name_input);
    localStorage.setItem("player2_name", player2_name_input);
    window.location = "dirction.html";
 }
 