import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

type ReactiveFormModel = {
  username: string;
  email: string;
  password: string;
  phone: string;
  dob: string;
  role: 'Admin' | 'User' | 'Guest';
  department: string;
  gender: 'Male' | 'Female' | '';
  status: 'Permanent' | 'Probationary' | '';
  comments: string;
};

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-demo.html',
  styleUrl: './reactive-demo.css',
})
export class ReactiveDemo {
  title = 'Reactive Forms Demo';
  submitted = false;

  // ✅ store a snapshot here so reset doesn't wipe the displayed data
  submittedData: ReactiveFormModel | null = null;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],
      dob: ['', Validators.required],
      role: ['Admin', Validators.required],
      department: ['', Validators.required],
      gender: ['', Validators.required],
      status: ['', Validators.required],
      comments: [''],
    });
  }

  // show errors after touch OR after submit attempt
  isInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    if (!control) return false;

    const interacted = control.touched || this.submitted; // boolean
    return interacted && control.invalid;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // ✅ snapshot BEFORE reset
    this.submittedData = this.form.getRawValue() as ReactiveFormModel;

    console.log('REACTIVE FORM VALUE:', this.submittedData);

    // ✅ reset back to defaults (prevents nulls + keeps Admin)
    this.form.reset({
      username: '',
      email: '',
      password: '',
      phone: '',
      dob: '',
      role: 'Admin',
      department: '',
      gender: '',
      status: '',
      comments: '',
    });
  }
}
