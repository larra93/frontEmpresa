import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {


  miFormulario: FormGroup = this.fb.group({
    name:['',[Validators.required, Validators.minLength(6)] ],
    email:['',[Validators.required, Validators.email] ],
    password:['',[Validators.required, Validators.minLength(8)] ]
  });

  constructor( private fb: FormBuilder,
    private router: Router, 
    private authService: AuthService
     ) { }

 
    registrar(){
      const { name , email, password } = this.miFormulario.value;

      this.authService.registrarUsuario( name, email, password)
          .subscribe( resp => {
            
            //Lograr pasar los mensaje correspondientes de error desde el backend
            if( resp === true ){
              Swal.fire('Exito', 'Registro guardado con exito', 'success');
            } else{
              Swal.fire('Error', resp, 'error');
            }
          })
    }
}
