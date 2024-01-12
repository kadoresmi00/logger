const { Logger } = require('@kadoresmi00/logger');

const logger = new Logger({
    frequency: 'monthly',
    consoleLog: true,
    logLevel: 'debug',
});

logger.log('This is an error message', 'error');
logger.log('This is a warning message', 'warn');
logger.log('This is an info message', 'info');


logger.logWithColor('This is a red message', 'red');
logger.logWithColor('This is a yellow message', 'yellow');
logger.logWithColor('This is a green message', 'green');
logger.logWithColor('This is a blue message', 'blue');
logger.logWithColor('This is a black message', 'black');
// black, red, green, yellow, blue, magenta, cyan, white, gray, brightRed, brightGreen, brightYellow, brightBlue, brightMagenta, brightCyan, brightWhite, purple, orange, teal, pink, lavender, reset

// hex colors
logger.logWithHex('This is a hex message', '#ff0000');