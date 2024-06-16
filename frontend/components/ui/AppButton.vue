<template>
    <button @click="$emit('action')" class="centried ui-button">{{ value }}</button>
</template>

<script>
export default {
    props:['value']
}
</script>
