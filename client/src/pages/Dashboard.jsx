import { useContext } from "react"
import Cartcontext from "../cartcontext"
import { formatAmount} from "../utils/utils"
import { TbCurrencyNaira } from "react-icons/tb"


const Dashboard = () => {
  const {producthistory}=useContext(Cartcontext)

  console.log(producthistory)
  return (

   <div className="">
   <div className="w-full bg-[#676464] h-full   text-center text-white text-lg">
      Products History
    </div>
    <div className="flex justify-end  text-[12px] mt-1  pr-12">
      <p>
      {producthistory.firstname}
      </p>
    <p>
  {producthistory.date}
</p>
    </div>

    <div className="bg-white w-full shadow-xl mx-auto p-3  h-full  text-[12px] ">
<table style={{ borderCollapse: 'collapse'  }} className="w-full h-full text-[12px]  table-fixed">
        <thead>
          <tr>
            <th className="border w-3/4" >ProductName</th>
            <th className="border w">Price</th>
            <th className="border">Quatity</th>
          </tr>
        </thead >
        </table>
        <div className="overflow-y-auto max-h-64">
<table className="w-full table-fixed">
        <tbody >
         {producthistory?.products?.map((product,index) => (
            <tr key={index} className="overflow-y-auto max-h-80">
              <td  className="border p-3 w-3/4">{product.name}</td>
              <td  className="border p-3  ">
              <span className="flex items-center">
              <TbCurrencyNaira /> 
                {formatAmount(Number(product.price))}
              </span>
                </td>
              <td  className="border p-3">{product.quantity}</td>
            </tr>
         ))}
        </tbody>
        </table>
    </div>
    </div>
   
   </div>
  )
}

export default Dashboard