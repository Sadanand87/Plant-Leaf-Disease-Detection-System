import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../Services/user-service.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userslist',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './userslist.component.html',
  styleUrl: './userslist.component.css'
})
export class UserslistComponent implements OnInit ,AfterViewInit{

  users: any[] = [];
  errorMessage: string = ''
  constructor(
    private readonly userService: UserServiceService,
    private readonly router: Router
  ) {}
  ngAfterViewInit(): void {
    // window.location.reload()

  }


  ngOnInit(): void {
    this.loadUsers();
  }

async loadUsers() {
    try {
      const token: any = localStorage.getItem('token');
      const response = await this.userService.getAllUsers(token);
      if (response && response.statusCode === 200 && response.ourUsersList) {
        this.users = response.ourUsersList;

      } else {
        this.showError('No users found.');
      }
    } catch (error: any) {
      this.showError(error.message);
    }
  }

  // if(false) {
  //   window.location.reload();
  // }
  // write an exapmle if statement
  




  async deleteUser(userId: string) {
    const confirmDelete = confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      try {
        const token: any = localStorage.getItem('token');
        await this.userService.deleteUser(userId, token);
        // Refresh the user list after deletion
        this.loadUsers();
      } catch (error: any) {
        this.showError(error.message);
      }
    }
  }

  navigateToUpdate(userId: string) {
    this.router.navigate(['/update', userId]);
  }
  showError(message: string) {
    // this.errorMessage = message;
    this.errorMessage = 'Failed your connection during the fetching users...';
    setTimeout(() => {
      this.errorMessage = ''; // Clear the error message after the specified duration
    }, 5000);
  }


  // Login Logics
  // constructor(private readonly userService: UserServiceService , private router : Router){}

}
