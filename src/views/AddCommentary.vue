<script>
    export default {
            data() {
                return {
                name: "",
                date: "",
                image: "",
                location: "",
                description: "",
                start_date: "",
                end_date: "",
                userimage: "",
                correctDate: "",
                comentary: "",
                puntuation: "",
                }

            },
            methods: {
                event() {
                    fetch("http://puigmal.salle.url.edu/api/v2/events/" + window.localStorage.getItem("eventid"), {
                        headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                    })
                    .then((res) => res.json())
                    .then((data) => { 
                        this.name = data[0].name;
                        this.date = data[0].date;
                        this.image = data[0].image;
                        this.location = data[0].location;
                        this.description = data[0].description;
                        this.start_date = data[0].eventStart_date
                        this.end_date = data[0].eventEnd_date;
                        this.correctDate = data[0].eventStart_date.substring(0, 10);

                        fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("currenteventowner"), {
                                    headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                                })
                                .then((res) => res.json())
                                .then((data) => {
                                        this.userimage = data[0].image;
                                })

                    })
                    
                },

                fetchcomentary(comentary, puntuation) {
                    if (!this.comentary) { 
                        alert('Fill up the comentary section')
                    } else {
                        if (this.puntuation > 10 || this.putuation < 0 || !this.puntuation) {
                            alert('Give a right puntuation');
                        } else {
                            fetch("http://puigmal.salle.url.edu/api/v2//assistances/" + window.localStorage.getItem("userid")  + "/" + window.localStorage.getItem("eventid"), {
                                method: "PUT",
                                headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token"), "Content-Type": "application/json"},
                                body: JSON.stringify({ puntuation: this.puntuation, comentary: this.comentary }),
                            })
                            .then((res) => res.json())
                            .then((data) => {
                                
                            })

                            location.replace("/eventhistory");
                        }
                    }
                }
            
            },

            created() {
                    this.event()
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
        <img class="profile-pic" v-bind:src=userimage> 
    </div>

    <h1 class="viewProfile-title">"{{name}}"</h1>
    <img v-bind:src=image width="130" height="130">

    <div>
        <div class="margintop10">
            <label class="letranegrita">Date </label> 
            <label class="marginright10">{{correctDate}}  </label>

            <label class="letranegrita">Duration </label> 
            <input type="Time" placeholder="" name="" required> 
        </div>
        <div class="margintop10">
            <label class="letranegrita">Location </label> 
            <label class="CreateEvent-middle-locationinput">{{location}} </label>
        </div>
    </div>
    <div class="margintop15">
        <label class="viewProfile-description">{{description}}</label>
    </div>  
    <div>
        <label class="letranegrita">Add commentary</label>
        <div class="margintop10">
                <input v-model="comentary" class="CreateEvent-middle-descriptioninput" type="Text" placeholder="" name="" required>
        </div>
    </div>
    <div class="margintop10">
        <label class="letranegrita">Puntuation (0 to 10)</label>
        <input v-model="puntuation" class="CreateEvent-middle-partinput" type="number" placeholder="" name="" required> 
    </div>
    <button @click="fetchcomentary({comentary, puntuation})" class="viewProfile-bottom-attendbutton"><strong>Send</strong></button>
</template>



<style>

.viewProfile-title{
    font-size: 30px;
}

.viewProfile-description{
    width: 300px;
    height: 130px;
}

.viewProfile-bottom {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
}

.viewProfile-bottom-attendbutton{
    line-height: 1.5rem;
    border-radius: 50px;
    background-color: rgb(39, 69, 202);
    border: none;
    color: white;
    width: 130px;
    cursor: pointer;
    margin-top: 10px;
    margin-left: 40px;
    margin-right: 40px;
}


.clasificacion2 {
    margin-top: 10px;
  direction: rtl;
  unicode-bidi: bidi-override;
}

.tamanyestrellas{
    font-size: 30px;
}

.tamanyestrellas:hover,
.tamanyestrellas:hover ~ .tamanyestrellas {
    color: orange;
}

.margintop15{
    margin-top: 15px;
}

.margintop20{
    margin-top: 20px;
}

.marginright20{
    margin-right: 20px;
}






</style>