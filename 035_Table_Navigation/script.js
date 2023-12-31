let t = document.body.firstElementChild.firstElementChild;
console.log(t);
console.log(t.rows);
console.log(t.caption);
console.log(t.tHead);
console.log(t.tHead.firstElementChild);
console.log(t.tFoot);
console.log(t.tBodies);
console.log(t.rows[0].rowIndex); // for rowIndex
console.log(t.tBodies[0].firstElementChild.lastElementChild.cellIndex); // for column(td) index

let tr = t.rows;
console.log(tr[1].cells);

let td = tr[1].cells;
console.log(td[td.length-1].cellIndex); // for column index