<template>
    <head>
        <link rel="stylesheet" href="style.css" />
    </head>
    <div>
        <RouterLink to = "/eventslist">
            <img class="back" src="https://cdn.icon-icons.com/icons2/1674/PNG/512/arrowback_111142.png">
        </RouterLink>
        <img class="profile-pic" src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg"/> 
    </div>

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

    <div id="recent-events">
        <img class="imgevent" src="https://isoges14.isonor.es/website_event/static/src/img/event_past_0.jpg">
        <img class="imgevent" src="https://isoges14.isonor.es/website_event/static/src/img/event_past_0.jpg">
        <img class="imgevent" src="https://isoges14.isonor.es/website_event/static/src/img/event_past_0.jpg">
        <img class="imgevent" src="https://isoges14.isonor.es/website_event/static/src/img/event_past_0.jpg">
    </div>

    <div>
        <button @click="$router.push('/eventslist')" class="manage-button">Manage my events</button>
    </div>
    <div>  
        <button @click="$router.push('/')" class="signout-button">SignOut</button>
    </div>
    <div>
        <button @click="$router.push('/')" class="delete-button">Delete account</button>
    </div>

 
</template>

<style>
    img.back{
        width: 40px;
        height: 40px;
        position: absolute;
        display: flex;
    }
    .profile-pic{
        min-width: 100px; 
        min-height: 100px;
        width: 20%;
        border-radius: 50%;
        align-self: left;

    }
    .separacioImatges{
        display: flex;
        justify-content: space-around;
    }
    img.pequeña{
    width: 50px;
    height: 50px;
    }
    #recent-events {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 0.5rem;
        align-items: baseline;
    }
    img.imgevent{
    width: 150px;
    height: 150px;
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
</style>
