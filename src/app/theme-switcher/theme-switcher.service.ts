import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class ThemeSwitcherService {
    public isLightTheme: boolean;
    public themeSwitchCounter: number = 0;
    public themeClass: string = "";
    public closeButtonStyle: string = "";

    public allowSwitching: boolean = true;

    constructor() {
        this.isLightTheme = localStorage.getItem('theme') === 'light';
        this.updateTheme();
    }

    toggleTheme() {
        this.isLightTheme = !this.isLightTheme;
        this.themeSwitchCounter++;
    
        this.updateTheme();
    }

    updateTheme() {
        this.closeButtonStyle = this.isLightTheme ? "btn-close btn-close-black" : "btn-close btn-close-white";
        this.themeClass = this.isLightTheme ? "light-theme" : "dark-theme";

        localStorage.setItem('theme', this.isLightTheme ? 'light' : 'dark');
    }

    disableSwitching() {
        this.allowSwitching = false;
    }
    enableSwitching() {
        this.allowSwitching = true;
    }
}
