<script>
export default {
    data() {
            return {
                userimage: ""
            }

        },
    
        methods: {
            signout() {
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("loggedIn");
                window.localStorage.removeItem("userid");
                location.replace("/");
            },

            getCreatorUser() {
                fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("userid"), {
                    headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    this.userimage = data[0].image;
                })
            },

            deleteUser () {
                fetch("http://puigmal.salle.url.edu/api/v2/users" , {
                    headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                })
                .then((res) => res.json())
                .then((data) => {

                })
            },

            removeLogDelete() {
                window.localStorage.removeItem("loggedIn");
                window.localStorage.removeItem("userid");
            }
        },

        created() {
            this.getCreatorUser()
        }
}

</script>

<template>
    <head>
        <link rel="stylesheet" href="style.css" />
    </head>
    <div>
        <RouterLink to = "/eventslist">
            <img class="back" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Back_Arrow.svg/2048px-Back_Arrow.svg.png">
        </RouterLink>
        <img class="profile-pic" v-bind:src=userimage /> 
    </div>

    <h2>My profile</h2>

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

    <div id="recent-events">
        <img class="imgevent" src="https://isoges14.isonor.es/website_event/static/src/img/event_past_0.jpg">
        <img class="imgevent" src="https://isoges14.isonor.es/website_event/static/src/img/event_past_0.jpg">
        <img class="imgevent" src="https://isoges14.isonor.es/website_event/static/src/img/event_past_0.jpg">
        <img class="imgevent" src="https://isoges14.isonor.es/website_event/static/src/img/event_past_0.jpg">
    </div>

    <div>
        <button @click="$router.push('/myevents')" class="manage-button">Manage my events</button>
    </div>
    <div>  
        <button @click="signout" class="signout-button">SignOut</button>
    </div>
    <div>
        <RouterLink to = "/" v-on:click="removeLogDelete">
            <button @click="deleteUser" class="delete-button">Delete account</button>
        </RouterLink>
    </div>

 
</template>
