{
  // Block Scope
}

if (true) {
  // Block Scope
}

for (var i = 1; i <= 10; i++) {
  // Block Scope
}

function sum(a, b) {
  // Function Scope
  var result = a + b;
}

sum(4 + 3);
