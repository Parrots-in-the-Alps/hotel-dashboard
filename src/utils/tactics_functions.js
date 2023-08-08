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