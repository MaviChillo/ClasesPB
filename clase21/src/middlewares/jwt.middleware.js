import jwt from 'jsonwebtoken'

export function jwtValidation(req, res, next){
    const authHeader = req.get('Authorization')
    console.log(authHeader)
    const token = authHeader.split(' ')[1]
    const tokenJSON = JSON.parse(token)
    console.log('...',tokenJSON)
    const isValid = jwt.verify(tokenJSON, "secretJWT")
    console.log(isValid)
    if(isValid){
        console.log(isValid);
        req.user = isValid.user
        next()
    }else{
        res.json({message: 'error'})
    }
}