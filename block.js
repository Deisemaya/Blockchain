// criação do bloco, 4 tipos fundamentais, 1 timestemp em milesegundos(hora da criação do block), 2 last hash( hash do bloco anterior) , 3 hash. 4 dados
// lasthash e hash possuem ate 23 digitos
class Block{

    constructor(timestamp, lasthash, hash, data){

        this.timestamp = timestamp;
        this.lasthash = lasthash;
        this.hash = hash
        this.data = data


    } 
    toString(){
        return ` Block = 
                Timestamp = ${this.timestamp}
                lasthash = ${this.lasthash.substring(0,10)}
                hash =${this.hash.substring(0,10)}
                data =${this.data}`
                
    }
    // metodo static permite chamar a função sem fazer uma nova instancia do block
    //Este código define um método estático chamado genesis na classe Block. Métodos estáticos são métodos que podem ser chamados diretamente 
    //na própria classe, em vez de em uma instância da classe.
  
    static genesis(){ 

      return new this('Genesis Time', '---','JHSGAY55', '[]' );
   }
   
   static mineBlock(lastBlock, data){
    const timestamp = Date.now();
    const lasthash = lastBlock.hash;
    const hash = 'a-fazer-hash';
    return new this(timestamp, lasthash, hash, data);


   }

}


module.exports = Block;