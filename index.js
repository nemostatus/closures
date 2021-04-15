// alert("it's connected")

// function outerFn(){
//     let outsideVarThatExistsInMemoryEvenAfterOuterFnIsPoppedOffExecutionStack = "This is one crazy variable name"
//     function innerFn(){
// alert(outsideVarThatExistsInMemoryEvenAfterOuterFnIsPoppedOffExecutionStack)
//     }
//     return innerFn
// }

// let outer = outerFn() //in window it doesnt identify it as a closure in scope, check why
// outer()

//mozillas example of lexical scoping
function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      alert(name); // use variable declared in the parent function
    }
    displayName();
  } 
  init();