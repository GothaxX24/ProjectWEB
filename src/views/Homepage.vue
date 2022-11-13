<template>
    <div class="menu">
        <img class="icono" src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg"/>
        <div class="menulinks">
            <RouterLink to="/profile">
                <img class="icono-menu" src="https://static.thenounproject.com/png/638636-200.png">
                <a>Profile </a>      
            </RouterLink>
            <RouterLink to="/friends">
                <img class="icono-menu" src="https://cdn-icons-png.flaticon.com/512/880/880594.png">
                <a>Friends</a>
            </RouterLink>
            <RouterLink to="/eventslist">
                <img class="icono-menu" src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png">
                <a>Search event</a>
            </RouterLink>    
            <RouterLink to="/createevent">
                <img class="icono-menu" src="https://cdn-icons-png.flaticon.com/512/32/32339.png">
                <a>Create event</a>
            </RouterLink> 
            
        </div>
    </div>
</template>

<style>

    img.icono{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .icono-menu{
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    .btn-menu{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        padding: 0;
        margin: 0;
    }
    .menulinks a{
        color: rgb(24, 24, 24);
        display: flex;
        padding: 3px;
    }
    .menulinks{
        border-radius: 10%;
        background-color: #f9f9f9;
        width: 150px;
        display: none;
    }
    .menulinks a:hover{
        color: rgb(62, 59, 233);
    }
    .menu:hover .menulinks{
        display: block;
    }
    .menu{
        display: flex;
        flex-direction: column;
    }
    .desplegable:hover .links{
    display: block;
    background-color:antiquewhite;
}
</style>