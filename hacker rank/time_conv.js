function convert(time){
    let arr = time.split(':');
    let first_num = parseInt(arr[0]);
    let last_num = arr[arr.length - 1];

    let str_match = last_num.match(/(\d+)/);
    arr[arr.length - 1] = str_match[0];
    
    if(last_num.includes('PM')){
        if (arr[0] !== "12"){
            arr[0] = String(first_num + 12)
        }
        return arr.join(":")
    } else {
        if (arr[0] === "12"){
            arr[0] = "00";
        }
        return arr.join(":")
    }
    
}


// let x1 = "12:40:22AM"
let x1 = "06:40:03AM";
// "07:05:45PM"
console.log(convert(x1))


/*
    Given a time in 12-hour AM/PM format. convert it to military
    (24-hour)time.

    eg: 12:00:00AM on a 12 hour clock is 00:00:00 on a 24-hour clock
        12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock

*/