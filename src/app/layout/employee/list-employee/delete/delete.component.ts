import { Component, OnInit, ViewChild, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from './../../Employee.service';
import { BsModalService } from 'ngx-bootstrap/modal'
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service'

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  display = 'none';
  name: string = 'abc';
  uuid: string = null;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private employeeService: EmployeeService) { }
  @Input() data;
  @ViewChild('template') template;
  @Output() delete = new EventEmitter<string>();
  ngOnInit() {

  }
  openModal(obj: any) {
    this.data = obj;
    this.modalRef = this.modalService.show(this.template);
  }
  confirm() {
    this.modalRef.hide();
    this.delete.next('abc');
  }

  decline() {
    this.modalRef.hide();
  }
}
