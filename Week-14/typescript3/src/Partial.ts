interface User{
    id:string;
    name:string;
    email:string;
    password:string;
}

type UpdateProps = Pick<User, 'name' | 'email'>;

type UpdateUser = Partial<UpdateProps>;

function updateUser(user: UpdateUser) {
    //hit db
}
