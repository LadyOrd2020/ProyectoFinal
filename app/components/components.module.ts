import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenubarComponent } from './menubar/menubar.component';



@NgModule({
  declarations: [HeaderComponent, MenubarComponent],
  exports:[HeaderComponent, MenubarComponent],
  imports: [
    CommonModule, 
    IonicModule
  ]
})
export class ComponentsModule { }

