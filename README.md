  <h1>
    <img align="left" height=40 src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Settings-512.png" />
    <span align="left">@kadoresmi00/logger</span>
  </h1>

More organized logs, conveniences, and colors!

```bash
npm i @kadoresmi00/logger
```

<a href="https://www.npmjs.com/package/@kadoresmi00/logger">![GitHub package.json version](https://img.shields.io/github/package-json/v/kadoresmi00/logger?style=for-the-badge)</a>
<a href="https://www.npmjs.com/package/@kadoresmi00/convert-currency">![npm](https://img.shields.io/npm/dw/@kadoresmi00/logger?style=for-the-badge)</a>

**Features:**

- Easy error handling, updating, and detailed logging ✅
- Convenience and color in console logs ✅
- Console outputs in hex format ✅
- Console outputs with timestamp ✅
- Localized log outputs ✅
# Usage

You can make improvements with the following examples 🧑‍💻
<br>

<br>

- It creates a 'logs' folder in the current directory and writes data on a monthly or daily basis according to your preferences.

```js
const { Logger } = require('@kadoresmi00/logger');

const logger = new Logger({
    frequency: 'monthly', // daily or monthly
    consoleLog: true, // true or false
    logLevel: 'debug', // error, warn, info, or debug
});

logger.log('This is an error message', 'error');

// [19:16:29] [ERROR] This is an error message



```

- logWithColor()
<p>Only console outputs.</p>

```js
const { Logger } = require('@kadoresmi00/logger');

const logger = new Logger();

logger.logWithColor('This is a red message', 'red');
logger.logWithColor('This is a yellow message', 'yellow');
logger.logWithColor('This is a green message', 'green');
logger.logWithColor('This is a blue message', 'blue');
logger.logWithColor('This is a black message', 'black');

// black, red, green, yellow, blue, magenta, cyan, white, gray, brightRed, brightGreen, brightYellow, brightBlue, brightMagenta, brightCyan, brightWhite, purple, orange, teal, pink, lavender, reset

```
- logWithHex()
<p>Only console hex color usage.</p>

```js
const { Logger } = require('@kadoresmi00/logger');

const logger = new Logger();

logger.logWithHex('This is a hex message', '#ff0000');

```


## NPM
[Link](https://www.npmjs.com/package/@kadoresmi00/logger)
