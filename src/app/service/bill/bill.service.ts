import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bill} from "../../model/bill";
import {BillDetail} from "../../model/bill-detail";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class BillService {
  constructor(private http: HttpClient) {
  }

  getAllBill(): Observable<Bill[]> {
    return this.http.get<Bill[]>(API_URL + '/bills');
  }

  createBill(bill: Bill): Observable<Bill> {
    return this.http.post<Bill>(API_URL + '/bills', bill);
  }

  getBill(id: number): Observable<Bill> {
    return this.http.get<Bill>(API_URL + `/bills/${id}`)
  }

  updateBill(id: number, bill: Bill): Observable<Bill> {
    return this.http.put<Bill>(API_URL + `/bills/${id}`, bill)
  }

  deleteBill(id: number): Observable<Bill> {
    return this.http.delete<Bill>(API_URL + `/bills/${id}`);
  }

  getAllBillDetail(id: number): Observable<BillDetail[]> {
    return this.http.get<BillDetail[]>(API_URL + `/bills/${id}` + `/bill-details`)
  }
}
