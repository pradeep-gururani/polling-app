module.exports = function GetData(getData){    
    return(JSON.parse(localStorage.getItem(getData)));
        
}   