import { useProduct } from "./ProductContext";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const { selectedProduct } = useProduct();
  const navigate = useNavigate();

  if (!selectedProduct) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold">No Product Selected</h2>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-5 bg-slate-100">
        <button
          className=" bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      <div className="p-24 bg-slate-100 grid grid-cols-1 md:grid-cols-2 gap-8  shadow-lg rounded-lg overflow-hidden">

        <div className="relative">
          <img
            src={`http://localhost:3000/${selectedProduct.image}`}
            alt={selectedProduct.name}
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {[...Array(3)].map((_, index) => (
              <div 
                key={index} 
                className="w-2 h-2 bg-white rounded-full"
              ></div>
            ))}
          </div>
        </div>

        <div className=" flex flex-col justify-between ">
          <div>
            <div className="flex border bg-white shadow-sm p-5 justify-between items-start mb-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-800">₹{selectedProduct.price}</h2>
                <p className="text-gray-600 mt-1">{selectedProduct.name}</p>
              </div>
              <div className="flex space-x-2">
                <button className="bg-gray-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="bg-gray-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.368-2.684 3 3 0 00-5.368 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mb-6 border bg-white shadow-sm p-5">
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p className="text-gray-700">{selectedProduct.description}</p>
            </div>

            <div className="mb-6 border bg-white shadow-sm p-5">
              <h3 className="text-xl font-semibold mb-2">Details</h3>
              <p className="text-gray-600">Brand: {selectedProduct.category}</p>
              <p className="text-gray-600">Condition: Like New</p>
            </div>
          </div>

          <div className="flex flex-col bg-white space-y-4 border shadow-sm p-5">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-bold">R</span>
              </div>
              <div>
                <p className="font-semibold text-lg">{selectedProduct.userName.slice(0,10)}</p>
                <p className="text-sm text-gray-500">Member since 2023</p>
              </div>
            </div>

            <button 
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Chat with Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;