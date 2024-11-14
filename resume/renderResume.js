function loadAndDisplayPdf(pdfUrl) {
    const pdfViewer = document.getElementById('pdf-viewer');

    async function loadPdf() {
        try {
            const response = await fetch(pdfUrl);
            const bytes = await response.arrayBuffer();
            const pdfDocument = await pdfjsLib.getDocument({ data: bytes }).promise;

            for (let pageNumber = 1; pageNumber <= pdfDocument.numPages; pageNumber++) {
                const page = await pdfDocument.getPage(pageNumber);

                const scale = 1.5;
                const viewport = page.getViewport({ scale });

                const canvas = document.createElement('canvas');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                const context = canvas.getContext('2d');

                const renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                await page.render(renderContext);

                pdfViewer.appendChild(canvas);
            }
        } catch (error) {
            console.error('Error loading PDF:', error);
        }
    }

    loadPdf();
}
loadAndDisplayPdf('JohnLeResume.pdf');