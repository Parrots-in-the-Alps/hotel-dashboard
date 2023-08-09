//////////////////////////////////////////////
///// VULCAN INTERN LIBRARY OF DASHBOARD /////
//////////////////////////////////////////////

import html2pdf from "html2pdf.js";

export const dashboard2pdf = function(id_html, filename) {
    html2pdf(id_html, {
        jsPDF: { unit: "in", format: "b4", orientation: "l" },
        filename: filename ? filename : "toto_fait_des_pdf_avec_son_nez.pdf",
        pagebreak: {mode: 'avoid-all'}
    });
}

export function moneyStats(reservationsData){
    let totalCartPrice = 0;

    reservationsData.forEach(reservation => {
      let reservationPrice = parseFloat(reservation.room.roomPrice) * reservation.duration;
  
      reservation.services.forEach(service => {
        if (service.billingType === 'daily') {
          reservationPrice += parseFloat(service.servicePrice) * reservation.duration;
        } else if (service.billingType === 'weekly') {
          const daysInAWeek = 7;
          const numberOfWeeks = Math.floor(reservation.duration / daysInAWeek);
          reservationPrice += parseFloat(service.servicePrice) * (1 + numberOfWeeks);
        } else if (service.billingType === 'unitary') {
          reservationPrice += parseFloat(service.servicePrice);
        }
      });
  
      totalCartPrice += reservationPrice;
    });

    
    const averageCartPrice = Math.round(totalCartPrice / reservationsData.length);
    return {
      averageCartPrice,
      totalCartPrice
    }
  }
