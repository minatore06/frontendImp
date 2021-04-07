import { Component } from '@angular/core';
import { DataRestService } from '../data-rest.service';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})

export class TabellaComponent{

  constructor(private restClient: DataRestService) { 
    this.loadData();
  }

  data:any;
  errors:any;

  loadData():void{
    this.restClient.getDataRows("http://localhost:4200/api/tutorial/1.0/employees").subscribe(
      data=>this.data=data,
      error=>this.errors = error
    )
  }

  rimuovi(id:number):void{
    this.restClient.deleteDataRow("http://localhost:4200/api/tutorial/1.0/employees/"+id).subscribe(
      data=>this.loadData(),
      error=>this.errors = error
    )
  }
}
