export class RegistrationForm {
    constructor(
        public organizationName: string = null,
        public username: string = null, 
        public password: string = null,
        public firstName: string = null,
        public lastName: string = null) {
    }
}