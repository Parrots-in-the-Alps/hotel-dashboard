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
