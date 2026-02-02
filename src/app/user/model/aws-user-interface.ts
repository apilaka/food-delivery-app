import { signal, Signal } from "@angular/core";
import { map, Observable } from "rxjs";

export interface AwsUserInterface {

   userId: number;
  userName: string;
  userPassword: string;
  address: string;
  city: string;

}
const awsuser: AwsUserInterface = {
  userId: 111,
  userName: 'Sheela Patel stomach',
  userPassword: 'saibaba',
  address: '3900',
  city: 'Glen Allen'
};

const normalizedUsers = (users: Observable<AwsUserInterface[]>):Observable<string[]>=>{
  return users.pipe(map(users=>users.map(user=>user.userName)));
  console.log(awsuser);
}