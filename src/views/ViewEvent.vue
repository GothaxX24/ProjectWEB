<template>
    <h1 class="viewProfile-title">"NAME OF THE EVENT"</h1>
    <img src="https://www.marquid.com/wp-content/uploads/2017/06/6197706_orig.jpg" width="130" height="130">

    <div>
        <div class="margetop">
            <label class="letranegrita">Date </label> 
            <input class="margeright" type="Date" placeholder="" name="" required>

            <label class="letranegrita">Duration </label> 
            <input type="Time" placeholder="" name="" required> 
        </div>
        <div class="margetop">
            <label class="letranegrita">Location </label> 
            <input class="allargar2" type="Text" placeholder="" name="" required> 
        </div>
    </div>
    <div class="margetop15">
        <input class="description2" type="Text" placeholder="" name="" required>
    </div>  
    <div class="margetop20">
        <img class="margeright2" src="https://www.marquid.com/wp-content/uploads/2017/06/6197706_orig.jpg" width="120" height="120">
        <img src="https://www.marquid.com/wp-content/uploads/2017/06/6197706_orig.jpg" width="120" height="120">
    </div>
    <div class = "algo" >
        <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDsKvKUVOqbJsF5oD4KXaBa_hoEBiYLQrY1A&usqp=CAU" width="30" height="30">
        <button class="attend-button"><strong>Attend</strong></button>
        <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrYlFVRZ9D13i-_PIRiotOBfMVbraV4dFPw&usqp=CAU" width="30" height="30">
    </div>
    <form>
        <div class="clasificacion">
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

#form {
  width: 250px;
  margin: 0 auto;
  height: 50px;
}

#form div {
  text-align: center;
}

input[type="radio"] {
  display: none;
}

label {
  color: grey;
}

.clasificacion {
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

.algo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-around

}

.margetop15{
    margin-top: 15px;
}

.margetop20{
    margin-top: 20px;
}

.viewProfile-title{
    font-size: 30px;
}

.margeright2{
    margin-right: 20px;
}

.description2{
    width: 300px;
    height: 130px;
}

.attend-button{
    line-height: 1.5rem;
    border-radius: 50px;
    background-color: rgb(39, 69, 202);
    border: none;
    color: white;
    width: 130px;
    cursor: pointer;
    margin-top: 10px;
}





</style>