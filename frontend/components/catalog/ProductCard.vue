<template>
    <div class="product">
        <img class="product-image" 
            :src="$axios.defaults.baseURL + product.img" 
            alt="">
        <div class="product-info">
            <div class="product-section">
                <p class="product-category">{{ product.category }}</p>
            </div>
            <h1 class="product-name">{{ product.name }}</h1>
            <h2 class="product-price">{{ product.price + " ₽" }}</h2>
            <UiAppButton :value="'В корзину'" />
        </div>
    </div>
</template>

<script>
export default {
    props:{
        product:{
            type: Object
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/style/style.scss';
.product {
    width: 270px;
    min-height: 300px;
    box-shadow:  0px 0px 35px 0px rgba(125, 137, 171, 0.15);
    border-radius: $border-radius;
    margin-bottom:40px;
    &-section{
        display: flex;
        justify-content: space-between;
    }
    &-image{
        width: 100%;
        height: 55%;
        border-radius: $border-radius;
    }
    &-info{
        padding: 24px;
    }
    &-category{
        font-family: $poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        color: $product-name-color;
    }
    &-name{
        margin: 0;
        font-family: $poppins;
        font-size: 18px;
        font-weight: 700;
        line-height: 27px;
        color: $product-name-color;
    }
    &-price{
        font-family: $poppins;
        font-size: 18px;
        font-weight: 700;
        line-height: 27px;
        letter-spacing: 0.5px;
        color: $default-accent-color;
    }
}
</style>