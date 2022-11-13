<template >
        
    <header class ="header_chats">
        
        <h1>Chats</h1>
        
    </header>
        
    <div class = chats_body> 
              
            <div class = chats_text>
                <label><strong>Your friends: </strong></label>         
            </div>

            <div class = chats_text>
                <img class="circular-image" src="https://2.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=180" width="30" height="30"/>
                <label>User 1</label> 
                <div class = chats_send>
                    <button class= "chats_send" @click="$router.push('/inChat')" type="button"><strong>Send message</strong></button>
                </div>
                <div class = body_chats11>
                    <label><strong>You have 1 message!</strong></label>
                </div>
            </div>

    
            <div class = chats_text>
                <img class="circular-image" src="https://2.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=180" width="30" height="30"/>
                <label>User 2</label>
                <div class = chats_send>
                    <button class= "chats_send" @click="$router.push('/inChat')" type="button"><strong>Send message</strong></button>
                </div>
            </div>
            
            <div class = chats_text>
                <img class="circular-image" src="https://2.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=180" width="30" height="30"/>
                <label>User 3</label> 
                <div class = chats_send>
                    <button class= "chats_send" @click="$router.push('/inChat')" type="button"><strong>Send message</strong></button>
                </div>
            </div>
           
            <div class = chats_text>
                <img class="circular-image" src="https://2.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=180" width="30" height="30"/>
                <label>User 4</label> 
                <div class = chats_send>
                    <button class= "chats_send" @click="$router.push('/inChat')" type="button"><strong>Send message</strong></button>
                </div>
                <div class = body_chats11>
                    <label><strong>You have 1 message!</strong></label>
                </div>
            </div>

            <br>
        
            <div class = chats_text>
                <label><strong>Other suggestions:</strong></label> 
            </div>
           
            <div class = chats_text>
                <img class="circular-image" src="https://2.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=180" width="30" height="30"/>
                <label>User 5</label> 
                <div class = chats_send>
                    <button class= "chats_send" @click="$router.push('/inChat')" type="button"><strong>Send message</strong></button>
                </div>
            </div>
            
            <div class = chats_text>
                <img class="circular-image" src="https://2.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=180" width="30" height="30"/>
                <label>User 6</label>  
                <div class = chats_send>
                    <button class= "chats_send" @click="$router.push('/inChat')" type="button"><strong>Send message</strong></button>
                </div>  
            </div>

            <div class = chats_text>
                <img class="circular-image" src="https://2.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=180" width="30" height="30"/>
                <label>User 7</label>  
                <div class = chats_send>
                    <button class= "chats_send" @click="$router.push('/inChat')" type="button"><strong>Send message</strong></button>
                </div>  
            </div>
    </div>      
    
</template>
<style>
.header_chats{ 

font-family: 'Courier New', Courier, monospace;
font-size:medium;   
}

.chats_body{
background-color: white;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
border: none;
max-width: 100%;

}

.chats_text{
border:3px solid black;
margin-bottom: 1px;
font-size: "2";
background-color: turquoise;
font-family : Arial, Helvetica, sans-serif;
display: flex;
flex-direction: row;
width: 100%;
max-width: 600px;
}


.chats_send{
    
    font-size: "2";
    color: rgb(255, 255, 255);
    text-shadow: 0 0 3px #010303;
    background-color: turquoise;
    font-family: Arial, Helvetica, sans-serif;
    flex-direction: row;
    text-align: center;
    padding: 0 50px 0 55px;
    margin-top: 3px;
    margin-bottom: 3px;
    border-radius: 15px;
}

.body_chats11 {
    border: 3px solid rgb(255, 255, 255);
    font-size: "2";
    color: rgb(0, 0, 0);

    font-family: Arial, Helvetica, sans-serif;
    flex-direction:row;
    text-align:right;
    padding: 1 50px 1 60px;
}
</style>

