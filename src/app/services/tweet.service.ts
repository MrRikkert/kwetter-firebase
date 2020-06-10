import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Tweet } from "../models/tweet";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class TweetService {
  constructor(
    private firestore: AngularFirestore,
    public authService: AuthService
  ) {}

  getTweets(): Observable<Tweet[]> {
    return this.firestore
      .collection<Tweet>("tweets", (ref) =>
        ref.orderBy("timestamp", "desc").limit(10)
      )
      .valueChanges();
  }

  addTweet(content: string) {
    let tweet: Tweet;
    this.authService.getCurrentUser().subscribe((user) => {
      tweet = {
        content,
        timestamp: new Date(),
        username: user.displayName,
        user_id: user.uid,
        photo_url: user.photoURL,
      };
      this.firestore.collection<Tweet>("tweets").add(tweet);
    });
  }
}
