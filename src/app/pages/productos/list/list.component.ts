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
  productos = 
  {
    "response": {
        "ttAllProducts": {
            "ttAllProducts": [
                {
                    "ID_Producto": "1",
                    "Nombre": "Telefono",
                    "Descripcion": "LG LP-705g2",
                    "Precio_Unitario": 150.0,
                    "Stock": 5,
                    "Fecha_Creacion": "2021-05-16",
                    "Fecha_Modificacion": "2021-05-16"
                },
                {
                    "ID_Producto": "2",
                    "Nombre": "Celular",
                    "Descripcion": "Xiaomi Redmi Note 9S",
                    "Precio_Unitario": 250.0,
                    "Stock": 5,
                    "Fecha_Creacion": "2021-05-16",
                    "Fecha_Modificacion": "2021-05-16"
                },
                {
                    "ID_Producto": "3",
                    "Nombre": "calculadora",
                    "Descripcion": "casio fx-570 ",
                    "Precio_Unitario": 30.0,
                    "Stock": 15,
                    "Fecha_Creacion": "2021-05-16",
                    "Fecha_Modificacion": "2021-05-16"
                },
                {
                    "ID_Producto": "4",
                    "Nombre": "Celular",
                    "Descripcion": "Huawei Mate 10 lite",
                    "Precio_Unitario": 250.0,
                    "Stock": 6,
                    "Fecha_Creacion": "2021-05-16",
                    "Fecha_Modificacion": "2021-05-16"
                },
                {
                    "ID_Producto": "5",
                    "Nombre": "Laptop ",
                    "Descripcion": "HP Pavilion ",
                    "Precio_Unitario": 500.0,
                    "Stock": 14,
                    "Fecha_Creacion": "2021-05-16",
                    "Fecha_Modificacion": "2021-05-16"
                }
            ]
        }
    }
};
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    /*this.http.get('http://204.12.255.75:8810/Pedidos/rest/PedidosService/Productos')
    .subscribe(data => { 
     let jsonText = JSON.stringify(data);
     let subJson = jsonText.split('[');
     let subJson2 = subJson[1].split(']')[0];
     let jsonProductos = JSON.parse('[' + subJson2 + ']');
     this.user_j = jsonProductos;
     console.log(jsonProductos);
    });*/
    let jsonText = JSON.stringify(this.productos);
    let subJson = jsonText.split('[');
    let subJson2 = subJson[1].split(']')[0];
    let jsonProductos = JSON.parse('[' + subJson2 + ']');
    this.user_j = jsonProductos;
    console.log(jsonProductos);
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
