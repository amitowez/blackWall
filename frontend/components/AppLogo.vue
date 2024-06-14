<template>
    <div class="logo">
        <img class="logo-image" :src="require(`@/public/img/${type}Logo.svg`)" alt="">
        <p :class="`logo-description logo-description__${type}`" >BlackWall store</p>
    </div>
</template>

<script>
export default {
    props:['type']
}
</script>