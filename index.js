function produceDrivingRange(blockRange){
  return function(starting, ending){
    let start = parseInt(starting)
    let end = parseInt(ending)
    let distance = Math.abs(start - end)
    let difference = blockRange - distance

    if(difference > 0){
      return `within range by ${difference}`
    }
    else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(percent){
  return function(bill){
    return bill * percent
  }
}
