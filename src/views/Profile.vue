<script>
export default {
    data() {
            return {
                userimage: ""
            }

        },
    
        methods: {
            // Metode que elimina de la localstorage els elements que hem guardat al iniciar sessió i desconecta al usuari de la applicació (el retorna a la pagina de logIn)
            // Es crida al picat el boto de "Sign Out"
            signout() {
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("loggedIn");
                window.localStorage.removeItem("userid");
                location.replace("/");
            },

            // Metode que realitza un fetch per rebre les dades del usuari que esta creant l'Event, o sigui nosaltres.
            // Es crida a aquest metode al entrar a la pagina (created).
            getCreatorUser() {
                fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("userid"), {
                    headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                })
                .then((res) => res.json())
                .then((data) => {
                    this.userimage = data[0].image;
                })
            },

            // Metode que elimina la conta de l'usuari amb el token que tinguem guardat a la localstorage de la API
            // Es crida al picar el boto de "Delete Account"
            deleteUser () {
                fetch("http://puigmal.salle.url.edu/api/v2/users" , {
                    method: "DELETE",
                    headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                })
                .then((res) => res.json())
                .then((data) => {

                })
            },

            // Es crida juntament amb "deleteUser" per elimiar tota la informació del usuari de la localstorage
            removeLogDelete() {
                window.localStorage.removeItem("token");
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
            <img class="back" src="https://cdn.icon-icons.com/icons2/1674/PNG/512/arrowback_111142.png">
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
