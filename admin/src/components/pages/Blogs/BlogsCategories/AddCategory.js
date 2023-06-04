import React from 'react';


const AddCategory = () => {

  return (
    <div class="w-full">
      <form class="px-8 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Category Title/Name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Category Title/Name" />
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-[#2f60b5] hover:bg-[#2f60b5] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;