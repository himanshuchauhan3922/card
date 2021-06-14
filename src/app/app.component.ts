import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
// import {User} from './user'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-prime-one';
  show_msg = true


  // user=new User();
//   getUserValue (value:any)
// {
// console.log(value)
// }
constructor(){

}
// OnFormSubmit(from:NgForm){
//   if(form.invalid){
//   return;

//   }
//   console.log('User name:'+ from.controls['uname'].valid);
// }
}


