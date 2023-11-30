import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-layoutPage',
  templateUrl: './layoutPage.component.html'
})
export class LayoutPageComponent implements OnInit {

  ngOnInit() {
  }

  public sidebarItems = [
    {
      label: 'Listado',
      icon: 'label',
      url: './list'
    }, {
      label: 'añadir',
      icon: 'add',
      url: './new-hero'
    }, {
      label: 'buscar',
      icon: 'search',
      url: './search'
    }
  ]


  constructor(private authService:AuthService,
    private router: Router
    ){}

get user():User | undefined{
return this.authService.currentUser;
}

  onLogout(){
    this.authService.onLogout();
    this.router.navigate(['/auth/login'])
  }

}
