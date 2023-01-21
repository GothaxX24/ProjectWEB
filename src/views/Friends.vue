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
            searchuser(request_name) {
                fetch ('http://puigmal.salle.url.edu/api/v2/users/search?s=' + this.request_name ,{
                    headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                })
                .then((res) => res.json())
                .then((data) => {
                    
                    
                    if (data[0].name === this.request_name || data[0].email === this.request_name) {
                        window.localStorage.setItem("userid" ,data[0].id);
                        this.sendFriendRequest();

                    } else {
                        alert("No person with that name or email");
                    }
                    
                })
            },
            sendFriendRequest() {
                fetch("http://puigmal.salle.url.edu/api/v2/friends/"+ window.localStorage.getItem("userid"), {
                    method: "POST",
                    headers: {
                        'Authorization' : 'Bearer ' + window.localStorage.getItem("token")
                    
                    }
                }
                )
                .then((res)=>res.json())
                .then((data) => {
                    alert("Request sent succesfully!");
                    
                })

            },
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
                })
            },
            pendingRequest() {
                fetch("http://puigmal.salle.url.edu/api/v2/friends/requests", {
                    method: 'GET',
                    headers: {
                        'Authorization' : 'Bearer ' + window.localStorage.getItem("token")
                    }
                }
                )
                .then((res)=>res.json())
                .then((data) => {
                    
                    this.requested_users = data;
                })

                
            },
            addFriend(id) {
                fetch("http://puigmal.salle.url.edu/api/v2/friends/" + window.localStorage.getItem("requestedid"), {
                    method: "PUT",
                    headers: {
                        'Authorization' : "Bearer " + window.localStorage.getItem("token")
                    }
                }
                )
                .then((res)=>res.json())
                .then((data) => {
                    alert("Friend request accepted succesfully");
                })
            },
            deleteFriend(id) {
                fetch("http://puigmal.salle.url.edu/api/v2/friends/" + window.localStorage.getItem("requestedid"), {
                    method: "DELETE",
                    headers: {
                        'Authorization' : "Bearer " + window.localStorage.getItem("token")
                    }
                }
                )
                .then((res)=>res.json())
                .then((data) => {
                    alert("Friend Request rejected succesfully");
                })
                
            },
            getFriendID(index) {
                let id = this.user_friends[index].id;
                window.localStorage.setItem("friendid", id);
            },
            acceptRequest(index) {
                let id = this.requested_users[index].id
                window.localStorage.setItem("requestedid",id);
                this.addFriend();
            },            
            rejectRequest(index) {
                let id = this.requested_users[index].id
                window.localStorage.setItem("requestedid",id);
                this.deleteFriend();
            },
                      


        },
        created() {
                
                
                this.showFriends();
                this.pendingRequest();
            }
    }
</script>

<template >
    <head>
        <link rel="stylesheet" href="style.css" />
    </head>
    <div class="menu">
        <img class="icono-menu" src=/>
        <div class="menulinks">
            <RouterLink to="/profile">
                <img class="iconos-menu" src="https://static.thenounproject.com/png/638636-200.png">
                <a>Profile </a>      
            </RouterLink>
            <RouterLink to="/friends">
                <img class="iconos-menu" src="https://cdn-icons-png.flaticon.com/512/880/880594.png">
                <a>Friends</a>
            </RouterLink>
            <RouterLink to="/eventslist">
                <img class="iconos-menu" src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png">
                <a>Search event</a>
            </RouterLink>    
            <RouterLink to="/createevent">
                <img class="iconos-menu" src="https://cdn-icons-png.flaticon.com/512/32/32339.png">
                <a>Create event</a>
            </RouterLink> 
            
        </div>
    </div>
            <header class ="header_friends">
                
                <h1>Friends</h1>
                
            </header>
                
            <div class = all> 
                      
                    <div class = users>
                    <label><strong>Your friends: </strong></label>         
                    </div>
                    
                        <div class = users2 v-for="(friend,index) in user_friends" >
                            <RouterLink class = users2 to = "/viewprofile"  v-on:click="getFriendID(index)">
                                <img class="circular-image" :src="friend.image"  width="30" height="30"/>
                                <p><strong>{{friend.name}}  {{friend.last_name}}</strong></p>
                            </RouterLink>
                            
                            
                        </div>
                    
                    <br>

                    <div class = users>
                        <label><strong>Friends Requests</strong></label>
                    </div>

                    <div class = requested v-for ="(request,index) in requested_users">
                        <RouterLink to="/ViewProfile">
                            <div class= friends>
                                <img class = "circular-image" :src = "request.img" width="30" height="30" alt="">
                                <strong>{{request.name}} {{request.last_name}}</strong>
                            </div>
                        </RouterLink>
                            

                        <div class="outterbutton">
                            <div class="buttonss">
                                <button class="buttonss" v-on:click="acceptRequest(index)">Accept</button>
                            </div>
                            <div class="buttonss">
                                <button class="buttonss" v-on:click="rejectRequest(index)">Deny</button>
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
                            <input v-model=request_name type="text" placeholder="Enter Username or email" name="username or email" required>     
                        </div>
                    </div>
                    <br>
                    
                    <div class = send_req>
                        <button v-on:click="searchuser(request_name)" class = send_button type = "submit"><strong>Send request</strong></button>
                    </div>
                    
                    <div class = send_req>

                            <button @click="$router.push('/Chats')" class = send_button type = "submit"><strong>Go to Chats!</strong></button>
                    </div>
                    
            </div>      
    
            
    </template>
    <style>
    .users2{
        display:flex;
        align-items: center;
        justify-content: space-around;
        border:1px solid black;
        font-size: "5";
        background-color: turquoise;
        font-family : Arial, Helvetica, sans-serif;
        max-width: 100%;
        width: 600px;
    }
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
    
    