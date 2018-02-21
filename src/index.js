class Sorter {
  constructor() {
    this._arr = [];
  }

  add(element) {
    this._arr.push(element);
  }

  at(index) {
    return this._arr[index];
  }

  get length() {
    return this._arr.length;
  }

  toArray() {
    return this._arr;
  }

  sort(indices) {
    var arrForSort = [],
        l = indices.length;
    for(var i = 0;i < l; i++){
      arrForSort.push(this._arr[indices[i]]);
    };
    
    function Numeric(a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
    };
    arrForSort.sort(Numeric);
    indices.sort(Numeric);
    for (i=0; i < l; i++){
      this._arr.splice(indices[i], 1, arrForSort[i]);  
    };
  
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;