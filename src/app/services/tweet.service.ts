import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Tweet } from "../models/tweet";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TweetService {
  constructor(private firestore: AngularFirestore) {
    this.firestore
      .collection<Tweet>("tweets", (ref) => ref.orderBy("timestamp").limit(10))
      .valueChanges();
  }

  getTweets(): Observable<Tweet[]> {
    return this.firestore
      .collection<Tweet>("tweets", (ref) =>
        ref.orderBy("timestamp", "desc").limit(10)
      )
      .valueChanges();
  }
}
