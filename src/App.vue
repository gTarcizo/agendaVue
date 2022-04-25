<template>
<main>
  <nav class="navbar navbar-dark bg-success navbar-expand-sm">
    <div class="container">
      <router-link to="/" class="navbar-brand">Vue Router</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link px-4">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user" class="nav-link px-4">User</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link px-4">About</router-link>
          </li>
        </ul>
      </div>

    </div>
  </nav>
  
  
  <router-view>
  </router-view>
</main>
</template>

<script>
import UserList from './components/UserList.vue'
import Spinner from './components/Spinner.vue'
  export default {
    components: { UserList , Spinner}
}
</script>

<style>
 @import url(./assets/base.css);
</style>