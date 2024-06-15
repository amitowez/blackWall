<template>
    <section class="app-content">
      <CategoryBlock 
        v-if="categories[0]"
        :categories="categories" 
        :activeCategory="activeCategory"
        @changeCategory="(val)=> activeCategory = val" />
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'catalog',
  created(){
    this.getCategories()
  },
  methods:{
    ...mapActions({
      getCategories:'getCategories'
    }),
  },
  computed:{
    ...mapState({
      stateActiveCategory:'activeCategory',
      stateCatgories:'categories'
    }),
    categories(){
      console.log(this.stateCatgories)
      return this.stateCatgories
    },
    activeCategory:{
      set: function(val){
        this.$store.commit('setCategory',val)
      },
      get: function(){
        console.log(this.stateActiveCategory)
        return this.stateActiveCategory
      }
    }
  },
  watch:{
    "this.stateActiveCategory"(val){
      console.log(val)
    }
  }

}
</script>

  