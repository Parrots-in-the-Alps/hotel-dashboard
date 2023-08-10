import moment from "moment";


export function getCheckinPercentage(attendus,realises){
   let percentage = (realises * 100)/attendus;
   console.log(percentage);

    return percentage;
}

export function getChekinPerHourCount(object){
    let checkinCount = [];
    
    return checkinCount;
}



export function translateHour(date){
    date =  JSON.parse(JSON.stringify(date));
return moment(date).format('HH');
}

export function translateHourTime(date){
    date =  JSON.parse(JSON.stringify(date));
return moment(date).format('HH-mm-jss');
}

