export default class UsersRespDTO{
    constructor(user){
        this.nombreCompleto=user.full_name
        this.identificacion  = user.dni
    }
}