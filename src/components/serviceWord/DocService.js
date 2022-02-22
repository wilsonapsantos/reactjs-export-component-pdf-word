class DocService {
    createWord = () => {

        // Specify file name
        let d = new Date();
        let dformat = `${d.getDate()}_${d.getMonth() + 1}_${d.getFullYear()}_${d.getHours()}_${d.getMinutes()}_${d.getSeconds()}`;

        const fileName = `DevSistema_${dformat}.doc`;

        var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
        var postHtml = "</body></html>";

        console.log(document.getElementById("exportContent"));
        var html = preHtml + document.getElementById("exportContent").innerHTML + postHtml;

        var blob = new Blob(['\ufeff', html], {
            type: 'application/msword'
        });

        // Specify link url
        var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

        // Create download link element
        var downloadLink = document.createElement("a");

        document.body.appendChild(downloadLink);

        if (navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, fileName);
        } else {
            // Create a link to the file
            downloadLink.href = url;

            // Setting the file name
            downloadLink.download = fileName;

            //triggering the function
            downloadLink.click();
        }

        document.body.removeChild(downloadLink);
    }
}

const DocWord = new DocService();
export default DocWord;