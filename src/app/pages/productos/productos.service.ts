import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  

  constructor(private http: HttpClient) {
}
  private getProductos(): void {
  this.http.get('http://localhost:8810/Pedidos/rest/PedidosService/Productos')
  .subscribe(data => { 
   let jsonText = JSON.stringify(data);
   let subJson = jsonText.split('[');
   let subJson2 = subJson[1].split(']')[0];
   let jsonProductos = JSON.parse('[' + subJson2 + ']');
   //this.user_j = jsonProductos;
   console.log(jsonProductos);
  });
}
}
