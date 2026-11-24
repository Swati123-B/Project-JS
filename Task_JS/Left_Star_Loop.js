const rows = 5;

for (let i = 1; i <= rows; i++) {
  let pattern = "";
  
  // Add leading spaces
  for (let j = 1; j <= rows - i; j++) {
    pattern += " ";
  }
  
  // Add stars
  for (let k = 1; k <= i; k++) {
    pattern += "*";
  }
  
  console.log(pattern);
}