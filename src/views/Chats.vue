<script>
    export default {
            data() {
                return {
                    userschats: [],
                    user_friends: []
                }

            },
            methods: {
                showFriends() {
                    fetch("http://puigmal.salle.url.edu/api/v2/friends/", {
                        method: "GET",
                        headers: {
                            'Authorization' : 'Bearer ' + window.localStorage.getItem("token")
                        
                        }
                    }
                    )
                    .then((res)=>res.json())
                    .then((data) => {
                        this.user_friends = data;
                        console.log(this.user_friends)
                    })
                },
                userchats() {
                    fetch("http://puigmal.salle.url.edu/api/v2/messages/users" , {
                        headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                    })
                    .then((res) => res.json())
                    .then((data) => {

                        this.userschats = data
                        

                    })
                    
                },
                getUser(index) {
                    
                    let id = this.userschats[index].id
                    window.localStorage.setItem("userschats", id);
                },
                getFriendID(index) {
                    let id = this.user_friends[index].id;
                    window.localStorage.setItem("userschats", id);
                }
            },

            created() {
                this.showFriends();
                this.userchats();
            }

        
    }
</script>


<template >
        
    <header class ="header_chats">
        
        <h1>Chats</h1>
        
    </header>
        
    <div class = chats_body> 
              
            <div class = chats_text>
                <label><strong>Your Chats: </strong></label>         
            </div>

            <div v-for = "(user,index) in userschats" class = chats_text>
                <img class="circular-image" :src= user.image width="30" height="30"/>
                <label>{{user.name}}</label> 
                <div class = chats_send>
                    <button v-on:click="getUser(index)" class= "chats_send" @click="$router.push('/inChat')" type="button"><strong>Send message</strong></button>
                </div>
            
            </div>
            <br>
            <div class = chats_text>
                <label><strong>Your friends: </strong></label>    
            </div>
            
            <div v-for = "(friend,index) in user_friends" class = chats_text>
                <img class="circular-image" :src= friend.image width="30" height="30"/>
                <label>{{friend.name}}</label> 
                <div class = chats_send>
                    <button v-on:click="getFriendID(index)" class= "chats_send" @click="$router.push('/inChat')" type="button"><strong>Send message</strong></button>
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
align-items: center;

width: 100%;
max-width: 600px;
}


.chats_send{
    border-radius: 1px;
    border-color: #010303;
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

