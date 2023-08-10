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
        const durationInSeconds = Math.ceil(duration / 60);
        console.log("DURATION")
        console.log(durationInSeconds)
        totalDuration += durationInSeconds;
        validReservationsCount++;
      }
    });
  
    if (validReservationsCount === 0) {
      return null;
    }
  
    const checkInDuration = totalDuration / validReservationsCount;
  
    return checkInDuration;
  }



  export function timeAcceuil(reservations) {
    let totalDuration = 0;
    let validReservationsCount = 0;
  
    reservations.forEach(reservation => {
      if (reservation.checked_in && reservation.access.premiere_ouverture) {
        const checked_in = moment(reservation.checked_in, 'YYYY/mm/DD' );
        const access = moment(reservation.access.premiere_ouverture, 'YYYY/mm/DD' );
        const duration = checked_in.diff(access, ' days');
        totalDuration += duration;
        validReservationsCount++;
        console.log("zaza" + duration)
      }
    });
  
    if (validReservationsCount === 0) {
      return null;
    }
  
    const acceuilDuration = totalDuration / validReservationsCount;
  
    return acceuilDuration;
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


 

