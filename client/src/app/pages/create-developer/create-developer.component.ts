import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { take } from "rxjs/operators";
import { Router } from "@angular/router";
import { NotifierService } from "angular-notifier";
import { DevelopersService } from 'src/app/services/developers.service';
import { ICreateDeveloper } from 'src/app/constants/types';

@Component({
  selector: 'app-create-developer',
  templateUrl: './create-developer.component.html',
  styleUrls: ['./create-developer.component.scss']
})

export class CreateDeveloperComponent implements OnInit {

  createDeveloperForm: FormGroup | undefined;

  constructor(private readonly developersService: DevelopersService,
              private readonly router: Router,
              private readonly notifier: NotifierService) { }

  ngOnInit(): void {
    this.initForm();
  }

  public onSubmit() {
    const payload = this.createDeveloperForm?.value as ICreateDeveloper;
    this.developersService.createDeveloper(payload).pipe(
      take(1)
    ).subscribe(data => {
      this.notifier.notify('success', `${payload.name} created!`)
      this.router.navigate(['/developers'])
      console.log(data);
    })
  }


  private initForm() {
    this.createDeveloperForm = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      phoneNumber: new FormControl(null),
      location: new FormControl(null),
      profilePicture: new FormControl(null),
      prizePerHour: new FormControl(null),
      technology: new FormControl(null),
      description: new FormControl(null),
      yearsOfExperience: new FormControl(null),
      nativeLanguage: new FormControl(null),
      LinkedInProfileLink: new FormControl(null),
    })
  }
}
