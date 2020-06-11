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
  defaultPhotoURL =
    "https://firebasestorage.googleapis.com/v0/b/kwetter-flutter.appspot.com/o/assets%2Fdefault-user-icon.png?alt=media&token=eecaee30-967d-4075-9840-2e89c18f3a84";

  constructor(private storage: AngularFireStorage) {
    this.storage
      .ref("assets/default-user-icon.png")
      .getDownloadURL()
      .subscribe((url) => console.log(url));
  }

  ngOnInit() {}
}
