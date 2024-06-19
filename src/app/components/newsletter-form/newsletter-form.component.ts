import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'newsletter-form',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  templateUrl: './newsletter-form.component.html',
  styleUrls: ['./newsletter-form.component.scss'],
})
export class NewsletterFormComponent {
  newsletterForm!: FormGroup;
  loading = false; // Certifique-se de que a variável loading está definida e inicializada

  constructor(private fb: FormBuilder) {
    this.newsletterForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],  
      message: ['', Validators.required]
    });
  }

  onFocus(event: FocusEvent): void {
    const inputElement = event.target as HTMLInputElement;
    inputElement.classList.add('focused');
  }

  onBlur(event: FocusEvent): void {
    const inputElement = event.target as HTMLInputElement;
    inputElement.classList.remove('focused');
    if (inputElement.value) {
      inputElement.classList.add('filled');
    } else {
      inputElement.classList.remove('filled');
    }
  }

  onSubmit(): void {
    if (this.newsletterForm.valid) {
      this.loading = true;
      // Simulate an HTTP request
      setTimeout(() => {
        console.log('Form Submitted', this.newsletterForm.value);
        this.loading = false; // Reset loading state after submission
      }, 2000);
    } else {
      console.log('Form is invalid');
    }
  }
}
