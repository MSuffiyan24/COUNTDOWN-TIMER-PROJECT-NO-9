import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const Userinput = await inquirer.prompt([
    {
        name: "Userdata",
        type: "number",
        message: "Please input timer setting:",
        validate: (input) => {
            if (isNaN(input)) {
                return "Please enter valid number";
            }
            else if (input > 60) {
                return "Value must be under 60 seconds";
            }
            else {
                return true;
            }
        }
    }
]);
let input = Userinput.Userdata;
function Countdowntimer(val) {
    let inttime = new Date().setSeconds(new Date().getSeconds() + val);
    let Dateformat = new Date(inttime);
    setInterval((() => {
        let CurrTime = new Date();
        let TimeDiff = differenceInSeconds(Dateformat, CurrTime);
        if (TimeDiff <= 0) {
            console.log("Your Counter has stopped");
            process.exit();
        }
        let min = Math.floor(TimeDiff % (3600 * 24) / 3600);
        let sec = Math.floor(TimeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }), 1000);
}
Countdowntimer(input);
