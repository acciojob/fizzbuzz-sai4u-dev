function fizzBuzz() {
  let result = "";

  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      result += "FizzBuzz";
    } else if (i % 3 === 0) {
      result += "Fizz";
    } else if (i % 5 === 0) {
      result += "Buzz";
    } else {
      result += i;
    }

    if (i !== 100) {
      result += "\n";
    }
  }
	
  alert(result);
}

fizzBuzz();
