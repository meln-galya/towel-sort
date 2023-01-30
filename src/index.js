
// You should implement your task here.

 module.exports = function towelSort(matrix) {
    
      let newArr = [];

     if (matrix == undefined || matrix == [] || matrix == null ){
         return [];
     }

     for (let i = 0; i < matrix.length; i++) {
         if (i % 2 === 0) {
             newArr.push(matrix[i]);
         }
         else {
             newArr.push(matrix[i].reverse());
         }
     }
      return newArr.flat();  
 
 }
 

