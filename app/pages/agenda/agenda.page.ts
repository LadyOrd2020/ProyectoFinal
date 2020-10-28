import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ApiusuariosService } from 'src/app/services/apiusuarios.service';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  @ViewChild('lista') lista: IonList;
  usuarios:Observable<any>;

  constructor(private api:ApiusuariosService) { }

  ngOnInit() {
    this.usuarios=this.api.getUsuario();
  }
  enviarmail(user){
console.log("Enviando email a ....."+user.email);
window.open("mailto"+user.email,"-blank")
this.lista.closeSlidingItems();
  }
  llamar(user){
console.log("Llamando a ..."+user.name);
window.open("tel:"+user.phone,"_blank")
this.lista.closeSlidingItems();
  }

}
