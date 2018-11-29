function getX() {
  objData = new Map(); 
  return function(x) {
    // if (obj[x]) {  //ES 5
    if (objData.get(x)) {
      console.log("Available in Cache");
    } else {
      objData.set(x, x);
      console.log("Adding");
    }
  };
}

let checkCache =  getX();
checkCache(3);
checkCache(3);
checkCache(1);
checkCache(2);
checkCache(4);


/*

function fast(fn) {
  let cache = {};
  return function(arg) {
    if(cache[arg]) {
      console.log("serving from cache");
      return cache[arg];
    }
    else {
      let result = fn(arg);
      cache[arg] = result;
      console.log("not available in cache");
      return result;
    }
  }
}

function slowGet(x) {
  return x;
}

let getX = fast(slowGetX); 

*/