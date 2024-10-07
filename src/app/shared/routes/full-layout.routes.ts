import { Routes } from '@angular/router';
import { LoginGuard } from 'src/app/guard/login/login.guard';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
    {
        path: 'dashboard', canActivate: [LoginGuard],
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'application',
        loadChildren: () => import('../../application/application.module').then(m => m.ApplicationModule)

    },
    {
        path: 'widgets',
        loadChildren: () => import('../../widgets/widgets.module').then(m => m.WidgetsModule)

    },
    
    {
        path: 'components',
        loadChildren: () => import('../../components/components.module').then(m => m.ComponentsModule)
    },
    {
        path: 'content',
        loadChildren: () => import('../../content/content.module').then(m => m.ContentModule)
    },
    {
        path: 'icons',
        loadChildren: () => import('../../icons/icons.module').then(m => m.IconsModule)
    },
    {
        path: 'form',
        loadChildren: () => import('../../form/form.module').then(m => m.FormModule)
    },
    {
        path: 'table',
        loadChildren: () => import('../../table/table.module').then(m => m.TableModule)

    },
    {
        path: 'user-profile',canActivate: [LoginGuard],
        loadChildren: () => import('../../user-profile/user-profile.module').then(m => m.UserProfileModule)

    },
    {
        path: 'faq',
        loadChildren: () => import('../../faq/faq.module').then(m => m.FaqModule)
    },
    
    
    {
        path: 'downloads',
        loadChildren: () => import('../../downloads/downloads.module').then(m => m.DownloadsModule)
    },
    {
        path: 'timeline',
        loadChildren: () => import('../../timeline/timeline.module').then(m => m.TimelineModule)
    },
    {
        path: 'charts',
        loadChildren: () => import('../../charts/chart.module').then(m => m.ChartModule)
    },
    // {
    //     path: 'maps',
    //     loadChildren: () => import('../../maps/maps.module').then(m => m.MapsModule)

    // }
];