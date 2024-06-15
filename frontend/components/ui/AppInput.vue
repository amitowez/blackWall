<template>
    <input 
        class="ui-input" 
        :type="type"
        v-model="Value"
    >
</template>

<script>
export default {
    props:{
        type: {
            type: String,
            default: 'text'
        },
        value:{
            default:''
        }
    },
    computed:{
        Value:{
            get: ()=>{
                return this.value
            },
            set: (val)=>{
                console.log(val)
                this.$emit('setValue',val)
            }
        }
    }
}
</script>./AppInput.vue