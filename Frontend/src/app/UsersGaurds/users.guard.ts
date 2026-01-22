import { CanActivateFn, Router } from '@angular/router';
import { UserServiceService } from '../Services/user-service.service';
import { inject } from '@angular/core';


export const usersGuard: CanActivateFn = (route, state) => {
  if (inject(UserServiceService).isAuthenticated()) {
    return true;
  }else{
    inject(Router).navigate(['/login'])
    return false
  }
};



export const adminGuard: CanActivateFn = (route, state) => {
  if (inject(UserServiceService).isAdmin()) {
    return true;
  }else{
    inject(Router).navigate(['/login'])
    return false
  }
};

