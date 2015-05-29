var arrayLength = 1000;
var iterations = 200;
var min = 0;
var max = 1000000;

/**
 * Bubble sort
 */

function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function bubbleSort(items){

    var len = items.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (items[j] > items[j+1]){
                var secondIndex = j+1;
                var temp = items[j];
                items[j] = items[secondIndex];
                items[secondIndex] = temp;
            }
        }
    }

    return items;
}

/**
 * Selection sort
 */

function selectionSort(items){

    var len = items.length,
        min;

    for (i=0; i < len; i++){

        //set minimum to this position
        min = i;

        //check the rest of the array to see if anything is smaller
        for (j=i+1; j < len; j++){
            if (items[j] < items[min]){
                min = j;
            }
        }

        //if the minimum isn't in the position, swap it
        if (i != min){
            var temp = items[i];
            items[i] = items[min];
            items[min] = temp;
        }
    }

    return items;
}

/**
 * Quicksort
 */

function partition(items, left, right) {

    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;


    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            var temp = items[i];
            items[i] = items[j];
            items[j] = temp;
            i++;
            j--;
        }
    }

    return i;
}

function quickSort(items, left, right) {

    var index;

    if (items.length > 1) {

        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;

        index = partition(items, left, right);

        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }

        if (index < right) {
            quickSort(items, index, right);
        }

    }

    return items;
}

function sort(unsorted) {
  console.log(bubbleSort(unsorted));
  console.log(selectionSort(unsorted));
  console.log(quickSort(unsorted));
}

function timedSort(unsorted) {
  setTimeout(function() {
    sort(unsorted);
  }, 1);
}

function sortAll() {
  for (var i = 2; i <= iterations; ++i) {
    var unsorted = [];
    for (var j = 0; j < arrayLength; j++) {
      var element = Math.floor(Math.random() * (max - min + 1)) + min;
      unsorted.push(element);
    }
    sort(unsorted);
  }
}

var sortButton = document.getElementById("sort");
sortButton.addEventListener("click", sortAll, false);