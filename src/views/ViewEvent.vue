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
                userimage: ""
                }

            },
            methods: {
                event() {
                    fetch("http://puigmal.salle.url.edu/api/v2/events/" + window.localStorage.getItem("eventid"), {
                        headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                    })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        this.name = data[0].name;
                        this.date = data[0].date;
                        this.image = data[0].image;
                        this.location = data[0].location;
                        this.description = data[0].description;
                        this.start_date = data[0].eventStart_date
                        this.end_date = data[0].eventEnd_date
                        console.log(this.name);

                        fetch("http://puigmal.salle.url.edu/api/v2/users/" + window.localStorage.getItem("currenteventowner"), {
                                    headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("token")}
                                })
                                .then((res) => res.json())
                                .then((data) => {
                                        this.userimage = data[0].image;
                                })

                    })
                    
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
            <label class="marginright10">{{start_date}}  </label>

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
    <div class="margintop20">
        <img class="marginright20" src="https://www.marquid.com/wp-content/uploads/2017/06/6197706_orig.jpg" width="120" height="120">
        <img src="https://www.marquid.com/wp-content/uploads/2017/06/6197706_orig.jpg" width="120" height="120">
    </div>
    <div class = "viewProfile-bottom" >
        <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDsKvKUVOqbJsF5oD4KXaBa_hoEBiYLQrY1A&usqp=CAU" width="30" height="30">
        <button class="viewProfile-bottom-attendbutton"><strong>Attend</strong></button>
        <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrYlFVRZ9D13i-_PIRiotOBfMVbraV4dFPw&usqp=CAU" width="30" height="30">
    </div>
    <form>
        <div class="clasificacion2">
            <input id="radio1" type="radio" name="estrellas" value="5">
            <label class ="tamanyestrellas" for="radio1">★</label>
            <input id="radio2" type="radio" name="estrellas" value="4">
            <label class ="tamanyestrellas" for="radio2">★</label>
            <input id="radio3" type="radio" name="estrellas" value="3">
            <label class ="tamanyestrellas" for="radio3">★</label>
            <input id="radio4" type="radio" name="estrellas" value="2">
            <label class ="tamanyestrellas" for="radio4">★</label>
            <input id="radio5" type="radio" name="estrellas" value="1">
            <label class ="tamanyestrellas" for="radio5">★</label>
        </div>
    </form>
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