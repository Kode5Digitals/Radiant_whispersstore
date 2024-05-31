import { useContext } from "react"
import Cartcontext from "../cartcontext"
import { formatAmount, formatPrice } from "../utils/utils"
import { TbCurrencyNaira } from "react-icons/tb"


const Dashboard = () => {
  const {producthistory}=useContext(Cartcontext)

  console.log(producthistory)
  return (

   <div className="">
   <div className="w-full bg-slate-600 h-full   text-center text-white text-lg">
        Dashboard 
    </div>


    <div className=" bg-white w-full shadow-xl mx-auto p-3  h-full">
<table style={{ borderCollapse: 'collapse'  }} className="w-full h-full text-[12px] ">
        <thead>
          <tr>
            <th className="border " >ProductName</th>
            <th className="border">Price</th>
            <th className="border">Quantity</th>

          </tr>
        </thead >

        <tbody >
         {producthistory?.products?.map((product,index) => (
            <tr key={index} className="overflow-y-auto max-h-80">
              <td  className="border p-3">{product.name}</td>
              <td  className="border p-3 flex items-center">
              <TbCurrencyNaira /> 
                {formatAmount(Number(product.price))}</td>
              <td  className="border p-3">{product.quantity}</td>
            </tr>
         ))}
        </tbody>

      </table>



    </div>
    <div className="flex justify-end text-white">
    <p>
  {producthistory.date}
</p>
    </div>
   </div>
  )
}

export default Dashboard