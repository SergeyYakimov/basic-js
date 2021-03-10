const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(val) {
    this.type = 'direct';

    if (val === false) {
      this.type = 'reverse';
    }
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error();
    }

    let result = [];
    const messageStr = message.toLowerCase();
    const keyStr = key.toLowerCase();
    let offset = 0;

    for (let i = 0; i < messageStr.length; i++) {
      if (messageStr.charCodeAt(i) < 97 || messageStr.charCodeAt(i) > 122) {
        result[i] = messageStr[i];
        offset++;
      } else {
          let code = (messageStr.charCodeAt(i) + keyStr.charCodeAt(Math.abs((keyStr.length + i - offset) % keyStr.length))) - 97;
      
          if (code > 122) {
            code = code - 26;
          }

          result[i] = String.fromCharCode(code);
      }
    }

    result = result.join('');

    if (this.type === 'reverse') {
      result = result.split('').reverse().join('');
    }

    return result.toUpperCase();

  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error();
    }

    let result = [];
    const messageStr = encryptedMessage.toLowerCase();
    const keyStr = key.toLowerCase();
    let offset = 0;

    for (let i = 0; i < messageStr.length; i++) {
      if (messageStr.charCodeAt(i) < 97 || messageStr.charCodeAt(i) > 122) {
        result[i] = messageStr[i];
        offset++;
      } else {
          let code = (messageStr.charCodeAt(i) - keyStr.charCodeAt(Math.abs((keyStr.length + i - offset) % keyStr.length))) + 97;
      
          if (code < 97) {
            code = code + 26;
          }

          result[i] = String.fromCharCode(code);
      }
    }
    
    result = result.join('');

    if (this.type === 'reverse') {
      result = result.split('').reverse().join('');
    }

    return result.toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
