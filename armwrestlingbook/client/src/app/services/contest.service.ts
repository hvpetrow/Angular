import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, getDocs } from 'firebase/firestore';
import { getAll } from 'firebase/remote-config';
import { Observable } from 'rxjs';
import { Contest } from '../interfaces/contest';
// import { AngularFirestore } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class ContestService {
  constructor(private firestore: Firestore) { }
  contestRef = collection(this.firestore, 'contests');

  addContest(newContest: Contest) {
    return addDoc(this.contestRef, newContest);
    // return this.afs.collection('contests').add(newContest);
  }

  getAllContests(): Observable<Contest[]> {
    return collectionData(this.contestRef) as Observable<Contest[]>;
  }

  // deleteContest(contest: Contest) {
  //   return this.db.doc('/contests/' + contest.id).delete();
  // }

  // updateContest(newContest: Contest, contestId: string) {
  //   return this.db.doc('/contests/' + contestId).update(newContest)

  // }

}