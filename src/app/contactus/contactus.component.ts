import { Component, OnInit } from '@angular/core';
import{ FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { from } from 'rxjs';

import { HttpHeaders, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
 
 
  public myform: FormGroup;
  public stateslist:any;
  constructor( public fb: FormBuilder, public http: HttpClient ) { 
    this.getState();
    
  this.myform = this.fb.group({
    firstname :['', Validators.required],
    lastname :['', Validators.required],
    address :['', Validators.required],
    city :['', Validators.required],
    state :['', Validators.required],
    zipcode :['', Validators.required],
    telephone: ['', Validators.compose([Validators.required, Validators.pattern(/[0-9\+\-\ ]/)])],
    email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
    message: ['', Validators.required],
    country: ['', Validators.required],
  })


}

  ngOnInit() {
this.getState();
    
  }
  getState() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    var result = this.http.get('assets/data/state.json').subscribe(res =>{
      this.stateslist = res;
      console.log('stateslist');
      console.log(this.stateslist);

    });
    return result;
  }
  doSubmit(){
    console.log(this.myform.value)
  }
  inputUntouch(form: any, val: any) {
    console.log('on blur .....');
    form.controls[val].markAsUntouched();
  }

}
