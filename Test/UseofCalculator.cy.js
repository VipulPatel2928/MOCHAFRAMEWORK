const calculator = require('./calculator.cy')
const cal = new calculator()

cal.print(100,50)

cal.add(100,50)

var subVal = cal.sub(100,50)

console.log('Return Value of Sub Function', subVal)

console.log(cal.str)
