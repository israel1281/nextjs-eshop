import connectDB from '../../../utils/connectDB'
import Products from '../../../models/productModel'
import auth from '../../../middleware/auth'

connectDB()

export default async (req, res) => {
  switch(req.method){
    case "GET":
    await getProducts(req, res)
    break
  }
}
