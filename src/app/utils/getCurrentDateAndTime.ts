export default function getCurrentDateAndTime() {

    let currentDateAndTime = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    
    return currentDateAndTime
}