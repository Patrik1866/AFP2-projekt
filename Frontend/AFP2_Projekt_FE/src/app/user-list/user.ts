export class User {
    id: number;
    name: string;
    password: string;
    email: string;
    job: string;
    phone: string;
    picture: string;
    userCode: string;
  
    constructor(id: number, name: string, password: string, email: string, job: string, phone: string, picture: string, userCode: string) {
      this.id = id;
      this.name = name;
      this.password = password;
      this.email = email;
      this.job = job;
      this.phone = phone;
      this.picture = picture;
      this.userCode = userCode;
    }
  }
  