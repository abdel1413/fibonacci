function formatNumber(number) {


    let code = number[0]
    console.log(code)
    const area = number.slice(1,4)
    console.log(area)
    const local3 = number.slice(4,7)
    console.log(local3)
    const local4 = number.slice(7)
    console.log(local4)

 

  return `+${code} (${area}) ${local3}-${local4}`;
}

formatNumber("05552340182") // should return "+0 (555) 234-0182"