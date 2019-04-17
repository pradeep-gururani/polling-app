module.exports = function removeData(name){
    localStorage.removeItem(name);
    console.log('removed local data',name);
}   