<template>
<main>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <router-link to="/"><img src="iconcontactdefault.png" alt="Imagem de Lista de Contatos" id="teste1" style="max-height: 50px"/></router-link>
    <router-link to="/" class="router-color"><h1 style="margin: auto; margin-left: 40px; font-family: 'Parisienne', cursive;">Agenda</h1></router-link> 
    <button id="login-button" class="btn btn-link" type="button" aria-expanded="false" aria-label="Toggle navigation" >
      <router-link to="login" class="router-color" style="margin: 0; padding: 3px; justify-content: right">Sing IN / Login</router-link>
    </button>
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