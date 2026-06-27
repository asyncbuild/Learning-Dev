interface User {
    id:number;
    name:String;
    email:String;
    createdAt:Date;
}

type UserProfile = Pick<User, 'id' | 'name' | 'email'>;
const displayUserProfile = (user: UserProfile) => {
    console.log(`User ID: ${user.id}`);
    console.log(`User Name: ${user.name}`);
    console.log(`User Email: ${user.email}`);
}