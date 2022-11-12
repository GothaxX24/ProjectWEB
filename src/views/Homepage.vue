<template>
    <div class="menu">
        <button class="btn-menu"><img class="icono" src="https://assets.stickpng.com/images/588a6507d06f6719692a2d15.png"/></button>
        <div class="menulinks">
            <RouterLink to="/profile">
                <img class="icono" src="https://cdn-icons-png.flaticon.com/512/1250/1250689.png">      
            </RouterLink>
            <RouterLink to="/friends">
                <a>Friends</a>
            </RouterLink>
            <RouterLink to="/eventslist">
                <a>Search event</a>
            </RouterLink>    
            <RouterLink to="/createevent">
                <a>Create event</a>
            </RouterLink> 
            
        </div>
    </div>
</template>

<style>

    .icono{
    width: 20px;
    height: 20px;
    }

    .btn-menu{
        border: none;
    }
    .menulinks a{

        color: rgb(24, 24, 24);
        display: block;
        
        padding: 2px;
    }
    .menulinks{
        background-color: #f9f9f9;
        width: 150px;
        display: none;
    }
    .menulinks a:hover{
        background-color: rgb(111, 111, 111);
    }
    .menu:hover .menulinks{
        display: block;
    }
    .menu{
        position: absolute;
    }

    .desplegable:hover .links{
    display: block;
    background-color:antiquewhite;
}
</style>