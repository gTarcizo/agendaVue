<template>
<section>
<div class="about">

  <div class="container mt-3">
    <div class="grid">
      <div class="row">
        <div class="row">
          <p class="h3 text-success fw-bold">About Us</p>
          <p class="fst-italic m-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque enim provident possimus atque veniam aut rem saepe eveniet animi dicta repellendus veritatis, velit ut libero laudantium est ipsam inventore illum, magni voluptatum ab! Et dolorum quisquam facilis rerum porro qui, inventore maxime atque dolorem perspiciatis error, quod deleniti esse quis.</p>
        </div>
      </div>
    </div>
    <div class="row">
            <div class="col">
                <p class="h3 mt-2">About the Company</p>
                <ul class="list-group mt-3">
                    <li class="list-group-item">
                       Age: {{this.employee.since}}
                    </li>
                    <li class="list-group-item">
                       Locale: {{this.employee.Locale}}
                    </li>
                </ul>
            </div>
            <p class="fst-italic m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime a iusto reprehenderit? Quidem quos nostrum in minima suscipit ea. Repudiandae nam nostrum deleniti delectus odio, quis numquam nisi eum doloribus.</p>
        </div>
  </div>         
     
</div>
</section>
</template>

<script>
export default {
  name: "About",
    data(){
        return{
            employee: {
                since : '02/02/2000',
                Locale : "São Paulo - SP"
            }
        }
    }
}
</script>