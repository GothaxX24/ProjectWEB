<script>

export default {
        data() {
            return {
            email: "",
            password: ""
            }

        },
    
        methods: {
            // Metode que realitza un fetch de tipus "Post" per fer login a la aplicació. Dins del fetch emagatzemem dins de la localstorage el token del usuari que
            // inicia sesió i una variable que anomenem loggedIn que servira per entrar directament a la conta del usuari si aquests no fa logOut.
            // Dins del primer fetch en realitzem un altre que busqui dins la API el usuari amb el email que inici de sessió (amb l'email ens assegurem que 
            // la crida nomes ens retorna un usuari) i guardem la seva id fins que l'usuari faigi logOut.
            // Es crida al picar el boto de "Log in"
            login() {
                fetch("http://puigmal.salle.url.edu/api/v2/users/login", {
                        method: "POST",
                        headers: {
                        "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ email: this.email, password: this.password }), 
                    })
                        .then((res) => res.json())
                        .then((data) => {
                        if(data.accessToken){
                            window.localStorage.setItem("token", data.accessToken);
                            window.localStorage.setItem("loggedIn", true);
                            fetch ('http://puigmal.salle.url.edu/api/v2/users/search?s=' + this.email ,{
                                headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                            })
                            .then((res) => res.json())
                            .then((data) => {
                                window.localStorage.setItem("userid", data[0].id);
                                location.replace("/eventslist")
                            })  
                        } else {
                            alert("Error: wrong email or password");
                        }                       
                        });
            },

            // Metode que en cas de tindre la "loogedIn" a la localstorage entra directament a la aplicació sense necessitat d'iniciar sessió
            // Es crida a aquest metode al entrar a la pagina (created).
            isLooged() {
                if (window.localStorage.getItem("loggedIn")) {
                    location.replace("/eventslist");
                }
            }
        },

        created() {
                    this.isLooged()
             }
    }
</script>

<template>
   
        <div class="general">
            <div class="signUp-title">
            <h1 class="signUp-title2">EVENTASTIC</h1>
            <div class = " signUp-image">
                <img class="imageconfig" src="https://user-images.githubusercontent.com/48566979/54383069-a4162000-4667-11e9-9b43-e649269a0bd8.png" >

            </div>
        </div>

        <label class="signUp-label">Login to your account:</label>

        <div class="divlag">          
            <input v-model="email" type="text" class="general-input" placeholder="E-mail" name="username" required>
        </div>
        <div class="divlag">         
            <input v-model="password" class = "general-input" type="password" placeholder="Password" name="password" required>        
        </div>

        <div class = "signUp-button-block" >
            <button @click="login" class="logIn-button"><strong>Log in</strong></button>
        </div>

        <label class="signUp-label">If you don't have an account, create one:</label>

        <div class = "signUp-button-block" >
            <button @click="$router.push('/signup')" class="signUp-button"><strong>Sign Up</strong></button>
        </div>

        </div>  
    
</template>

<style>
   .divlag {
    margin-bottom: 30px;
   }

   .signUp-button-block{
        display: flex;
        justify-content: center;
    }

    .logIn-button{
        line-height: 1.5rem;
        border-radius: 20px;
        background-color: rgb(36, 70, 222);
        border: none;
        color: white;
        width: 100%;
        cursor: pointer;
    }

</style>