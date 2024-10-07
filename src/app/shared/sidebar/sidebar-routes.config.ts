import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
    {
        path: '', title: 'Menu', icon: 'menu', class: 'sub',
        badge: '', badgeClass: '', isExternalLink: false, submenu: [
            {
                path: '/dashboard/finca', title: 'Finca', icon: 'home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                
            },

            {
                path: '/dashboard/cultivo', title: 'Cultivo', icon: 'spa', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },

            {
                path: '/dashboard/sensor', title: 'Sensores', icon: 'settings_input_antenna', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },

            {
                path: '/dashboard/monitoreo', title: 'Monitoreo', icon: 'timeline', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
        ]
    },


];