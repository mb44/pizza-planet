<template>
<div>
    <div class="row">
        <div class="col-sm-12 col-md-6">
            <pp-new-pizza></pp-new-pizza>
        </div>

        <!-- new pizza component -->
        <div class="col-sm-12 col-md-6">
            <h3>Menu</h3>
                <table class="table table-hover">
                    <thead class="thead-default">
                        <tr>
                            <th>Item</th>
                            <th>Remove from menu</th>
                        </tr>
                    </thead>
                    <tbody v-for="item in getMenuItems">
                        <div class="order-number">
                            <strong><em>Order Number: 1</em></strong>
                            <button class="btn btn-outline-danger btn-sm">x</button>
                        </div>
                        <tr>
                            <td>{{ item.name }}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-12">
            <h3>Current orders: {{ numberOfOrders }}</h3>
                        <table class="table table-sm">
                <thead class="thead-default">
                    <tr>
                        <th>Item</th>
                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Margherita</td>
                        <td>9"</td>
                        <td>1</td>
                        <td>9.35</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-sm-12 col-lg-6">
            <pp-login></pp-login>
        </div>
    </div>

</div>



</template>

<script>
import NewPizza from './NewPizza.vue'
import Login from './Login.vue'
import { mapGetters } from 'vuex'

export default {
    components: {
        ppNewPizza: NewPizza,
        ppLogin: Login
    },
    computed: {
        ...mapGetters ([
            'numberOfOrders',
            'getMenuItems'
        ])
    },
    beforeRouteLeave: (to, from, next) => {
        if (confirm("Have you remembered to log out?") == true) {
        next();
        } else {
        next(false)
        }
    }
}
</script>

<style>

</style>
