import businessService from "../services/business.service.js";

class BusinessController {
    findBusiness = async(req,res)=>{
        const {businessId} = req.params
        try {
            const business = await businessService.findBusiness(businessId)
            res.json({message: 'business found', business})
        } catch (error) {
            res.json({message: 'business not found', error})
        }
    }


    createBusiness = async(res,res)=>{
        const obj = req.body
        try {
            const newBusiness = await businessService.createBusiness(obj)
            res.json({message: 'business created', business:newBusiness})
        } catch (error) {
            res.json({message: 'error', error})
        }
    }
}

export default new BusinessController()
