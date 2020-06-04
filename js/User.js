class User {

    usersAllowed = [

        {
            email: "romariomedeiros.com.br",
            password: "desenvolvedor"
        },
        {
            email: "romario.adsistemas@gmail.com",
            password: "fullstack"
        }

    ];

    login(email, password) {

        this.usersAllowed.map(function(item, index) {

            if(item.email == email ) {
               
                if(item.password == password) {
                    alert("Bem vindo");
                } else {
                    alert("Algo deu errado, favor inserir dados novamente");
                }
            
            }
        });
    }

    logout() {

    }

}