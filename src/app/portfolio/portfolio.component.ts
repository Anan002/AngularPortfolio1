import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

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
export class PortfolioComponent implements AfterViewInit {
  projects: Project[] = [
    {
      title: 'NRL MOC Process - Client',
      description:
        'Numaligarh Refinery Limited (NRL) is an oil company with various departments. The Management of Change (MOC) process involves transferring a set of documents from one department to another, with approval confirmation and the completion of forms based on the role.',
      image: 'assets/Project Images/nrl.png',
    },
    {
      title: 'DB corp Sales App - Client',
      description:
        'Dainik Bhaskar is one of the largest newspaper companies in India. For effective inside sales management, the company uses a sales app to maintain client details, track call status, and ensure smooth communication. The app includes various features like lead management, reporting, and performance tracking to enhance sales efficiency.',
      image: 'assets/Project Images/danik bhaskar.jpg',
    },
    {
      title: 'Reval ERP - Product',
      description:
        'Revalsys is an innovative software development and support company. Their flagship product, Reval ERP (Enterprise Resource Planning), includes modules for HR, sales, supply chain, finance, accounting, and more. The ERP system integrates all the essential tools and processes required to efficiently manage and run a successful company.',
      image: 'assets/Project Images/Revalsys.jpeg',
    },
    {
      title: 'IIB India - Client',
      description:
        'The Insurance Information Bureau (IIB) of India is an organization that holds detailed information about insurance policies across various sectors. It maintains a comprehensive and secure database of insurance data, updated annually. The IIB plays a crucial role in managing the flow of insurance data to support regulatory functions.',
      image: 'assets/Project Images/IIB.jpeg',
    },
    {
      title: 'Reval Remittance - Product',
      description: 'Revalsys is an innovative software company with its key product, Reval Remittance. It automates retail amount verification for small stores, comparing sales with e-commerce data. Users simply provide credentials, and the system processes reports and sends results via email.',
      image: 'assets/Project Images/Revalsys.jpeg',
    },
    {
      title: 'Hopp Valet - Client',
      description: 'Hopp is a driver app with a Valet Request feature. This functionality enables users to assign personnel for car parking efficiently. It simplifies the car parking process through easy request handling.The app ensures convenience and smooth parking management.',
      image: 'assets/Project Images/hopp.jpeg',
    },
  ];

  ngAfterViewInit(): void {
    new Swiper('.swiper-container', {
      direction: 'horizontal', // Horizontal swiping
      loop: true,              // Infinite looping of cards
      spaceBetween: 10,        // Space between each card
      slidesPerView: 'auto',   // Automatically adjust the number of visible cards
      freeMode: true,          // Allow free scrolling (without snapping to a fixed number of slides)
    });
  }  
}
