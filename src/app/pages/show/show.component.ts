import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CognitoService } from 'src/app/services/cognito.service';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { UserNavbarComponent } from '../../components/user-navbar/user-navbar.component'
import { CrudService } from 'src/app/services/crud.service';
import {MatIconModule} from '@angular/material/icon';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Carlos Perez', weight: 'carlos@gmail.com', symbol: '+56912345678'},
  {position: 2, name: 'Pedro Perez', weight: 'pedro@gmail.com', symbol: '+56912345678'},
  {position: 3, name: 'Maria Colmenare', weight: 'Maria@gmail.com', symbol: '+56912345678'},
  {position: 4, name: 'Patricio Jorquera', weight: 'Pato@gmail.com', symbol: '+56912345678'},
  {position: 5, name: 'Javiera Nuñez', weight: 'Javiera@gmail.com', symbol: '+56912345678'},
 
];


@Component({
  selector: 'app-show',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, MatTableModule, UserNavbarComponent, MatIconModule],
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  personas : any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  cognitoData : any ;
  constructor(private cognitoService: CognitoService, private crudSrv: CrudService) {
  

      this.cognitoData  = this.cognitoService.getUser().then((data) => {
        this.cognitoData = data;
        console.log(this.cognitoData);

        localStorage.setItem('email', this.cognitoData.attributes.email);
       });
 }

 ngOnInit(): void {}

 reads() {
  this.crudSrv.reads().subscribe(_personas => {
    console.log('personas', _personas);
    this.personas = _personas;
  });
}

}
