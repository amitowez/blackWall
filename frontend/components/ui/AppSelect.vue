<template>
    <div style="margin-right: 20px;">
        <UiClickOutside 
            v-if="openedList" 
            :color="false"
            :zIndex="2"
            @action="changeOpened"
            />
        <div 
            class="ui-select-button"
            :class="openedList ? 'ui-select-button__active' : ''" 
            @click="changeOpened">
                <p class="ui-select-text">{{ selectValue.label }}</p>
                <img 
                    :src="require('@/public/img/arrowSelect.svg')" 
                    class="ui-select-img">
        </div>
        <div v-if="openedList" class="ui-select-list">
            <div 
                class="ui-select-option" 
                @click="changeValue(defaultValue)" >
                {{ defaultValue.label }}
            </div>
            <div 
                v-for="option in options" 
                :key="option.label"
                @click="changeValue(option)" 
                class="ui-select-option">
                {{ option.label }}
            </div>
        </div>
    </div>


</template>

<script>
export default {
    data(){
        return {
            defaultValue: {label:'По умолчанию',value:'default',},
            openedList: false,
            selectValue: '',
        }
    },
    props:{
        value:{
            type: Object,
        },
        options: {
            type: Array,
            default:[]
        }
    },
    mounted(){
        this.selectValue = this.value || this.defaultValue 

    },
    methods:{
        changeOpened(){
            this.openedList = !this.openedList
        },
        changeValue(option){
            this.selectValue = option
            this.$emit('changeValue', option.value)
            this.changeOpened()
        }
    }
}
</script>