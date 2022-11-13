<template >
        
            <header class ="header_friends">
                
                <h1>Friends</h1>
                
            </header>
                
            <div class = all> 
                      
                    <div class = users>
                    <label><strong>Your friends: </strong></label>         
                    </div>
    
                    <div class = users>
                        <img class="circular-image" src="https://2.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=180" width="30" height="30"/>
                        <button class= "users_button" @click="$router.push('/viewprofile')" type="button"><strong>User1</strong></button>
                    </div>
            
                    <div class = users>
                        <img class="circular-image" src="https://2.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=180" width="30" height="30"/>
                        <button class= "users_button" @click="$router.push('/viewprofile')" type="button"><strong>User2</strong></button>
                    </div>
                    
                    <div class = users>
                        <img class="circular-image" src="https://2.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=180" width="30" height="30"/>
                        <button class= "users_button" @click="$router.push('/viewprofile')" type="button"><strong>User3</strong></button>
                    </div>
                   
                    <div class = users>
                        <img class="circular-image" src="https://2.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=180" width="30" height="30"/>
                        <button class= "users_button" @click="$router.push('/viewprofile')" type="button"><strong>User4</strong></button>
                    </div>

                    <br>
                    <div class = chats_button>
                        <button class= "chats_button" @click="$router.push('/Chats')" type="button"><strong>Go to chat!</strong></button>
                    </div>
                    <br>
                
                    <div class = body_friends6>
                        <label><strong>Add more friends!</strong></label> 
                    </div>
                    <br>
                    <div class = body_friends9>
                        <div class = body_friends7>
                            <label>Send request to:</label> 
                        </div>
                        
                        <div class = body_friends8>
                            <input type="text" placeholder="Enter Username or email" name="username or email" required>     
                        </div>
                    </div>
                    <br>
                    <div class = send_req>
                        <button class = send_button type = "submit"><strong>Send request</strong></button>
                    </div>
            </div>      
            
    </template>
    <style>
    .all {
        max-width: 100%;
        display:flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .header_friends{ 
        
        font-family: 'Courier New', Courier, monospace;
        font-size:medium;   
      }
    .users{
        border:3px solid black;
        font-size: "5";
        background-color: turquoise;
        font-family : Arial, Helvetica, sans-serif;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        max-width: 100%;
        width: 600px;
    }
    .users_button {
        font-size: "2";
        color:black;
        background-color: turquoise;
        font-family: Arial, Helvetica, sans-serif;
        flex-direction: row;
        text-align: center;
        padding: 0 50px 0 55px;
        margin-top: 3px;
        margin-bottom: 3px;
        border-radius: 15px;
    }
    
    .chats_button {
        font-size: "13";
        border-color: turquoise;
        color : black;
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        justify-content: center;

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
        width: 200px;
        font-size: "10";
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        flex-direction: column-reverse;
    }
    .body_friends9{
        font-size: "10";
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        justify-content: center;
        
    }
    .send_req {
        font-size: "13";
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        justify-content: center;
        
    }
    .send_button {
        background-color: black;
        color:turquoise;
    }
    
    </style>
    
    