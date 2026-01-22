import { Component } from '@angular/core';
import { UserServiceService } from '../../../Services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-uses',
  standalone: true,
  imports: [],
  templateUrl: './view-uses.component.html',
  styleUrl: './view-uses.component.css'
})
export class ViewUsesComponent {

  constructor(private readonly userService: UserServiceService , private router : Router){}


  isAuthenticated:boolean = false;
  isAdmin:boolean = false;
  isUser:boolean = false;
  isLoggedOut:boolean = true;
  isLoggedIn: boolean = false;

  ngOnInit(): void {
      this.isAuthenticated = this.userService.isAuthenticated();
      this.isAdmin = this.userService.isAdmin();
      this.isUser = this.userService.isUser();
  }

  logout():void{
    this.userService.logOut();
    this.isAuthenticated = false;
    this.isAdmin = false;
    this.isUser = true;
    this.isLoggedOut=false;
    this.router.navigate(['/home']);
  }

  login(){
    this.router.navigate(['/login']);

  }

}
