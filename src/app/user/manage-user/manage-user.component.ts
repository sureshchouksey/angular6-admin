import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService} from '../../services/user.service';
import { Router } from '@angular/router';

export class SearchUser {
  firstName:string;
  area:string;
  role:string;
}

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  users:Array<any>;
  isLoading = true;
  searchForm:FormGroup;
  username = new FormControl('');
  area = new FormControl('');
  role = new FormControl('');
  constructor(private formBuilder:FormBuilder,private userService:UserService, private router: Router,) { }

  ngOnInit() {
    this.getUsers();
    this.searchForm = this.formBuilder.group({
          username :this.username,                                    
          area:this.area,            
          role:this.role
      })
  }

  addUser(){
    this.router.navigate(['createUser'])
  }

  search(){
    let searchUser= new SearchUser();
    if(this.searchForm.value.username)
      searchUser.firstName =this.searchForm.value.username;
    if(this.searchForm.value.area)
      searchUser.area =this.searchForm.value.area;
    if(this.searchForm.value.role)
     searchUser.role =this.searchForm.value.role;
    console.log(searchUser);
    this.userService.searchUser(searchUser)
    	.subscribe(users => {
    		this.users = users
    		console.log(this.users);
    	});
  }

  getUsers(){
  	 this.userService.getAllUsers()
    	.subscribe(users => {
    		this.users = users
    		console.log(this.users);
    	},
      error => console.log(error),
      () => this.isLoading = false);
  }

}
