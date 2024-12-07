// import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
// import myContext from '../../context/data/myContext';

// function ProductTable() {
//     const context = useContext(myContext);
//     const { allProducts, deleteProduct, ediProducthandle, search, setSearch } = context;

//     const allProductFilter = allProducts.filter((obj) => obj.title.toLowerCase().includes(search));
//     return (
//         <div>
//             <div className=' flex justify-center items-center h-screen'>
//                 <div className=" container mx-auto px-4 max-w-7xl">
//                     <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
//                         <div className=" bg-[#2f3640] w-[50.1em] lg:w-full flex items-center justify-between p-2">
//                             <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className=' py-1.5 rounded-md px-2 outline-none shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] text-white bg-gray-600 placeholder-gray-300' placeholder='Search here' />
//                             <div className="flex items-center space-x-2">
//                                 {/* <img className='w-9' src="/img/react.png" alt="" /> */}
//                                 <h1 className='text-white text-2xl font-semibold'>E-Commerce Dashboard CRUD </h1>
//                             </div>
//                             <Link to={'/addproduct'}> 
//                                 <button className=' bg-gray-600 shadow-md px-6 py-1.5 rounded-md font-bold text-white'>Add Product</button>
//                             </Link>
//                         </div>

//                         <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
//                             <thead className="text-xs text-gray-100 uppercase bg-[#353b48] ">
//                                 <tr>
//                                     <th scope="col" className="px-6 py-3">
//                                         S.No.
//                                     </th>
//                                     <th scope="col" className="px-6 py-3">
//                                         Product Image
//                                     </th>
//                                     <th scope="col" className="px-6 py-3">
//                                         Product name
//                                     </th>
//                                     <th scope="col" className="px-6 py-3">
//                                         Price
//                                     </th>
//                                     <th scope="col" className="px-6 py-3">
//                                         Category
//                                     </th>
//                                     <th scope="col" className="px-6 py-3">
//                                         Date
//                                     </th>

//                                     <th scope="col" className="px-6 py-3">
//                                         Action
//                                     </th>
//                                     <th scope="col" className="px-6 py-3">
//                                         Action
//                                     </th>
//                                 </tr>
//                             </thead>
//                             {allProductFilter.length > 0 ?
//                                 allProductFilter.map((item, index) => {
//                                     const { title, price, imageUrl, category, date } = item;
//                                     return (
//                                         <tbody key={index}>
//                                             <tr className="bg-gray-700 border-b border-gray-500 text-white ">
//                                                 <td className="px-6 py-4">{index + 1}.</td>
//                                                 <td className="px-6 py-4">
//                                                     <img className='w-8' src={imageUrl} alt="" />
//                                                 </td>
//                                                 <td className="px-6 py-4">{title}</td>
//                                                 <td className="px-6 py-4">₹ {price}</td>
//                                                 <td className="px-6 py-4">{category}</td>
//                                                 <td className="px-6 py-4">{date}</td>
//                                                 <td className="px-6 py-4">
//                                                     <a
//                                                         onClick={() => deleteProduct(item)}
//                                                         className="font-medium bg-red-300 px-4 rounded-lg py-1 text-black cursor-pointer  "
//                                                     >
//                                                         Del
//                                                     </a>
//                                                 </td>
//                                                 <td className="px-6 py-4">
//                                                     <Link to={'/updateproduct'}
//                                                         onClick={() => ediProducthandle(item)}
//                                                         className="font-medium bg-green-300 px-4 rounded-lg py-1 text-black
//                                                     cursor-pointer"
//                                                     >
//                                                         Edit
//                                                     </Link>
//                                                 </td>
//                                             </tr>
//                                         </tbody>
//                                     )
//                                 }) :
//                                 <h1 className=" font-bold text-white relative left-[260%]" > 😂 Product Not Found 🤪</h1>}
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ProductTable






// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import myContext from '../../context/data/myContext';

// function ProductTable() {
//     const context = useContext(myContext);
//     const { allProducts, deleteProduct, editProductHandle, search, setSearch } = context;

//     const allProductFilter = allProducts.filter((obj) =>
//         obj.title.toLowerCase().includes(search.toLowerCase())
//     );

//     return (
//         <div>
//             <div className="flex justify-center items-center h-screen">
//                 <div className="container mx-auto px-4 max-w-7xl">
//                     <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
//                         <div className="bg-[#2f3640] w-full flex items-center justify-between p-2">
//                             <input
//                                 value={search}
//                                 onChange={(e) => setSearch(e.target.value)}
//                                 type="text"
//                                 className="py-1.5 rounded-md px-2 outline-none shadow-inset text-white bg-gray-600 placeholder-gray-300"
//                                 placeholder="Search here"
//                             />
//                             <h1 className="text-white text-2xl font-semibold">E-Commerce Dashboard CRUD</h1>
//                             <Link to="/addproduct">
//                                 <button className="bg-gray-600 shadow-md px-6 py-1.5 rounded-md font-bold text-white">
//                                     Add Product
//                                 </button>
//                             </Link>
//                         </div>

