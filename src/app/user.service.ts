import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  userDeactivated = new EventEmitter<string>();
  userActivated = new EventEmitter<string>();

  constructor(private loggingServie : LoggingService) { }

  onSetToInactive(id: number ){
    this.loggingServie.logMessage("Inside set to Inactive");
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToactive(id: number) {
    this.loggingServie.logMessage("Inside set to active");
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  } 
}
