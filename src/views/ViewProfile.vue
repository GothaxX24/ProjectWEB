<script>

    export default {
        
        data() {
            return {
                name: "",
                surname: "",
                image: "",
                friend_events: [],
            }
        },
        methods: {
            viewEvent() {
                
                fetch("http://puigmal.salle.url.edu/api/v2/users/"+ window.localStorage.getItem("friendid"), {
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
            friendEvents() {
                fetch("http://puigmal.salle.url.edu/api/v2/users/"+ window.localStorage.getItem("friendid")+ "/assistances", {
                    headers: {
                        'Authorization' : 'Bearer ' + window.localStorage.getItem("token")
                    }
                })
                .then((res)=> res.json())
                .then((data) => {
                    this.friend_events = data;
                    console.log(this.friend_events)
                })
            }
        },
        created() {
            this.viewEvent();
            this.friendEvents()
        }
    }
</script>
<template>
    <head>
        <link rel="stylesheet" href="style.css" />
    </head>
    <div>
        <RouterLink to = "/friends">
            <img class="back" src="https://cdn.icon-icons.com/icons2/1674/PNG/512/arrowback_111142.png">
        </RouterLink>
        <img class="profile-pic" :src="this.image"/> 
    </div>

    <h2>{{this.name}} {{this.surname}}</h2>

    <div class="separacioImatges"> 
        <RouterLink to = "/friends">
            <img class="pequeña" src="https://cdn-icons-png.flaticon.com/512/880/880594.png">
        </RouterLink>

        <RouterLink to="/statistics">
            <img class="pequeña" src="https://cdn0.iconfinder.com/data/icons/glyphpack/63/statistics-512.png">
        </RouterLink>

        <RouterLink to="/eventhistory">
            <img class="pequeña" src="https://cdn-icons-png.flaticon.com/512/32/32223.png">
        </RouterLink> 
    </div>

    <h3>
        Recent events
    </h3>

    <div id="recent-events" v-if="friend_events.length > 0">
        <img v-for="(event,index) in friend_events" class="imgevent" :src="event.image">
        
    </div>
    <div v-else> NO EVENTS</div>
</template>
