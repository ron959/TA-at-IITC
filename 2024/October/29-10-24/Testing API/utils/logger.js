import fs from "fs"

export default function logRequest () {
    // console.log("It Works!");
    const log = `Request Recived at ${new Date().toISOString()} \n`
    fs.appendFile("logs.txt", log, (err) => {
        if (err) throw err
        console.log("Log Saved");
    })
}