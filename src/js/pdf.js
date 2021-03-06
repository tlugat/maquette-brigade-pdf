import html2pdf from 'html2pdf.js'

const button = document.querySelector("button");
const source = document.querySelector(".pdf");

const generatePDF = () => {
  
  html2pdf(source, {
    filename:     "maquette-brigade.pdf",
    image:        { type: "jpeg", quality: 1 },
    html2canvas:  { dpi: 300, letterRendering: true, scale: 2, scrollX: 0, scrollY: 0, },
    jsPDF:        { orientation: 'l', unit: "mm", format: [806, 606]},
    
    })
}

button.addEventListener("click", generatePDF)