import {Address } from './Address';

export class User {

  public id: number;
  public firstName: string;
  public lasName: string;
  public password: string;
  public email: string;
  public createdAt: Date;
  public lastAuthentificated: Date;
  public passwordLastChanged: Date;
  public phoneNumber: string;
  public confirmationToken: string;
  public address: Address;

}
