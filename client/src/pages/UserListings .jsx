import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function UserListings() {
  const { currentUser } = useSelector((state) => state.user);
  const [userListings, setUserListings] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchUserListings();
  }, []);

  const fetchUserListings = async () => {
    try {
      const res = await fetch(`/api/user/listings/${currentUser._id}`);
      const data = await res.json();
      if (data.success === false) {
        console.error("Failed to fetch listings");
        return;
      }
      setUserListings(data);
    } catch (error) {
      console.error("Error fetching listings:", error);
      toast.error("Failed to fetch listings");
    }
  };

  const handleListingDelete = async (listingId) => {
    try {
      const res = await fetch(`/api/listing/delete/${listingId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        toast.error(data.message);
        return;
      }

      setUserListings((prev) =>
        prev.filter((listing) => listing._id !== listingId)
      );
      toast.success("Listing deleted successfully!");
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to delete the listing");
    }
  };

  const filteredListings = userListings.filter((listing) =>
    filter === "All"
      ? true
      : listing.type.toLowerCase() === filter.toLowerCase()
  );

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="p-3 mx-auto md:max-w-6xl max-w-96 bg-main-bg-light rounded-lg shadow-md">
        <h1 className="text-2xl md:text-3xl font-semibold text-center p-3">
          Your Listings
        </h1>

        <div className="mb-4 flex items-center justify-start px-3">
          <label
            htmlFor="filter"
            className="block text-lg font-medium text-gray-700 mr-4"
          >
            Filter by:
          </label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="block w-full sm:w-36 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="All">All</option>
            <option value="Sale">Sale</option>
            <option value="Rent">Rent</option>
          </select>
        </div>

        {filteredListings.length > 0 ? (
          <div className="overflow-x-auto px-3">
            <table className="w-full table-fixed bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-6 text-left">Image</th>
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredListings.map((listing) => (
                  <tr key={listing._id} className="border-b border-gray-200">
                    <td className="py-4 px-6">
                      <Link to={`/listing/${listing._id}`}>
                        <img
                          src={listing.imageUrls[0]}
                          alt="listing cover"
                          className="h-16 w-16 sm:h-24 sm:w-24 object-cover rounded"
                        />
                      </Link>
                    </td>
                    <td className="py-4 px-6">
                      <Link
                        className="text-blue-500 hover:underline"
                        to={`/listing/${listing._id}`}
                      >
                        {listing.name}
                      </Link>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <button
                        onClick={() => handleListingDelete(listing._id)}
                        className="text-red-500 hover:underline focus:outline-none"
                      >
                        Delete
                      </button>
                      <Link to={`/update-listing/${listing._id}`}>
                        <button className="ml-2 text-green-500 hover:underline focus:outline-none">
                          Edit
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center mt-4">No listings found.</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
