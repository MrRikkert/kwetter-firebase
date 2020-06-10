import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { TweetService } from "src/app/services/tweet.service";
import { Observable } from "rxjs";
import { Tweet } from "src/app/models/tweet";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  tweets: Observable<Tweet[]>;

  constructor(private tweetService: TweetService) {}

  ngOnInit() {
    this.tweets = this.tweetService.getTweets();
  }

  openTweetDialog() {
    console.log("opened");
  }
}
