import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  providers: []
})
export class ActiveUsersComponent implements OnInit {

  @Input() users: string[];
  constructor(private userService: UserService) { 
    this.userService.userDeactivated.subscribe(
      (status: string) => alert(status)
    )
  }

  ngOnInit() {
  }

  onSetToInactive(id: number) {
    this.userService.userDeactivated.emit('Deactivated user :'+ this.userService.activeUsers[id]);
    this.userService.onSetToInactive(id);
  }

}
