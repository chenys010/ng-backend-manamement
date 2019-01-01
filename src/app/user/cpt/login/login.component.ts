import { Component, OnInit, Inject } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

import { Observable, Subscribable } from "rxjs";

import { UserService } from "../../../api/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  hide: Boolean = true;
  constructor(private _fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.validateForm = this._fb.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  submitForm() {
    console.log("login");
    debugger;
    const res = this.userService.login(this.validateForm.value);
    // res.map(ret => {
    //   debugger;
    //   console.log("hfhfhfhh" + JSON.stringify(ret));
    // });
    res.subscribe(retRes => {
      debugger;
      console.log("hfhfhfhh" + JSON.stringify(retRes));
    });
    console.log("jhfhkjdsfkdskh");
  }
}
