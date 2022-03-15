const newArray = process.argv.slice(2, process.argv.length);

const timer1 = function(newArray) {
  if (newArray.lenght < 1) return;
  for (const alarm of newArray) {
    if (alarm < 0 || isNaN(alarm));
    else {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, alarm * 1000);
    }
  }
};

timer1(newArray);