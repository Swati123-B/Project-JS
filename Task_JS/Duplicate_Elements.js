const seen = new Set();
const dups = [];
for (const x of arr) {
  if (seen.has(x)) {
    if (!dups.includes(x)) dups.push(x);
  } else {
    seen.add(x);
  }
}

if (dups.length === 0) {
  console.log("No duplicates found");
} else {
  console.log(dups.join("\n"));
}


