<template>
    <section class="app-content flex">
      <CatalogCategory 
        v-if="stateCatgories[0]"
        :categories="stateCatgories" 
        :activeCategory="activeCategory"
        @changeCategory="(val)=> activeCategory = val" 
      />
        <div class="showcase-container">
          <CatalogFiltersCard 
            :key="activeCategory.id"
            @renderProducts="(val)=>renderProducts = val" 
            :products="stateProducts" 
          />
          <CatalogShowcase 
            v-if="stateProducts[0]"
            :products="stateProducts"
          />
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'catalog',
  data(){
    return{
      renderProducts: []
    }
  },
  created(){
    this.getCategories()
  },
  methods:{
    ...mapActions({
      getCategories:'getCategories',
    }),
  },
  computed:{
    ...mapState({
      stateActiveCategory:'activeCategory',
      stateCatgories:'categories',
      stateProducts: 'products'
    }),
    activeCategory:{
      set: function(val){
        this.$store.commit('setCategory',val)
      },
      get: function(){
        return this.stateActiveCategory
      }
    }
  },
}
</script>
<style lang="scss">
.showcase-container{
  margin-top: 37px;
  width: 87%;
}

</style>
  