import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {User} from '../../model/user';
import {Observable} from 'rxjs';
import {Notification} from '../../model/notification';
import {CustomerInfo} from '../../model/customer-info';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(API_URL + '/register', user);
  }

  findAllNotification(id: number): Observable<Notification[]> {
    return this.http.get<Notification[]>(API_URL + `/users/${id}/notifications`);
  }

  findAllNotificationDateDesc(id: number): Observable<Notification[]> {
    return this.http.get<Notification[]>(API_URL + `/users/${id}/notifications-desc`);
  }

  getAllUser(role?: string): Observable<any> {
    if (role == undefined) {
      return this.http.get<any>(API_URL + '/users');
    }
    return this.http.get<any>(API_URL + `/users?role=${role}`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(API_URL + `/users/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(API_URL + '/users', user);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(API_URL + `/users/${id}`, user);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(API_URL + `/users/${id}`);
  }

  getAllAddressByUser(id: number): Observable<CustomerInfo[]> {
    return this.http.get<CustomerInfo[]>(API_URL + `/users/${id}/addresses`);
  }
}
