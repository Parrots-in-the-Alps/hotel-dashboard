import moment from "moment";


export function getCheckinPercentage(attendus,realises){
   let percentage = (realises * 100)/attendus;
   console.log(percentage);

    return percentage;
}


