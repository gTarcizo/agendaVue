
<template>
<main>
  
    <NavBar/>
  <div class="container mt-3">
    <Employee/>
  </div>
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
