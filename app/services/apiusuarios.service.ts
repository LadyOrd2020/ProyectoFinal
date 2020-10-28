import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { itemsMenu } from '../interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class ApiusuariosService {

  constructor(private http:HttpClient) { }
  getUsuario(){
    return this.http.get(('https://jsonplaceholder.typicode.com/users'))
  }
  recibirMenu(){
    return this.http.get<itemsMenu[]>(('/assets/data/menu.json'))
  }
}
