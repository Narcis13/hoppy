(function parse(){
    console.log('Poate intelegi ceva');

    var expression = function (rbp) {
        var left;
        var t = token;
        advance();
        left = t.nud();
        while (rbp < token.lbp) {
            t = token;
            advance();
            left = t.led(left);
        }
        return left;
    };
    
    function makeToken(t,v,lbp){
        return {
            type:t,
            value:v,
            lbp:lbp||0,
            nud:function(){
                return this;
            },
            led:function(left){
                this.first = left;
                this.second = expression(this.lbp);
                this.arity = "binary";
                return this;
            }
        }
    }
    
    var token;
    var tokens=[];
    var token_nr=0;
    function advance(){
       token=tokens[token_nr];
       token_nr++;
    }
    
    tokens.push(makeToken('literal',2))
    tokens.push(makeToken('operator','*',60))
    tokens.push(makeToken('literal',3))
    tokens.push(makeToken('operator','+',50))
    tokens.push(makeToken('literal',4))
    tokens.push(makeToken('name','eof'))
    
    advance();

    console.log("Rezultatul: ",expression(0));
})();
