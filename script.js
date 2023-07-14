function myfunc(){

    var b1,b2,b3,b4,b5,b6,b7,b8,b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;


    var b1bt, b2bt, b3bt, b4bt, b5bt, b6bt, b7bt, b8bt, b9bt;
    b1bt = document.getElementById("b1");
    b2bt = document.getElementById("b2");
    b3bt = document.getElementById("b3");
    b4bt = document.getElementById("b4");
    b5bt = document.getElementById("b5");
    b6bt = document.getElementById("b6");
    b7bt = document.getElementById("b7");
    b8bt = document.getElementById("b8");
    b9bt = document.getElementById("b9");

    // determining if X won 
    if((b1=='X' || b1=='x') && (b2=='X' || b2=='x') && (b3=='X' || b3=='x')){
        document.getElementById('Print').innerHTML = "Player X won";
        b4bt.disabled = true;
        b5bt.disabled = true;
        b6bt.disabled = true;
        b7bt.disabled = true;
        b8bt.disabled = true;
        b9bt.disabled = true;

        b1bt.style.color = "red";
        b2bt.style.color = "red";
        b3bt.style.color = "red";
    }
    
    else if((b1=='X' || b1=='x') && (b4=='X' || b4=='x') && (b7=='X' || b7=='x')){
        document.getElementById('Print').innerHTML = "Player X won";
        b2bt.disabled = true;
        b5bt.disabled = true;
        b6bt.disabled = true;
        b3bt.disabled = true;
        b8bt.disabled = true;
        b9bt.disabled = true;

        b1bt.style.color = "red";
        b4bt.style.color = "red";
        b7bt.style.color = "red";
    }
    else if((b7=='X' || b7=='x') && (b8=='X' || b8=='x') && (b9=='X' || b9=='x')){
        document.getElementById('Print').innerHTML = "Player X won";
        b2bt.disabled = true;
        b5bt.disabled = true;
        b6bt.disabled = true;
        b3bt.disabled = true;
        b1bt.disabled = true;
        b4bt.disabled = true;

        b7bt.style.color = "red";
        b8bt.style.color = "red";
        b9bt.style.color = "red";
    }
    else if((b3=='X' || b3=='x') && (b6=='X' || b6=='x') && (b9=='X' || b9=='x')){
        document.getElementById('Print').innerHTML = "Player X won";
        b2bt.disabled = true;
        b5bt.disabled = true;
        b7bt.disabled = true;
        b8bt.disabled = true;
        b1bt.disabled = true;
        b4bt.disabled = true;

        b3bt.style.color = "red";
        b6bt.style.color = "red";
        b9bt.style.color = "red";
    }
    else if((b1=='X' || b1=='x') && (b5=='X' || b5=='x') && (b9=='X' || b9=='x')){
        document.getElementById('Print').innerHTML = "Player X won";
        b2bt.disabled = true;
        b7bt.disabled = true;
        b6bt.disabled = true;
        b3bt.disabled = true;
        b8bt.disabled = true;
        b4bt.disabled = true;

        b1bt.style.color = "red";
        b5bt.style.color = "red";
        b9bt.style.color = "red";
    }
    else if((b3=='X' || b3=='x') && (b5=='X' || b5=='x') && (b7=='X' || b7=='x')){
        document.getElementById('Print').innerHTML = "Player X won";
        b2bt.disabled = true;
        b8bt.disabled = true5
        b6bt.disabled = true;
        b9bt.disabled = true;
        b1bt.disabled = true;
        b4bt.disabled = true;

        b3bt.style.color = "red";
        b5bt.style.color = "red";
        b7bt.style.color = "red";
    }
    else if((b2=='X' || b2=='x') && (b8=='X' || b8=='x') && (b5=='X' || b5=='x')){
        document.getElementById('Print').innerHTML = "Player X won";
        b7bt.disabled = true;
        b9bt.disabled = true;
        b6bt.disabled = true;
        b3bt.disabled = true;
        b1bt.disabled = true;
        b4bt.disabled = true;

        b2bt.style.color = "red";
        b8bt.style.color = "red";
        b5bt.style.color = "red";
    }
    else if((b4=='X' || b4=='x') && (b5=='X' || b5=='x') && (b6=='X' || b6=='x')){
        document.getElementById('Print').innerHTML = "Player X won";
        b2bt.disabled = true;
        b8bt.disabled = true;
        b9bt.disabled = true;
        b3bt.disabled = true;
        b1bt.disabled = true;
        b7bt.disabled = true;

        b4bt.style.color = "red";
        b5bt.style.color = "red";
        b6bt.style.color = "red";
    }
    //for second player checking winning condition
    else if((b1=='O' || b1=='o') && (b2=='o' || b2=='O') && (b3=='o' || b3=='O')){
        document.getElementById('Print').innerHTML = "Player O won";
        b4bt.disabled = true;
        b5bt.disabled = true;
        b6bt.disabled = true;
        b7bt.disabled = true;
        b8bt.disabled = true;
        b9bt.disabled = true;

        b1bt.style.color = "red";
        b2bt.style.color = "red";
        b3bt.style.color = "red";
    }
    else if((b1=='O' || b1=='o') && (b4=='O' || b4=='o') && (b7=='O' || b7=='o')){
        document.getElementById('Print').innerHTML = "Player O won";
        b2bt.disabled = true;
        b5bt.disabled = true;
        b6bt.disabled = true;
        b3bt.disabled = true;
        b8bt.disabled = true;
        b9bt.disabled = true;

        b1bt.style.color = "red";
        b4bt.style.color = "red";
        b7bt.style.color = "red";
    }
    else if((b7=='O' || b7=='o') && (b8=='O' || b8=='o') && (b9=='O' || b9=='o')){
        document.getElementById('Print').innerHTML = "Player O won";
        b2bt.disabled = true;
        b5bt.disabled = true;
        b6bt.disabled = true;
        b3bt.disabled = true;
        b1bt.disabled = true;
        b4bt.disabled = true;

        b7bt.style.color = "red";
        b8bt.style.color = "red";
        b9bt.style.color = "red";
    }
    else if((b3=='O' || b3=='o') && (b6=='O' || b6=='o') && (b9=='O' || b9=='o')){
        document.getElementById('Print').innerHTML = "Player O won";
        b2bt.disabled = true;
        b5bt.disabled = true;
        b7bt.disabled = true;
        b8bt.disabled = true;
        b1bt.disabled = true;
        b4bt.disabled = true;

        b3bt.style.color = "red";
        b6bt.style.color = "red";
        b9bt.style.color = "red";

    }
    else if((b1=='o' || b1=='O') && (b5=='o' || b5=='O') && (b9=='o' || b9=='O')){
        document.getElementById('Print').innerHTML = "Player O won";
        b2bt.disabled = true;
        b7bt.disabled = true;
        b6bt.disabled = true;
        b3bt.disabled = true;
        b8bt.disabled = true;
        b4bt.disabled = true;

        b1bt.style.color = "red";
        b5bt.style.color = "red";
        b9bt.style.color = "red";
    }
    else if((b3=='O' || b3=='o') && (b5=='O' || b5=='o') && (b7=='O' || b7=='o')){
        document.getElementById('Print').innerHTML = "Player O won";
        b2bt.disabled = true;
        b8bt.disabled = true;
        b6bt.disabled = true;
        b9bt.disabled = true;
        b1bt.disabled = true;
        b4bt.disabled = true;

        b3bt.style.color = "red";
        b5bt.style.color = "red";
        b7bt.style.color = "red";
    }
    else if((b2=='O' || b2=='o') && (b8=='O' || b8=='o') && (b5=='O' || b5=='o')){
        document.getElementById('Print').innerHTML = "Player X won";
        b7bt.disabled = true;
        b9bt.disabled = true;
        b6bt.disabled = true;
        b3bt.disabled = true;
        b1bt.disabled = true;
        b4bt.disabled = true;

        b2bt.style.color = "red";
        b8bt.style.color = "red";
        b5bt.style.color = "red";
    }
    else if((b4=='O' || b4=='o') && (b5=='O' || b5=='o') && (b6=='O' || b6=='o')){
        document.getElementById('Print').innerHTML = "Player O won";
        b2bt.disabled = true;
        b8bt.disabled = true;
        b9bt.disabled = true;
        b3bt.disabled = true;
        b1bt.disabled = true;
        b7bt.disabled = true;

        b4bt.style.color = "red";
        b5bt.style.color = "red";
        b6bt.style.color = "red";
    }

    //checking if tie
    else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X'
        || b2 == 'O') && (b3 == 'X' || b3 == 'O') &&
        (b4 == 'X' || b4 == 'O') && (b5 == 'X' ||
            b5 == 'O') && (b6 == 'X' || b6 == 'O') &&
        (b7 == 'X' || b7 == 'O') && (b8 == 'X' ||
            b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
        document.getElementById('Print')
            .innerHTML = "Match Tie";
    }
    else {
  
        // Here, Printing Result
        if (flag == 1) {
            document.getElementById('Print')
                .innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('Print')
                .innerHTML = "Player O Turn";
        }
    }
}
//reset the game
function myfunc2(){
    location.reload();
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';
}

flag = 1;
function myfunc3(){
    if(flag==1){
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        flag=0;
    }
    else{
        document.getElementById("b1").value = "O";
        document.getElementById("b1").disabled = true;
        flag=1;
    }
}
function myfunc4(){
    if(flag==1){
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        flag=0;
    }
    else{
        document.getElementById("b2").value = "O";
        document.getElementById("b2").disabled = true;
        flag=1;
    }
}
function myfunc5(){
    if(flag==1){
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag=0;
    }
    else{
        document.getElementById("b3").value = "O";
        document.getElementById("b3").disabled = true;
        flag=1;
    }
}
function myfunc6() {
    if (flag == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b4").value = "O";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}
function myfunc7() {
    if (flag == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b5").value = "O";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}
function myfunc8() {
    if (flag == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b6").value = "O";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}
function myfunc9() {
    if (flag == 1) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b7").value = "O";
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}
function myfunc10() {
    if (flag == 1) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b8").value = "O";
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}
function myfunc11() {
    if (flag == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b9").value = "O";
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}
  