import { Component } from '@angular/core';

  // Declaration (imza) class a çalışma anında bir anlam yükler c# ta attribute gibi
  // @component bir attribute gibi aşağıdaki appComponent in bir component olduğunu belirtir
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'northwind';
  user: string = 'Halil Karagöz'; 
   
}
