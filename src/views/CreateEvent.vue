<template>
    
        <h1>
            EVENT CREATION!
        </h1>

        <div class="foto" >
         
            <article class="foto2"> Welcome "Creator name" to event creation</article>
            <article><img class="circular-image" src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg" width="100" height="100"/> </article> 

     

        </div>
        
        <div class="norma">
            <div class="margetop">
                <label class="letranegrita">Name </label> 
                <input class="allargar" type="text" placeholder="" name="" required> 
            </div>
            
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
            <div class="maineventimg">
                <label class="letranegrita">Main event image</label>
            </div>
            <div class="centraimg">
                <img class="margetop" src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg" width="90" height="90"/>
            </div>
            <div class="descriptionword">
                <label class="letranegrita">Description</label>
            </div>
            <div class="margetop">
                <input class="description" type="Text" placeholder="" name="" required>
            </div>
            <div class="additionalimages">
                <label class="letranegrita">Additional images</label>
                <label> (Optional)</label>
            </div>
            <div class="margetop">
                <img class="margeright" src="https://www.marquid.com/wp-content/uploads/2017/06/6197706_orig.jpg" width="60" height="60">
                <img class="margeright" src="https://www.marquid.com/wp-content/uploads/2017/06/6197706_orig.jpg" width="60" height="60">
                <img class="margeright" src="https://www.marquid.com/wp-content/uploads/2017/06/6197706_orig.jpg" width="60" height="60">
                <img class="margeright" src="http://cdn.onlinewebfonts.com/svg/img_28512.png" width="60" height="60">
            </div>
            <div class="margetop2">
                <button class="alignright" @click="$router.push('/homepage')" type="button">Create Event</button>
            </div>

        </div>
        


   
</template>

<style>
.additionalimages{
    margin-top: 10px;
    margin-right: 98px; 
}

.descriptionword{
    margin-top: 10px;
    margin-right: 225px;  
}

.maineventimg{
 
    margin-top: 10px;
    margin-right: 175px;

}

.foto2 {
    max-width: 180px;
}
.foto{
    display: flex;
    align-items:center;
    justify-content: space-around;
    
}
.norma{
    display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-around;
}

.letranegrita{
    font-weight: bolder;
}

.margetop{
    margin-top: 10px;
}

.margetop2{
    margin-top: 30px;
}

.margeright{
    margin-right: 10px;
}

.allargar{
   width: 250px;
}

.allargar2{
    width: 230px;
}

.description{
    width: 310px;
    height: 130px;
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

.separacioImatges{
        display: flex;
        justify-content: space-around;
    }

.centraimg{
    display: block;
    margin: auto;
}
</style>