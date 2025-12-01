export class AwsUserDTO {

  userId!: number;
  userName!: string;
  userPassword!: string;
  address!: string;
  city!: string;

  constructor(
    userId: number,
    userName: string,
    userPassword: string,
    address: string,
    city: string
  ) {
    this.userId = userId;
    this.userName = userName;
    this.userPassword = userPassword;
    this.address = address;
    this.city = city;
  }
}
