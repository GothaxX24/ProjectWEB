<script>

export default {
        data() {
            return {
            email: "",
            password: ""
            }

        },
    
        methods: {
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
                            console.log(data);

                            fetch ('http://puigmal.salle.url.edu/api/v2/users/search?s=' + this.email ,{
                                headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                            })
                            .then((res) => res.json())
                            .then((data) => {
                                window.localStorage.setItem("userid" ,data.id);
                            })

                            location.replace("/eventslist");
                        } else {
                            console.log("error", data);
                            alert("Error: wrong email or password");
                        }
                        });
            }
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