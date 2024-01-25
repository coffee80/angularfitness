import { Component } from '@angular/core';
import ClientComment from './clientcomment';


// configurazione del componente. Il componente si chiama app-root
// file html da renderizzare app.component.html
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    // ogni componente è composto da una parte html e da una parte typescript
    // il file typescript GOVERNA la parte html
    // il typescript è la logica (model e controller...? circa..) della pagina web

    title:string = 'Angular Fitness world';
    subtitle:string = 'All your needs for fitness handled dynamically';

    c1:ClientComment = {client:"Ferdinando", text:"Ottima palestra per cominciare ad alleanarsi anche tutta la notte"};
    c2:ClientComment = {client:"Stefano", text:"Mi ha fatto perdere la voglia di andarci"};
    c3:ClientComment = {client:"Valeria", text:"Istruttori simpatici, ambiente cordiale"};
  

}
