import { Component, OnInit, Input } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/storage";
import { Tweet } from "src/app/models/tweet";

@Component({
  selector: "app-tweet",
  templateUrl: "./tweet.component.html",
  styleUrls: ["./tweet.component.scss"],
})
export class TweetComponent implements OnInit {
  @Input()
  tweet: Tweet;

  constructor(private storage: AngularFireStorage) {
    this.storage
      .ref("assets/default-user-icon.png")
      .getDownloadURL()
      .subscribe((url) => console.log(url));
  }

  ngOnInit() {}
}
