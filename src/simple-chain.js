const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: '',

  getLength() {
    return this.chain.split('~~').length - 1;
  },
  addLink(value) {
    this.chain = `${this.chain}( ${"" + value} )~~`;
    return this;
  },
  removeLink(position) {
    if (!position || typeof position !== 'number' || !Number.isInteger(position) || position < 1 || position > this.getLength() ) {
      this.chain = '';
      throw new Error();
    }

    this.chain = this.chain.split('~~').filter((x, i) => i !== position - 1 && x !== '').join('~~') + '~~';

    return this;
  },
  reverseChain() {
    this.chain = this.chain.split('~~').filter((x) => x !== '').reverse().join('~~') + '~~';
    return this;
  },
  finishChain() {
    let result = '';
    if (this.chain[this.chain.length - 1] === '~') {
      result = this.chain.slice(0, this.chain.length - 2);
    } else {
      result = this.chain;
    }
    this.chain = '';
    return result;
  }
};

module.exports = chainMaker;
