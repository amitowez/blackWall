const categoriesUrl = '/categories'
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
  state: () => ({
    categories:[],
    activeCategory:undefined,
  }),

  mutations: {
    setCategory(state,category){
      state.activeCategory = category
    },
    setCategories(state,data){
      state.categories = data
      this.commit('setCategory',data[0])
      console.log(state.categories, state.activeCategory)
    }
  },

   actions: {
    async getCategories(context){
      try{
        const data = await this.$axios.get(categoriesUrl)
        context.commit('setCategories',data.data)
      } catch(e){
        console.log(e)
      }
    }
  }
  })
}
export default createStore