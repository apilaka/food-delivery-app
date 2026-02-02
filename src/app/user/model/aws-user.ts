import { AwsUserInterface } from "./aws-user-interface";

export class AwsUser implements AwsUserInterface  {
  [x: string]: any;

  userId!: number;
  userName!: string;
  userPassword!: string;
  address!: string;
  city!: string;

 
constructor();
  constructor(init: Partial<AwsUserInterface>);
  
  // single implementation
  constructor(init?: Partial<AwsUserInterface>) {
  Object.assign(this, init);
  } 



}