//                         <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//                             <thead className="text-xs text-gray-100 uppercase bg-[#353b48]">
//                                 <tr>
//                                     <th className="px-6 py-3">S.No.</th>
//                                     <th className="px-6 py-3">Product Image</th>
//                                     <th className="px-6 py-3">Product Name</th>
//                                     <th className="px-6 py-3">Price</th>
//                                     <th className="px-6 py-3">Category</th>
//                                     <th className="px-6 py-3">Date</th>
//                                     <th className="px-6 py-3">Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {allProductFilter.length > 0 ? (
//                                     allProductFilter.map((item, index) => {
//                                         const { title, price, imageUrl, category, date } = item;
//                                         return (
//                                             <tr key={index} className="bg-gray-700 border-b border-gray-500 text-white">
//                                                 <td className="px-6 py-4">{index + 1}.</td>
//                                                 <td className="px-6 py-4">
//                                                     <img className="w-8" src={imageUrl} alt="" />
//                                                 </td>
//                                                 <td className="px-6 py-4">{title}</td>
//                                                 <td className="px-6 py-4">₹ {price}</td>
//                                                 <td className="px-6 py-4">{category}</td>
//                                                 <td className="px-6 py-4">{date}</td>
//                                                 <td className="px-6 py-4 flex space-x-2">
//                                                     <button
//                                                         onClick={() => deleteProduct(item)}
//                                                         className="font-medium bg-red-300 px-4 rounded-lg py-1 text-black"
//                                                     >
//                                                         Del
//                                                     </button>
//                                                     <Link
//                                                         to="/updateproduct"
//                                                         onClick={() => editProductHandle(item)}
//                                                         className="font-medium bg-green-300 px-4 rounded-lg py-1 text-black"
//                                                     >
//                                                         Edit
//                                                     </Link>
//                                                 </td>
//                                             </tr>
//                                         );
//                                     })
//                                 ) : (
//                                     <tr>
//                                         <td colSpan="7" className="text-center text-white py-4">
//                                              Product Not Found 
//                                         </td>
//                                     </tr>
//                                 )}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ProductTable;







import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../context/data/myContext';

function ProductTable() {
    const context = useContext(myContext);
    const { allProducts, deleteProduct, editProductHandle, search, setSearch } = context;

    const allProductFilter = allProducts.filter((obj) =>
        obj.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex justify-center items-center min-h-screen px-2 bg-gray-900">
            <div className="container mx-auto max-w-7xl">
                <div className="relative overflow-hidden shadow-lg rounded-lg">
                    {/* Header Section */}
                    <div className="bg-gray-800 w-full flex flex-wrap items-center justify-between p-4 gap-2">
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            type="text"
                            className="w-full sm:flex-1 py-2 rounded-md px-3 text-white bg-gray-700 placeholder-gray-400 outline-none shadow-sm sm:max-w-sm lg:max-w-xs"
                            placeholder="Search products..."
                        />
                        <h1 className="w-full text-center text-white text-lg sm:text-xl lg:text-2xl font-semibold mt-2 sm:mt-0">
                            E-Commerce Dashboard CRUD
                        </h1>
                        <Link to="/addproduct" className="w-full sm:w-auto">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 w-full sm:w-auto rounded-md shadow-sm">
                                Add Product
                            </button>
                        </Link>
                    </div>

                    {/* Table Section */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-100 uppercase bg-gray-700">
                                <tr>
                                    <th className="px-4 py-3">S.No.</th>
                                    <th className="px-4 py-3">Product Image</th>
                                    <th className="px-4 py-3">Product Name</th>
                                    <th className="px-4 py-3">Price</th>
                                    <th className="px-4 py-3">Category</th>
                                    <th className="px-4 py-3">Date</th>
                                    <th className="px-4 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allProductFilter.length > 0 ? (
                                    allProductFilter.map((item, index) => {
                                        const { title, price, imageUrl, category, date } = item;
                                        return (
                                            <tr
                                                key={index}
                                                className="bg-gray-800 text-white border-b border-gray-600"
                                            >
                                                <td className="px-4 py-3">{index + 1}.</td>
                                                <td className="px-4 py-3">
                                                    <img
                                                        className="w-10 h-10 rounded-md object-cover"
                                                        src={imageUrl}
                                                        alt={title}
                                                    />
                                                </td>
                                                <td className="px-4 py-3">{title}</td>
                                                <td className="px-4 py-3">₹ {price}</td>
                                                <td className="px-4 py-3">{category}</td>
                                                <td className="px-4 py-3">{date}</td>
                                                <td className="px-4 py-3 flex flex-col sm:flex-row gap-2">
                                                    <button
                                                        onClick={() => deleteProduct(item)}
                                                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                                                    >
                                                        Delete
                                                    </button>
                                                    <Link
                                                        to="/updateproduct"
                                                        onClick={() => editProductHandle(item)}
                                                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md"
                                                    >
                                                        Edit
                                                    </Link>
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="7"
                                            className="text-center py-6 text-lg font-semibold text-gray-400"
                                        >
                                             Product Not Found 
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductTable;
