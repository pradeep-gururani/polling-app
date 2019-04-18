module.exports = function DataStore(name,storeData){
    localStorage.setItem(name, JSON.stringify(storeData));    
}