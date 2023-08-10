import moment from "moment";


export const translateDate = function(date){
    date =  JSON.parse(JSON.stringify(date));
return moment(date).format('YYYY-MM-DD');
}
export const calculateOccupancyStats = function(reservationsData) {
    let standardCount = 0;
    let luxuryCount = 0;
    let suiteCount = 0;

    reservationsData.forEach(reservation => {
    console.log(reservation);
      if (reservation.room && reservation.room.roomType === '{"en":"standard","fr":"standard"}' || reservation.room.roomType === 'standard') {
              standardCount++;
            } else if (reservation.room && reservation.room.roomType === '{"en":"luxury","fr":"luxe"}' || reservation.room.roomType === 'luxury' || reservation.room.roomType === 'luxe') {
              luxuryCount++;
            }else if (reservation.room && reservation.room.roomType === '{"en":"suite","fr":"suite"}' || reservation.room.roomType === 'suite') {
              suiteCount++;
            }
    });
  
    const standardPercent = Math.round((standardCount / 25) * 100);
    const luxuryPercent = Math.round((luxuryCount / 5) * 100);
    const suitePercent = Math.round((suiteCount / 1) * 100);
    const occupation = Math.round(((standardCount + luxuryCount + suiteCount) / 31) *100);
  
    return {
      standardPercent,
      luxuryPercent,
      suitePercent,
      occupation,
    };
  }


  export function calculateAverageDurationByRoomType(reservationsData) {
    const roomTypes = {};
  
    reservationsData.forEach(reservation => {
      const roomType = reservation.room.roomType; 
      const entryDate = new Date(reservation.entryDate);
      const exitDate = new Date(reservation.exitDate);
      const durationInDays = (exitDate - entryDate) / (1000 * 60 * 60 * 24);
  
      if (!roomTypes[roomType]) {
        roomTypes[roomType] = {
          totalDuration: durationInDays,
          reservationCount: 1,
        };
      } else {
        roomTypes[roomType].totalDuration += durationInDays;
        roomTypes[roomType].reservationCount += 1;
      }
    });
  
    const averageDurations = {};
    for (const type in roomTypes) {
      if (roomTypes.hasOwnProperty(type)) {
        const averageDuration = Math.round(roomTypes[type].totalDuration / roomTypes[type].reservationCount);
        averageDurations[type] = averageDuration;
      }
    }
    console.log(averageDurations)
    return averageDurations;
  }

  export function timeBetweenResaCheckIn(reservations) {
    let totalDuration = 0;
    let validReservationsCount = 0;
  
    reservations.forEach(reservation => {
      if (reservation.checked_in && reservation.created_at) {
        // const created_at = moment(reservation.created_at, 'YYYY/mm/DD' );
        // const checked_in = moment(reservation.checked_in, 'YYYY/mm/DD' );
        // const duration = created_at.diff(checked_in, 'seconds');
        const created_at = new Date(reservation.created_at);
        const checked_in = new Date(reservation.checked_in);
        const duration = (created_at - checked_in) / 1000;
        const durationInSeconds = Math.ceil(duration);
        console.log("DURATION")
        console.log(durationInSeconds)
        totalDuration += durationInSeconds;
        validReservationsCount++;
      }
    });
  
    if (validReservationsCount === 0) {
      return null;
    }
  
    const checkInDurationInSeconds = totalDuration / validReservationsCount;
  
    if (checkInDurationInSeconds >= 86400) { // 1 day = 24 * 60 * 60 seconds
      const checkInDurationInDays = checkInDurationInSeconds / 86400;
      return `${Math.ceil(checkInDurationInDays)} days`;
  } else if (checkInDurationInSeconds >= 3600) { // 1 hour = 60 * 60 seconds
      const checkInDurationInHours = checkInDurationInSeconds / 3600;
      return `${Math.ceil(checkInDurationInHours)} H`;
  } else if (checkInDurationInSeconds >= 60) { // 1 minute = 60 seconds
      const checkInDurationInMinutes = checkInDurationInSeconds / 60;
      return `${Math.ceil(checkInDurationInMinutes)} min`;
  } else {
      return `${Math.ceil(checkInDurationInSeconds)} sec`;
  }
  }



  export function timeAcceuil(reservations) {
    let totalDuration = 0;
    let validReservationsCount = 0;
  
    reservations.forEach(reservation => {
      if (reservation.checked_in && reservation.access.premiere_ouverture) {
        const checked_in = new Date(reservation.checked_in);
        const access = new Date(reservation.access.premiere_ouverture);
        const duration = (access - checked_in) / 10000
        totalDuration += duration;
        validReservationsCount++;
        console.log("zaza" + duration)
      }
    });
  
    if (validReservationsCount === 0) {
      return null;
    }
  
    const acceuilDuration = totalDuration / validReservationsCount;
  
    if (acceuilDuration >= 86400) { // 1 day = 24 * 60 * 60 seconds
      const checkInDurationInDays = acceuilDuration / 86400;
      return `${Math.ceil(checkInDurationInDays)} days`;
  } else if (acceuilDuration >= 3600) { // 1 hour = 60 * 60 seconds
      const checkInDurationInHours = acceuilDuration / 3600;
      return `${Math.ceil(checkInDurationInHours)} H`;
  } else if (acceuilDuration >= 60) { // 1 minute = 60 seconds
      const checkInDurationInMinutes = acceuilDuration / 60;
      return `${Math.ceil(checkInDurationInMinutes)} min`;
  } else {
      return `${Math.ceil(acceuilDuration)} sec`;
  }
  }



  export function serviceStats(reservations){

    const serviceCount = {
      breakfast: 0,
      lavaShow: 0,
      halfBoard: 0,
      fullBoard: 0,
      laundry: 0,
      tv: 0,
      wifi:0
    }

    reservations.forEach(reservation =>{

      reservation.services.forEach(service => {
        switch(service.serviceName){
          case 'breakfast':
            serviceCount.breakfast ++
            break;
          case 'lava show' :
            serviceCount.lavaShow ++
            break;
          case 'half-board' :
            serviceCount.halfBoard ++
            break;
          case 'full-board' :
            serviceCount.fullBoard ++
            break;
          case 'laundry service' :
            serviceCount.laundry ++
            break;
          case '4K-TV' :
            serviceCount.tv ++
            break;
          case 'Wifi' :
            serviceCount.wifi ++
            break;

        }
      })

    })

    return serviceCount
  }


 

