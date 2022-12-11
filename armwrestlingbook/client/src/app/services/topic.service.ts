import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { getAll } from 'firebase/remote-config';
import { Observable } from 'rxjs';
import { Topic } from '../interfaces/topic';
// import { AngularFirestore } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  topicRef = collection(this.firestore, 'topics');

  constructor(private firestore: Firestore) { }

  addTopic(newTopic: Topic) {
    return addDoc(this.topicRef, newTopic);
    // return this.afs.collection('topics').add(newtopic);
  }

  getAllTopics(): Observable<Topic[]> {
    return collectionData(this.topicRef, { idField: 'id' }) as Observable<Topic[]>;
  }

  deleteTopic(id: string) {
    return deleteDoc(doc(this.firestore, `topics/${id}`));
  }

  updateTopic(updatedTopic: any, oldTopicId: string) {
    return updateDoc(doc(this.firestore, `topics/${oldTopicId}`), updatedTopic);
  }

  // deletetopic(topic: topic) {
  //   return this.db.doc('/topics/' + topic.id).delete();
  // }

  // updatetopic(newtopic: topic, topicId: string) {
  //   return this.db.doc('/topics/' + topicId).update(newtopic)

  // }

}