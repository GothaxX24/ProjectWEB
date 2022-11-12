<template>
    <head>
        <link rel="stylesheet" href="style.css" />
    </head>
    
    <img class="circular-image" src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg" width="150" height="150"/> 

    <h2>User1</h2>

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

    <div id="product-list">

        <img class="mediana" src="https://isoges14.isonor.es/website_event/static/src/img/event_past_0.jpg">
        <img class="mediana" src="https://isoges14.isonor.es/website_event/static/src/img/event_past_0.jpg">
        <img class="mediana" src="https://isoges14.isonor.es/website_event/static/src/img/event_past_0.jpg">
        <img class="mediana" src="https://isoges14.isonor.es/website_event/static/src/img/event_past_0.jpg">
    </div>
    
   

 
</template>

<style>
    img.pequeña{
    width: 50px;
    height: 50px;
    }
    img.mediana{
    width: 100px;
    height: 100px;
    }
    
    .separacioImatges{
        display: flex;
        justify-content: space-around;
    }

    #product-list {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 0.5rem;
        align-items: baseline;
        flex-wrap: wrap;
    }

</style>
