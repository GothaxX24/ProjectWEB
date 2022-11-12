<template>
    <head>
        <link rel="stylesheet" href="style.css" />
    </head>
    
    <img class="circular-image" src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg" width="200" height="200"/> 

    <h2>My profile</h2>

    <div class="separacioImatges"> 
        <RouterLink to = "/friends">
            <img class="pequeña" src="https://cdn-icons-png.flaticon.com/512/880/880594.png">
        </RouterLink>

        <RouterLink to="/statistics">
            <img class="pequeña" src="https://cdn0.iconfinder.com/data/icons/glyphpack/63/statistics-512.png">
        </RouterLink>

        <RouterLink to="/eventhistory">
            <img class="pequeña" src="https://cdn-icons-png.flaticon.com/512/32/32223.png">
        </RouterLink> 
    </div>

    <h3>
        Recent events
    </h3>

    <div>
        <img class="mediana" src="https://isoges14.isonor.es/website_event/static/src/img/event_past_0.jpg">
        <img class="mediana" src="https://isoges14.isonor.es/website_event/static/src/img/event_past_0.jpg">
        <img class="mediana" src="https://isoges14.isonor.es/website_event/static/src/img/event_past_0.jpg">
        <img class="mediana" src="https://isoges14.isonor.es/website_event/static/src/img/event_past_0.jpg">
    </div>
    <div>
        <button @click="$router.push('/eventslist')" >Manage my events</button>
    </div>
    <div>  
        <button @click="$router.push('/firstpage')" >SignOut</button>
    </div>
    <div>
        <button @click="$router.push('/firstpage')" type="button">Delete account</button>
    </div>
   

 
</template>

<style>
    img.pequeña{
    width: 50px;
    height: 50px;
    }
    img.mediana{
    width: 100%;
    margin-left: 10px;
    }
    img.grande{
    object-fit: cover;
    width: 200px;
    height: 200px;
    margin: 5px;
    }
    .separacioImatges{
        display: flex;
        justify-content: space-around;
    }

</style>
