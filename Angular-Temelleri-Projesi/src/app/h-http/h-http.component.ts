import { NgForm } from '@angular/forms';
import { HHttpService } from './../services/h-http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-h-http',
  templateUrl: './h-http.component.html',
  styleUrls: ['./h-http.component.css'],
})
export class HHttpComponent implements OnInit {
  constructor(private service: HHttpService) {}

  rolesData: any = '';

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() {
    this.service.getAllRoles().subscribe((data) => {
      this.rolesData = data;
    });
  }

  addNewRole(roleForm: NgForm) {
    this.service.addRole(roleForm.value).subscribe(
      (data) => {
        this.getRoles();
      },
      (error) => {
        alert('HATA1');
      }
    );
  }

  editNewRole(roleForm: NgForm) {
    this.service.editRole(roleForm.value).subscribe(
      (data) => {
        this.getRoles();
      },
      (error) => {
        alert('Hata2');
      }
    );
  }

  deleteNewRole(roleForm: NgForm) {
    this.service.deleteRole(roleForm.value).subscribe(
      (data) => {
        this.getRoles();
      },
      (error) => {
        alert('HATA3');
      }
    );
  }
}
