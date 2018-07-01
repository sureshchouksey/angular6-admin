import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User} from '../../model/user';
import { UserService} from '../../services/user.service';
import { ToastComponent } from '../../shared/toast/toast.component';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

    userRegisterForm:FormGroup;

    firstName = new FormControl('',[Validators.required,
                                Validators.minLength(2),
                                Validators.maxLength(30)]
                                );
    lastName = new FormControl('',[Validators.required,
                                Validators.minLength(2),
                                Validators.maxLength(30)]
                                );
    phoneNumber = new FormControl('', [Validators.required]);
    email = new FormControl('', []);
    password = new FormControl('',[]);

    flatNoBuidlingName = new FormControl('',[Validators.required]);
    streetName = new FormControl('',[Validators.required]);
    area = new FormControl('',[Validators.required]);
    landmark = new FormControl('',[Validators.required]);

    pincode = new FormControl('',[Validators.required]);
    city = new FormControl('',[Validators.required]);
    state = new FormControl('',[Validators.required]);
    role = new FormControl('',[Validators.required]);
   
    
    constructor(private formBuilder:FormBuilder,
                private userService:UserService,
                public toast: ToastComponent){}
    ngOnInit(){
        this.userRegisterForm = this.formBuilder.group({
            username :this.firstName,
            lastName:this.lastName,
            phoneNumber:this.phoneNumber,
            email:this.email,
            password:this.password,
            flatNoBuidlingName:this.flatNoBuidlingName,
            streetName:this.streetName,
            area:this.area,
            landmark:this.landmark,
            pincode:this.pincode,
            city:this.city,
            state:this.state,
            role:this.role
        })
    }

    setClassFirstName() {
        return { 'has-danger': !this.firstName.pristine && !this.firstName.valid };
    }
    setClassLastName() {
        return { 'has-danger': !this.lastName.pristine && !this.lastName.valid };
    }
    setClassPhoneNumber() {
        return { 'has-danger': !this.phoneNumber.pristine && !this.phoneNumber.valid };
    }
    setClassPassword() {
        return { 'has-danger': !this.password.pristine && !this.password.valid };
    }
    
    setClassFlat() {
        return { 'has-danger': !this.flatNoBuidlingName.pristine && !this.flatNoBuidlingName.valid };
    }
    setClassStreet() {
        return { 'has-danger': !this.streetName.pristine && !this.streetName.valid };
    }
     setClassArea() {
        return { 'has-danger': !this.area.pristine && !this.area.valid };
    }
     setClassPincode() {
        return { 'has-danger': !this.pincode.pristine && !this.pincode.valid };
    }
    register() {
        console.log('register');
         this.userService.register(this.userRegisterForm.value)
         .subscribe(devices => {
          this.toast.setMessage('you successfully registered!', 'success');  
          console.log(devices); 
         },
         error => this.toast.setMessage('Registration Fail', 'danger'));
        
     }

}
