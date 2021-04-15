// alert("it's connected")

function outerFn(){
    let outsideVarThatExistsInMemoryEvenAfterOuterFnIsPoppedOffExecutionStack = "This is one crazy variable name"
    function innerFn(){
alert(outsideVarThatExistsInMemoryEvenAfterOuterFnIsPoppedOffExecutionStack)
    }
    return innerFn
}

var myFn = outerFn();
myFn();

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
  //mdn notes Nested functions have access to variables declared in their outer scope.
  //in dev tools the scope of this fn is revealed as
  //[[Scopes]]: Scopes[1]
// 0: Global {window: Window, self: Win

  function makeFunc() {
    var name = 'Mozilla'; //this variable is in the execution context of the makeFunc()
    function displayName() {
      alert(name); //this is the code property of the nested fn displayName()
    }
    return displayName; //why return displayName and not displayName() let's change it and see the difference
    //this error occurs if changed to displayName() index.js:37 Uncaught TypeError: myFunc is not a function
  }
  
  var myFunc = makeFunc();
  myFunc();
//in dev tools this is revealed as a closure in the scope like this
// [[Scopes]]: Scopes[2]
// 0: Closure (makeFunc)
// name: "Mozilla"
//so what's the difference??
//What's different (and interesting) is that the displayName() inner function is returned from the outer function before being executed.
//thats how mdn describes the difference
//. A closure is the combination of a function and the lexical environment within which that function was declared. 