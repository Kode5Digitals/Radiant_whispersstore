

const Dashboard = () => {
  return (

   <div className="">
   <div className="w-full p-4 bg-slate-600 h-full   text-center text-white text-lg">
        Dashboard 
    </div>


    <div className=" bg-white shadow-xl mx-auto p-3  h-full">

<table style={{ borderCollapse: 'collapse'  }} className="w-full text-[12px]">
        <thead>
          <tr>
            <th className="border" >ProductName</th>
            <th className="border">Price</th>
            <th className="border">Quantity</th>
            <th className="border">Date</th>

          </tr>
        </thead>
        <tbody>
          {/* {/* {products.map((product) => ( */}
            <tr>
              <td >{}</td>
              <td >{}</td>
              <td >{}</td>
            </tr>
          {/* ))} */} 
        </tbody>
      </table>



    </div>
   </div>
  )
}

export default Dashboard