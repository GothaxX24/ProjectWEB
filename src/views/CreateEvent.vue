<template>
    <head>
        <link rel="stylesheet" href="style.css" />
    </head>
    <div class="menu">
        <img class="icono-menu" src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg"/>
        <div class="menulinks">
            <RouterLink to="/profile">
                <img class="iconos-menu" src="https://static.thenounproject.com/png/638636-200.png">
                <a>Profile </a>      
            </RouterLink>
            <RouterLink to="/friends">
                <img class="iconos-menu" src="https://cdn-icons-png.flaticon.com/512/880/880594.png">
                <a>Friends</a>
            </RouterLink>
            <RouterLink to="/eventslist">
                <img class="iconos-menu" src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png">
                <a>Search event</a>
            </RouterLink>    
            <RouterLink to="/createevent">
                <img class="iconos-menu" src="https://cdn-icons-png.flaticon.com/512/32/32339.png">
                <a>Create event</a>
            </RouterLink> 
            
        </div>
    </div>
        <h1>
            EVENT CREATION!
        </h1>
        
            <div class="CreateEvent-top" >
            
                <article class="CreateEvent-top-letters"> Welcome "Creator name" to event creation</article>
                <article><img class="circular-image" src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg" width="100" height="100"/> </article> 

        

            </div>
       
        
        <div class="CreateEvent-middle">
            <div class="margintop10">
                <label class="letranegrita">Name </label> 
                <input class="CreateEvent-middle-nameinput" type="text" placeholder="" name="" required> 
            </div>
            
            <div class="margintop10">
                <label class="letranegrita">Date </label> 
                <input class="marginright10" type="Date" placeholder="" name="" required>

                <label class="letranegrita">Duration </label> 
                <input type="Time" placeholder="" name="" required> 
            </div>
            <div class="margintop10">
                <label class="letranegrita">Location </label> 
                <input class="CreateEvent-middle-locationinput" type="Text" placeholder="" name="" required> 
            </div>
            <div class="CreateEvent-middle-maineventimg">
                <label class="letranegrita">Main event image</label>
            </div>
            <div class="CreateEvent-middle-centraimg">
                <img class="margintop10" src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg" width="90" height="90"/>
            </div>
            <div class="CreateEvent-middle-description">
                <label class="letranegrita">Description</label>
            </div>
            <div class="margintop10">
                <input class="CreateEvent-middle-descriptioninput" type="Text" placeholder="" name="" required>
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
                <button class="alignright" @click="$router.push('/homepage')" type="button">Create Event</button>
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