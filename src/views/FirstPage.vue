<template>
    <main>
        <h1>EVENTASTIC</h1>
        
        <p>Login to your account:</p>

        <div>          
            <input type="text" placeholder="E-mail" name="username" required>
        </div>
        <div>         
            <input type="password" placeholder="Password" name="password" required>        
        </div>

        <button>LogIn</button>

        <p>If you don't have an account, create one:</p>

        <button @click="$router.push('/')">SignUp</button>
        


    </main>
</template>