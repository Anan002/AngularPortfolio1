  import { Component } from '@angular/core';

  interface Project {
    title: string;
    description: string;
    image: string;
  }

  @Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css'],
  })
  export class PortfolioComponent {
    projects: Project[] = [
      {
        title: 'NRL MOC Process',
        description: 'Numaligarh Refinery Limited (NRL) is an oil company with various departments. The Management of Change (MOC) process involves transferring a set of documents from one department to another, with approval confirmation and the completion of forms based on the role.',
        image: 'assets/Project Images/nrl.png',

      },
      {
        title: 'DB corp Sales App',
        description: 'Dainik Bhaskar is one of the largest newspaper companies in India. For effective inside sales management, the company uses a sales app to maintain client details, track call status, and ensure smooth communication. The app includes various features like lead management, reporting, and performance tracking to enhance sales efficiency.',
        image: 'assets/Project Images/danik bhaskar.jpg',
  
      },
      {
        title: 'Reval ERP',
        description: 'Revalsys is an innovative software development and support company. Their flagship product, Reval ERP (Enterprise Resource Planning), includes modules for HR, sales, supply chain, finance, accounting, and more. The ERP system integrates all the essential tools and processes required to efficiently manage and run a successful company.',
        image: 'assets/Project Images/Revalsys.jpeg',

      },
      {
        title: 'IIB India',
        description: 'The Insurance Information Bureau (IIB) of India is an organization that holds detailed information about insurance policies across various sectors. It maintains a comprehensive and secure database of insurance data, updated annually. The IIB plays a crucial role in managing the flow of insurance data to support regulatory functions.',
        image: 'assets/Project Images/IIB.jpeg',

      },
      {
        title: 'Project Five',
        description: 'This is a brief description of Project Five.',
        image: 'assets/Project Images/Watch station.png',

      },
      {
        title: 'Project Five',
        description: 'This is a brief description of Project Five.',
        image: 'assets/Project Images/hopp.jpeg',

      },
    ];
  }
