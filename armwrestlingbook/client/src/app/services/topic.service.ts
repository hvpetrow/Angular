import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, updateDoc, where } from 'firebase/firestore';
import { getAll } from 'firebase/remote-config';
import { Observable } from 'rxjs';
import { Topic } from '../interfaces/topic';
import { AngularFireObject, AngularFireDatabase } from '@angular/fire/compat/database'

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  topicRef = collection(this.firestore, 'topics');
  commentRef = collection(this.firestore, 'comments');

  constructor(private firestore: Firestore) { }

  addTopic(newTopic: Topic) {
    return addDoc(this.topicRef, newTopic);
  }

  getAllTopics(): Observable<Topic[]> {
    return collectionData(this.topicRef, { idField: 'id' }) as Observable<Topic[]>;
  }

  getOneTopic(topicId: string) {
    return getDoc(doc(this.firestore, `topics/${topicId}`));
  }

  deleteTopic(id: string) {
    return deleteDoc(doc(this.firestore, `topics/${id}`));
  }

  updateTopic(updatedTopic: any, oldTopicId: string) {
    return updateDoc(doc(this.firestore, `topics/${oldTopicId}`), updatedTopic);
  }

  addComment(comment: any) {
    const res = addDoc(this.commentRef, comment);
    return res;
  }

  async getCommentsByTopicId(topicId: string) {
    const result = {} as any;
    const q = query(this.commentRef, where("topicId", "==", topicId), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const id = doc.id;
      result[id] = doc.data();
    });

    return result;
  }

}