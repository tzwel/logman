import fs from 'fs'

const defaultLog = "log.txt"
const acceptedSeverities = ["log", "info", "warning", "error"]

function get(what) {

    switch (what) {
        case "unix":
            return Date.now()

        case "today":
            return new Date().toLocaleDateString()

        case "time":
            return new Date().toLocaleTimeString()
    
        default:
            break;
    }

    return "no data to return"
}

function log(what, logfile) {

    if (!logfile) {
        logfile = defaultLog;
    }

    let logdata;

    if (what instanceof Object) {

        if (!what.severity) {
            return console.log("log severity must be provided");
        }

        if (!acceptedSeverities.includes(what.severity)) {
            return console.log(`log severity must be of one of the types: ${acceptedSeverities}`);
        }

        this.data = what.data
        this.severity = what.severity

        if (what.prepend) {
            this.prepend = `${what.prepend}`
            logdata = `[${this.severity}] ${this.prepend}, ${this.data} \n`
        } else {
            logdata = `[${this.severity}] ${this.data} \n`
        }


    } else {
        logdata = `${what} \n`
    }


    fs.writeFile(logfile, logdata, {'flag':'a'}, function(err) {
        if (err) {
            return console.error(err);
        }
    });
}
  
export default { get, log }
