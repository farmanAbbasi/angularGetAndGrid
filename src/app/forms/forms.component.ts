import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;
  roles=[{'name':'a','id':1 },{'name':'ax','id':2 },{'name':'as','id':3 }]
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.messageForm=this.formBuilder.group({
      name: ['',Validators.required],
      message: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      RoleId: ['', Validators.required]
    });
  }

  onSubmit(value) {
    console.log(value)
    this.submitted = true;
    if (this.messageForm.invalid) {
        return;
    }
    this.success = true;
  
}

}
