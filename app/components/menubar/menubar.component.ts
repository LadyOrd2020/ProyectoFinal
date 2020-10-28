import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { itemsMenu } from '../../interfaces/menu';
import { ApiusuariosService } from '../../services/apiusuarios.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent implements OnInit {
  menuprincial: Observable<itemsMenu[]>;

  constructor(private ruta:Router, private serv:ApiusuariosService,private menu:MenuController) { }

  ngOnInit() {
    this.menuprincial=this.serv.recibirMenu();
  }
  navegar(url:string){
    console.log('Estas accediendo a $(url)');
   this.ruta.navigate([url]);
   this.menu.toggle();
      }
}

