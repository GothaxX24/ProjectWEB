<script>
    export default{
        data() {
            return {
                messages: [],
                idfriend: window.localStorage.getItem("userschats"),
                content: "",
                name: "",
                surname: "",
                image: ""
            }
        },
        methods: {
            //Mètode per fer el fetch que carrega les dades de l'usuari amb el que s'està parlant.
            loadinfo() {
                
                fetch("http://puigmal.salle.url.edu/api/v2/users/"+ window.localStorage.getItem("userschats"), {
                    headers: {
                        'Authorization': 'Bearer ' + window.localStorage.getItem('token')
                    }
                }
                )
                .then((res)=> res.json())
                .then((data) => {
                    this.name = data[0].name;
                    this.surname = data[0].last_name;
                    this.image = data[0].image;
                })
            },
            //Mètode per realitzar el fetch que permet enviar missatges al chat.
            sendmsg() {
                fetch("http://puigmal.salle.url.edu/api/v2/messages", {
                    method: "POST",
                    headers: {
                        'Authorization' : 'Bearer ' + window.localStorage.getItem("token"),
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({content: this.content, user_id_send: window.localStorage.getItem("userid") , user_id_recived: window.localStorage.getItem("userschats") }),
                })
                .then((res) => res.json())
                .then((data) => {

                })
            },

            //Mètode per realitzar el fetch que retorna els missatges del chat.
            loadmessages() {

                fetch("http://puigmal.salle.url.edu/api/v2/messages/"+ window.localStorage.getItem("userschats"), {
                    method: "GET",
                    headers: {
                        'Authorization' : "Bearer " + window.localStorage.getItem("token")
                    }
                })
                .then((res)=>res.json())
                .then((data) => {
                    this.messages = data;
                })
            }
        },
        //Funció que s'executa quan s'entra en aquest
        created() {
            this.loadmessages();   
            this.loadinfo(); 
        }
    }


</script>

<template>
     
    <div class = "inChat-all">
        
        <div class="inChat-header">
            <RouterLink to = "/friends">
                <img class="circular-image" src="https://2.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=180" width="30" height="30"/>
                <label style="color: white; margin-left: 10px;"><strong>{{this.name}} {{ this.surname }}</strong></label>         
            </RouterLink>    
        </div>
        
        
        <div class = inChat-general>
            
            <div class="inChat-top">
                <div v-for="(msg) in messages">
                    <div class="prova1" v-if="msg.user_id_send != idfriend ">
                        <div class = inChat-send>
                            <label><strong>{{msg.content}}</strong></label>
                        </div>
                    </div>
                    
                    <div class = inChat-send v-else>
                        <label class="try"><strong>{{ msg.content }}</strong></label>
                    </div>

                   
                </div>
                

                
                



            </div>

        </div>
        <div class="inChat-bottom">
            <ion-icon id = "smile-icon" name="happy-outline"></ion-icon>
            <input class="inChat-bar" v-model="this.content" type="text" placeholder="Write your message here" name="confirm password" > 
            <ion-icon v-on:click.prevent="sendmsg()" id="send-icon" name = "send"></ion-icon>
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