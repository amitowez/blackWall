function sortPrice(arr, status){
    arr.sort((a, b) => {
        if(status) return a.price > b.price
        return a.price < b.price
    })

}
function sortGender(arr, status){
    arr.sort((a, b) => {
        if(status === true) return a.gender > b.gender
        return a.gender < b.gender
    })
}
function sortAlphabet(arr, status){
    arr.sort((a, b) => {
        const first = status ? a.name : b.name
        const second = status ? b.name : a.name
        if (first.toLowerCase() < second.toLowerCase()) {
          return -1;
        }
        if (first.toLowerCase() > second.toLowerCase()) {
          return 1;
        }
        return 0;
    });
}
function  checkDefault(statuses){
    const values = Object.entries(statuses)
    if(values.find(item => item != 'default')) return false
    return true
}
function  isDefault(status){
    if(status === 'default'){
        return true
    }
    return false
}

export { sortPrice, sortGender, sortAlphabet, isDefault, checkDefault }