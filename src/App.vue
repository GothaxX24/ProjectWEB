<script setup>

</script>

<template>
  <nav>
    <router-link to="/signup">SignUp</router-link>
    <router-link to="/firstpage">FirstPage</router-link>
    <router-link to="/profile">Profile</router-link>
    <router-link to="/viewprofile">ViewProfile</router-link>
    <router-link to = "/CreateEvent">Create Event</router-link>
    <router-link to = "/Friends">Friends</router-link>
    <router-link to = "/Chats">Chats</router-link>
    <router-link to = "/ViewEvent">ViewEvent</router-link>
    <router-link to = "/inChat">inChat</router-link>

  </nav>
  <router-view></router-view>
</template>
  
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
