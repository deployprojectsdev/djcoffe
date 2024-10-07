import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { SidebarService } from "./sidebar.service";

import * as $ from 'jquery';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    public menuItems: any[];
    public userRole: string | null;

    constructor(
        public sidebarservice: SidebarService,
        private router: Router,
        private cdr: ChangeDetectorRef  // Importa y usa ChangeDetectorRef para forzar la detección de cambios
    ) {
        this.userRole = localStorage.getItem('rol'); // Obtener el rol del usuario desde el localStorage

        router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
                // Show loading indicator
            }

            if (event instanceof NavigationEnd && $(window).width() < 1025 && (document.readyState === 'complete' || false)) {
                this.toggleSidebar();
                // Hide loading indicator
            }

            if (event instanceof NavigationError) {
                // Hide loading indicator
                // Present error to user
                console.log(event.error);
            }
        });
    }

    toggleSidebar() {
        this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());

        if ($(".wrapper").hasClass("nav-collapsed")) {
            // unpin sidebar when hovered
            $(".wrapper").removeClass("nav-collapsed");
            $(".sidebar-wrapper").unbind("hover");
        } else {
            $(".wrapper").addClass("nav-collapsed");
            $(".sidebar-wrapper").hover(
                function () {
                    $(".wrapper").addClass("sidebar-hovered");
                },
                function () {
                    $(".wrapper").removeClass("sidebar-hovered");
                }
            );
        }
    }

    getSideBarState() {
        return this.sidebarservice.getSidebarState();
    }

    hideSidebar() {
        this.sidebarservice.setSidebarState(true);
    }

    goToHome(): void {
        this.router.navigate([' '])
    }

    ngOnInit() {
        // Filtrar las rutas del submenu según el rol del usuario
        this.menuItems = ROUTES.map(menuItem => {
            // Filtra los submenús
            const filteredSubmenu = menuItem.submenu.filter(subItem => {
                // Ocultar "Sensores" si el rol no es "administrador"
                if (subItem.title === 'Sensores' && this.userRole !== 'administrador') {
                    return false;
                }
                return true;
            });

            // Retornar el menuItem con el submenu filtrado
            return { ...menuItem, submenu: filteredSubmenu };
        }).filter(menuItem => {
            // Asegurarse de que el menuItem solo se mantenga si tiene submenús o si no tiene título "Sensores"
            return menuItem.submenu.length > 0 || menuItem.title !== 'Sensores';
        });

        // Forzar detección de cambios
        this.cdr.detectChanges();

        $.getScript('./assets/js/app-sidebar.js');
    }

}
