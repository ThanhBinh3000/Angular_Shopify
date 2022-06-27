import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BillDetail} from "../../model/bill-detail";
const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class BillDetailService {
  constructor(private http: HttpClient) {
  }

  getAllBillDetail(): Observable<BillDetail[]> {
    return this.http.get<BillDetail[]>(API_URL + '/bill-details');
  }

  createBillDetail(billDetail: BillDetail): Observable<BillDetail> {
    return this.http.post<BillDetail>(API_URL + '/bill-details', billDetail);
  }

  getBillDetail(id: number): Observable<BillDetail> {
    return this.http.get<BillDetail>(API_URL + `/bill-details/${id}`)
  }

  updateBillDetail(id: number, billDetail: BillDetail): Observable<BillDetail> {
    return this.http.put<BillDetail>(API_URL + `/bill-details/${id}`, billDetail)
  }

  deleteBillDetail(id: number): Observable<BillDetail> {
    return this.http.delete<BillDetail>(API_URL + `/bill-details/${id}`);
  }
}
