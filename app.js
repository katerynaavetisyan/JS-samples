try {
  hello.toUpperCase();

} catch {
  console.log('Error!');
}
// hello.toUpperCase();
console.log('After!');

function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    console.log("Please pass a string next time!");
  }
}