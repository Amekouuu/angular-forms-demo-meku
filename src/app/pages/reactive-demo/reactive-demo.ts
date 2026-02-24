import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

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

  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(12)
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)
        ]
      ],

      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]{10,15}$/)
        ]
      ],

      dob: ['', Validators.required],

      role: ['Admin', Validators.required],

      department: ['', Validators.required],

      gender: ['', Validators.required],

      status: ['', Validators.required],

      comments: ['']
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!(control && control.touched && control.invalid);
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('REACTIVE FORM VALUE:', this.form.value);
    this.form.reset();
  }
}
