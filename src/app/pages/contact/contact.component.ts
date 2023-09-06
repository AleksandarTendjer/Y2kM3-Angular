import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.prod'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
name: string = '';
email: string = '';
message: string = '';
notificationMessage: string = '';  
notificationType: string = '';    
showNotificationFlag: boolean = false;  

constructor(private http: HttpClient) { }

submitForm() {
    const formData = {
        name: this.name,
        email: this.email,
        message: this.message
    };
    console.log(formData);
    this.http.post(environment.apiUrl, formData).subscribe({
      next:(response:any)=>{           
       this.showNotification(response.message, "success");
      },
      error:(error:any)=>{ 
        this.showNotification(error.message, "error");}
      });
}
 showNotification(message: string, type: string): void {
    this.notificationMessage = message;
    this.notificationType = type;
    this.showNotificationFlag = true;

    setTimeout(() => {
      this.showNotificationFlag = false;
    }, 3000);
  }

}
