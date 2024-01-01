import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { RedirectGuard } from './redirect.guard';
import { RedirectingComponent } from './redirecting/redirecting.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'projects/smsh', component:RedirectingComponent, canActivate: [RedirectGuard], data: {externalUrl: 'https://smsh.ascyt.com'}},
    {path: 'projects/ezgpt', component: RedirectingComponent, canActivate: [RedirectGuard], data: {externalUrl: 'https://pypi.org/project/ezgpt/'}},
    {path: 'about', component: AboutComponent},

    {path: 'donate', component: RedirectingComponent, canActivate: [RedirectGuard], data: {externalUrl: 'https://ko-fi.com/ascyt'}},
    {path: 'github', component: RedirectingComponent, canActivate: [RedirectGuard], data: {externalUrl: 'https://github.com/ascyt'}},
    {path: 'gh', redirectTo: '/github', pathMatch: 'full'},
    {path: 'source', component: RedirectingComponent, canActivate: [RedirectGuard], data: {externalUrl: 'https://github.com/ascyt/ascyt.github.io'}},
    {path: 'src', redirectTo: '/source', pathMatch: 'full'},
    {path: 'youtube', component: RedirectingComponent, canActivate: [RedirectGuard], data: {externalUrl: 'https://www.youtube.com/channel/UC4SKoh_buY9oIHIRjqmVKpw'}},
    {path: 'yt', redirectTo: '/youtube', pathMatch: 'full'},
    {path: 'smsh', redirectTo: '/projects/smsh', pathMatch: 'full'},
    {path: 'ezgpt', redirectTo: '/projects/ezgpt', pathMatch: 'full'},
    {path: 'grapes', component: RedirectingComponent, canActivate: [RedirectGuard], data: {externalUrl: 'https://grapes.ascyt.com'}},

    {path: '**', component: NotFoundComponent}
];
