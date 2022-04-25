<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3">Employee</p>
                <ul class="list-group mt-3">
                    <li class="list-group-item">
                       Name: {{this.employee.name}}
                    </li>
                    <li class="list-group-item">
                       Age: {{this.employee.age}}
                    </li>
                    <li class="list-group-item">
                       Designation: {{this.employee.designation}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Employee",
    data : function(){
        return{
            // state
            employee : {
                name: "Tarcizo",
                age : 22,
                designation : "Software Engineer"
            }
        }
    },
/*     Poderia Ter o Props Também
    props : {
        
    } */
}
</script>

<style scoped>

</style>