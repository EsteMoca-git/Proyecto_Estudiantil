import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {

  infoForm: FormGroup;
  email: FormControl;
  password: FormControl;
    constructor(){
    this.email = new FormControl('', [Validators.required, Validators.email]); 
    this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);

    this.infoForm = new FormGroup({
      correo: this.email,
      contraseña: this.password
    }) 
  }

  enviarForm(): void{
    console.log(this.infoForm.value)
    
    this.infoForm.reset()


  }

}


