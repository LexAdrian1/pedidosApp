import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  producto: any = null;
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.producto = navigation?.extras?.state?.value;
   }

  ngOnInit(): void {
  }

  onGoToEdit(): void {
    this.navigationExtras.state.value = this.producto;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  async onGoToDelete(): Promise<void> {
    try {
      //await this.employeesSvc.onDeleteEmployees(this.employee?.id);
      alert('Deleted');
      this.onGoBackToList();
    } catch (err) {
      console.log(err);
    }
  }

  onGoBackToList(): void {
    this.router.navigate(['list']);
  }

}
