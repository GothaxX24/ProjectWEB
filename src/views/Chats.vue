<template >
        
    <header class ="header_friends">
        
        <h1>Chats</h1>
        
    </header>
        
    <div> 
              
            <div class = body_chats1>
                <label><strong>Your friends: </strong></label>         
            </div>

            <div class = body_chats1>
                <img class="circular-image" src="https://2.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=180" width="30" height="30"/>
                <label>User 1</label> 
                <div class = body_chats10>
                    <button class="Chats-button"><strong>Send message</strong></button>
                </div>
                <div class = body_chats11>
                    <label><strong>You have 1 message!</strong></label>
                </div>
            </div>

    
            <div class = body_chats1>
                <img class="circular-image" src="https://2.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=180" width="30" height="30"/>
                <label>User 2</label>
                <div class = body_chats10>
                    <button class="Chats-button"><strong>Send message</strong></button> 
                </div>
            </div>
            
            <div class = body_chats1>
                <img class="circular-image" src="https://2.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=180" width="30" height="30"/>
                <label>User 3</label> 
                <div class = body_chats10>
                <button class="Chats-button"><strong>Send message</strong></button>
                </div>
            </div>
           
            <div class = body_chats1>
                <img class="circular-image" src="https://2.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=180" width="30" height="30"/>
                <label>User 4</label> 
                <div class = body_chats10>
                    <button class="Chats-button"><strong>Send message</strong></button>
                </div>
                <div class = body_chats11>
                    <label><strong>You have 1 message!</strong></label>
                </div>
            </div>

            <br>
        
            <div class = body_chats1>
                <label><strong>Other suggestions:</strong></label> 
            </div>
           
            <div class = body_chats1>
                <img class="circular-image" src="https://2.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=180" width="30" height="30"/>
                <label>User 5</label> 
                <div class = body_chats10>
                    <button class="Chats-button"><strong>Send message</strong></button>
                </div>
            </div>
            
            <div class = body_chats1>
                <img class="circular-image" src="https://2.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=180" width="30" height="30"/>
                <label>User 6</label>  
                <div class = body_chats10>
                    <button class="Chats-button"><strong>Send message</strong></button>
                </div>  
            </div>

            <div class = body_chats1>
                <img class="circular-image" src="https://2.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=180" width="30" height="30"/>
                <label>User 7</label>  
                <div class = body_chats10>
                    <button class="Chats-button"><strong>Send message</strong></button>
                </div>  
            </div>
    </div>      
    
</template>
<style>
.header_friends{ 

font-family: 'Courier New', Courier, monospace;
font-size:medium;   
}

.body_chats1{
border:3px solid black;
font-size: "2";
background-color: turquoise;
font-family : Arial, Helvetica, sans-serif;
display: flex;
flex-direction: row;
}


.body_chats10{
    
    font-size: "2";
    color: rgb(255, 255, 255);
    text-shadow: 0 0 3px #010303;
    background-color: turquoise;
    font-family: Arial, Helvetica, sans-serif;
    flex-direction: row;
    text-align: center;
    padding: 0 50px 0 55px;
    margin-top: 3px;
}

.body_chats11 {
    border: 5px solid rgb(255, 255, 255);
    font-size: "2";
    color: rgb(0, 0, 0);

    font-family: Arial, Helvetica, sans-serif;
    flex-direction:row;
    text-align:right;
    padding: 1 50px 1 60px;
    margin-top: 0px;

}
</style>

