const Token = artifacts.require('./Token')

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('Token',(accounts)=>{

    describe('deployment',()=>{
      it('tracks the name',async ()={
        const token = await Token.new()
        const result = token.name()
        result.should.equal('My Name')
        //Fetch token from blockchain
        //Read token name here...
        //Token name is My Name
      })  
    })
})