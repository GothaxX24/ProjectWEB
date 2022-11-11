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

        <button @click="$router.push('/')" >LogIn</button>

        <p>If you don't have an account, create one:</p>

        <button @click="$router.push('/signup')">SignUp</button>
    </main>
</template>

<style>
   .divlag {
    margin-bottom: 30px;
   }


</style>