import { useEffect, useState } from "react";
const Card = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const Card = JSON.parse(localStorage.getItem("Card"));
    setData(Card);
  }, []);
  const handleDelete = (phone) =>{
    const newCard = data.filter((item) => item.id!== phone.id);
    setData(newCard);
    localStorage.setItem("Card", JSON.stringify(newCard));
  }
  return (
    <>
        {
            data.length === 0? <h1 className="text-center py-32 text-4xl text-black font-semibold">Card is Empty. <br />
            Please add some Phones </h1>:
            <div className=" px-3">
      <h3 className="text-2xl font-bold py-7 text-center">Your Card</h3>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Brand</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.map((phone) => (
                <tr key={phone.id}>
                  <td>
                    <div className="flex items-center rounded-xl gap-3">
                      <div className="avatar">
                        <div className=" w-16 ">
                          <img
                            src={phone.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{phone.phone_name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{phone.price}$</td>
                  <td>{phone.brand_name}</td>
                  <th>
                    <button className="btn btn-success btn-xs">Pay Now</button>
                  </th>
                  <th>
                    <button onClick={()=>handleDelete(phone)} className="btn btn-error btn-xs">Delete</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
        }
    </>
  );
};

export default Card;
