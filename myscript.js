console.log("----- Console Debug -----");
console.log("Hello, world.");
console.log("First", "Second", "Last");
console.log(123.456);

function myFunction() {
  document.getElementById("demo").innerHTML = "New Paragraph";
}

const PI = 3.141592653589793238;

var greeting;
greeting = "How are you ?";

let count = 10;
let answerGreeting;
answerGreeting = "I'm fine.";

/*
var lorem =
  "Lorem Ipsum is simply dummy text of the printing \
and typesetting industry. Lorem Ipsum has been the industry's \
standard dummy text ever since the 1500s, when an unknown printer \
took a galley of type and scrambled it to make a type specimen book. \
It has survived not only five centuries, but also the leap into \
electronic typesetting, remaining essentially unchanged. It was \
popularised in the 1960s with the release of Letraset sheets \
containing Lorem Ipsum passages, and more recently with desktop \
publishing software like Aldus PageMaker including versions of \
Lorem Ipsum.";
*/

var lorem = `Lorem Ipsum is simply dummy text of the printing 
and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer 
took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into 
electronic typesetting, remaining essentially unchanged. It was 
popularised in the 1960s with the release of Letraset sheets 
containing Lorem Ipsum passages, and more recently with desktop 
publishing software like Aldus PageMaker including versions of 
Lorem Ipsum.`;

var lorem2 =
  "It is a long established fact that a reader will be distracted " +
  "by the readable content of a page when looking at its layout. " +
  "The point of using Lorem Ipsum is that it has a more-or-less normal " +
  "distribution of letters, as opposed to using 'Content here, content " +
  "here', making it look like readable English. Many desktop publishing " +
  "packages and web page editors now use Lorem Ipsum as their default " +
  "model text, and a search for 'lorem ipsum' will uncover many web " +
  "sites still in their infancy. Various versions have evolved over " +
  "the years, sometimes by accident, sometimes on purpose (injected " +
  "humour and the like).";

console.log("----- Variable and Constant -----");
console.log("count =", count);
count = 20;
console.log(`count = ` + count);
count = 30;
console.log(`count = ${count}`);
console.log(`count = ${count * 3}`);

console.log("PI =", PI);
/*
PI = 3.14;
console.log(PI);
*/

console.log(`greeting = ` + greeting);
console.log("answerGreeting = ", answerGreeting);
console.log("lorem = ", lorem);
lorem = lorem2;
console.log("lorem = ", lorem);

console.log("----- Arithmetic Operator -----");
console.log("10 + 5 =", 10 + 5);
console.log("25 - 8 =", 25 - 8);
console.log("2 * PI =", 2 * PI);
console.log("PI / 4 =", PI / 4);
console.log("26 % 3 =", 26 % 3);
console.log("7 ** 2 =", 7 ** 2);

var radius = 10;
console.log("Circle Area =", PI * radius ** 2);
console.log("Circle ฉircumference =", 2 * PI * radius);
console.log("Square root of 3 =", 3 ** (1 / 2));

console.log("----- Type of Variable -----");
console.log("Type of myFunction is", typeof myFunction);
console.log("Type of PI is", typeof PI);
console.log("Type of greeting is", typeof greeting);
console.log("Type of count is", typeof count);
console.log("Type of answerGreeting is", typeof answerGreeting);
console.log("Type of radius is", typeof radius);
console.log("Type of lorem is", typeof lorem);

let a = "100";
let b = 10;
let c = "50";
let d = "Hello";
let e = 108;
let f = false;
let g = "20";

console.log("----- Variable and It's Type -----");
console.log("a =", a, "Type is", typeof a);
console.log("b =", b, "Type is", typeof b);
console.log("c =", c, "Type is", typeof c);
console.log("d =", d, "Type is", typeof d);
console.log("e =", e, "Type is", typeof e);
console.log("f =", f, "Type is", typeof f);
console.log("g =", g, "Type is", typeof g);

a = a * 10;
b -= "2";
c /= "5";
d += 20;
e += "1009";
f *= 5;
g /= "H";

console.log("----- Compound Operator -----");
console.log("a =", a, "Type is", typeof a);
console.log("b =", b, "Type is", typeof b);
console.log("c =", c, "Type is", typeof c);
console.log("d =", d, "Type is", typeof d);
console.log("e =", e, "Type is", typeof e);
console.log("f =", f, "Type is", typeof f);
console.log("g =", g, "Type is", typeof g);

console.log("----- Increment/Decrement Operator -----");
console.log("a =", a--, "Type is", typeof a);
console.log("a =", a, "Type is", typeof a);
console.log("a =", --a, "Type is", typeof a);
console.log("a =", ++a, "Type is", typeof a);
console.log("a =", a++, "Type is", typeof a);
console.log("a =", a, "Type is", typeof a);

