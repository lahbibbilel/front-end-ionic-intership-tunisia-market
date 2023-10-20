import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

export interface Immob {
  title: string;
  description: string;
  id?: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor(private http: HttpClient) {}
  getAllImmobs() {
    return this.http.get<any[]>(
      'https://immoplus-e2dae-default-rtdb.firebaseio.com/Immob.json'
    );
  }

  addImmob(nImmob: any) {
    return this.http.post(
      'https://immoplus-e2dae-default-rtdb.firebaseio.com/Immob.json',
      nImmob
    );
  }
  deleteImmob(idDocument: any) {
    return this.http.delete(
      `https://immoplus-e2dae-default-rtdb.firebaseio.com/Immob/${idDocument}.json`
    );
  }
  updateImmob(newCheckedValue: any, idDocument: any) {
    return this.http.put(
      `https://immoplus-e2dae-default-rtdb.firebaseio.com/Immob/${idDocument}.json`,
      {
        checked: newCheckedValue,
      }
    );
  }
  getDataById(idDocument: string) {
    'https://immoplus-e2dae-default-rtdb.firebaseio.com/Immob.json';
    return this.http.get(
      `https://immoplus-e2dae-default-rtdb.firebaseio.com/Immob${idDocument}.json`
    );
  }
}
