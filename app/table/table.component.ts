import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  data:any[]=[
    {Date:'02/09/2000',EmpNAme:'Ragul',Expense:'Briyani',Amount:'₹240',Status:'pending'},
    {Date:'02/09/2000',EmpNAme:'kishore',Expense:'Briyani',Amount:'₹100',Status:'pending'},
    {Date:'02/09/2000',EmpNAme:'Nethaji',Expense:'Briyani',Amount:'₹240',Status:'pending'},
    {Date:'02/09/2000',EmpNAme:'Aravi',Expense:'Briyani',Amount:'₹199',Status:'Approved'},
    {Date:'02/09/2000',EmpNAme:'Marudhu',Expense:'Briyani',Amount:'₹299',Status:'Approved'},
    {Date:'02/09/2000',EmpNAme:'Ragul',Expense:'Briyani',Amount:'₹199',Status:'Rejected'},
  ]
}
