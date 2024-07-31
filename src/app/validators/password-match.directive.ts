import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    // If either of these fields is not present, return null (no validation errors)
    if (!password || !confirmPassword) {
        return null;
    }

    // If the passwords do not match, set an error on the 'confirmPassword' control
    return password.value === confirmPassword.value ? null : { 'passwordMismatch': true };
};