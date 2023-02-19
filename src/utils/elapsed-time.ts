/**
 * Prints the elapsed time in human-readable format.
 * @param seconds number of seconds.
 */
export function elapsedTime(seconds: number) {
  seconds = Math.max(Math.floor(seconds), 0);

  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds / 3600) % 24);
  const minutes = Math.floor((seconds / 60) % 60);
  const sec = Math.floor(seconds % 60);

  const outs = [];

  if (days > 0) {
    let dayStr = days + ' day';
    if (days !== 1) { dayStr += 's'; }
    outs.push(dayStr);
  }

  if (hours > 0) {
    let hourStr = hours + ' hour';
    if (hours !== 1) { hourStr += 's'; }
    outs.push(hourStr);
  }

  if (minutes > 0) {
    let minStr = minutes + ' minute';
    if (minutes !== 1) { minStr += 's'; }
    outs.push(minStr);
  }

  let secStr = sec + ' second';
  if (sec !== 1) { secStr += 's'; }
  outs.push(secStr);

  return outs.join(', ').replace(/, ([^,]*)$/, ' and $1');
}
