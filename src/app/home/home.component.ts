import { Component, OnInit } from '@angular/core';
import { ProcessService } from '../services/process.service';
import { database } from 'firebase';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nameProcess: string = "";
  nickname: string = "";
  section: string = "";
  idSnomed?: number = null;

  constructor(private processService: ProcessService) { }

  ngOnInit() {
  }

  register(){
    const process = {
      nameProcess: this.nameProcess,
      nickname: this.nickname,
      section: this.section,
      idSnomed: this.idSnomed
    };
    this.processService.createProcess(process).then((data) => {
      alert('registrado correctamente');
      console.log(data);
    }).catch((error) => {
      alert('Ocurrio un error');
      console.log(error);  
    })
  }

}
