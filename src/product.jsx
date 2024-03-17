function Product({ data, addToCart, cart }) {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h4 className="fw-bolder">{data.proName}</h4>
            <p>${data.price}</p>
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              onClick={() => addToCart(data)}
              className={
                cart.some((item) => item.id === data.id)
                  ? "btn btn-outline-dark text-bg-danger mt-auto"
                  : "btn btn-outline-dark mt-auto"
              }
              disabled={cart.some((item) => item.id === data.id)}
            >
              {cart.some((item) => item.id === data.id)
                ? "Remove from cart"
                : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
