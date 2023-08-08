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




//stats END