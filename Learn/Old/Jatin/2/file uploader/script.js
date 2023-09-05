function uploadDocument() {
    const fileInput = document.getElementById('fileInput');
    const documentContainer = document.getElementById('documentContainer');

    if (fileInput.files.length === 0) {
        alert('Please select a PDF document to upload.');
        return;
    }

    const file = fileInput.files[0];

    if (file.type !== 'application/pdf') {
        alert('Please upload a PDF document.');
        return;
    }

    const reader = new FileReader();

    reader.onload = function () {
        const pdfUrl = reader.result;
        const iframe = document.createElement('iframe');
        iframe.src = pdfUrl;
        iframe.width = '100%';
        iframe.height = '500px';
        documentContainer.appendChild(iframe);
    };

    reader.readAsDataURL(file);
}
