export class User {
    constructor(public email: string,
                public password: string,
                public firstName?: string,
                public licenseNumber: string,
                public lastName?: string) {}
}