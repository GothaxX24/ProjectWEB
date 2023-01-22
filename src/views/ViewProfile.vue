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
            //Mètode per fer el fetch que ens permet agafar la informació d'un usuari.
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
            //Mètode per fer el fetch que retorna els esdeveniments als quals un usuari ha participat o participarà.
            friendEvents() {
                fetch("http://puigmal.salle.url.edu/api/v2/users/"+ window.localStorage.getItem("friendid")+ "/assistances", {
                    headers: {
                        'Authorization' : 'Bearer ' + window.localStorage.getItem("token")
                    }
                })
                .then((res)=> res.json())
                .then((data) => {
                    this.friend_events = data;
                })
            }
        },
        //Funció que s'executa quan s'obre aquest vue.
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

    

    <h3>
        Recent events
    </h3>

 

    <div class="alls">
        <div v-if="friend_events.length > 0">
            <div class="EventsList-bottom" v-for="(evento, index) in friend_events">
                <div>
                    <img class="EventList-eventimg" v-bind:src=evento.image width="75" height = "75">
                </div>
                <div>
                    <div class="EventsList-bottom-flex">
                        <label class="EventsList-bottom-eventname">{{evento.name}}</label>
                        <img v-bind:src=evento.image width="45" height="45"/>
                        <div class="EventList-bottom-flex2">
                            <form>
                                <div class="clasificacion">
                                    <input id="radio1" type="radio" name="estrellas" value="5">
                                    <label for="radio1">★</label>
                                    <input id="radio2" type="radio" name="estrellas" value="4">
                                    <label for="radio2">★</label>
                                    <input id="radio3" type="radio" name="estrellas" value="3">
                                    <label for="radio3">★</label>
                                    <input id="radio4" type="radio" name="estrellas" value="2">
                                    <label for="radio4">★</label>
                                    <input id="radio5" type="radio" name="estrellas" value="1">
                                    <label for="radio5">★</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div >
                        <label class="EventList-bottom-date">{{evento.date}}</label>
                        <label class="EventList-bottom-street">{{evento.location}}</label>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    
</template>

<style>
.alls{
    display:flex;
    justify-content: center;
}


</style>