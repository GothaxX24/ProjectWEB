<template>
<h1 class="viewProfile-title">"NAME OF THE EVENT"</h1>
<img class="circular-image" src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg" width="200" height="200"/> 

<div class="viewProfile-form">
    <div>
        <label class="viewProfile-input" for="Date">Date:</label>
        <input class="viewProfile-form-input" type="text" name="Date" id="Date">
    </div>

    <div>
        <label class="viewProfile-input" for="Duration">Duration:</label>
        <input class="viewProfile-form-input" type="time" name="Duration" id="Duration">

    </div>

    <div>
        <label class="viewProfile-input" for="Location">Location:</label>
        <input class="viewProfile-form-input" type="text" name="Location" id="Location">

    </div>

    <div class = "box">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, voluptatem repellendus! Magnam officiis incidunt, cupiditate nesciunt veniam omnis nisi consequuntur esse laudantium libero iste, explicabo odio deserunt laborum nostrum modi.</p>
    </div>


</div>







</template>



<style>


.viewProfile-title{
    font-size: 30px;
}

.viewProfile-input{
    margin-right: 10px;
    
}
.viewProfile-form{
    display: flex;
    flex-direction: column;  
    align-items: flex-start;
    margin-left: 25px;
}

.box {
    width: 300px;
    border: 15px black;
}





</style>