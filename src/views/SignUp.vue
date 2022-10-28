<template>
            <div class="signUp-title">
                <h1 class="signUp-title" >Eventastic!</h1>
            </div>
            
            <div class="signUp-menu"> 
                  
               
                <label class="signUp-label">What is your username?</label>   
            
            
                <input class="prova" type="text" placeholder="Enter Username" name="username" required>        
            

            
                <label class="signUp-label">What is your password? </label> 
            

        
                <input class="prova" type="password" placeholder="Enter Password" name="password" required>
            
            
            
                <label class="signUp-label">Confirm your Password</label>
            

            
                <input class="prova" type="password" placeholder="Confirm Password" name="confirm password" > 
                     

            </div>

            <div class = "signUp-button-block" >
                <button class="signUp-button"><strong>Sign Up</strong></button>
            </div>


</template>
<style>
    .signUp-button-block{
    display: flex;
    justify-content: center;
    }
    .signUp-title{
        display:flex;
        flex-direction: row;
        justify-content: center;
        
    }

    .prova{
        border: 0px;
        
        width:  100%;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
        font-family: Arial;
        margin-top: 0px;
        margin-bottom: 0px;
        border-radius: 5px;
        padding: 14px;
        background-color: var(--background-base,#f0f0f0);
        box-shadow:0px 0px 0px 1px#050505;
        
    }
    .signUp-label{
        font-weight: bold;
        margin-bottom:5px;
        margin-top: 35px;  
        
    }
    
    .signUp-menu{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items:baseline;
        justify-content:space-between;

    }
    .signUp-button{
        
        
        line-height: 1.5rem;
        border-radius: 50px;
        background-color: rgb(39, 69, 202);
        border: none;
        color: white;
        width: 150px;
        cursor: pointer;
        margin-top: 30px;

    }

    .signUp-buttonhover {
        opacity: .8;
    }
    .signUp-buttonactive {
        opacity: .5;
    }
</style>

