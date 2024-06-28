import React from "react";

export default function CreateListing() {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-4">
        Create Listing
      </h1>
      <form className="flex flex-col sm:flex-row gap-4 bg-main-bg-light p-5 rounded-lg">
        <div className="flex flex-col flex-1 gap-4">
          <input
            className="border p-3 rounded-lg"
            type="text"
            placeholder="Name"
            id="name"
            maxLength="62"
            minLength="10"
            required
          />
          <textarea
            className="border p-3 rounded-lg"
            type="text"
            placeholder="Description"
            id="description"
            required
          />
          <input
            className="border p-3 rounded-lg"
            type="text"
            placeholder="Address"
            id="address"
            required
          />
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input type="checkbox" id="sale" className="w-5" />
              <span>Sell</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="rent" className="w-5" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="parking" className="w-5" />
              <span>Parking</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="furnished" className="w-5" />
              <span>Furnished</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="offer" className="w-5" />
              <span>Offer</span>
            </div>
          </div>
          <div className=" flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <input
                className="p-3 border-gray-300 rounded-lg"
                type="Number"
                id="bedrooms"
                min="1"
                max="10"
                required
              />
              <p>Beds</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="p-3 border-gray-300 rounded-lg"
                type="Number"
                id="bathrooms"
                min="1"
                max="10"
                required
              />
              <p>Bathrooms</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="p-3 border-gray-300 rounded-lg"
                type="Number"
                id="regularPrice"
                min="1"
                max="10"
                required
              />
              <div className="flex flex-col items-center">
                <p>Regular Price</p>
                <span className="text-xs">(Rs/Month)</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="p-3 border-gray-300 rounded-lg"
                type="Number"
                id="discountPrice"
                min="1"
                max="10"
                required
              />
              <div className="flex flex-col items-center">
                <p>Discount Price</p>
                <span className="text-xs">(Rs/Month)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-4">
          <p className="font-semibold">
            Images :
            <span className="font-normal text-gray-600 ml-2">
              The first image will be the cover (max 6)
            </span>
          </p>
          <div className="flex gap-4">
            <input
              className="p-3 border border-gray-300 rounded w-full"
              type="file"
              id="images"
              accept="image/*"
              multiple
            />
            <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg font-medium rounded-lg text-sm p-3 text-center me-2 mb-2 uppercase disabled:opacity-85">
              Upload
            </button>
          </div>
          <button className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
}
