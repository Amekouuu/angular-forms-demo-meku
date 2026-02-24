import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

type Role = 'Admin' | 'User' | 'Guest' | '';
type Gender = 'Male' | 'Female' | '';
type Status = 'Permanent' | 'Probationary' | '';

type TemplateFormModel = {
  username: string;
  email: string;
  password: string;
  phone: string;
  dob: string;
  role: Role;
  department: string;
  gender: Gender;
  status: Status;
  comments: string;
};

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-demo.html',
  styleUrl: './template-demo.css',
})
export class TemplateDemo {
  title = 'Template Driven Demo';

  model: TemplateFormModel = this.getDefaultModel();

  submitted = false;
  submittedData: TemplateFormModel | null = null;

  private getDefaultModel(): TemplateFormModel {
    return {
      username: '',
      email: '',
      password: '',
      phone: '',
      dob: '',
      role: '',
      department: '',
      gender: '',
      status: '',
      comments: '',
    };
  }

  // ✅ helper: show error only when user interacted OR after submit attempt
  showError(control: NgModel | null | undefined): boolean {
    if (!control) return false;

    const interacted = !!control.touched || !!control.dirty; // coerce boolean|null -> boolean
    return !!control.invalid && (interacted || this.submitted);
  }

  onSubmit(form: NgForm) {
    this.submitted = true;

    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    // ✅ Capture values BEFORE reset
    this.submittedData = { ...this.model };
    console.log('FORM VALUE:', this.submittedData);

    // ✅ Reset WITHOUT producing nulls
    this.model = this.getDefaultModel();
    form.resetForm(this.model);

    // optional: if you want errors hidden again after successful submit
    // this.submitted = false;
  }
}
