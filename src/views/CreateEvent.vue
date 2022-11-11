<template>
    
        <h1>
            EVENT CREATION!
        </h1>

        <div class="createEvent-general">
            <div class="boxbox">
                <div class="row">
                    <div class="text">
                        <p>Welcome "Creator name" to event creation</p>
                    </div>
                    <div class="column">
                        <img class="circular-image" src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg" width="100" height="100"/>

                    </div>
                

                </div>
            </div>
           
  
            <div class = "createEvent-form">
                <div class="minimum-margin" >
                    <label>Name </label> 
                    <input class="general-input" type="text" placeholder="" name="" required> 
                </div>
                
                <div class="minimum-margin">
                    
                    <label>Date </label> 
                    <input class="general-input" type="Date" placeholder="" name="" required>

                    <label>Duration </label> 
                    <input class="general-input" type="Time" placeholder="" name="" required> 
                </div>
                <div class="minimum-margin">
                    <label>Location </label> 
                    <input class="general-input" type="Text" placeholder="" name="" required> 
                </div>
                <div class="minimum-margin">
                    <label>Main event image</label>
                </div>
                <div class="centraimg">
                    <img src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg" width="100" height="100"/>
                </div>
            </div>

        </div>
        


   
</template>

<style>
    .minimum-margin {
        margin-bottom: 10px;
    }
    .createEvent-form{
        display: flex;
        flex-direction: column;
    }
    .boxbox {
        display: flex;
        justify-content: center;
    }
    .row {
        display: flex;
        justify-content: center;
        justify-content:  space-between;
        width: 100%;
        max-width: 360px;
        
    }
    .text {
        max-width: 160px;
    }

    .createEvent-general {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .paragraf {
        display: flex;
        max-width: 200px;
    }


    .separacio{
    margin-left: 40px;
    width: 200px;
    }

    .centraimg{
        display: block;
        margin: auto;
    }
</style>