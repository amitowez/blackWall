<template>
    <div 
        @click.capture="$emit('action')" 
        class="background" 
        :style="getStyle()"
    />
</template>

<script>
export default {
    props:{
        color:{
            type: Boolean,
            default: false
        },
        zIndex:{
            type: Number,
            default: 2
        }
    },
    methods:{
        getStyle(){
            if(this.color) return `background-color: rgba(34, 34, 34, 0.3);z-index:${this.zIndex}`
            return `background-color: rgba(34, 34, 34, 0);z-index:${this.zIndex}`
        }
    }
}
</script>

<style scoped>
.background{
    position: fixed;
    height: 100%;
    width: 100%;
    top:0;
    left: 0;
}
</style>