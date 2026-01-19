import { Component, Inject } from '@angular/core';
import { ValidatorFn, AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatchValidator,  } from '../../ValidacionContraseña.validator';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrls: ['./form.css'],
})
export class Form {
  fb = Inject(FormBuilder)

  userForm: FormGroup;
    nombre: FormControl;
    apellido: FormControl;
    correo: FormControl;
    password: FormControl;
    confirmPassword: FormControl;
    telefono: FormControl;      
    fechaNacimiento: FormControl;
    
    constructor(){
      this.nombre = new FormControl('', [Validators.required]);
      this.apellido = new FormControl('', [Validators.required]);
      this.correo = new FormControl('', [Validators.required, Validators.email]);
      this.password = new FormControl('', [Validators.required]);
      this.confirmPassword = new FormControl('', [Validators.required]),
      this.telefono = new FormControl('', [Validators.required, Validators.maxLength(10)]);
      this.fechaNacimiento = new FormControl('', [Validators.required]);

      this.userForm = new FormGroup({
        nombre: this.nombre,
        apellido: this.apellido,
        correo: this.correo,
        password: this.password,
        confirmPassword: this.confirmPassword,
        telefono: this.telefono,
        fechaNacimiento: this.fechaNacimiento
      }, {
        validators:[
          passwordMatchValidator
        ]
      })
    }

    userKeep(): void{
      console.log(this.userForm.value)
      console.log(this.userForm)
      console.log(this.userForm.errors);
      
      this.userForm.reset()
      this.userForm.reset(null)
    }
}





