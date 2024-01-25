import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {

    weight:number = 82; //  in kg
    height:number = 176; // in cm

    bmi():number {
        // PESO in kg / (altezza^2 / 10000);
        return this.weight / (this.height * this.height / 10000);
    }

    reset():void{
        console.log('Chiamatooooh?');
        this.weight = 82;
        this.height = 176;
    }


}
