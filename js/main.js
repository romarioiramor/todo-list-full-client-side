var MyUser = new User();
var MyDatabase = new Database();

function showTodoListContainer() {
    $("#login_container").hide('slow');
    $("#todoList_container").show('slow');
}

$(document).ready(function() {

   var resultIsAuthenticated = MyUser.isAuthenticated();
   if(resultIsAuthenticated) {
        showTodoListContainer();
   }else {
    $("#login_container").show('slow');
   }

    $("#buttonSignIn").click(function(){

        var inputEmail = $("#inputEmail").val();
        var inputPassword = $("#inputPassword").val();

        var rememberMe = $("#remember_me").is(":checked");

        var resultLogin = MyUser.login(inputEmail, inputPassword, rememberMe);
    
        if(resultLogin == true){
            alert("Bem Vindo");
            showTodoListContainer();              
        }else {
            alert("Algo deu errado, favor inserir dados novamente");
        }
    });

    $("#buttonAddTodo").click(function() {
        var inputElement = $("#input_todo");
        var inputVal = $("#input_todo").val();
        if(inputVal != "") {
            MyDatabase.insertRow(inputVal);
            inputElement.val('');

            MyDatabase.clearHtmlList();
            MyDatabase.readRows();
        }
    });

})