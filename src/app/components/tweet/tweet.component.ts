import { Component, OnInit } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/storage";

@Component({
  selector: "app-tweet",
  templateUrl: "./tweet.component.html",
  styleUrls: ["./tweet.component.scss"],
})
export class TweetComponent implements OnInit {
  constructor(private storage: AngularFireStorage) {
    console.log(
      this.storage
        .ref("assets/default-user-icon.png")
        .getDownloadURL()
        .subscribe((url) => console.log(url))
    );
  }

  ngOnInit() {}
}
