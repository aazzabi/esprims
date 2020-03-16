import { Component, OnInit, ViewChild } from "@angular/core";
import { ImageUploadComponent } from "src/app/SharedComponent/image-upload/image-upload.component";
import { Event } from "src/app/models/Event";
import { AngularFireStorage } from "@angular/fire/storage";
import { ImageUploadServicService } from "src/app/SharedComponent/image-upload/image-upload-servic.service";
import { Router } from "@angular/router";
import { finalize } from "rxjs/operators";
import { EventServices } from "src/app/services/EventServices";

@Component({
  selector: "app-add-event",
  templateUrl: "./add-event.component.html",
  styleUrls: ["./add-event.component.scss"]
})
export class AddEventComponent implements OnInit {
  @ViewChild(ImageUploadComponent)
  private testComponent: ImageUploadComponent;
  public formsubmitted: boolean;
  public picturemap: string;

  event: Event = {
    id: "",
    title: "",
    date_event: null,
    description: "",
    picture: ""
  };
  id;
  constructor(
    private eventService: EventServices,
    private storage: AngularFireStorage,
    public serviceimage: ImageUploadServicService,
    private router: Router
  ) {}

  ngOnInit() {}

  onclickenvoyer(e) {
    var pictureinfo: any[] = this.testComponent.handleSubmit(e);
    console.log(pictureinfo);
    var filePath = `${pictureinfo["name"]
      .split(".")
      .slice(0, -1)
      .join(".")}_${new Date().getTime()}`;
    const fileRef = this.storage.ref(filePath);
    this.storage
      .upload(filePath, pictureinfo)
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            console.log(url);
            this.picturemap = url;
            console.log(this.picturemap);
            this.event.picture = this.picturemap;
            console.log("event to add ", this.event)
            this.eventService.addEvent(this.event).subscribe(response=> 
              console.log(response))



         
          });
        })
      )
      .subscribe();

  }
}
