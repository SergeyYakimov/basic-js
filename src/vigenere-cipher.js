const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(val) {
      this.type = val ? 'direct' : 'reverse';
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error();
    }

    // const resultArr = [];

    // if (message.length > key.length) {
    //   for (let i = 0; i < (message.length - key.length); i++) {
    //     message = message + key.push(key[i]);
    //   }
    // }

    // for (let j = 0; j < messageArr.length; j++) {
    //   message.charCodeAt(j) + 
    //   resultArr.push()
    // }
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error();
    }
  }
}

module.exports = VigenereCipheringMachine;
