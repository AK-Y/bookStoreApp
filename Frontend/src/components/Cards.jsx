function Cards({ item }) {
  // console.log(item);
  return (
    <>
      <div className="mt-4 my-3 p-4">
        <div className="card bg-base-100 shadow-xl hover:scale-105 duration-200">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline py-3">₹{item.price}</div>
              <div className="badge badge-secondary py-3 hover:bg-gray-800 hover:text-white duration-200">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
