function Calculator(){

    this.print = function(val1 , val2){
        console.log('Val1 ',val1)
        console.log('Val2 ',val2)
    }

    this.add = function(val1, val2){
        console.log("Sum :",val1+val2)
    }
    
    this.sub = function(val1, val2){
        console.log("Sub :",val1-val2)
        return val1-val2
    }
}

module.exports = Calculator