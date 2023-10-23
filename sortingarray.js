const arr1 = [10,9,15,14,22.5,18.6]; 

function arrSort(arr) { 
	arr.sort((a,b)=>a-b); 
	arr.reverse(); 
	return arr; 
} 

console.log(arrSort(arr1)); 
