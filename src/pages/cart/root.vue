<template>
    <div class="cart page">
         <app-header title='购物车'></app-header>
         <cart-app></cart-app>
    </div>
</template>

<script>
 import goodCart from './children/good-cart'
export default {
    components:{
        [goodCart.name]:goodCart
    }
}
</script>

<style>

</style>
