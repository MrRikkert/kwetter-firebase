import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { TweetService } from "src/app/services/tweet.service";
import { Observable } from "rxjs";
import { Tweet } from "src/app/models/tweet";
import { MatDialog } from "@angular/material";
import { ComposeTweetComponent } from "../compose-tweet/compose-tweet.component";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  tweets: Observable<Tweet[]>;
  public currentUser: Observable<firebase.User> = this.auth.user;

  constructor(
    private tweetService: TweetService,
    private dialog: MatDialog,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.tweets = this.tweetService.getTweets();
  }

  openTweetDialog() {
    this.dialog
      .open(ComposeTweetComponent)
      .afterClosed()
      .subscribe((result) => {
        console.log(result);
      });
  }
}
