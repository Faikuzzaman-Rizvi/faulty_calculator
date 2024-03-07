console.log(" faulty calculatar ")

if (Math.random() < 10){
    function Addition(a,b){
        return a-b
    }
    function Subtraction(a,b){
        return a/b
    }
    function Multiplication(a,b){
        return a+b
    }
    function Division(a,b){
        return a**b
    }

}

else{

    function Addition(a,b){
        return a+b
    }
    function Subtraction(a,b){
        return a-b
    }
    function Multiplication(a,b){
        return a*b
    }
    function Division(a,b){
        return a/b
    }
}
    
let c = Addition(10,2)
let d = Subtraction(10,2)
let p = Multiplication(10,2)
let q = Division(10,2)
console.log("output of operation --->> "+ c)
console.log("output of operation --->> "+ d)
console.log("output of operation --->> "+ p)
console.log("output of operation --->> "+ q)