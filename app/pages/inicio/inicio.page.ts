import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { itemsMenu } from '../../interfaces/menu';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { ApiusuariosService } from '../../services/apiusuarios.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
//atributos
imgslides: { img: string, }[] = [
  {
  img: 'assets/imagenes/10.jpg',
 },{
  img: 'assets/imagenes/11.jpg',
 },{
  img: 'assets/imagenes/12.jpg',
 },{
   img: 'assets/imagenes/13.jpg',
 }
]



post: any;
menuprincial: Observable<itemsMenu[]>;
constructor(private ruta: Router, private serv: ApiusuariosService, private nav: NavController 
  ) { }

ngOnInit() {
  this.menuprincial = this.serv.recibirMenu();
}
//metodos
navegar(url: string) {
  console.log('Estas accediendo a $(url)');
  this.ruta.navigate([url]);

}

  }


