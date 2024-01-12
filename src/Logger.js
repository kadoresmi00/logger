const fs = require('fs');
const path = require('path');

/**
 * @typedef {Object} LoggerOptions
 * @property {string} [frequency='daily'] - The frequency at which to create new log files. Can be either 'daily' or 'monthly'.
 * @property {boolean} [consoleLog=false] - Whether or not to log to the console.
 * @property {string} [logLevel='info'] - The minimum log level to log to the console. Can be either 'error', 'warn', 'info', or 'debug'.
 */

class Logger {
  constructor(options = {}) {
    const { frequency = 'daily', consoleLog = false, logLevel = 'info' } = options;

    if (!['daily', 'monthly'].includes(frequency)) {
      throw new Error('Invalid frequency');
    }

    if (!['error', 'warn', 'info', 'debug'].includes(logLevel)) {
      throw new Error('Invalid log level');
    }

    /**
     *
     * @param {string} message - The message to log.
     * @param {string} [level='info'] - The log level. Can be either 'error', 'warn', 'info', or 'debug'.
     */
    this.log = async function (message, level = 'info') {
      const shouldLogToConsole = function (messageLevel) {
        const levels = ['error', 'warn', 'info', 'debug'];
        return levels.indexOf(messageLevel) <= levels.indexOf(logLevel);
      };
      const logToConsole = function (data, level) {
        const colors = {
          error: '\x1b[31m',
          warn: '\x1b[33m',
          info: '\x1b[36m',
          debug: '\x1b[90m',
          reset: '\x1b[0m',
        };

        const coloredData = `${colors[level]}${data}${colors.reset}`;
        console.log(coloredData);
      }
      const date = new Date();
      const fileNameDate = frequency === 'monthly' ? `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}` : `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
      const fileName = `${fileNameDate}.log`;
      const logsDirectory = path.join(__dirname, '..', 'logs');
      const filePath = path.join(logsDirectory, fileName);
      const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

      const data = `[${time}] [${level.toUpperCase()}] ${message}`;

      if (consoleLog && shouldLogToConsole(level)) {
        logToConsole(data, level);
      }

      if (!fs.existsSync(logsDirectory)) {
        fs.mkdirSync(logsDirectory, { recursive: true });
      }

      fs.appendFileSync(filePath, data+'\n');
    };

    /**
    * Logs a message to the console with specified color.
    * @param {string} message - The message to log.
    * @param {string} color - The color for console output. Can be any ANSI color code or a named color.
    */
    this.logWithColor = function (message, color) {
      const colorss = {
        black: '\x1b[30m',
        red: '\x1b[31m',
        green: '\x1b[32m',
        yellow: '\x1b[33m',
        blue: '\x1b[34m',
        magenta: '\x1b[35m',
        cyan: '\x1b[36m',
        white: '\x1b[37m',
        gray: '\x1b[90m',
        brightRed: '\x1b[91m',
        brightGreen: '\x1b[92m',
        brightYellow: '\x1b[93m',
        brightBlue: '\x1b[94m',
        brightMagenta: '\x1b[95m',
        brightCyan: '\x1b[96m',
        brightWhite: '\x1b[97m',
        purple: '\x1b[35m',
        orange: '\x1b[38;5;208m',
        teal: '\x1b[38;5;51m',
        pink: '\x1b[38;5;200m',
        lavender: '\x1b[38;5;183m',
        reset: '\x1b[0m',
      };
      if (!colorss[color]) {
        throw new Error('Invalid color');
      }
      const coloredData = `${colorss[color]}${message}${colorss.reset}`;
      console.log(coloredData);
    }

    /**
     * Logs a message to the console with specified hex color.
     * @param {string} message - The message to log.
     * @param {string} hex - The hex color code (e.g., "#161616").
     */
    this.logWithHex = function (message, hex) {
      function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
      }
      const rgb = hexToRgb(hex);
      if (!rgb) {
        throw new Error('Invalid hex color');
      }
      const coloredData = `\x1b[38;2;${rgb.r};${rgb.g};${rgb.b}m${message}\x1b[0m`;
      console.log(coloredData);
    };
  }
}

module.exports = Logger;
