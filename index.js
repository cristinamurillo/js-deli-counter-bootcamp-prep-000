
/*function takeANumber(katzDeliLine, name){
  var numberInLine = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return "Welcome, "+ name + ". You are number " + numberInLine + " in line."
}*/

let allCustomers = []
let katzDeliLine = []

function takeANumber(katzDeliLine){
  allCustomers = [...allCustomers, allCustomers.length+1]
  katzDeliLine.push(allCustomers.length)
  return "Welcome, you are " + allCustomers.length + "."
  
}

console.log(takeANumber(katzDeliLine))
console.log(takeANumber(katzDeliLine))
console.log(takeANumber(katzDeliLine))
console.log(nowServing(katzDeliLine))
console.log(takeANumber(katzDeliLine))

function nowServing(katzDeliLine){
  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!"
  } else {
    var firstPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + firstPerson + "."
  }
}

function currentLine(line){
  var i = line.length
  var lineString = ""
  if(i===0){
    return "The line is currently empty."
  } else {
    var n = 1
  while(i>1){
    lineString = lineString + n +". " + line[n-1] + ", "
    n++;
    i--;
   }
   return "The line is currently: " + lineString + n + ". " + line[n-1]
  }
}
