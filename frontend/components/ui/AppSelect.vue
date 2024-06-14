<template>
    <div>
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
                <p class="ui-select-text">{{ selectValue }}</p>
                <img 
                    :src="require('@/public/img/arrowSelect.svg')" 
                    class="ui-select-img">
        </div>
        <div v-if="openedList" class="ui-select-list">
            <div 
                class="ui-select-option" 
                @click="changeValue(defaultValue)" >
                {{ defaultValue }}
            </div>
            <div 
                v-for="option in options" 
                :key="option"
                @click="changeValue(option)" 
                class="ui-select-option">
                {{ option }}
            </div>
        </div>
    </div>


</template>

<script>
export default {
    data(){
        return {
            defaultValue: 'По умолчанию',
            openedList: false,
            selectValue: '',
        }
    },
    props:{
        value:{
            type: String,
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
        changeValue(val){
            this.selectValue = val
            this.$emit('changeValue', val)
        }
    }
}
</script>