<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <p class="h3 fw-bold text-success"> User List</p>
                <p class="fst-italic"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit labore minima omnis eos natus laboriosam incidunt temporibus, tempora minus alias!</p>
            </div>

            <div v-if="loading">
                    <Spinner/>
            </div>

            <div class="row" v-if="!loading">
                <div class="col m-3">
                    <table class="table table-hover text-center table-striped">
                        <thead class="bg-warning text-white">
                            <tr>
                                <th>Identification</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Company</th>
                                <th>Website</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr v-for="users in user" :key="users.id"> <!-- v-for="ITEM in ARRAY" :key="" -->
                                <td> {{users.id}} </td>
                                <td>{{users.name}}</td>
                                <td>{{users.email}}</td>
                                <td>{{users.company.name}}</td>
                                <td>{{users.website}}</td>
                                <td>{{users.address.city}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import myjson from '../../myjson.json' = um JSON
import { UserService } from "../services/UserService"

export default {
    name: 'UserList',
    data(){
        return{
            user : UserService.getAllUsers(),
        }
    }
}
</script>