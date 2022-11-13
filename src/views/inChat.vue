<template>
    <div>
        
    </div>  
        <div class = "inChat-all">
            
            <div class="inChat-header">
                <RouterLink to = "/friends">
                    <img class="circular-image" src="https://2.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=180" width="30" height="30"/>
                    <label style="color: white; margin-left: 10px;"><strong>User 1</strong></label>         
                </RouterLink>    
            </div>
            
            
            <div class = inChat-general>
            
                <div class="inChat-top">
                    <div class = inChat-send>
                        <label class="try"><strong>Hey!</strong></label>
                    </div>

                    <div class="prova1">
                        <div class = inChat-send>
                            <label><strong>Hi! How are you?</strong></label>
                        </div>
                    </div>

                    <div class = inChat-response>
                        <label><strong>Great! I went to the event you recommended.</strong></label>
                    </div> 

                    <div class="prova1">
                        <div class = inChat-send>
                            <label><strong>Really? And how was it? I wished it soooo hard but i couldn't assist... </strong></label>
                        </div>
                    </div>

                    <div class = inChat-response>
                        <label class="try"><strong>It was AWESOME! Next time I'll go with u... I promise.</strong></label>
                    </div>

                    <div class="prova1">
                        <div class = inChat-send>
                            <label><strong>...</strong></label>
                        </div>
                    </div>

                    <div class = inChat-response>
                        <label class="try"><strong>?</strong></label>
                    </div>
                    <div class = inChat-response>
                        <label class="try"><strong>What?</strong></label>
                    </div>
                    <div class="prova1">
                        <div class = inChat-send>
                            <label><strong>Nothing</strong></label>
                        </div>
                    </div>
                    <div class="prova1">
                        <div class = inChat-send>
                            <ion-icon id="heart-icon" name="heart"></ion-icon>
                            <ion-icon id="thumbs-up-icon" name="thumbs-up"></ion-icon>
                        </div>
                    </div>



            </div>

        </div>
        <div class="inChat-bottom">
                <ion-icon id = "smile-icon" name="happy-outline"></ion-icon>
                <input class="inChat-bar" type="text" placeholder="Write your message here" name="confirm password" > 
                <ion-icon id="send-icon" name = "send"></ion-icon>
        </div>
    </div>   
        

</template>

<style>


    .inChat-header {
        background-color: grey ;
        margin: none;
        border: none;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 20px;
        width: 100%;
        max-width: 900px;
        padding: 10px;
        
        
    }
    #thumbs-up-icon{
        font-size: 45px;
        color: rgb(248, 170, 0)
    }
    #heart-icon {
        font-size: 45px;
        color: red;

    }
    #smile-icon{
        font-size: 45px;
        color: white;
        margin-right: 15px;
    }
    #send-icon{
        margin-left: 15px;
        font-size: 40px;
        color: white;
    }
    .try {
        overflow-wrap: break-word;
        word-wrap: break-word;
        hyphens: auto;
    }

    .inChat-bottom{
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 900px;
        background-color: gray ;
        padding: 10px;

    }
    .inChat-bar {
        border: solid white;
        border-radius: 50px;
        width: 100%;
        height: 1.5rem;
        
    }
    .inChat-send{
        width: fit-content;
        height: fit-content;
        max-width: 60%;
        min-width: 30px;
        background:rgb(0, 253, 245);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        flex-direction: row;
        border: 2px solid #dedede;
        background-color: #f1f1f1;
        border-radius: 5px;
        padding: 2px;
        margin: 10px 0;
        text-align: right;
        overflow-wrap: break-word;
    }

    .inChat-response{
        width: fit-content;
        height: fit-content;
        max-width: 60%;
        min-width: 30px;
        background:rgb(0, 253, 245);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        flex-direction: row;
        border: 2px solid #dedede;
        background-color: #f1f1f1;
        border-radius: 5px;
        padding: 2px;
        margin: 10px 0;
        text-align: left;
    }
    .prova1{
        display: flex;
        flex-direction: row-reverse;
    }

    #inChat-order{
        width:100%;
        height: 100%;
        max-width: 900px;
        max-height:300px;
        min-height: 500px;
        display: flex;
        flex-direction: column;
    }
    .inChat-general{
        width:100%;
        height: 100%;
        max-width: 900px;
        max-height:300px;
        min-height: 500px;
        background:rgb(0, 253, 245);
        background-color: #2768ea;
        padding: 10px;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .inChat-top{
        width: 100%;
    }
    .inChat-all {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        display: flex;
        align-items: center;
        flex-direction: column;
        border-radius: 5px;
        padding: 2px;
        margin: 10px 0;
        text-align: left;
    }

</style>