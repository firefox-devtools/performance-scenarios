var arrayLength = 1000;
var arrayCount = 200;
var min = 0;
var max = 1000000;
var arrays = [];

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
                swap(items, j, j+1);
            }
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
            swap(items, i, j);
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
  return bubbleSort(unsorted)
}

function sortAll() {
  for (var i = 0; i < arrays.length; ++i) {
    arrays[i] = sort(arrays[i]);
  }
  var arrayDivs = document.getElementById("all-arrays").childNodes;
  for (var i = 0; i < arrayDivs.length; ++i) {
    arrayDivs[i].textContent = arrays[i];
  }
}

function makeArray() {
  var unsorted = [];
  for (var j = 0; j < arrayLength; j++) {
    var element = Math.floor(Math.random() * (max - min + 1)) + min;
    unsorted.push(element);
  }
  return unsorted;
}

function reset() {
  // reset arrays
  arrays.length = 0;
  // clean container
  var container = document.getElementById("container");
  if (container.firstChild) {
    container.firstChild.remove();
  }
  // init container
  var arraysDiv = document.createElement("div");
  arraysDiv.setAttribute("id", "all-arrays");
  for (var i = 0; i < arrayCount; i++) {
    var unsorted = makeArray();
    var arrayDiv = document.createElement("div");
    arrayDiv.setAttribute("class", "array");
    arrayDiv.textContent = unsorted;
    arraysDiv.appendChild(arrayDiv);
    arrays.push(unsorted);
  }
  container.appendChild(arraysDiv);
}

var sortButton = document.getElementById("sort");
sortButton.addEventListener("click", sortAll, false);

var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", reset, false);
