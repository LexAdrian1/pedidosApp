import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  producto: any;
  productForm: FormGroup;

  constructor(private router: Router,private fb: FormBuilder) { 
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
      this.productForm.reset();
    }

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
      ID_Usuario: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      Fecha_Creacion: ['', [Validators.required]],
      Fecha_Modificacion: ['', [Validators.required]],
    });
  }

}
