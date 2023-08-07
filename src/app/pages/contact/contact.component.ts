import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

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
    this.http.post('http://localhost:8080/send_email', formData).subscribe({
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
