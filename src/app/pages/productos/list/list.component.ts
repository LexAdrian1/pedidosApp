import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  user_j: any;
  users = {
    "ttAllUsers": [
                {
                    "email": "prueba@test.com",
                    "ID_Usuario": "1",
                    "password": "22222",
                    "Fecha_Creacion": "2021-10-05",
                    "Fecha_Modificacion": "2021-10-05"
                },
                {
                    "email": "chino@test.com",
                    "ID_Usuario": "2",
                    "password": "369",
                    "Fecha_Creacion": "2021-10-05",
                    "Fecha_Modificacion": "2021-10-05"
                },
                {
                    "email": "kevin@test.com",
                    "ID_Usuario": "3",
                    "password": "1234",
                    "Fecha_Creacion": "2021-05-16",
                    "Fecha_Modificacion": "2021-05-16"
                },
                {
                    "email": "cuatro4@test.com",
                    "ID_Usuario": "4",
                    "password": "369",
                    "Fecha_Creacion": "2021-10-05",
                    "Fecha_Modificacion": "2021-10-05"
                },
                {
                    "email": "cinco2@test.com",
                    "ID_Usuario": "5",
                    "password": "369",
                    "Fecha_Creacion": "2021-10-05",
                    "Fecha_Modificacion": "2021-10-05"
                },
                {
                    "email": "prueba2@test.com",
                    "ID_Usuario": "6",
                    "password": "369",
                    "Fecha_Creacion": "2021-10-05",
                    "Fecha_Modificacion": "2021-10-05"
                },
                {
                    "email": "siete@test.com",
                    "ID_Usuario": "7",
                    "password": "369",
                    "Fecha_Creacion": "2021-10-05",
                    "Fecha_Modificacion": "2021-10-05"
                },
                {
                    "email": "ocho@test.com",
                    "ID_Usuario": "8",
                    "password": "369",
                    "Fecha_Creacion": "2021-10-05",
                    "Fecha_Modificacion": "2021-10-05"
                },
                {
                    "email": "nueve@test.com",
                    "ID_Usuario": "9",
                    "password": "369",
                    "Fecha_Creacion": "2021-10-05",
                    "Fecha_Modificacion": "2021-10-05"
                }
    ]
  }

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user_j = this.users.ttAllUsers;
  }

  onGoToEdit(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  onGoToSee(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['details'], this.navigationExtras);
  }

  onGoToDelete(empId: string): void {
    try {
      alert('Deleted');
    } catch (err) {
      console.log(err);
    }
  }

}
