console.log('INFO: Starting to read case.js');

console.log('INFO: Getting access to elements');

const inputElement1 = document.querySelector("#first");
const inputElement2 = document.querySelector("#second");
const btnElement = document.getElementById("calcButton");
const ansElement = document.getElementById("answer");

console.log('INFO: Configuring event handlers');

inputElement1.onclick = function () {
  alert("thanks for clicking input 1!");
};

inputElement2.ondblclick = () => {
  alert("thanks for double clicking input 2!");
};

/* 
inputElement2.addEventListener("mouseover", () => {
  alert("thanks for mousing over input 2!");
});
*/


btnElement.onclick = async function () {
  const text1 = inputElement1.value;  // values are text! 
  const text2 = inputElement2.value;
  const n = parseInt(text1);           // convert as needed
  const h = await repeat(n, text2)
  // use backtics for string interpolation
  ansElement.innerHTML = `Called with n=${n} and string=${text2}: ${h}`;
}


console.log('INFO: Declaring functions');

/**
 * Repeats a string a given number of times
 * @param {*} count - the number of times to repeat
 * @param {*} s - the string to be repeated
 */
const repeat = async function (count, s) {
  console.log(`Calling function with ${count} and ${s}`);
  let ans = "";
  for (let i = 0; i < count; i++) {
    ans = ans + s;
    console.log(`  After iteration ${i + 1} the answer is ${ans}`);
  }
  return ans;
}

console.log('INFO: Done loading, waiting for an event'); 