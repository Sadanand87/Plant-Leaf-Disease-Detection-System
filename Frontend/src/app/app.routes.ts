import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { UserslistComponent } from './Components/adminNavs/userslist/userslist.component';
import { adminGuard, usersGuard } from './UsersGaurds/users.guard';
import { RegisterPageComponent } from './Components/register-page/register-page.component';
import { UpdateuserComponent } from './Components/adminNavs/updateuser/updateuser.component';
import { HomeComponent } from './Components/navBars/home/home.component';
import { AboutComponent } from './Components/navBars/about/about.component';
import { ContactComponent } from './Components/navBars/contact/contact.component';
import { ViewUsesComponent } from './Components/adminNavs/view-uses/view-uses.component';
import { AddUserComponent } from './Components/adminNavs/add-user/add-user.component';
import { DeleteUserComponent } from './Components/adminNavs/delete-user/delete-user.component';
import { NavbarComponent } from './Components/navbar/navbar.component';


export const routes: Routes = [
  {path: 'registerpage', component: RegisterPageComponent},
  {path: 'login', component: LoginComponent},
  // {path: 'register', component: RegisterComponent, canActivate: [adminGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [usersGuard]},
  // {path: 'update/:id', component: UpdateuserComponent, canActivate: [adminGuard]},
  {path: 'update/:id', component: UpdateuserComponent},
  {path: 'users', component: UserslistComponent},
  {path: 'home', component: HomeComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'viewUsers', component: ViewUsesComponent},
  {path: 'users', component: UserslistComponent},
  {path: 'addUser', component: AddUserComponent},
  {path: 'deleteUser', component: DeleteUserComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'},
];
