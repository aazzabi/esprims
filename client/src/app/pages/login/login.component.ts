import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { UserServices } from "src/app/services/UserServices";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, OnDestroy {
  model: any = {};
  public data: any = [];
  errorMessage: string;

  constructor(private userServices: UserServices, private router: Router) {
    localStorage["id"] = null;
    localStorage["name"] = null;
    localStorage["avatar"] = null;
    localStorage["role"] = null;
    localStorage["token"] = null;
  }
  ngOnInit() {
    console.log("now the user is ", localStorage.getItem("token"));
  }

  ngOnDestroy() {}

  Login() {
    this.userServices.auth(this.model.email, this.model.password).subscribe(
      (response: any) => {
        if (response.token) {
          localStorage["id"] = response.user._id;
          localStorage["name"] = response.user.name;
          localStorage["avatar"] = response.user.avatar;
          localStorage["role"] = response.user.role;
          localStorage["token"] = response.user.token;
          if (response.user.role == "ADMIN") this.router.navigate(["/dash"]);
          if (response.user.role == "CLIENT") this.router.navigate(["/"]);
        }
      },
      response => console.log(response.statusText)
    );
  }
}
