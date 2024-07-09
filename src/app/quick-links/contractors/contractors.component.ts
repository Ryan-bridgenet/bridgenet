import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrl: './contractors.component.css',
})
export class ContractorsComponent implements OnInit{
  contractorsForm: FormGroup;
  drop1 = ["LLC", "Incorperated", "Sole Propreiter"];
  drop2 = ["Yes", "No"];

  constructor(private fb: FormBuilder) {
    this.contractorsForm = this.fb.group({
      companyName: ['', [Validators.required]],
      companyContact: ['', [Validators.required]],
      contactEmail: ['', [Validators.required, Validators.email]],
      contactPhone: ['', [Validators.required, Validators.pattern('^[- +()0-9]+$')]],
      services: this.fb.array([], [Validators.required]),
      crewsAvailable: [1],
      dateAvailable: ['', Validators.required],
      WBEDBE: ['', [Validators.required]],
      companyStructure: ['', [Validators.required]],
      aboutCompany: ['', [Validators.required]]

    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    if (this.contractorsForm.valid) {
      console.log('Form Submitted', this.contractorsForm.value);
    }
  }


  onCheckboxChange(e: any) {
    const options: FormArray = this.contractorsForm.get('services') as FormArray;

    if (e.target.checked) {
      options.push(this.fb.control(e.target.value));
    } else {
      const index = options.controls.findIndex(x => x.value === e.target.value);
      if (index !== -1) {
        options.removeAt(index);
      }
    }
  }

  get optionsArray() {
    return this.contractorsForm.get('options') as FormArray;
  }


}