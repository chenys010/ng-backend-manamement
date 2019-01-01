import { Injectable, Inject } from "@angular/core";

import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AppHttpInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req);
  }
  // intercept(
  //   req: HttpRequest<any>,
  //   next: HttpHandler
  // ): Observable<HttpEvent<any>> {
  //   const apiReq = req.clone({ url: req.url, withCredentials: true });
  //   return next.handle(apiReq).pipe(
  //     tap(
  //       event => {
  //         console.log(JSON.stringify(event), 8888);
  //         if (event instanceof HttpResponse) {
  //           if (!!event) {
  //             event.headers.set("Content-Type", "applcation/json");
  //           }
  //           const setCookie = event.headers.get("set-cookie");
  //           if (setCookie) {
  //             const c = setCookie.split(";").map((a: any) => {
  //               if (/Path\=\/backend\//.test(a)) {
  //                 return " Path=/";
  //               }
  //               return a;
  //             });
  //             event.headers.set("set-cookie", c.join(";"));
  //             // this.cookieService.put("set-cookie", c.join(";"));
  //           }
  //         }
  //       },
  //       error => {
  //         console.log("AppHttpInterceptorService ERROR", error);
  //       }
  //     )
  //   );
  // }
}
