import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TriggersService } from  '../triggers.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  }
  get f() { return this.form.controls; }
  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
    // alert(this.triggerService.test_get_api());
    
   alert("successfully looged in");
    this.router.navigate(['/dashboard'])
   



}
}
