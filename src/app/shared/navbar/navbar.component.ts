import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
navbarVisible = false;
constructor(private eRef: ElementRef) { }

  ngOnInit() {
    // Always show the navbar on bigger screens
    if (window.innerWidth > 700) {
      this.navbarVisible = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth > 700) {
      this.navbarVisible = true;
    } else {
      this.navbarVisible = false;
    }
  }

 /*@HostListener('document:click', ['$event'])
clickout(event: Event) {
  if (window.innerWidth <= 700) {
    if (!this.eRef.nativeElement.contains(event.target) && this.navbarVisible) {
      this.navbarVisible = false;
    }
  }
} */

  toggleNavbar() {
    console.log("toggled to:"+this.navbarVisible)
    this.navbarVisible = !this.navbarVisible;
  }


}
