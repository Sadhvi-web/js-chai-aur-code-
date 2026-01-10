// Global scope(Outside function)
// let a=10
// console.log(a);

// Block Scope (Inside {})  

// Global Variable Access Inside Block
let a = 300
if (true) {
    console.log(a); //accessible
}
console.log(a);

// Block Variable NOT Accessible Outside
if(true){
    let innerA = 10  // BLOCK SCOPE 【18727.84, type: source】 
    console.log(innerA)  // ✅ 10
}
// console.log(innerA)      //Error



// Closure
// Closures create a function with preserved access to its lexical scope (outer variables) even after the outer function finishes.
// Simple Concept:
// Outer Function (Lexical Scope)
// ├── Inner Function ← Closure
// │   └── Remembers outer variables
// └── Even after outer() ends 
        // Functions inside functions create new scopes s
        // Child accesses parent 
        // Parent cannot accesses Child

function one(){
    const username = "Sadhvi"       // Lexical scope

    function two(){
        const website = 'Youtube'
        console.log(username);      // Accesses outerVar
    }
    // console.log(website);    // Gives error
    
    two()   // Gives output sadhvi by accessing outer variable
}
one()   // Returns Nothing