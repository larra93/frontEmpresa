import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicesService } from '../services/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {


  file!: File;

  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(6)] ],
    descripcion:['',[Validators.required] ],
    imagen:['',[Validators.required] ]
  });




  constructor( private fb: FormBuilder,
    private router: Router,
    private ServicioService: ServicesService ) { }

  ngOnInit(): void {
  }

 

  uploadImage(event:any){

    this.file = event.target.files[0];
    console.log(this.file);
  }

  registrarServicio(){


    const { nombre , descripcion } = this.miFormulario.value;

    this.ServicioService.registrarServicio( nombre, descripcion,this.file )
         .subscribe( res => {

          Swal.fire('Exito', 'Registro guardado con exito', 'success');
          this.router.navigate(['/dashboard'])
         },
         err => console.log( err )
         );
         return false;
        
          /*
          if( resp === true ){
            Swal.fire('Exito', 'Registro guardado con exito', 'success');
          } else{
            Swal.fire('Error', resp, 'error');
          }*/
        
  }

}
