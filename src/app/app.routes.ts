import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { RedirectGuard } from './redirect.guard';
import { RedirectingComponent } from './redirecting/redirecting.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SecretComponent } from './secret/secret.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'projects/smsh', component:RedirectingComponent, canActivate: [RedirectGuard], data: {externalUrl: 'https://smsh.ascyt.com/'}},
    {path: 'projects/ezgpt', component: RedirectingComponent, canActivate: [RedirectGuard], data: {externalUrl: 'https://pypi.org/project/ezgpt/'}},
    {path: 'projects/tt', component: RedirectingComponent, canActivate: [RedirectGuard], data: {externalUrl: 'https://tt.ascyt.com/'}},
    {path: 'projects/tiersorter', component: RedirectingComponent, canActivate: [RedirectGuard], data: {externalUrl: 'https://tiersorter.ascyt.com/'}},
    {path: 'projects/wisdomkeys', component: RedirectingComponent, canActivate: [RedirectGuard], data: {externalUrl: 'https://wisdomkeys.ascyt.com/'}},
    {path: 'about', component: AboutComponent},
    {path: 'NotFound', component: SecretComponent},

    {path: 'donate', component: RedirectingComponent, canActivate: [RedirectGuard], data: {externalUrl: 'https://ko-fi.com/ascyt'}},
    {path: 'github', component: RedirectingComponent, canActivate: [RedirectGuard], data: {externalUrl: 'https://github.com/Ascyt'}},
    {path: 'gh', redirectTo: '/github', pathMatch: 'full'},
    {path: 'source', component: RedirectingComponent, canActivate: [RedirectGuard], data: {externalUrl: 'https://github.com/Ascyt/www'}},
    {path: 'src', redirectTo: '/source', pathMatch: 'full'},
    {path: 'license', component: RedirectingComponent, canActivate: [RedirectGuard], data: {externalUrl: 'https://github.com/Ascyt/www/blob/main/LICENSE'}},
    {path: 'youtube', component: RedirectingComponent, canActivate: [RedirectGuard], data: {externalUrl: 'https://www.youtube.com/channel/UC4SKoh_buY9oIHIRjqmVKpw'}},
    {path: 'reddit', component: RedirectingComponent, canActivate: [RedirectGuard], data: {externalUrl: 'https://reddit.com/u/Ascyt'}},
    {path: 'subreddit', component: RedirectingComponent, canActivate: [RedirectGuard], data: {externalUrl: 'https://reddit.com/r/Ascyt'}},
    {path: 'yt', redirectTo: '/youtube', pathMatch: 'full'},
    {path: 'smsh', redirectTo: '/projects/smsh', pathMatch: 'full'},
    {path: 'ezgpt', redirectTo: '/projects/ezgpt', pathMatch: 'full'},
    {path: 'tt', redirectTo: '/projects/tt', pathMatch: 'full'},
    {path: 'tiersorter', redirectTo: '/projects/tiersorter', pathMatch: 'full'},
    {path: 'wisdomkeys', redirectTo:'/projects/wisdomkeys', pathMatch: 'full'},
    {path: 'grapes', component: RedirectingComponent, canActivate: [RedirectGuard], data: {externalUrl: 'https://grapes.ascyt.com'}},
    
    {path: '**', component: NotFoundComponent},
    
    // nothing to see here, move along
    {path: 'link', component: RedirectingComponent, canActivate: [RedirectGuard], data: {externalUrl: 'https://youtube.com/watch?v=dQw4w9WgXcQ'}},
    {path: 'easteregg', component: RedirectingComponent, canActivate: [RedirectGuard], data: {externalUrl: 'https://youtube.com/watch?v=dQw4w9WgXcQ'}},
    {path: 'easter_egg', component: RedirectingComponent, canActivate: [RedirectGuard], data: {externalUrl: 'https://youtube.com/watch?v=dQw4w9WgXcQ'}},
    {path: 'easter%20egg', component: RedirectingComponent, canActivate: [RedirectGuard], data: {externalUrl: 'https://youtube.com/watch?v=dQw4w9WgXcQ'}},
];
