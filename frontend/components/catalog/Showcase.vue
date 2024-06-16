<template>
    <div class="card-list">
        <CatalogProductCard 
            v-for="product in products"
            :key="product.id"
            :product="product" />
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    created(){

    },
    props:{
        products:{
            type: Array,
            default: []
        },
    },
    methods:{
  
    },
    watch:{

    }
}
</script>

<style lang="scss">
.card-list{
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>