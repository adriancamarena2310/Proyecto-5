import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginPage',
  templateUrl: './loginPage.component.html'
})
export class LoginPageComponent implements OnInit {
  ngOnInit() {
  }

  constructor(private authService:AuthService,
    private router:Router
    ){}

onLogin():void{
  this.authService.login('admin@admin','1234')
   .subscribe(user =>{
this.router.navigate(['/'])
   });

}
}
