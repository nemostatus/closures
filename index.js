// alert("it's connected")

function outerFn(){
    let outsideVarThatExistsInMemoryEvenAfterOuterFnIsPoppedOffExecutionStack = "This is one crazy variable name"
    function innerFn(){
alert(outsideVarThatExistsInMemoryEvenAfterOuterFnIsPoppedOffExecutionStack)
    }
    return innerFn
}

let outer = outerFn() //in window it doesnt identify it as a closure in scope, check why
outer()