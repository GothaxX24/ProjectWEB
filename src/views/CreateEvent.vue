<template>
    <main>
        <h1>
            EVENT CREATION!
        </h1>

        
        <div class="foto" >
         
               <article class="foto2"> Welcome "Creator name" to event creation</article>
               <article><img class="circular-image" src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg" width="100" height="100"/> </article> 

           
 
        </div>
        
        <div class="norma">
            <div >
                <label>Name </label> 
                <input class="separacio" type="text" placeholder="" name="" required> 
            </div>
            
            <div>
                <label>Date </label> 
                <input type="Date" placeholder="" name="" required>

                <label>Duration </label> 
                <input type="Time" placeholder="" name="" required> 
            </div>
            <div >
                <label>Location </label> 
                <input type="Text" placeholder="" name="" required> 
            </div>
            <div >
                <label>Main event image</label>
            </div>
            <div class="centraimg">
                <img src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg" width="100" height="100"/>
            </div>
        </div>



    </main>
</template>

<style>
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
     align-items: flex-start;
     justify-content: space-around;
    

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