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
            get: function(){
                return this.value
            },
            set: function(val){
                console.log(val)
                this.$emit('setValue',val)
            }
        }
    }
}
</script>./AppInput.vue