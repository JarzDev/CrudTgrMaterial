import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CognitoService } from 'src/app/services/cognito.service';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor(private cognitoService: CognitoService, private router: Router) {
  
    this.cognitoService.isAuthenticated()
    .then(() => {
      this.cognitoService.signOut();
    }
    ).catch(() => {
      this.cognitoService.signOut();
    }
    );
     }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigateByUrl('singin');
    }, 2000);
  }
}
