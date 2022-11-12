<template>
    <main>

        <h1>EVENTASTIC</h1>
        
        <p>Login to your account:</p>

        <div class="divlag">          
            <input type="text" class="general-input" placeholder="E-mail" name="username" required>
        </div>
        <div class="divlag">         
            <input class = "general-input" type="password" placeholder="Password" name="password" required>        
        </div>

        <div class = "signUp-button-block" >
            <button @click="$router.push('/')" class="logIn-button"><strong>Log in</strong></button>
        </div>

        <p>If you don't have an account, create one:</p>

        <div class = "signUp-button-block" >
            <button @click="$router.push('/signup')" class="signUp-button"><strong>Sign Up</strong></button>
        </div>

    </main>
</template>

<style>
   .divlag {
    margin-bottom: 30px;
   }

   .signUp-button-block{
        display: flex;
        justify-content: center;
    }

    .signUp-button{
        line-height: 1.5rem;
        border-radius: 50px;
        background-color: rgb(32, 59, 179);
        border: none;
        color: white;
        width: 40%px;
        cursor: pointer;
        margin-top: 10px;
    }

    .logIn-button{
        line-height: 1.5rem;
        border-radius: 20px;
        background-color: rgb(36, 70, 222);
        border: none;
        color: white;
        width: 75%;
        cursor: pointer;
    }

</style>