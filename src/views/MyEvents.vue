<script>
    export default {
            data() {
                return {
                    events: [],
                    correctDate: [],
                    username: [],
                    image: [],
                    searchdate: "",
                    searchkeyword: "",
                    searchlocation: ""
                }

            },
            methods: {
                // Metode que realitza un fetch que retorna tots els events que hagi creat l'usuari que li fiquem al path (en aquest cas el nostre usuari) 
                // Es crida a aquest metode al entrar a la pagina (created).
                eventslist() {
                    fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("userid") + "/events/finished", {
                        headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                    })
                    .then((res) => res.json())
                    .then((data) => {
                            this.events = data;
                            for (let i=0; i<data.length;i++) {
                                this.getRightDate(i);
                                fetch("http://puigmal.salle.url.edu/api/v2/users/" + this.events[i].owner_id, {
                                    headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                                })
                                .then((res) => res.json())
                                .then((data) => {
                                        this.username[i] = data[0].name + " " +  data[0].last_name;
                                        this.image[i] = data[0].image;
                                })
                            }
                    })
                }, 

                getRightDate(i) {
                    this.correctDate[i] = this.events[i].eventStart_date.substring(0, 10)
                },
            },

            created() {
                this.eventslist()
            }
        }


</script>



<template>
    <main>
        <head>
            <link rel="stylesheet" href="style.css" />
        </head>
        <div>
            <RouterLink to = "/profile">
                <img class="back" src="https://cdn.icon-icons.com/icons2/1674/PNG/512/arrowback_111142.png">
            </RouterLink>
        </div>
        <div id="eventlist">
            <h1>MY PAST EVENTS</h1>


            <div >
                <div class="EventsList-bottom" v-for="(evento, index) in events">
                    <div>
                        <img class="EventList-eventimg" v-bind:src=evento.image width="75" height = "75">
                    </div>
                    <div>
                        <div class="EventsList-bottom-flex">
                            <label class="EventsList-bottom-eventname">{{evento.name}}</label>
                            <img v-bind:src=image[index] width="45" height="45"/>
                            <div class="EventList-bottom-flex2">
                                <label class="EventList-bottom-creatorname">{{username[index]}}</label>
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
                            <label class="EventList-bottom-date">{{correctDate[index]}}</label>
                            <label class="EventList-bottom-street">{{evento.location}}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>


<style>

.No-events{
    margin-top:20px;
}

</style>