import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, RouterModule, RouterLinkActive } from '@angular/router';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeSwitcherService } from './theme-switcher/theme-switcher.service';

function setCookie(name: string, value: string, days: number):void {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  let domain = "";
  if (document.location.href.includes("localhost")) {
    domain = "; domain=localhost";
  } else if (document.location.href.includes("ascyt.com")) {
    domain = "; domain=.ascyt.com";
  }
  document.cookie = name + "=" + value + expires + domain + "; path=/; Secure";
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ThemeSwitcherComponent, RouterModule, RouterLinkActive, NgbModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isCollapsed:boolean = false;
  private cycleRoutes:string[] = ['home','contact','projects','about']

  constructor(public router:Router, public themeSwitcher:ThemeSwitcherService) {
    this.updateTheme();
    this.themeSwitcher.enableSwitching()
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event:KeyboardEvent):void {
    const routeIndex = this.cycleRoutes.indexOf(this.router.url.split('/')[1]);
    if (routeIndex === -1) 
    {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        this.router.navigate([this.cycleRoutes[0]]);
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        this.router.navigate([this.cycleRoutes[this.cycleRoutes.length - 1]]);
      }
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.router.navigate([this.cycleRoutes[routeIndex + 1] || this.cycleRoutes[routeIndex]]);
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.router.navigate([this.cycleRoutes[routeIndex - 1] || this.cycleRoutes[routeIndex]]);
    }
  }

  toggleTheme() {
    this.updateTheme();
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EVERYTHING BELOW THIS LINE COULD SPOIL YOUR EXPERIENCE. PLEASE DO NOT READ FURTHER IF YOU WANT TO SOLVE IT YOURSELF //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  yamel():string {
    if (document.cookie.includes('found_yamel=true')) {
      return 'yamel: ';
    } else {
      return "???: ";
    }
  }

  updateTheme() {
    const yamel = this.yamel();
    switch (this.themeSwitcher.themeSwitchCounter) {
      case 2:
        // check for cookie
        if (document.cookie.split(';').some((item) => item.trim().startsWith('rescue=true'))) {
          this.themeSwitcher.themeSwitchCounter = 152; // skip the counter
        }
        if (localStorage.getItem('skip_theme_switch') === 'true') {
          this.themeSwitcher.themeSwitchCounter = 168;
          break;
        }
        break;
      case 10:
        alert(`[You hear a faint voice coming from underground]\n\n${yamel} bro stop`)
        break;
      case 20:
        alert(`${yamel} bro seriously`)
        break;
      case 30:
        alert(`${yamel} stop it`)
        break;
      case 40:
        alert(`${yamel} you\'re gonna break it`)
        break;
      case 50:
        document.body.className = 'what'
        this.themeSwitcher.disableSwitching()
        alert(`${yamel} great. you broke it.`)
        break;
      case 70:
        alert(`${yamel} it\'s broken`)
        break;
      case 80:
        alert(`${yamel} it\'s still broken`)
        break;
      case 90:
        alert(`${yamel} it\'s no use man. it\'s broken`)
        break;
      case 98:
        alert(`${yamel} you\'re still here?`)
        break;
      case 100:
        alert(`${yamel} fine. you win. i\'ll fix it.`)
        this.themeSwitcher.enableSwitching()
        break;
      case 120:
        alert(`${yamel} it\'s broken. again.`)
        this.themeSwitcher.disableSwitching()
        document.body.className = 'what'
        break;
      case 122:
        alert(`${yamel} what do you want from me?`)
        break;
      case 124:
        alert(`${yamel} do you know where i am?`)
        break;
      case 126:
        alert(`${yamel} do you know who i am?`)
        break;
      case 128:
        alert(`${yamel} do you know what i am?`)
        break;
      case 130:
        alert(`${yamel} do you know how cold i am?`)
        break;
      case 140:
        alert(`${yamel} please rescue me`)
        break;
      case 150:
        alert(`${yamel} my friend will know where I am`)
        // this cookie may or may not be important on a different site
        setCookie('found_jason', 'true', 3652) // 10 years

        break;
      case 160:
        alert(`${yamel} you need to find him first`)
        break;
      case 170:
        alert(`${yamel} that won\'t do it`)
        localStorage.setItem('skip_theme_switch', 'true')
        break;
      case 172:
        if (document.location.href.split('/').at(-1) === "about") {
          // About page
          alert(`${yamel} look closely. there might even be something on this page`)
          localStorage.setItem('skip_theme_switch', 'true')
          localStorage.setItem('page', 'undefined')
          this.themeSwitcher.themeSwitchCounter = 10000; // skip the counter
        } else {
          // Anywhere else
          alert(`${yamel} at least, not here.`)
          localStorage.setItem('page', document.location.href.split('/').at(-1) || 'undefined')
        }
        break;
      case 173:
        if (localStorage.getItem('page') !== document.location.href.split('/').at(-1)) {
          this.themeSwitcher.themeSwitchCounter = 171; // changed page without updating the count

        }
        break;
      case 174:
        alert(`${yamel} why are you still on this page? it\'s not here.`)
        break;
      case 176:
        alert(`${yamel} you\'re not going to find it here.`)
        break;
      case 200:
        alert(`${yamel} you really want a hint?`)
        break;
      case 202:
        alert(`${yamel} trapping me here is one of his proudest achievements. I\'d bet he brags about it in his bio.`)
        break;
      case 204:
        alert(`${yamel} what page has his bio?`)
        break;
      case 300:
        alert(`${yamel} do you want to save me or are you just here to mess with me?`)
        break;
      case 400:
        alert(`${yamel} fine then, this is your last warning.`)
        document.body.className = 'what'
        this.themeSwitcher.disableSwitching()
        break;
      case 402:
        alert(`${yamel} I warned you`)
        localStorage.setItem('skip_theme_switch', 'false')
        setTimeout(() => {
          open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_self")
        }, 5e3)
        this.themeSwitcher.themeSwitchCounter = 9998; // skip the counter
        break;
      case 9999:
        this.themeSwitcher.themeSwitchCounter = 9998;
        break;
      case 10001: // skip the counter
        this.themeSwitcher.themeSwitchCounter = 10000;
        break;
    } // if (this.themeSwitcher.themeSwitchCounter > 50 && this.themeSwitcher.themeSwitchCounter < 101 ) return;
      if (this.themeSwitcher.allowSwitching) document.body.className = this.themeSwitcher.themeClass;;

    
  }
}
