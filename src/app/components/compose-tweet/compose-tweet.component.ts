import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TweetService } from "src/app/services/tweet.service";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-compose-tweet",
  templateUrl: "./compose-tweet.component.html",
  styleUrls: ["./compose-tweet.component.scss"],
})
export class ComposeTweetComponent implements OnInit {
  tweetForm = new FormGroup({
    tweet: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(140),
    ]),
  });

  constructor(
    private tweetService: TweetService,
    public dialogRef: MatDialogRef<ComposeTweetComponent>
  ) {}

  ngOnInit() {}

  sendTweet() {
    const tweet = this.tweetForm.get("tweet").value;
    this.tweetService.addTweet(tweet);
    this.dialogRef.close(tweet);
  }
}
