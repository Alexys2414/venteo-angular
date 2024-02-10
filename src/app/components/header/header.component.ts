import { Component, Input } from '@angular/core';
import { Link, User } from '../../../types';
import { IconComponent } from '../icon/icon.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { getImageUrl } from '../../lib/imageUrl'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconComponent, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input({required: true}) links: Link[] = [];
  @Input({required: true}) user: User = {} as User;
  isNavOpen = false;
  imageUrl = getImageUrl(this.user.imageUrl, 60)

  constructor() {
    console.log(this.user);
  }

  toggleDropdown() {
    const dropdown = document.querySelector("#dropdown") as HTMLElement;
    if (dropdown.classList.contains("hidden")) {
      dropdown.classList.remove("slide-out-top");
      dropdown.classList.add("slide-in-top");
      dropdown.classList.toggle("hidden");

    } else {
      dropdown.classList.remove("slide-in-top");
      dropdown.classList.add("slide-out-top");
      setTimeout(() => {
        dropdown.classList.toggle("hidden");
      }, 300);
    }
  }

  toggleNav() {
    if (this.isNavOpen) {
      this.closeNav();
      
    } else {
      this.openNav();
    }
  }
  
  closeNav() {
    const nav = document.querySelector("nav") as HTMLElement;
    if (this.isNavOpen) {
    document.body.style.overflow = "auto";
    nav.classList.add("slide-to-left")
    nav.classList.remove("slide-from-left")
      this.isNavOpen = false;
      setTimeout(() => {
        nav.classList.toggle("hidden");
      }, 450);
    }
  }
  openNav() {
    const nav = document.querySelector("nav") as HTMLElement;
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
      nav.classList.add("slide-from-left")
      nav.classList.remove("slide-to-left")
      this.isNavOpen = true;
      nav.classList.toggle("hidden");
  }
}
