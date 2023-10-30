const Block = require ('./block.js')

const block = new Block('7657','753896HFHFDH3','65647383HFFKDKIE','100');

console.log(block.toString());
console.log(Block.genesis().toString());
const primeiroBloco = Block.mineBlock(Block.genesis(), '$500')
console.log(primeiroBloco.toString())

