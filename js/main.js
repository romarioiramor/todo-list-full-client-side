var MyUser = new User();
var MyDatabase = new Database();

function showTodoListContainer() {
    $("#login_container").hide('slow');
    $("#todoList_container").show('slow');
}

function hideTodoListContainer() {
    $("#login_container").show('slow');
    $("#todoList_container").hide('slow');
}

$(document).ready(function() {

   var resultIsAuthenticated = MyUser.isAuthenticated();
   if(resultIsAuthenticated) {
        showTodoListContainer();
        MyUser.writeUserAuthenticated();
   }else {
    $("#login_container").show('slow');
   }

   $("#btnSair").click(function() {
    MyUser.logout();
    hideTodoListContainer();
   });

    $("#buttonSignIn").click(function(){

        var inputEmail = $("#inputEmail").val();
        var inputPassword = $("#inputPassword").val();

        var rememberMe = $("#remember_me").is(":checked");

        var resultLogin = MyUser.login(inputEmail, inputPassword, rememberMe);
    
        if(resultLogin == true){
            alert("Bem Vindo");
            showTodoListContainer();
            MyUser.writeUserAuthenticated();              
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

    //marcando como concluido a tarefa
    $(document).bind('change', 
    '.checkbox-todo-list', function(e) {

        var checkbox = $(e.target);

       // console.log(checkbox);

        var id = checkbox.attr('data-id');
        var status = checkbox.is(":checked");

      //  console.log(id +" "+ status);

      MyDatabase.updateRow(id, status);
      MyDatabase.clearHtmlList();
      MyDatabase.readRows();

    });

})