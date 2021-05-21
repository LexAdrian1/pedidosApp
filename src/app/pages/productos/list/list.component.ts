import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8810/Pedidos/rest/PedidosService/Productos')
    .subscribe(data => { 
     let jsonText = JSON.stringify(data);
     let subJson = jsonText.split('[');
     let subJson2 = subJson[1].split(']')[0];
     let jsonProductos = JSON.parse('[' + subJson2 + ']');
     this.user_j = jsonProductos;
     console.log(jsonProductos);
    });

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
      this.http.delete('http://localhost:8810/Pedidos/rest/PedidosService/Productos/'+ empId).subscribe(
      result => console.log(result),
      err => console.error(err));
      alert('Deleted');
    } catch (err) {
      console.log(err);
    }
  }

}
