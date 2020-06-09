import { Timestamp } from "@firebase/firestore-types";

export interface Tweet {
  content: string;
  timestamp: Timestamp;
  username: string;
  user_id: string;
  photo_url: string;
}
