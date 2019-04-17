module.exports = function DataStore(name,storeData){
    localStorage.setItem(name, JSON.stringify(storeData));
    console.log('locally stored data',storeData);
}