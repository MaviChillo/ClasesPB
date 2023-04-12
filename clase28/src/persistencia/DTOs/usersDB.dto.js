export default class UsersDBDTO{
    constructor(user){
        this.full_name=`${user.name} ${user.lastName}`
        this.first_name = user.name
        this.last_name = user.lastName
        this.email = user.email
        this.password = user.password
        this.dni = user.dni
    }
}