import  { useEffect, useState } from 'react';
import httpAuth from '../utils/https';
import { Link } from 'react-router-dom';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await httpAuth.get(`/api/products/allProducts`)
        setProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num); // Format number with commas
  }
  return (
    <div className="container mx-auto p-4">
        <div className='flex justify-between items-center'>
      <h1 className="text-2xl font-bold mb-4">Products List</h1>
           
    <Link to={"/adminHome"}><button className='border px-3 py-1'>Back</button></Link> 
        </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
          <th className="py-2 px-4 border-b border">No.</th>
            <th className="py-2 px-4 border-b border">Product Name</th>
            <th className="py-2 px-4 border-b border">Product ID</th>
            <th className="py-2 px-4 border-b">No. of Products Available</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product,index) => (
              <tr key={product._id}
              className={product.noofitem <= 0 ? 'bg-red-100 text-red-500' : ''}
              >
                  <td className="py-2 px-4 border-b border">{index + 1}</td>
                <td className="py-2 px-4 border-b border">{product?.name}</td>
                <td className="py-2 px-4 border-b border">{product?._id}</td>
                <td className={`py-2 px-4 border-b ${product.noofitem <= 0 ? 'text-red-500' : ''}`}>{formatNumber(product?.noofitem)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center py-4">
                No products available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
