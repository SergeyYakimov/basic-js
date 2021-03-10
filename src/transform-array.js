const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error();
  }
    
  const newArr = [...arr];
  
  for (let i = 0; i < newArr.length; i++) { 
    if (typeof newArr[i] !== 'string') {
      continue;
    }  
       
    if (newArr[i] === '--discard-next') {
        
      if ((typeof(newArr[i + 1]) == 'undefined' || newArr.length === 1)){
        newArr.splice(i, 1);
        i--;
      } else if ((newArr[i + 2] === '--double-prev') || (newArr[i + 2] === '--discard-prev')) {         
        newArr.splice(i, 3);
        i--;
      } else {
        newArr.splice(i, 2);
        i--;
      }          
    }
     
    if (newArr[i] === '--double-next') {
      if (((typeof (newArr[i+1])) == 'undefined') || (newArr.length == 1) ){
        newArr.splice(i, 1);
        i--;
      } else {
        newArr.splice(i, 1, newArr[i+1]);   
      }     
    }
    
    if (newArr[i] === '--discard-prev') {
            
      if (i === 0) {
        newArr.splice(0, 1);  
        i--;
      } else {
        newArr.splice(i - 1, 2); 
        i -= 2;  
      } 
    }
    
    if (newArr[i] === '--double-prev') {
            
      if (i === 0) {
        newArr.splice(0, 1); 
        i--;        
      } else {
        newArr.splice(i, 1, newArr[i-1]);  
      }  
    }
  }
    
  return newArr;  
};