console.log("----- Comparison Operator -----");
console.log("4 == 1", 4 == 1);
console.log('"hello" == "hello"', "hello" == "hello");
console.log("4 === 1", 4 === 1);
console.log('"hello" === "hello"', "hello" === "hello");
console.log('"1" === 1', "1" === 1);
console.log("1 == true", 1 == true);
console.log("0 === false", 0 === false);
console.log("9 != 5", 9 != 5);
console.log("2 > 3", 2 > 3);
console.log("8 <= 8", 8 <= 8);
console.log("10 >= 11", 10 >= 11);
console.log("6 < 9", 6 < 9);

console.log("----- Logical Operator -----");
console.log("true && true =", true && true);
console.log("true && flase =", true && false);
console.log("false || true =", false || true);
console.log("false || false =", false || false);
console.log("!false", !false);
console.log("(10 < 20) || (10 > 20)", 10 < 20 || 10 > 20);

console.log("----- Ternary Operator -----");
var x = 50;
console.log("x =", x, "and", x < 50 ? "< 50" : ">= 50");
console.log("x is", x % 2 === 0 ? "Even" : "Odd", "number");

var myObject = null;
var myValue = undefined;
console.log("----- null / undefined / Not a Number / infinite -----");
console.log("myObject =", myObject, "Type is", typeof myObject);
console.log("myValue =", myValue, "Type is", typeof myValue);
console.log(51 % "Ten", isNaN(51 % "Ten"));
console.log(1 / 0, isFinite(1 / 0));

let i, j;
console.log('----- Falsy Operator (false, 0, "", NaN, null, undefine) -----');
i = 9;
j = i || 1;
console.log(`i = ${i} (${typeof i}) and j = ${j} (${typeof j})`);
i = false;
j = i || 2;
console.log(`i = ${i} (${typeof i}) and j = ${j} (${typeof j})`);
i = 0;
j = i || 3;
console.log(`i = ${i} (${typeof i}) and j = ${j} (${typeof j})`);
i = "";
j = i || 4;
console.log(`i = ${i} (${typeof i}) and j = ${j} (${typeof j})`);
i = NaN;
j = i || 5;
console.log(`i = ${i} (${typeof i}) and j = ${j} (${typeof j})`);
i = null;
j = i || 6;
console.log(`i = ${i} (${typeof i}) and j = ${j} (${typeof j})`);
i = undefined;
j = i || 7;
console.log(`i = ${i} (${typeof i}) and j = ${j} (${typeof j})`);

console.log("----- Nullish Coalescing Operator (null, undefine) -----");
i = 9;
j = i ?? 1;
console.log(`i = ${i} (${typeof i}) and j = ${j} (${typeof j})`);
i = false;
j = i ?? 2;
console.log(`i = ${i} (${typeof i}) and j = ${j} (${typeof j})`);
i = 0;
j = i ?? 3;
console.log(`i = ${i} (${typeof i}) and j = ${j} (${typeof j})`);
i = "";
j = i ?? 4;
console.log(`i = ${i} (${typeof i}) and j = ${j} (${typeof j})`);
i = NaN;
j = i ?? 5;
console.log(`i = ${i} (${typeof i}) and j = ${j} (${typeof j})`);
i = null;
j = i ?? 6;
console.log(`i = ${i} (${typeof i}) and j = ${j} (${typeof j})`);
i = undefined;
j = i ?? 7;
console.log(`i = ${i} (${typeof i}) and j = ${j} (${typeof j})`);

console.log("----- toInteger, toFloat, toString & isInteger -----");
var strNum = "1234";
var intNum = parseInt(strNum, 10);
console.log("strNum =", strNum, "Type is", typeof strNum);
console.log("intNum =", intNum, "Type is", typeof intNum);
console.log("Is 12.34 integer ?", Number.isInteger(12.34));
console.log("Is 1234 integer ?", Number.isInteger(1234));
console.log("Is strNum (", strNum, ") integer ?", Number.isInteger(strNum));
console.log("Is intNum (", intNum, ") integer ?", Number.isInteger(intNum));
console.log('"106.5" to Integer is', parseInt("106.5", 10));
console.log('"256GB" to Integer is', parseInt("256GB", 10));
console.log('"1234" to Float is', parseFloat("1234"));
console.log('"106.5MHz" to Float is', parseFloat("106.5MHz"));
console.log('"ABC123" to Integer is', parseInt("ABC123", 10));
console.log('"FM106.5" to Float is', parseFloat("FM106.5"));
intNum = 5678;
strNum = intNum.toString();
console.log("strNum =", strNum, "Type is", typeof strNum);
console.log("intNum =", intNum, "Type is", typeof intNum);

console.log("----- Inline Special Character -----");
console.log("Welcome\n\tto\n\t\tThailand.\n");
console.log("Hello\nWhy\nBug", " World.\nMe ?\nBug");
