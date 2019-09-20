/*This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.*/

function accum(s) {
	// your code
  let accArray = s.toLowerCase().split("").map((item, i) => item.repeat(i + 1));
  let finalArray = accArray.map((step) => step.charAt(0).toUpperCase() + step.slice(1)).join("-");
  
  return finalArray;
  
  //console.log(accArray);
  //console.log(finalArray);
}
//accum("abcd")
console.log(accum("abcd"));