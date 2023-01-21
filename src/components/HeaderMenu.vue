<script>
    import ProfileEmit from "./ProfileEmit.vue";
    export default {
        components: { ProfileEmit },

        methods: {
            goProfile() {
                location.replace('/profile')
            },
        },
    }


/*<RouterLink to="/profile">
    <img class="iconos-menu" src="https://static.thenounproject.com/png/638636-200.png">
    <a>Profile </a>      
</RouterLink>*/

</script>

<template>
    <head>
        <link rel="stylesheet" href="style.css" />
    </head>
    <div class="menu">
        <img class="icono-menu" src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg"/>
        <div class="menulinks">
            <ProfileEmit v-on:send="goProfile" />
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
</template>