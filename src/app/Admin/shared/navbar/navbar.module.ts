import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminNavbarComponent } from './navbar.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ AdminNavbarComponent ],
    exports: [ AdminNavbarComponent ]
})

export class NavbarModule {}
