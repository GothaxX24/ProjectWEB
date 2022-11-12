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
    <div class = "signUp-button-block" >
        <button class="attend-button"><strong>Attend</strong></button>
    </div>
</template>



<style>

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