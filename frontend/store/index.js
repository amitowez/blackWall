const categoriesUrl = '/categories'
const productsUrl = '/products'
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
  state: () => ({
    categories:[],
    activeCategory:{id:'z', name: 'Не выбрана категория'},
    products:[],
  }),

  mutations: {
    setCategory(state,category){
      state.activeCategory = category
      this.dispatch('getProductsCategoryId')
    },
    setCategories(state,categories){
      state.categories = categories
      this.commit('setCategory',categories[0])
      console.log(state.categories, state.activeCategory)
    },
    setProducts(state, products){
      const result = []
      products.forEach(product=>{
        result.push({
            id: product.id,
            price: product.price,
            name: product.producer.name,
            category: product.category.name,
            gender: product.gender.uid,
            img: product.main_image.url
        })
      })
      console.log(result)
      state.products = result
    }
  },

   actions: {
    async getCategories(context){
      try{
        const request = await this.$axios.get(categoriesUrl)
        context.commit('setCategories',request.data)
      } catch(e){
        console.log(e)
      }
    },
    async getProductsCategoryId(context){
      console.log(context)
      try{
        const request = await this.$axios.get(productsUrl+`/category/${context.state.activeCategory.id}`)
        context.commit('setProducts',request.data)
      } catch(e){
        console.log(e)
      }
    }
  }
  })
}
export default createStore