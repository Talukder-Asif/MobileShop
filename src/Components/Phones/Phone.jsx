import Rating from "react-rating";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Phone = ({ phone }) => {
  const handleAddCard = () => {
    const addedCard = [];
    const availableCard = JSON.parse(localStorage.getItem("Card"));
    if (!availableCard) {
      addedCard.push(phone);
      localStorage.setItem("Card", JSON.stringify(addedCard));
    } else {
      const isAvailable = availableCard.find(
        (phones) => phones.id === phone.id
      );
      if (isAvailable) {
        alert("This phone is already added to your card");
      } else {
        addedCard.push(...availableCard, phone);
        localStorage.setItem("Card", JSON.stringify(addedCard));
      }
    }
  };

  return (
    <div className="w-full m-auto flex flex-col justify-between max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="p-8 w-full rounded-t-lg" src={phone.image} />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-justify">
          {phone.phone_name}
        </h5>
        <div className="flex items-center justify-between">
            <Rating initialRating={phone.rating}
                fullSymbol={<svg className="w-5 h-5 text-sky-500 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>}
      emptySymbol={<svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>}


             readonly />
          
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${phone.price}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleAddCard()}
            className="text-white bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-sky-500 dark:focus:ring-blue-800"
          >
            Add to card
          </button>
          <Link to={`/phone/${phone.id}`}>
            <button className="text-white bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-sky-500 dark:focus:ring-blue-800">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Phone;
