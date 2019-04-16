module.exports = function DataStore(storeData){
    localStorage.setItem(`"${storeData}"`, JSON.stringify(storeData));
    console.log('locally stored data',storeData);
}