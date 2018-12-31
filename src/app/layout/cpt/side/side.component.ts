import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-side",
  templateUrl: "./side.component.html",
  styleUrls: ["./side.component.scss"]
})
export class SideComponent implements OnInit {
  menuList$: Array<any> = [];

  constructor() {}

  ngOnInit() {}
}
