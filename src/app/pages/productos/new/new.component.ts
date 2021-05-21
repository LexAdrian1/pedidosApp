import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  producto: any;
  productForm: FormGroup;

  constructor(private router: Router,private fb: FormBuilder, private http: HttpClient) { 
    const navigation = this.router.getCurrentNavigation();
    this.producto = navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {
    this.productForm.patchValue(this.producto);
  }

  onSave(): void {
    console.log('Saved', this.productForm.value);
    if (this.productForm.valid) {
      const producto = this.productForm.value;
      const productoId = this.producto?.ID_Usuario || null;
      //this.productForm.reset();
    }
    let jsonProducto = {
      "request": {
          "prodRecord":{
              "prodRecord":[
                  {
                    "ID_Producto": this.productForm.controls['ID_Producto'].value,
                    "Nombre": this.productForm.controls['Nombre'].value,
                    "Descripcion": this.productForm.controls['Descripcion'].value,
                    "Precio_Unitario": this.productForm.controls['Precio_Unitario'].value,
                    "Stock": this.productForm.controls['Stock'].value,
                    "Fecha_Creacion": this.productForm.controls['Fecha_Creacion'].value,
                    "Fecha_Modificacion": this.productForm.controls['Fecha_Modificacion'].value
                  }
              ]
          }
      }
    };
    console.log(jsonProducto);
    this.http.post('http://localhost:8810/Pedidos/rest/PedidosService/Productos',jsonProducto,{headers:new HttpHeaders({'Content-Type': 'application/json'})}).subscribe(
      result => console.log(result),
      err => console.error(err));
    this.productForm.reset();
    alert('Producto Agregado');
  }

  onGoBackToList(): void {
    this.router.navigate(['list']);
  }

  isValidField(field: string): string {
    const validatedField = this.productForm.get(field);
    return (!validatedField.valid && validatedField.touched)
      ? 'is-invalid' : validatedField.touched ? 'is-valid' : '';
  }

  private initForm(): void {
    this.productForm = this.fb.group({
      ID_Producto: ['', [Validators.required]],
      Nombre: ['', [Validators.required]],
      Descripcion: ['', [Validators.required]],
      Precio_Unitario: ['', [Validators.required]],
      Stock: ['', [Validators.required]],
      Fecha_Creacion: ['', [Validators.required]],
      Fecha_Modificacion: ['', [Validators.required]],
    });
  }

}
