<template>
    <div class="header-nav-list">
        <NuxtLink 
            v-for="link in links"
            class="header-nav-item"
            :key="link.desc" 
            :to="link.to" >
            {{ link.desc }}
        </NuxtLink>
    </div>
</template>

<script>
import { navLinks } from '../consts/navLinks';
export default {
    data(){
        return {
            links: []
        }
    },
    created(){
        this.links = navLinks
    }
}
</script>