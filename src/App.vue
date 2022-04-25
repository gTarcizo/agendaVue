
<template>
<main>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
      <img  src="../../iconcontactdefault.png" alt="Imagem de Lista de Contatos" id="teste1" style="max-height: 50px"/>

    <div class="navbar-brand" > 
      <router-link class="navbar-brand" style="margin: auto; margin-left: 40px; font-size: 2.5em;"> Agenda </router-link>
    </div> 

    <router-link to="/login" class="LoginButton btn btn-dark"> Sing IN / Login </router-link>
    
  </div>
</nav>

  <div class="container mt-3">
    <Employee/>
  </div>
  
<router-view> 
</router-view>
  </main>
</template>

<script>
import Employee from './components/Employee.vue'
import NavBar from './components/NavBar.vue'
  export default {
    components: { Employee , NavBar }
}
</script>

<style>
 @import url(./assets/base.css);
</style>
