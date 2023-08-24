import { Component } from '@angular/core';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent {

  todayDate = new Date();

  

  downloadPdf(): void {
    const pdfUrl = 'assets/receiptt.pdf'; // Adjust the path if your PDF is located in a different folder
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'receiptt.pdf'; // You can set the desired filename for the downloaded file
    link.target = '_blank'; // Open the PDF in a new tab, optional
    link.click();
  }
  
  currentDateTime: Date;
  futureDate: Date;
  futureDateTime: Date;

  constructor() {
    this.currentDateTime = new Date();
    this.futureDate = new Date();
    this.futureDate.setDate(this.currentDateTime.getDate() + 2);

    this.futureDateTime = new Date();
    this.futureDateTime.setHours(this.currentDateTime.getHours() + 48);
  }

}




