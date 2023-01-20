<script>
    export default {
                data() {
                    return {
                        username: "",
                        userimage: "",
                        eventname: "",
                        eventimage: "",
                        eventlocation: "",
                        eventdescription: "",
                        eventparticipants: "",
                        eventtype: "",
                        eventstart: "",
                        eventend: "",
                        latitude: "",
                        longitude: ""
                    }

                },
                methods: {
                    getCreatorUser() {
                        fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("userid"), {
                            headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                        })
                        .then((res) => res.json())
                        .then((data) => {
                            this.username = data[0].name + " " + data[0].last_name;
                            this.userimage = data[0].image;
                        })
                    },

                    postEvent(eventname, eventimage, eventlocation, eventdescription, eventparticipants, eventtype, eventstart, eventend) {
                        fetch("http://puigmal.salle.url.edu/api/v2/events", {
                            method: "POST",
                            headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token"), "Content-Type": "application/json"},
                            body: JSON.stringify({ name: this.eventname, image: this.eventimage, location: this.eventlocation, latitude: this.latitude, longitude: this.longitude, description: this.eventdescription, eventStart_date: this.eventstart, 
                                                eventEnd_date: this.eventend,  n_participators: this.eventparticipants, type: this.eventtype
                            }), 
                        })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.name) {
                               location.replace("/eventslist");
                            }
                            else {
                                alert('Missing information');
                            }
                        })
                    },

                    /*modificarDate() {
                        this.eventstart = this.eventstart + ":00.000Z"
                        this.eventend = this.eventend + ":00.000Z"
                    }*/
                },

                created() {
                    this.getCreatorUser()
                }
    }
</script>

<script setup>
    import HeaderMenu from '../components/HeaderMenu.vue'
</script>

<template>
    <head>
        <link rel="stylesheet" href="style.css" />
    </head>
    <HeaderMenu />
        <h1>
            EVENT CREATION!
        </h1>
        
            <div class="CreateEvent-top" >
            
                <article class="CreateEvent-top-letters"> Welcome <strong>{{username}}</strong> to event creation</article>
                <article><img class="circular-image" v-bind:src=userimage width="100" height="100"/> </article> 

        

            </div>
       
        
        <div class="CreateEvent-middle">
            <div class="margintop10">
                <label class="letranegrita">Name </label> 
                <input v-model="eventname" class="CreateEvent-middle-nameinput" type="text" placeholder="" name="" required> 
            </div>
            
            <div class="margintop10">
                <label class="letranegrita">Start Date </label> 
                <input v-model="eventstart" class="marginright10" type="datetime-local" placeholder="" name="" required>
            </div>
            <div>
                <label class="letranegrita">End Date </label> 
                <input v-model="eventend" class="marginright10" type="datetime-local" placeholder="" name="" required>
            </div>
            <div class="margintop10">
                <label class="letranegrita">Location </label> 
                <input v-model="eventlocation" class="CreateEvent-middle-locationinput" type="Text" placeholder="" name="" required> 
            </div>
            <div class="CreateEvent-middle-maineventimg">
                <label class="letranegrita">Main event image</label>
            </div>
            <div class="CreateEvent-middle-centraimg">
                <input  v-model="eventimage" class="margintop10" type="text" placeholder="" name="" required>
            </div>
            <div class="CreateEvent-middle-description">
                <label class="letranegrita">Description</label>
            </div>
            <div class="margintop10">
                <input v-model="eventdescription" class="CreateEvent-middle-descriptioninput" type="Text" placeholder="" name="" required>
            </div>
            <div class="margintop10">
                <label class="letranegrita">Event Type </label>
                <input v-model="eventtype" class="CreateEvent-middle-typeinput" type="text" placeholder="" name="" required> 
            </div>
            <div class="margintop10">
                <label class="letranegrita">Max. Participants </label>
                <input v-model="eventparticipants" class="CreateEvent-middle-partinput" type="number" placeholder="" name="" required> 
            </div>
            <div class="margintop10">
                <label class="letranegrita">Latitude </label>
                <input v-model="latitude" class="CreateEvent-middle-partinput" type="number" placeholder="" name="" required> 
            </div>
            <div class="margintop10">
                <label class="letranegrita">Longitude </label>
                <input v-model="longitude" class="CreateEvent-middle-partinput" type="number" placeholder="" name="" required> 
            </div>
            <div class="CreateEvent-middle-additionalimages">
                <label class="letranegrita">Additional images</label>
                <label> (Optional)</label>
            </div>
            <div class="margintop10">
                <img class="marginright10" src="https://www.marquid.com/wp-content/uploads/2017/06/6197706_orig.jpg" width="60" height="60">
                <img class="marginright10" src="https://www.marquid.com/wp-content/uploads/2017/06/6197706_orig.jpg" width="60" height="60">
                <img class="marginright10" src="https://www.marquid.com/wp-content/uploads/2017/06/6197706_orig.jpg" width="60" height="60">
                <img src="http://cdn.onlinewebfonts.com/svg/img_28512.png" width="60" height="60">
            </div>
            <div class="margintop30">
                <button class="alignright" @click="postEvent({eventname, eventimage, eventlocation, latitude, longitude, eventdescription, eventstart, eventend, eventparticipants, eventtype})" type="button">Create Event</button>
            </div>

        </div>
        


   
</template>

<style>

.CreateEvent-top{
    display: flex;
    align-items:center;
    justify-content: center;
}

.CreateEvent-top-letters {
    max-width: 180px;
    margin-right: 30px;
}

.CreateEvent-middle{
    display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-around;
}

.CreateEvent-middle-nameinput{
   width: 250px;
}

.CreateEvent-middle-typeinput{
   width: 214px;
}

.CreateEvent-middle-partinput{
   width: 166px;
}

.CreateEvent-middle-locationinput{
    width: 230px;
}

.CreateEvent-middle-maineventimg{
    margin-top: 10px;
    margin-right: 175px;
}

.CreateEvent-middle-centraimg{
    display: block;
    margin: auto;
}

.CreateEvent-middle-description{
    margin-top: 10px;
    margin-right: 225px;  
}

.CreateEvent-middle-descriptioninput{
    width: 310px;
    height: 130px;
}

.CreateEvent-middle-additionalimages{
    margin-top: 10px;
    margin-right: 98px; 
}

.letranegrita{
    font-weight: bolder;
}

.margintop10{
    margin-top: 10px;
}

.margintop30{
    margin-top: 30px;
}

.marginright10{
    margin-right: 10px;
}

img.grande{
    object-fit: cover;
    margin: 5px;
}

.alignright{
    margin-left: 170px;
    background-color: blue;    
    line-height: 1.5rem;
    border-radius: 50px;
    background-color: rgb(39, 69, 202);
    border: none;
    color: white;
    cursor: pointer;
}




</style>