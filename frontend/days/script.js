const d = new Date("2024-12-31");
// or
const dFull = new Date(2024, 11, 31);
console.log(dFull);


// การลบ
const date1 = new Date("2025-01-01");
const date2 = new Date("2025-01-02");
const day = 1000 * 60 * 60 * 24
console.log((date1 - date2) / day);