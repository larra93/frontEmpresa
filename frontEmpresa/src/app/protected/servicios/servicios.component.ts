import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import Swal from 'sweetalert2';
import { Servicio } from '../interfaces/servicios-interface';
import { ServicesService } from '../services/servicios.service';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {


   rows = [] as  any;

  ColumnMode = ColumnMode;

  file!: File;
  servicios: Servicio[] = [] ;
 


  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(6)] ],
    descripcion:['',[Validators.required] ],
    imagen:['',[Validators.required] ]
  });




  constructor( private fb: FormBuilder,
    private router: Router,
    private servicioService: ServicesService ) {

      
     }

  ngOnInit(): void {

    
    this.cargarServicios();
  }

  cargarServicios(){

    this.servicioService.getServicios()
    .subscribe( servicios => {
     this.rows = servicios;
 
    })
    
  }

 

  uploadImage(event:any){

    this.file = event.target.files[0];
    console.log(this.file);
  }

  registrarServicio(){


    const { nombre , descripcion } = this.miFormulario.value;

    this.servicioService.registrarServicio( nombre, descripcion,this.file )
         .subscribe( res => {

          Swal.fire('Exito', 'Registro guardado con exito', 'success');
          this.router.navigate(['/dashboard'])
         },
         err => console.log( err )
         );
         return false;
        
         
        
  }

}
