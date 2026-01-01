function isSpam(number) {
 //1 remove all none char


 //spam if:
 // check if leading is 0 0r any of 0-9 but 
 //length shoulb less than 3digits
 console.log(number)
 let digits = number.replace(/\D/g, "")
 console.log(digits)
  // 2 regex to match phone format
 let code = /^(\d+)(\d{3})(\d{3})(\d{4})$/
 let match = digits.match(code)
 console.log(match)
  //3 extract country, area, local3 and local3 codes
let [, country, area, local3, local4] = match;
console.log(country, area, local3,local4)

  // 4 It is spam if number doesn't match code format
  if(!match)return true;

  //5 It is spam if country code > 2 or first digit is not 0

  if(country > 2|| country[0] !== 0) return true;

   //6 It is spam if area code is < 200 || > 900
   if(Number(area) < 200 ||Number(area )> 900) return true;
   //7 It is spam if sum of local3 code is included in local4 code
  let sumLocal3 =  local3.split("").reduce((sum,next)=> sum+Number(next),0)
  console.log('sss',sumLocal4)
  if(local4.includes(String(sumLocal3))) return true;

  //repeated digit in local4 more than 3 times is spam
    // let digitCount = {};        
    // for (const digit of local4) {
    //     digitCount[digit] = (digitCount[digit] || 0) + 1;
    //     if (digitCount[digit] > 3) {
    //         return true;
    //     }
    // }
    if(/(\d)\1{3,}/.test(local4)) return true;

  return false;
 
}


//2nd approach
function isSpam(phone) {
  // Remove all non-digits
  const digits = phone.replace(/\D/g, "");

  // Extract parts
  const match = digits.match(/^(\d+)(\d{3})(\d{3})(\d{4})$/);
  if (!match) return true; // invalid format = spam

  const [, country, area, local3, local4] = match;

  // Rule 1: Country code
  if (country.length > 2 || country[0] !== "0") {
    return true;
  }

  // Rule 2: Area code
  const areaNum = Number(area);
  if (areaNum < 200 || areaNum > 900) {
    return true;
  }

  // Rule 3: Local number sum rule
  const sumLocal3 = local3
    .split("")
    .reduce((sum, d) => sum + Number(d), 0);

  if (local4.includes(String(sumLocal3))) {
    return true;
  }

  // Rule 4: Repeated digits
  if (/(\d)\1{3,}/.test(digits)) {
    return true;
  }

  return false;
}

isSpam("+0 (200) 234-0182") // should return false
isSpam("1-800-123-4567") // should return true
isSpam("+12 345 678 9012") // should return false
isSpam("123-456-7890") // should return true
isSpam("+2 (900) 555-1234") // should return false
isSpam("+3 (150) 234-5678") // should return true
isSpam("+1 (300) 111-2222") // should return false
isSpam("+0 (250) 345-6789") // should return false
isSpam("+1 (400) 999-9999") // should return true
isSpam("+2 (800) 123-3210") // should return false