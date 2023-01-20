<script>
    export default {
        data() {
            return {
                requested_users: [],
                user_friends: [],
                request_name: ""
            }
        },
        methods: {
            sendFriendRequest() {
                fetch("http://puigmal.salle.url.edu/api/v2/friends/"+ window.localStorage.getItem("userid"), {
                    method: "POST",
                    headers: {
                        'Authorization' : window.localStorage.getItem("token")
                    
                    }
                }
                )
                .then((res)=>res.json())
                .then((data) => {
                    if (data.affectedRows = 0) {
                        alert("Error: No person with that name");
                    } else {
                        alert("Request sent succesfully!");
                    }
                })

            },
            showFriends() {
                fetch("http://puigmal.salle.url.edu/api/v2/friends/", {
                    method: "GET",
                    headers: {
                        'Authorization' : window.localStorage.getItem("token")
                    
                    }
                }
                )
                .then((res)=>res.json())
                .then((data) => {
                    this.user_friends = data;
                })
            },
            pendingRequest() {
                fetch("http://puigmal.salle.url.edu/api/v2/friends/requests", {
                    method: "GET",
                    headers: {
                        'Autorization' : "Bearer" + window.localStorage.getItem("token")
                    }
                }
                .then((res)=>res.json())
                .then((data)=> {
                    this.requested_users = data;
                })
                )
            },
            addFriend(id) {
                fetch("http://puigmal.salle.url.edu/api/v2/friends/" + id, {
                    method: "PUT",
                    headers: {
                        'Autorization' : "Bearer" + window.localStorage.getItem("token")
                    }
                }
                .then()
                .then()
                )
            },
            deleteFriend(id) {
                fetch("http://puigmal.salle.url.edu/api/v2/friends/" + id, {
                    method: "DELETE",
                    headers: {
                        'Autorization' : "Bearer" + window.localStorage.getItem("token")
                    }
                }
                .then()
                .then()
                )
            },
            getFriendID(index) {
                let id = this.friend[index].id;
                window.localStorage.setItem("friendid", id);
            },
            getRequestedID(index) {
                let id = this.requested_users[index].id
                window.localStorage.setItem("requestedid",id);
            }
            ,
            created() {
                this.showFriends()
            }


        }
    }
</script>

<script setup>
    import HeaderMenu from '../components/HeaderMenu.vue'
</script>

<template >
    <head>
        <link rel="stylesheet" href="style.css" />
    </head>
    <HeaderMenu />

    <header class ="header_friends">
                
        <h1>Friends</h1>
                
    </header>
                
            <div class = all> 
                      
                    <div class = users>
                    <label><strong>Your friends: </strong></label>         
                    </div>
                  
                    <div class = usersout v-for="(friend,index) in user_friends" >
                        <RouterLink class to = '/inChat' v-on:click="addFriend(this.user_friends[index].id)">
                            <img class="circular-image" src={{friend.image}} width="30" height="30"/>
                            <p><strong>{{friend.name}} {{friend.lastname}}</strong></p>
                        </RouterLink>
                    </div>

                    <br>

                    <div class = users>
                        <label><strong>Friends Requests</strong></label>
                    </div>

                    <div class = requested v-for ="(request,index) in requested_users">
                        <div class= friends>
                            <img class = "circular-image" src={{request.img}} width="30" height="30" alt="">
                            <strong>{{request.name}} {{request.last_name}}</strong>
                        </div>
                        <div class="outterbutton">
                            <div class="buttonss">
                                <button class="buttonss" v-on:click="getRequestedID(index)">Accept</button>
                            </div>
                            <div class="buttonss">
                                <button class="buttonss" v-on:click="deleteFriend(index)">Deny</button>
                            </div>

                        </div>
                        
                        
                    </div>
                 
                
                    <div class = body_friends6>
                        <label><strong>Add more friends!</strong></label> 
                    </div>
                    <br>
                    <div class = body_friends9>
                        <div class = body_friends7>
                            <label>Send request to:</label> 
                        </div>
                        
                        <div class = body_friends8>
                            <input v-model="request_name" type="text" placeholder="Enter Username or email" name="username or email" required>     
                        </div>
                    </div>
                    <br>
                    
                    <div class = send_req>
                        <button v-on:click="sendFriendRequest()" class = send_button type = "submit"><strong>Send request</strong></button>
                    </div>
                    
            </div>      
    
            
    </template>
    <style>
    .outterbutton{
        display: flex;
    }
    .friends {
        display: flex;
        align-items: center;
    }
    .buttonss{
        max-width: fit-content;
        margin-right: 10px;
    }
    .requested{
        background-color: turquoise;
        max-width: 100%;
        width: 600px;
        border:1px solid black;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .send_button2 {
        background-color: black;
        color:turquoise;
            
        
    }
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
        border:1px solid black;
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
    .usersout{
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
   
    .send_req {
        font-size: "13";
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        justify-content: center;
        padding-bottom: 10px;
        
    }
    .send_button {
        background-color: black;
        color:turquoise;
    }
    
    </style>
    
    