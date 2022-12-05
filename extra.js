const message = "com type|channel | text | url| button text"

const arr = message.split("|");

const channelid = arr[0].trim();
const text = arr[1].trim();
const url = arr[2].trim();
const button_text = arr[3].trim();
// const usernameid = arr[4].trim();


console.log(arr);


