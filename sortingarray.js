function customDescendingSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
	  for (let j = i + 1; j < arr.length; j++) {
		if (arr[i] < arr[j]) {
		  const temp = arr[i];
		  arr[i] = arr[j];
		  arr[j] = temp;
		}
	  }
	}
  }
  
  const numbers = [10,8,25,15,22,35];
  customDescendingSort(numbers);
  console.log(numbers);
  