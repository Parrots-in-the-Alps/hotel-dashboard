//////////////////////////////////////////////
///// VULCAN INTERN LIBRARY OF DASHBOARD /////
//////////////////////////////////////////////

// moment START

import moment from "moment";

export const addDayToDate = function(dateString) {
    return moment(dateString).add(moment().date() - 1, 'days').format("L");
}

// export const zdj = function() {
//     return 
// }

// moment END

// html2pdf START

import html2pdf from "html2pdf.js";

export const dashboard2pdf = function(id_html, filename) {
    html2pdf(id_html, {
        jsPDF: { unit: "in", format: "b4", orientation: "l" },
        filename: filename ? filename : "toto_fait_des_pdf_avec_son_nez.pdf",
        pagebreak: {mode: 'avoid-all'}
    });
} 

// html2pdf END


// stats START

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
  
    return {
      standardPercent,
      luxuryPercent,
      suitePercent,
    };
  }


//stats END