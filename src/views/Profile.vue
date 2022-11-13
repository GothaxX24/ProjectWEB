<template>
    <head>
        <link rel="stylesheet" href="style.css" />
    </head>
    
    <img class="profile-pic" src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg"/> 

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

    <div id="product-list">

        <img class="mediana" src="https://isoges14.isonor.es/website_event/static/src/img/event_past_0.jpg">
        <img class="mediana" src="https://isoges14.isonor.es/website_event/static/src/img/event_past_0.jpg">
        <img class="mediana" src="https://isoges14.isonor.es/website_event/static/src/img/event_past_0.jpg">
        <img class="mediana" src="https://isoges14.isonor.es/website_event/static/src/img/event_past_0.jpg">
    </div>

    <div>
        <button @click="$router.push('/eventslist')" class="manage-button">Manage my events</button>
    </div>
    <div>  
        <button @click="$router.push('/firstpage')" class="signout-button">SignOut</button>
    </div>
    <div>
        <button @click="$router.push('/firstpage')" class="delete-button">Delete account</button>
    </div>

 
</template>

<style>
    .profile-pic{
        min-width: 100px; 
        min-height: 100px;
        width: 20%;
        border-radius: 50%;
        
    }
    .division{
        width: 50%;
    }
    img.pequeña{
    width: 50px;
    height: 50px;
    }
    img.mediana{
    width: 100px;
    height: 100px;
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

    .delete-button{
        max-width: 25%;
        min-width: 225px;
        line-height: 1rem;
        border-radius: 20px;
        background-color: rgb(241, 51, 51);
        border: none;
        color: white;
        width: 50%;
        cursor: pointer;
        margin-top: 10px;
    }
    .signout-button{
        max-width: 20%;
        min-width: 225px;
        line-height: 1rem;
        border-radius: 20px;
        background-color: rgb(75, 63, 242);
        border: none;
        color: white;
        width: 40%;
        cursor: pointer;
        margin-top: 10px;
    }
    .manage-button{
        max-width: 25%;
        min-width: 225px;
        line-height: 1rem;
        border-radius: 20px;
        background-color: rgb(25, 212, 63);
        border: none;
        color: white;
        width: 75%;
        cursor: pointer;
        margin-top: 20px;
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
