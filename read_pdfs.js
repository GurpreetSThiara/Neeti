const fs = require('fs');
const PDFParser = require('pdf2json');

function parsePdf(file, outputFile) {
    return new Promise((resolve, reject) => {
        const pdfParser = new PDFParser(this, 1);
        pdfParser.on("pdfParser_dataError", errData => reject(errData.parserError));
        pdfParser.on("pdfParser_dataReady", () => {
            fs.writeFileSync(outputFile, pdfParser.getRawTextContent());
            resolve();
        });
        pdfParser.loadPDF(file);
    });
}

async function main() {
    await parsePdf('d:\\lakshaypaji\\new\\neeti_collective_website_strategy_document (1).pdf', 'd:\\lakshaypaji\\new\\strategy.txt');
    await parsePdf('d:\\lakshaypaji\\new\\neeti_collective_website_sitemap-1.pdf', 'd:\\lakshaypaji\\new\\sitemap.txt');
    console.log("Done extracting");
}

main();
