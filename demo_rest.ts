function sum(...nums){
  let m = 0 ;
  for(let n of nums){
    m += n ;
  }
  return m
}

console.log(sum(1,2,3,4))