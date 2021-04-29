/*Question 10

Consider these two simple functions:
*/


function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}
//What will the following function invocation return?

bar(foo());
//it will return "no"
/*
foo() doesn't use param ever, so it will always return "yes"
so then bar("yes") just uses the ternary to return the false result of "no"

*/