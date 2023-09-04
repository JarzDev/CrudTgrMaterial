import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Iuser } from 'src/app/interfaces/iuser';
import { Router } from '@angular/router';
import { CognitoService } from 'src/app/services/cognito.service';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatDividerModule, MatButtonModule, FormsModule, NavbarComponent],
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent {

  loading: boolean;
  isConfirm: boolean;
  user: Iuser;

  constructor(private router: Router,
    private cognitoService: CognitoService) {
this.loading = false;
this.isConfirm = false;
this.user = {} as Iuser;
}

public signUp(): void {
  try{

  
   this.loading = true;
   this.cognitoService.signUp(this.user)
   .then(() => {
     this.loading = false;
     this.isConfirm = true;
     Swal.fire({
       icon: 'success',
       title: 'Bienvenido',
       text: 'Espera tu codigo de confirmación',
       showConfirmButton: false,
       timer: 1500
     });

   }).catch((err) => {
     this.loading = false;
     Swal.fire({
       icon: 'error',
       title: 'Oops...',
       text: err,
       });
   });

 } catch (error) {
   Swal.fire({
     icon: 'error',
     title: 'Oops...',
     text: 'error',
   });

 }
}

 public confirmSignUp(): void {

   this.loading = true;
   this.cognitoService.confirmSignUp(this.user)
   .then(() => {
     Swal.fire({
       icon: 'success',
       title: 'Bienvenido',
       text: 'Usuario confirmado',
       showConfirmButton: false,
       timer: 1500
     });
     this.router.navigate(['/signin']);
   }).catch(() => {
     this.loading = false;
   });
 }

}
