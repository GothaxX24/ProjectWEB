<template>
            
               <div class="general">
                    <div class="signUp-title">
                        <h1 class="signUp-title2">EVENTASTIC</h1>
                        <div class = " signUp-image">
                            <img class="imageconfig" src="https://user-images.githubusercontent.com/48566979/54383069-a4162000-4667-11e9-9b43-e649269a0bd8.png" >

                        </div>
                    </div>
                    <div class="signUp-menu"> 
                        
                        
                    
                        <label class="signUp-label">What is your username?</label>   
                    
                    
                        <input class="general-input" type="text" placeholder="Enter Username" name="username" required>        
                    

                    
                        <label class="signUp-label">What is your password? </label> 
                    

                
                        <input class="general-input" type="password" placeholder="Enter Password" name="password" required>
                    
                    
                    
                        <label class="signUp-label">Confirm your Password</label>
                    

                    
                        <input class="general-input" type="password" placeholder="Confirm Password" name="confirm password" > 
                            

                    </div>
                    <div class = "signUp-button-block" >
                        <button @click="$router.push('/')" class="signUp-button"><strong>Sign Up</strong></button>
                    </div>
                </div>
                    
                
                    

                    

                
          
            


</template>
<style>
    .imageconfig{
        width: 100%;
    }
    .signUp-image{
      max-width: 80px;

    }
    .general {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .signUpBody{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        max-width: 500px;
    }
    .signUp-button-block{
        display: flex;
        justify-content: center;
    }
    .signUp-title{
        display: flex;
        align-items: center;
    
                
        
    }
    .signUp-title2{
        font-size: clamp(2rem,4vw,60px);

    }

   
    .signUp-label{
        font-weight: bold;
        margin-bottom:5px;
        margin-top: 35px;  
        
    }
    
    .signUp-menu{
        display: flex;
        flex-direction: column;
        align-items: baseline;
        justify-content: center;
        
    
        

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

