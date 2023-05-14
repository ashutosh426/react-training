function * genenratorGreet(){
    yield "G-Good Morning!";
    return "Hello";
}
const itr =genenratorGreet();

console.log(itr.next());
console.log(itr.next());
console.log(itr.next());