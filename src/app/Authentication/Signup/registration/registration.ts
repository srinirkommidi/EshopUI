import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , FormGroup, Validators, FormArray,FormBuilder,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDetails } from '../../../Models/user-details';
import { RegistrationSvc } from '../../../Services/registration.svc';
@Component({
  selector: 'app-registration',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './registration.html',
  styleUrls: ['./registration.css']
})
export class Registration implements OnInit {
  registrationForm!: FormGroup;

  // Static options for complex fields
  availableAccountTypes = ['Savings', 'Checking', 'Current', 'FixedDeposit'];
  availableRoles = ['User', 'Admin', 'Manager', 'Premium'];

  constructor(private fb: FormBuilder, private registrationSvc: RegistrationSvc) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      userDetails: this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        age: ['', [Validators.required, Validators.min(0)]],
        username: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      }),
      // --- Account Details ---
      accountDetails: this.fb.group({
        accountNumber: ['', Validators.required],
        bankName: ['', Validators.required],
        bankCode: [''], // Optional
        branch: ['', Validators.required],
        ifscCode: ['', Validators.required],
        upiId: [''],
        dateOfExpiry: [''],
        accountType: this.fb.array([], Validators.required), // FormArray for multiple selections
        nominee: [''],
        relationWithNominee: [''],
        isActive: [true], // Default to true
        balance: [0, [Validators.required, Validators.min(0)]],
      }),
      // --- Address & Roles ---
      address: this.fb.group({
        Street: ['', Validators.required],
        City: ['', Validators.required],
        State: ['', Validators.required],
        ZipCode: ['', Validators.required],
        Country: ['', Validators.required],
      }),
      roles: this.fb.array([], Validators.required) // FormArray for multiple selections
    });
  }

  onAccountTypeChange(event: any) {
    const accountTypeArray: FormArray = this.registrationForm.get('accountDetails.accountType') as FormArray;
    if (event.target.checked) {
      accountTypeArray.push(new FormControl(event.target.value));
    } else {
      const index = accountTypeArray.controls.findIndex(control => control.value === event.target.value);
      if (index !== -1) {
        accountTypeArray.removeAt(index);
      }
    }
  }
  onRoleChange(event: any) {
    const rolesArray: FormArray = this.registrationForm.get('roles') as FormArray;
    if (event.target.checked) {
      rolesArray.push(new FormControl(event.target.value));
    } else {
      const index = rolesArray.controls.findIndex(control => control.value === event.target.value);
      if (index !== -1) {
        rolesArray.removeAt(index);
      }
    }
  }
  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.registrationSvc.registerUser(this.registrationForm.value.userDetails).subscribe(response => {
              alert("Form Submitted Successfully!");
        console.log('User registered successfully', response);
      }, error => {
        console.error('Error registering user', error);
      });
      console.log(this.registrationForm.value);
      
    }
  }
}
