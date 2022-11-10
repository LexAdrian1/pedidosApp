import { HttpClient } from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  productos_list: any;
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

  formBusqueda:FormGroup
  constructor(private router: Router, private http: HttpClient,private fb: FormBuilder) {

   }

   


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
    this.http.get('http://localhost:8810/Pedidos/rest/PedidosService/Productos')
    let jsonText = JSON.stringify(this.productos);
    let subJson = jsonText.split('[');
    let subJson2 = subJson[1].split(']')[0];
    let jsonProductos = JSON.parse('[' + subJson2 + ']');
    this.productos_list = jsonProductos;
    console.log(jsonProductos);
    this.initForm();

    
  }

  buscar(): void {
    let cond=this.formBusqueda.controls['search'].value;
    //let filterProducts = this.productos_list.filter(producto => producto.Nombre.toUpperCase() == cond.toUpperCase()); 
    let filterProducts = this.productos_list.filter(producto => producto.Nombre.toLowerCase().includes(cond.toLowerCase())); 
    this.productos_list=filterProducts;
  }
  
  private initForm(): void {
    this.formBusqueda = this.fb.group({
     search:new FormControl('')
    });
  }

  

}
