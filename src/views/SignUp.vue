<template >
<html >
    
        <header class ="header2">
            
            <h1>Sign Up</h1>
            
        </header>
     
            
            
        <div class ="body2"> 
                  
                <div >
                <label>Username : </label>   
                <input type="text" placeholder="Enter Username" name="username" required>  
                        
                </div>

                <div>
                    <label>Password : </label> 
                    <input type="password" placeholder="Enter Password" name="password" required>
                </div>

                <div>
                    <label>Confirm Password :</label>
                    <input type="confirm password" placeholder="Confirm Password" name="confirm password" required> 
                </div>
                <br>
                <button type = "submit"><strong>Sign Up</strong></button>
                
        </div>      
        

            

        

</html>
</template>
<style>
.header2{ 
    background-color: turquoise ;
    font-family: 'Courier New', Courier, monospace;
    font-size:medium    ;   
  }
.body2{
    
    background-color: turquoise;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
}
</style>

