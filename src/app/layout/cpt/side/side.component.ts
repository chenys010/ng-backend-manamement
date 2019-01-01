import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-side",
  templateUrl: "./side.component.html",
  styleUrls: ["./side.component.scss"]
})
export class SideComponent implements OnInit {
  sub$ = {};

  menuList$: Array<any> = [];

  constructor() {}

  getMenuList() {
    return [
      {
        menuName: "表格",
        path: "",
        children: [
          { menuName: "普通表格", path: "table/commonTable", children: [] },
          { menuName: "固定列表格", path: "table/fixColumnTable", children: [] }
        ]
      }
    ];
  }

  ngOnInit() {
    this.getMenuList();
  }
}
