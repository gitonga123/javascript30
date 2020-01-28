function squareDigits(num){
  return parseInt(String(num).split("").map(value => value * value).join(""));
}

if (squareDigits(9191) == 811811) {
    console.log('passed');
} else {
    console.log('failed');
}
