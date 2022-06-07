import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { flatMap } from 'rxjs';
import { RenaperService } from 'src/app/services/renaper.service';

interface Persona {
  nombre: string,
  apellido: string,
  sector: string
}

interface Visita {
  tarjeta: number,
  fecha: Date,
  sector: string,
  visita: string
}

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  nombre: string = "";

  cargaingreso = new FormGroup({
    dni: new FormControl('', Validators.required),
    tarjeta: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    sector: new FormControl('', Validators.required),
    visita: new FormControl('', Validators.required)
  });

  cargavisita:Visita[] = [];
  
  sectores = ['RRHH', 'QA', 'COMERCIAL'];

  visita:Persona[] = [];
  
  personas = [
    {
      nombre: "Daniel",
      apellido: "de Almeida",
      sector: "RRHH"
    },
    {
      nombre: "Dario",
      apellido: "Riva",
      sector: "QA"
    },
    {
      nombre: "Diego",
      apellido: "Pellegrini",
      sector: "COMERCIAL"
    },
    {
      nombre: "Federico",
      apellido: "Musso",
      sector: "RRHH"
    },
    {
      nombre: "Laura",
      apellido: "Rodriguez",
      sector: "QA"
    },
    {
      nombre: "Lautaro Ariel",
      apellido: "Basanta",
      sector: "COMERCIAL"
    },
    {
      nombre: "Manuel",
      apellido: "Castello",
      sector: "RRHH"
    },
    {
      nombre: "Paula",
      apellido: "Barrios",
      sector: "QA"
    },
    {
      nombre: "Rocio",
      apellido: "Diaz",
      sector: "COMERCIAL"
    },
    {
      nombre: "Sebastian",
      apellido: "Parasis",
      sector: "RRHH"
    },
    {
      nombre: "Walter",
      apellido: "Marcote",
      sector: "QA"
    },
    {
      nombre: "Guillermo",
      apellido: "Balcarcel",
      sector: "COMERCIAL"
    },
    {
      nombre: "Esteban",
      apellido: "Gawron",
      sector: "RRHH"
    },
    {
      nombre: "Enzo",
      apellido: "Peddini",
      sector: "QA"
    },
    {
      nombre: "Andrea",
      apellido: "Russo",
      sector: "COMERCIAL"
    },
    {
      nombre: "Adrian",
      apellido: "Zarate",
      sector: "RRHH"
    },
    {
      nombre: "Melisa",
      apellido: "Yune",
      sector: "QA"
    },
    {
      nombre: "Nicolas",
      apellido: "Russmann",
      sector: "COMERCIAL"
    },
    {
      nombre: "Galo",
      apellido: "Trillo",
      sector: "RRHH"
    },
    {
      nombre: "Diego",
      apellido: "Pellegrini",
      sector: "QA"
    },
  ]

  visitas: Visita [] = [{
    tarjeta:1,
    fecha: new Date,
    sector:'RRHH',
    visita:'Daniel de Almeida'
  },
  {
    tarjeta:2,
    fecha: new Date,
    sector:'COMERCIAL',
    visita:'Diego Pellegrini'
  },
  {
    tarjeta:3,
    fecha: new Date,
    sector:'QA',
    visita:'Laura Rodriguez'
  }];

  modal: boolean = false;

  deletevisita: Visita ={
    tarjeta:0,
    fecha: new Date,
    sector:'',
    visita:''
  }

  constructor(private renaperService: RenaperService) {
    this.cargaingreso.valueChanges.subscribe(x => {
      this.cargaingreso.value.fecha = new Date();
    })
  }

  ngOnInit(): void {
  }

  buscarNombre(){
    var persona = this.renaperService.getData(this.cargaingreso.value.dni);
    this.nombre = persona.nombres + ' ' + persona.apellido;
    
  }

  getVisita(){
    this.visita = this.personas.filter(x => x.sector == this.cargaingreso.value.sector) as Persona[];
  }

  cargarIngreso(event: Event){
    this.visitas.push(this.cargaingreso.value);
  }

  setVisita(visita: Visita){
    this.deletevisita.tarjeta = visita.tarjeta;
    this.deletevisita.fecha = visita.fecha;
    this.deletevisita.sector = visita.sector;
    this.deletevisita.visita = visita.visita;
  }

  deleteVisita(){
    var indice = this.visitas.findIndex(x => x.fecha == this.deletevisita.fecha && x.sector == this.deletevisita.sector && x.tarjeta == this.deletevisita.tarjeta && x.visita == this.deletevisita.visita);
    this.visitas.splice(indice, 1);
  }


}
