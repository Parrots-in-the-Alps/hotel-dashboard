import moment from "moment";


export function getCheckinPercentage(attendus,realises){
   let percentage = (realises * 100)/attendus;
   console.log(percentage);

    return percentage;
}

export function getChekinPerHourCount(object){
    if(JSON.stringify(object) === []){
        return checkinCountFinal[0,0,0,0,0,0,0,0,0,0,0,0]
    }

    let checkinCountFinal = [];
    let checkinCount = {"08":0, "09":0, "10":0,"11":0, "12":0, "13":0,"14":0, "15":0, "16":0, "17":0, "18":0, "19":0};
    
    object.forEach(element => {
        let hour = translateHour(element.checkedinAt);
        checkinCount[hour]++;
        checkinCountFinal.push(checkinCount[hour]);
    });
    console.log(checkinCountFinal);

    return checkinCountFinal;
}



export function translateHour(date){
    date =  JSON.parse(JSON.stringify(date));
return moment(date).format('HH');
}

export function translateHourTime(date){
    date =  JSON.parse(JSON.stringify(date));
return moment(date).format('HH-mm-jss');
}

