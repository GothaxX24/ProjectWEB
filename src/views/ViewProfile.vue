<template>
    <head>
        <link rel="stylesheet" href="style.css" />
    </head>
    <div>
        <RouterLink to = "/">
            <img class="back" src="https://cdn.icon-icons.com/icons2/1674/PNG/512/arrowback_111142.png">
        </RouterLink>
        <img class="profile-pic" src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg"/> 
    </div>

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

    <div id="recent-events">
        <img class="imgevent" src="https://isoges14.isonor.es/website_event/static/src/img/event_past_0.jpg">
        <img class="imgevent" src="https://isoges14.isonor.es/website_event/static/src/img/event_past_0.jpg">
        <img class="imgevent" src="https://isoges14.isonor.es/website_event/static/src/img/event_past_0.jpg">
        <img class="imgevent" src="https://isoges14.isonor.es/website_event/static/src/img/event_past_0.jpg">
    </div>w
</template>
