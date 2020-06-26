import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  mobileWidth = 600;

  @HostListener('window:scroll', ['$event'])
  addMenuBackground = () => {
    const pageWidth = window.innerHeight;
    const bodyOffset = document.body.scrollTop || document.documentElement.scrollTop;
    const navigation = document.querySelector('header nav');
    if (pageWidth > this.mobileWidth) {
      bodyOffset > 0 ? navigation.classList.add('py-nav-fixed') : navigation.classList.remove('py-nav-fixed');
    }
  }

 /*  onNavItemClick = () => {
    const navItemList = document.querySelectorAll('.py-section-link');
    const navItems = Array.from(navItemList);

    navItems.forEach(item => {
      item.addEventListener("click", event => {
          event.preventDefault();
        const sectionId = event.target.getAttribute("href");
      });
    })
  } */

  /* scrollToSection = () => {

  } */

  ngOnInit(): void {
  }

  /* addMenuBackground = () => {
    const bodyOffset= document.body.scrollTop || document.documentElement.scrollTop;
    const navigation = document.querySelector('header nav');

    bodyOffset > 0 ? navigation.classList.add('py-nav-fixed') : navigation.classList.remove('py-nav-fixed');
  }
    window.addEventListener('scroll', () => {
      this.addMenuBackground();
    }); */


}
