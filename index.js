// Task: "while confirm"
// while (!confirm('Are you OK?')) {};


// Task: "array fill"
// const arr = [];
// while (true) {
//   const question = prompt("Enter some text:");
//   if (question === null || question === "") {
//     break;
//   }
//   arr.push(question);
// }


//Task: "array fill nopush"
// const arr = [];
// let i = 0;
// while (true) {
//   const question = prompt("Enter some text:");
//   if (question === null || question === "") {
//     break;
//   };
//   arr[i] = question;
//   i++;
// }


//Task: "infinite probability"
// let i = 0;
// while (true) {
//   const number = Math.random();
//   if (number > 0.9) {
//     break;
//   }
//   i++
// }
// alert(`Number of iterations: ${i}.`);


//Task: "empty loop"
// while (true) {
//   const input = prompt("Enter something:");
//   if (input === null) {
//     break;
//   }
// }


//Task: "progression sum"
// const N = 10; 
// let sum = 0; 

// for (let i = 1; i <= N; i += 3) {
//   sum += i;
// };


// Task: "chess one line"
// let length = 5; 
// let str = "";

// for (let i = 0; i < length; i++) {
//   str += "#";
// }

// console.log(str); 


// Task: "numbers"
// let str = "";
// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     str += j;
//   }
//   str += "\n";
// }
// console.log(str);


//Task: "chess"
// let widthChessDesk = 12;
// let heightChessDesk = 10; 
// let str = "";

// for (let i = 0; i < heightChessDesk; i++) {
//   for (let j = 0; j < widthChessDesk; j++) {
//     if ((i+j) % 2 === 0) {
//       str += ".";
//     } else {
//       str += "#";
//     }
//   }
//   str += "\n";
// }
// console.log(str); 


//Task: "cubes"
// const arr = [];
// const n = prompt("Enter some number");
// for (let i = 0; i < n; i++) { 
//   arr.push(Math.pow(i, 3));
// }
// console.log(arr);


//Task "multiply table"
// let table = [];

// for (let i = 1; i <= 10; i++) {
//   table[i] = [];
//   for (let j = 0; j <= 10; j++) {
//     table[i][j] = i * j;
//   }
// }
// console.log(table);


//Task: "read array of objects"
// const readArrayOfObjects = () => {
//   const objects = [];
//   let keepAdding = true;
  
//   while (keepAdding) {
//     const obj = {};
//     let addAnother = true;
    
//     while (addAnother) {
//       const key = prompt("Enter key:");
//       if (!key) {
//         addAnother = false;
//         continue;
//       }
//       const value = prompt("Enter value:");
//       obj[key] = value;
//     }
    
//     objects.push(obj);
//     keepAdding = confirm("Add another object?");
//   }
//   return objects;
// }
// console.log(readArrayOfObjects());


//Task: "Ромбік"
// let size = 11;

// let grid = 1;
// let dots = (size - 1) / 2;

// for (let i = 0; i < size; i++) {
//   let row = "";
//   for (let j = 0; j < dots; j++) {
//     row += ".";
//   }
//   for (let j = 0; j < grid; j++) {
//     row += "#";
//   }
//   for (let j = 0; j < dots; j++) {
//     row += ".";
//   }
//   console.log(row);
//   if (i < (size - 1) / 2) {
//     dots--;
//     grid += 2;
//   } else {
//     dots++;
//     grid -= 2;
//   }
// }


// Task: "DOM: multiply table"
//Task: "DOM: highlight cell"
// let table = document.getElementById("multiplicationTable");

// for (let i = 1; i <= 10; i++) {
//   let row = document.createElement("tr"); 

//     for (let j = 1; j <= 10; j++) {
//       let cell = document.createElement("td"); 
//         cell.innerText = i * j; 
//         cell.addEventListener("mouseover", function(event) {
//           event.target.style.backgroundColor = "purple";
//         });
//         cell.addEventListener("mouseout", function(event) {
//           event.target.style.backgroundColor = "transparent";
//         });
        
//         if ((i / j) % 2 === 0) {
//           row.style.backgroundColor = "grey";
//         } 
//         row.appendChild(cell); 
//     }
//     table.appendChild(row); 
// }


//Task: "DOM: Highlight cross"
// let table = document.getElementById("multiplicationTable");

// for (let i = 1; i <= 10; i++) {
//   let row = document.createElement("tr"); 

//     for (let j = 1; j <= 10; j++) {
//       let cell = document.createElement("td"); 
//         cell.innerText = i * j; 
//         cell.addEventListener("mouseover", function(event) {
//           event.target.style.backgroundColor = "purple";
//           event.target.parentElement.style.backgroundColor = "yellow";
//           let columnIndex = event.target.cellIndex;
//           let rows = Array.from(event.target.parentElement.parentElement.rows);
//           rows.forEach(row => row.cells[columnIndex].style.backgroundColor = "blue");
//         });
//         cell.addEventListener("mouseout", function(event) {
//           event.target.style.backgroundColor = "transparent";
//           event.target.parentElement.style.backgroundColor = "transparent"; 
//           let columnIndex = event.target.cellIndex;
//           let rows = Array.from(event.target.parentElement.parentElement.rows);
//           rows.forEach(row => row.cells[columnIndex].style.backgroundColor = "transparent");
//         });
        
//         if ((i / j) % 2 === 0) {
//           row.style.backgroundColor = "grey";
//         } 
//         row.appendChild(cell); 
//     }
//     table.appendChild(row); 
// }


