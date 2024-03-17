import React, { useState } from "react";
import Modal from "react-modal";
import { BsFillCartFill } from "react-icons/bs";
// Make sure to set the app root in the modal
Modal.setAppElement("#root");

const PopupPage = ({ cart, removeFromCart, total }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="btn btn-outline-dark"
        type="submit"
      >
        <BsFillCartFill className="me-1" />
        Cart
        <span className="badge  text-white ms-1 rounded-pill" id="bt">
          {cart.length}
        </span>
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h1 class="text-center">Cart</h1>
        {cart.length == 0 ? (
          <h2 class="text-center">No Items in Cart</h2>
        ) : (
          <>
            <ol className="list-group list-group-numbered">
              {cart.map((item) => {
                return (
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{item.proName}</div>${item.price}
                    </div>
                    <button
                      onClick={() => removeFromCart(item)}
                      className="badge text-bg-danger rounded-pill"
                    >
                      X
                    </button>
                  </li>
                );
              })}
            </ol>
            <h1 class="text-end">Total : ${total}</h1>
          </>
        )}
        <div class="d-grid gap-2 col-1 mx-auto">
          <button
            onClick={closeModal}
            className="badge text-bg-danger text-center"
          >
            Close{" "}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default PopupPage;
