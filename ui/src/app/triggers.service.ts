import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class TriggersService {
  getURL = 'https://www.google.com/';

  constructor(public http: HttpClient) { }
  test_get_api(){
    alert("yes");
  }
  // test_get_api() {
  //   return this.http.get(this.getURL);
  // }

}
