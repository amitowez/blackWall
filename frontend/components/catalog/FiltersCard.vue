<template>
    <div class="flex filters">
        <UiAppSelect 
            v-for="filter in filters"
            :key="filter.name"
            :options="filter.options"
            @changeValue="(val) => sortProducts(filter.name, val)" />
    </div>
</template>

<script>
import { sortPrice, sortGender, sortAlphabet, isDefault, checkDefault } from '@/utils/catalog'
export default {
    data(){
        return {
            statusFilters:{
                price: 'default',
                gender: 'default',
                alphabet: 'default'
            },
            filters:[
                {
                    name:'price',
                    options: [{label: 'По возрастанию цены',value: true}, {label: 'По убыванию цены',value: true,}]
                },
                {
                    name:'gender',
                    options:[{label: 'Мужское',value: true}, {label: 'Женское',value: false,}]
                },
                {
                    name:'alphabet',
                    options:[{label: 'От А-я(A-z)',value: true}, {label: 'От Я-а(Z-a)',value: false,}],
                }
            ],  
        }
    },
    props:{
        products:{
            type: Array
        }
    },
    methods:{
        sortProducts(type, val){
            if(!this.products[0]) return
            const statuses = this.statusFilters
            statuses[type] = val
            if(checkDefault(statuses)) {
                this.$emit('renderProducts', this.products)
                return
            }
            const fliteredProducts = this.products
            if(!isDefault(statuses.price)) sortPrice(fliteredProducts, statuses.price)
            if(!isDefault(statuses.gender)) sortGender(fliteredProducts, statuses.gender)
            if(!isDefault(statuses.alphabet)) sortAlphabet(fliteredProducts, statuses.alphabet)
            this.$emit('renderProducts',fliteredProducts)
        },
    }
}
</script>

<style lang="scss">
@import '@/assets/style/vars.scss';
.filters{
    padding-bottom: 24px;
    border-bottom: $border-section;
}
</style>