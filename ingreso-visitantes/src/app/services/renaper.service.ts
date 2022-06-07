import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RenaperService {

  constructor(private httpClient: HttpClient) { }

  getData(dni: number){

    //aca se deberia llamar a la api
    var data = {
      apellido:"Riva",
      nombres:"Dario",
      fechaNacimiento:"01/01/2000",
      dni:"12345678"
  }
    return data;
  }
}
