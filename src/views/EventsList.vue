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
                eventslist() {
                    // Metode que realitza un fetch que retorna tots els Events. Dins d'aquest fetch realitzem un altre per rebre la informacio del creador del cada Event.
                    // Es crida a aquest metode al entrar a la pagina (created).
                    fetch("http://puigmal.salle.url.edu/api/v2/events", {
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

                // Metode que emagatzema la id del Event i del creador del Event que s'hagi picat a la localstorage
                // Es crida al picar un dels Events dins del v-for
                getEventID(index) {
                    let id = this.events[index].id
                    let userid = this.events[index].owner_id
                    window.localStorage.setItem("eventid", id);
                    window.localStorage.setItem("currenteventowner", userid);
                },

                // Metode que canvia el format de la data rebuda per la API
                getRightDate(i) {
                    this.correctDate[i] = this.events[i].eventStart_date.substring(0, 10)
                },

                // Metode que realitza un fetch que retorna tots els events amb el filtre de nom, data i localització indicats. Previament al fetch, s'ha de preparar el path.
                // Es crida al picar el boto de "Search"
                eventlistByName(searchlocation, searchdate, searchkeyword) {
                    let path = "?";
                    if (this.searchlocation) {
                        path = path + "location=" + this.searchlocation + "&";
                    }
                    if (this.searchdate) {
                        path = path + "date=" + this.searchdate + "&";
                    }
                    if (this.searchkeyword) {
                        path = path + "keyword=" + this.searchkeyword + "&";
                    }
                    path.slice(0, -1);

                    fetch("http://puigmal.salle.url.edu/api/v2/events/search" + path, {
                        headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                    })
                    .then((res) => res.json())
                    .then((data) => {
                        this.events = data;
                        for (let i=0; i<data.length;i++) {
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

                // Metode que realitza un fetch que retorna tots els events ordenats per major rating del usuari que els crea.
                // Es crida al picar el desplegable de "Sort by" i elegir la opció de "Rating"
                sortByBest() {
                    fetch("http://puigmal.salle.url.edu/api/v2/events/best", {
                        headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                    })
                    .then((res) => res.json())
                    .then((data) => {
                        this.events = data;
                        for (let i=0; i<data.length;i++) {
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
                }
            },

            created() {  
                this.eventslist()
            }
        }
</script>

<script setup>
    import HeaderMenu from '../components/HeaderMenu.vue'
</script>

<template>
    <HeaderMenu />
    
    <head>
        <link rel="stylesheet" href="style.css" />
    </head>
    
        <div id="eventlist">
            <h1>EVENTS</h1>
            <label class="EventsList-SearchEvent">Search event</label>
            <button v-on:click.prevent="eventlistByName({searchlocation, searchdate, searchkeyword})"><strong>Search</strong></button>
            <div>
                <div class="EventsList-margin1">
                    <label class="letranegrita">Name </label> 
                    <input v-model="searchkeyword" class="EventsList-nameinput" type="text" placeholder="" name="" required> 
                </div>
                <div class="EventsList-margin1">
                    <label class="letranegrita"> Date </label> 
                    <input v-model="searchdate" class="EventsList-dateinput" type="date" placeholder="" name="" required> 
                </div>
                <div class="EventsList-margin1">
                    <label class="letranegrita">Location </label> 
                    <input v-model="searchlocation" class="EventsList-locationinput" type="text" placeholder="" name="" required> 
                </div>
            </div>
            <div class="EventsList-middle">
                <button class="EventsList-middle-buttoncreate" @click="$router.push('/createevent')" type="button">Create your own EVENT</button>
                <div class ="EventList-middle-desplegableflex"> 
                    <div class="EventList-middle-desplegable">
                        <button class="EventList-middle-button">Sort by</button>
                        <div class="EventList-middle-links">
                            <a href="#">Name</a>
                            <a href="#">Date</a>
                            <a href="#">Location (proximity)</a>
                            <a href="#" v-on:click="sortByBest()" >Rating</a>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div class="EventsList-bottom" v-for="(evento, index) in events">
                    <div>
                        <RouterLink to = "/viewevent" v-on:click="getEventID(index)">
                            <img class="EventList-eventimg" v-bind:src=evento.image width="75" height = "75">
                        </RouterLink>  
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

                
                
                
                <div class="EventsList-bottom-row">
                    <img src="https://img.freepik.com/iconos-gratis/numero-cuadrado-redondeado_318-10115.jpg" width="25" height="25"/>
                    <img src="https://img.freepik.com/iconos-gratis/numero-cuadrado-redondeado_318-10115.jpg" width="25" height="25"/>
                    <img src="https://img.freepik.com/iconos-gratis/numero-cuadrado-redondeado_318-10115.jpg" width="25" height="25"/>
                </div>
            </div>
        </div>
</template>


<style>

#eventlist{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.EventsList-SearchEvent{
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-right: 70px;  
    font-size: larger;
    font-weight: bolder;
}

.EventsList-margin1 {  
    display: flex;
    margin-top: 10px;
    margin-left: 20px;
}

.EventsList-nameinput{
    margin-left:10px;
    width: 228px;
}

.EventsList-dateinput{
    margin-left:10px;
    width: 240px;
}

.EventsList-locationinput{
    margin-left:10px;
    width: 205px;
}

.EventsList-middle{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    margin-bottom: 20px;
    margin-right: 80px;  
}

.EventsList-middle-buttoncreate{
    margin-top: 20px;
    width: 160px;
    background-color: aliceblue;
}

.EventList-middle-desplegableflex{
    display: flex;
    margin-left: 30px;
}

.EventList-middle-desplegable:hover .EventList-middle-links{
    display: block;
    background-color:antiquewhite;
}

.EventList-middle-desplegable{
    position: absolute;
}

.EventList-middle-button{
    border: none;
    padding: 10px;
    background-color:aliceblue;
}

.EventList-middle-links a{
    color: black;
    display: block;
    padding: 8px;
}

.EventList-middle-links{
    display: none;
}

.EventList-middle-links a:hover{
    background-color: #f1f1f1;
}

.EventsList-bottom{
    display: flex;
    flex-direction: row;
    padding-left: 20px; 
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;;
}

.EventsList-bottom-flex{
    display: flex;
    align-items:flex-start;
    justify-content: space-around;
}

.EventsList-bottom-eventname{  
    font-size: x-small;
    font-weight: bolder;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
}

.EventList-bottom-flex2{
    display: flex;
    flex-direction: column;
    margin-top: 2px;
    margin-left: 10px;
}

.EventList-bottom-creatorname{
    font-weight: bolder;
    font-size: x-small;
}

.EventList-bottom-date{
    margin-right: 15px;
    font-size: x-small;
}

.EventList-bottom-street{
    font-size: x-small;
}

.EventsList-bottom-row{
    display: flex;
    flex-direction: row;
    justify-content: end;
}






#form {
  width: 250px;
  margin: 0 auto;
  height: 50px;
}

#form div {
  text-align: center;
}

#form label {
  font-size: 20px;
}

input[type="radio"] {
  display: none;
}

label {
  color: grey;
}

.clasificacion {
  direction: rtl;
  unicode-bidi: bidi-override;
}


</style>