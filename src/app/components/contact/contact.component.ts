import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export interface Contact {
  name: String;
  email: String;
  message: String;
  createdAt: String;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  inputForm: FormGroup;

  isSend = false;
  isSending = false;

  private contactCollection: AngularFirestoreCollection<Contact>;

  constructor(private afs: AngularFirestore, private fb: FormBuilder) {
    this.contactCollection = this.afs.collection<Contact>('contacts');
  }

  ngOnInit() {
    this.inputForm = this.fb.group({
      'email': ['', [
          Validators.required,
          Validators.email
        ]
      ],
      'name': ['', [ Validators.required ]],
      'message': ['', [ Validators.required ]],
    });
  }

  get email() { return this.inputForm.get('email'); }
  get message() { return this.inputForm.get('message'); }
  get name() { return this.inputForm.get('name'); }

  next() {
    this.isSend = true;
  }

  addContact() {
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;
    const createdAt = new Date().toLocaleString();
    const contact: Contact = {name, email, message, createdAt};

    this.contactCollection.add(contact).then( () => {
      alert('성공적으로 전송하였습니다. 빠른 시일 내에 답변 드리겠습니다.');
      this.isSend = false;
      this.isSending = false;
    }).catch( err => {
      console.log(err);
    });
    this.inputForm.reset();
    this.isSending = true;
  }

  cancel() {
    this.isSend = false;
  }

}
