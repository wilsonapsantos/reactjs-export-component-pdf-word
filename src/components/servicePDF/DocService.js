import { savePDF } from '@progress/kendo-react-pdf';

class DocService {
  createPdf = (html) => {

    // Specify file name
    let d = new Date();
    let dformat = `${d.getDate()}_${d.getMonth() + 1}_${d.getFullYear()}_${d.getHours()}_${d.getMinutes()}_${d.getSeconds()}`;

    const fileName = `DevSistema${dformat}`;

    savePDF(html, {
      paperSize: 'Letter',
      fileName: fileName,
      margin: 3
    })
  }
}

const Doc = new DocService();
export default Doc;