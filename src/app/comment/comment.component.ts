import { Component, Input } from '@angular/core';
import ClientComment from '../clientcomment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
 
      
  @Input() comment!:ClientComment;

  /*
  * Io sono CommentComponent e ho bisogno di comment:ClientComment  
  * qualcuno me lo passerà. L'oggetto NON viene istanziato qui dentro, ma arriva da fuori.
  * qualcuno produrrà un oggetto che rispetta il contratto ClientComment e lo collegherà alla mia variabile 
  * comment
  *
  */




}
