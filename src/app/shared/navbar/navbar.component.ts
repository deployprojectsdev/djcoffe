import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
    userAvatar: string;
    userName: string;
    userRole: string;

    constructor(public sidebarservice: SidebarService,public authService:AuthService) { }

    toggleSidebar() {
        this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
    }

    getSideBarState() {
        return this.sidebarservice.getSidebarState();
    }

    hideSidebar() {
        this.sidebarservice.setSidebarState(true);
    }

    ngOnInit() {
        // Avatar aleatorio y recuperación de datos del usuario
        this.setUserAvatar();
        this.userName = localStorage.getItem('nombre') || 'Guest';
        this.userRole = localStorage.getItem('rol') || 'User';

        /* Search Bar */
        $(document).ready(function () {
            $(".mobile-search-icon").on("click", function () {
                $(".search-bar").addClass("full-search-bar");
            });
            $(".search-close").on("click", function () {
                $(".search-bar").removeClass("full-search-bar");
            });
        });
    }

    setUserAvatar(): void {
        const randomIndex = Math.floor(Math.random() * 9) + 1; // Genera un número entre 1 y 9
        this.userAvatar = `assets/images/avatars/avatar-${randomIndex}.png`;
    }

    salir ():void{
        this.authService.logout(); 

    }
}
