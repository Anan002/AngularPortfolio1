import { Component, OnInit } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadPdf('https://drive.google.com/uc?export=download&id=1VhJxTeyrXBI0vvbTUV7rywg8OFYLfb36');
  }

  loadPdf(pdfUrl: string) {
    const canvas = document.getElementById('pdf-canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    // Load the PDF from the URL
    pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {
      // Render the first page
      pdf.getPage(1).then(page => {
        const viewport = page.getViewport({ scale: 1 });

        // Set canvas dimensions to match the PDF page size
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render the page onto the canvas
        page.render({
          canvasContext: context!,
          viewport: viewport
        });
      });
    });
  }
}
