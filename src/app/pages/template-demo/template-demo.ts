import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

type Role = 'Admin' | 'User' | 'Guest' | '';
type Gender = 'Male' | 'Female' | '';
type Status = 'Permanent' | 'Probationary' | '';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-demo.html',
  styleUrl: './template-demo.css',
})
export class TemplateDemo {
  title = 'Template Driven Demo';

  username = '';
email = '';
password = '';
role: Role = '';
gender: Gender = '';
status: Status = '';
comments = '';

phone = '';
department = '';
dob = '';

  submitted = false;

  onSubmit(form: NgForm) {
  this.submitted = true;

  console.log('FORM VALUE:', form.value);

  form.resetForm(); // optional reset after submit
}
}
