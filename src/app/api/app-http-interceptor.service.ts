import { Injectable, Inject } from "@angular/core";
import { CookieService } from "angular2-cookie";
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
  constructor(@Inject("CookieService") private cookieService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiReq = req.clone({ url: req.url, withCredentials: true });
    return next.handle(apiReq).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            if (!!event) {
              event.headers.set("Content-Type", "applcation/json");
            }
            const setCookie = event.headers.get("set-cookie");
            if (setCookie) {
              const c = setCookie.split(";").map((a: any) => {
                if (/Path\=\/backend\//.test(a)) {
                  return " Path=/";
                }
                return a;
              });
              event.headers.set("set-cookie", c.join(";"));
              // this.cookieService.put("set-cookie", c.join(";"));
            }
          }
        },
        error => {
          console.log("AppHttpInterceptorService ERROR", error);
        }
      )
    );
  }
}
