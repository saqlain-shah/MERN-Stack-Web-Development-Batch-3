function average(...args) {
  var sum = 0;

  for (var i = 0; i < args.length; i++) {
    sum = sum + args[i];
  }

  var avg = sum / args.length;
  console.log("Average of the args: ", sum);
}

average(1, 2, 3, 4, 5);
