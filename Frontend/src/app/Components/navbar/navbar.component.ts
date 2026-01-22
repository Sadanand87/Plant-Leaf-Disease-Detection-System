import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../Services/user-service.service';
import { CommonModule, NgIf } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule , RouterLink, RouterOutlet,NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(private readonly userService: UserServiceService , private router : Router){}


  isAuthenticated:boolean = false;
  isAdmin:boolean = false;
  isUser:boolean = false;
  isLoggedOut:boolean = true;
  isLoggedIn: boolean = true;

  
  ngOnInit(): void {
      this.isAuthenticated = this.userService.isAuthenticated();
      this.isAdmin = this.userService.isAdmin();
      this.isUser = this.userService.isUser();
      console.log("isAdmin : " , this.isAdmin);
  }

  logout():void{
    this.userService.logOut();
    this.isAuthenticated = false;
    this.isAdmin = false;
    this.isUser = false;
    this.isLoggedIn=true;
    this.router.navigate(['/home']);
    // window.location.reload();
  }

  login(){
    if(this.isLoggedIn){
      this.isLoggedIn =!this.isLoggedIn;
    window.location.reload();

    }
    this.router.navigate(['/login']);

  }

  // Create a toggale button
  toggleLogin(){
    if(this.isLoggedIn){
      this.isLoggedIn =!this.isLoggedIn;
    }
  }

}
