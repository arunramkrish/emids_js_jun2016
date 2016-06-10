function f(x,y) { return (x*arguments.callee.a) + (y*arguments.callee.b); }
f.a = 2;
f.b = 3;
f(2,2)
10
f
f(x,y) { return (x*arguments.callee.a) + (y*arguments.callee.b); }
f["a"] = 3;
3
f(2,2)
12
f.g = function(z) { return z*z;}
(z) { return z*z;}
f.g(2)
4
f.g.Employee = function() {
Uncaught SyntaxError: Unexpected end of input
f.g.Employee = function() { this.name = arguments[0];}
() { this.name = arguments[0];}
var emp = new f.g.Employee()
undefined
emp
f.g.Employee {name: undefined}
emp.name
undefined
var emp = new f.g.Employee("emids")
undefined
emp.name
"emids"
var defaultPackage = f.g
undefined
var emp = new defaultPackage.Employee("emids")
undefined
emp.name
"emids"
emp.name = "arun"
"arun"
emp.name
"arun"
function Employee() { var name = arguments[0]; this.getName = function() { return name;}; this.setName = function(n) { name = n;}}
undefined
var emp = new Employee("arun");
undefined
emp.name
undefined
emp.getName()
"arun"
emp.setName("emids")
undefined
emp.getName()
"emids"
function Employee() { var name = arguments[0]; Employee.prototype.getName = function() { return name;}; Employee.prototype.setName = function(n) { name = n;}}
undefined
var emp = new Employee("arun");
undefined
emp.getName()
"arun"
emp.setName("emids")
undefined
