export interface User{
    firstName : string;
        lastName: string;
        age?: number;
        address?: {
            street: String;
            city: string;
        }
}