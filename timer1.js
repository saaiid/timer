const alarms = process.argv.slice(2);

if (!alarms.length) {
  console.log("No alarms were set. Exiting...");
  return;
}

alarms.forEach(alarm => {
  if (isNaN(alarm) || alarm < 0) {
    return;
  }

  console.log(`Alarm set for ${alarm} seconds`);
  setTimeout(() => {
    console.log(`Beep! Time's up: ${alarm} seconds have passed`);
    process.stdout.write('\x07');
  }, alarm * 1000);
});



