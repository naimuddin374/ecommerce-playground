import { action } from "easy-peasy"
import { toast } from "react-toastify"


const CartModel = {
   data: [],
   shippingFee: 50,
   create: action((state, payload) => {
      if (state.data.length !== 0) {
         let pdt = state.data.find(item => item._id === payload._id)

         if (pdt) {
            if (pdt.quantity === payload.quantity) {
               toast.warning('Product already add To cart')
               return;
            }
            pdt.quantity = payload.quantity
            toast.success('Quantity has been update succesfully')
            return;
         }
      }
      state.data.unshift(payload)
      toast.success('Product add to cart succesfully')
   }),
   delete: action((state, payload) => {
      let arr = state.data.filter(item => item._id !== payload)
      state.data = arr
      toast.success('Product has been delete succesfully')
   })
}

export default CartModel