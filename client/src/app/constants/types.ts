
export interface IRegisterUserRequest{
    name: string,
    email: string,
    password: string
}

export interface IRegisterUserResponse{
    user: any;
    name: string,
    email: string,
    password: string,
    '__v': number,
    '_id': string;
}

export interface IUser {
    age: number;
    email: string;
    name: string;
    '__v': number;
    '_id': string;
    
  }

  export interface IUserMetadataResponse {
  user: IUser;
}

export interface IDeveloper {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
    location: string;
    profilePicture: string;
    prizePerHour: number;
    technology: string;
    description: string;
    yearsOfExperience: string;
    nativeLanguage: string;
    LinkedInProfileLink: string;
    hired: boolean;
  }
  
  export interface ICreateDeveloper {
    name: string;
    email: string;
    phoneNumber: string;
    location: string;
    profilePicture: string;
    prizePerHour: string;
    technology: string;
    description: string;
    yearsOfExperience: string;
    nativeLanguage: string;
    LinkedInProfileLink: string;
  }
 

//   name: {
//     type: String,
//     required: true
// },
// email: {
//     type: String,
//     required: true
// },
// phoneNumber: {
//     type: String,
//     required: true
// },
// location: {
//     type: String,
//     required: true
// },
// profilePicture: {
//     type: String,
//     required: false
// },
// pricePerHour:{
//     type: Decimal128,
//     required: true
// },
// technology:{
//     type: String,
//     required: true
// },
// description:{
//     type: String,
//     required: false
// },
// yearsOfExperience: {
//     type: String,
//     required: true
// },
// nativeLanguage: {
//     type: String,
//     required: true
// },
// LinkedInProfileLink: {
//     type: String,
//     required: false
// },
// hired:{
//     type: Boolean,
//     default: false
// },