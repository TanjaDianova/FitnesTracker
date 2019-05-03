import { Component, EventEmitter, Output, } from '@angular/core';
import { Store } from '@ngrx/store';


import { AuthService } from 'src/app/auth/auth.service';
import *as fromRoot from '../../app.reducer';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent  {
  @Output() closeSidenav = new EventEmitter<void>();
  isAuth$: Observable<boolean>;
 


  constructor(
    private autService: AuthService, 
    private store: Store<fromRoot.State>
    ) { }

    ngOnInit(){
      this.isAuth$ = this.store.select(fromRoot.getIsAuth);
    }

  

  onClose(){
    this.closeSidenav.emit();
  }


  onLogout(){
    this.autService.logout();
    this.onClose();
    
  };

 
}
