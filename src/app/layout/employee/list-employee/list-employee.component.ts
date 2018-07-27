import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../Employee.service'
import { Employee } from '../Employee';
import { DeleteComponent } from './delete/delete.component';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html'
})

export class ListEmployeeComponent implements OnInit {
  public dataEmployee: Array<Employee> = [];
  @ViewChild(DeleteComponent)
  del: DeleteComponent;
  constructor(private dataService: EmployeeService) { }
  ngOnInit() {
    this.dataEmployee = this.dataService.getLists();
  }
  ngAfterViewInit() {
    this.dataEmployee = this.dataService.getLists();
  }
  // outObj:any;
  uuid: string;
  show(obj) {
    this.del.openModal(obj);
    this.uuid = obj.id;
  }
  onDelete() {
    this.dataEmployee = this.dataService.remove(this.uuid);
  }
}
