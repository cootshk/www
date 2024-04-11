import { Injectable } from "@angular/core";
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: "root"
})

export class ThemeSwitcherService {
    public isLightTheme: boolean;
    public themeSwitchCounter: number = 0;
    public themeClass: string = "";
    public closeButtonStyle: string = "";

    constructor(private cookieService: CookieService) {
        this.isLightTheme = this.cookieService.get('theme') === 'light' ? true : false;
        this.updateTheme();
    }

    toggleTheme() {
        this.isLightTheme = !this.isLightTheme;
        this.themeSwitchCounter++;
    
        this.updateTheme();
        this.cookieService.set('theme', this.isLightTheme ? 'light' : 'dark');
    }

    updateTheme() {
        this.closeButtonStyle = this.isLightTheme ? "btn-close btn-close-black" : "btn-close btn-close-white";
        this.themeClass = this.isLightTheme ? "light-theme" : "dark-theme";
    }
}
