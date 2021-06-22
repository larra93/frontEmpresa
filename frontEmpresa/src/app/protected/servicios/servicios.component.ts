import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(6)] ],
    descripcion:['',[Validators.required] ]
  });




  constructor( private fb: FormBuilder,
    private router: Router,
    private ServicioService: ServicesService ) { }

  ngOnInit(): void {
  }

  registrarServicio(){
    console.log(this.miFormulario.value);
  }

}
