const rows = 5;

for (let i = 1; i <= rows; i++) {
  const spaces = " ".repeat(rows - i);
  const stars = "*".repeat(i);
  console.log(spaces + stars);
}