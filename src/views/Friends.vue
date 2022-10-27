<template >
        
            <header class ="header_friends">
                
                <h1>Friends</h1>
                
            </header>
                
            <div> 
                      
                    <div class = body_friends1>
                    <label><strong>Your friends: </strong></label>         
                    </div>
    
                    <div class = body_friends2>
                        <img class="circular-image" src="https://2.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=180" width="30" height="30"/>
                        <label>User 1</label> 
                    </div>
            
                    <div class = body_friends3>
                        <img class="circular-image" src="https://2.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=180" width="30" height="30"/>
                        <label>User 2</label> 
                    </div>
                    
                    <div class = body_friends4>
                        <img class="circular-image" src="https://2.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=180" width="30" height="30"/>
                        <label>User 3</label> 
                    </div>
                   
                    <div class = body_friends5>
                        <img class="circular-image" src="https://2.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=180" width="30" height="30"/>
                        <label>User 4</label> 
                    </div>

                    <br>
                    <br>
                
                    <div class = body_friends6>
                        <label><strong>Add more friends!</strong></label> 
                    </div>
                    <br>
                    <div class = body_friends7>
                        <label>Send request to:</label> 
                    </div>
                    
                    <div class = body_friends8>
                        <input type="text" placeholder="Enter Username or email" name="username or email" required>     
                    </div>
                    <br>
                    <button type = "submit"><strong>Send request</strong></button>
                    
            </div>      
            
    </template>
    <style>
    .header_friends{ 
        
        font-family: 'Courier New', Courier, monospace;
        font-size:medium    ;   
      }
    .body_friends1{
        border:3px solid black;
        font-size: "5";
        background-color: turquoise;
        font-family : Arial, Helvetica, sans-serif;
        display: flex;
        flex-direction: row;
    }
    .body_friends2{
        border:3px solid black;
        font-size: "5";
        background-color: turquoise;
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        flex-direction: row;
    }
    .body_friends3{
        border:3px solid black;
        font-size: "5";
        background-color: turquoise;
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        flex-direction: row;
    }
    .body_friends4{
        border:3px solid black;
        font-size: "5";
        background-color: turquoise;
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        flex-direction: row;
    }
    .body_friends5{
        border:3px solid black;
        font-size: "5";
        background-color: turquoise;
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        flex-direction: row;
    }
    .body_friends6{
        text-shadow: 0 0 3px #1cb0b0;
        font-size: "13";
        color : black;
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        flex-direction: column-reverse;
    }
    .body_friends7{
        font-size: "3";
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        flex-direction: row;
    }
    .body_friends8{
        font-size: "10";
        background-color: turquoise;
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        flex-direction: column-reverse;
    }
    </style>
    
    