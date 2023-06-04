import React from 'react';


const AddBrand = () => {

  return (
    <div class="w-full">
      <form class="px-8 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Brand Title/Name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Product Title/Name" />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="images">
            Brand Images
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="file" placeholder="Product SKU" />
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-[#2f60b5] hover:bg-[#2f60b5] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Add Brand
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBrand;