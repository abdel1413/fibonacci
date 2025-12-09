//first way to do it

function createSignature(name, title, company) {
  const firstLetter = name[0].toUpperCase();

  let prefix;
  if (firstLetter >= "A" && firstLetter <= "I") {
    prefix = ">>";
  } else if (firstLetter >= "J" && firstLetter <= "R") {
    prefix = "--";
  } else {
    prefix = "::";
  }

  return `${prefix}${name}, ${title} at ${company}`;
}

//second way to do it
function generateEmailSignature(name, title, company, phone, email) {
    const regexA_I = /^[A-I]/i;
    const regexJ_R = /^[J-R]/i;
    const regexS_Z = /^[S-Z]/i;
  
    let resultString;;
    if (regexA_I.test(name[0])) {
        resultString = `>>${name}, ${title} at ${company}\nPhone: ${phone}\nEmail: ${email}`;
    }else if (regexJ_R.test(name[0])) {
        resultString = `--${name}, ${title} at ${company}\nPhone: ${phone}\nEmail: ${email}`;
    } else if (regexS_Z.test(name[0])) {
        resultString = `::${name}, ${title} at ${company}\nPhone: ${phone}\nEmail: ${email}`;
    } else {
        resultString = `${name}, ${title} at ${company}\nPhone: ${phone}\nEmail: ${email}`;
    }
  
    return resultString;
}