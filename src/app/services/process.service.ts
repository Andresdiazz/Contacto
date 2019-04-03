import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  constructor(private angularFireDatabase: AngularFireDatabase) {}
  getProcess(){
    return this.angularFireDatabase.list('/process');
  }
  
  createProcess(process){
    return this.angularFireDatabase.object('/process/').set(process);
  }
  editProcess(process){
    return this.angularFireDatabase.object('/process/').set(process);
  }
}
