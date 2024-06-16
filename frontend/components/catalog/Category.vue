<template>
    <div style="width: 17%;">
        <h1 class="category-active"> {{activeCategory.name}} </h1>
        <h2 class="category-header">Категории</h2>
        <p 
            class="category-item"
            :class="category.id === activeCategory.id ? 'category-item__active' :''"
            v-for="category in categories" 
            :key="category.id"
            @click="$emit('changeCategory', category)">
            {{ category.name }}
        </p>
    </div>
</template>
<script>
export default {
    props: {
        categories: {
            type: Array,
            default:[]
        },
        activeCategory: {
            type: Object,
            default:{}
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/style/style';
.category-active{
    font-family: $inter;
    font-size: 28px;
    font-weight: 600;
    line-height: 33.89px;
}
.category-header{
    font-family: $inter;
    font-size: 20px;
    font-weight: 600;
    line-height: 24.2px;
}
.category-item{
    font-family: $inter;
    border-radius: $border-radius-mini;
    padding: 8px 16px;
    white-space: nowrap;
    width: fit-content;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.78px;
    cursor: pointer;
    &:hover{
        background-color: $hover-color-option;
    }
}
.category-item__active{
    background-color: $hover-color-option;
}

</style>