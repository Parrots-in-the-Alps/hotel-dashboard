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
  
    const standardPercent = (standardCount / 25) * 100;
    const luxuryPercent = (luxuryCount / 5) * 100;
    const suitePercent = (suiteCount / 1) * 100;
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

  export function moneyStats(reservationsData){
    let totalCartPrice = 0;

    reservationsData.forEach(reservation => {
      totalCartPrice += reservation.room.roomPrice * reservation.duration;
    });
    const cartPrice = Math.round(totalCartPrice / reservationsData.length);
    return {
      cartPrice,
      totalCartPrice
    }
  }


 

