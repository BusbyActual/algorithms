let input =  [5,1,4,2,8];

let bubbleSort = (arr) => {
  let swapped = false;
  for (let x = 0; x < arr.length - 1; x++) {
    let left = arr[x];
    let right = arr[x + 1];

    if (right < left) {
      let temp = arr[x + 1];
      arr[x + 1] = arr[x];
      arr[x] = temp;

      swapped = true;
    }
  }

  if (!swapped ) {
    console.log(arr);
    return arr;
  } else {
    console.log(arr);
    bubbleSort(arr);
  }
};

let init = (arr) => {
  if (Array.isArray(arr)) {
    bubbleSort(arr);
  } else {
    return '' + typeof(arr) + ' is not of type Array';
  }
};

init(input);