import { useEffect, useState } from "react";

const CartTotal = ({ price, qty }) => {
  const [discountAmt, setDiscountAmt] = useState(0);
  const [totalAmt, setTotalAmt] = useState(price);
  const [couponInput, setCouponInput] = useState("");
  const [message, SetMessage] = useState();

  const couponCode = { code: "Flat20", discount: 20 };

  const checkCoupon = () => {
    if (couponCode.code.toLowerCase() === couponInput.toLowerCase()) {
      if (price <= couponCode.discount) {
        return SetMessage("Price should be greater");
      }

      setDiscountAmt(couponCode.discount);

      return SetMessage("Coupon Applied");
    }
    if (couponCode.code.toLowerCase() !== couponInput.toLowerCase()) {
      setDiscountAmt(0);
      SetMessage("Invalid Coupon");
    }

    console.log("CUrrent Message", message);
    // setDiscountAmt(0);
    // SetMessage("Coupon Code");
  };

  useEffect(() => {
    checkCoupon();
  }, [couponCode.code, couponCode.discount, couponInput, discountAmt, price]);

  useEffect(() => {
    setTotalAmt(price);
  }, [price]);

  useEffect(() => {
    console.log("useEffect Called");
    setTotalAmt((totalAmt) => totalAmt - discountAmt);
  }, [discountAmt, price]);

  console.log("TOTAL AMOUNT", totalAmt);
  return (
    <>
      <div className="cartTotalContainer">
        <h2>I am cart Total</h2>
        <div className="cartTotalItems">
          <h3>
            Price Details ({qty} {qty > 1 ? "items" : "item"})
          </h3>
          <h6>Total MRP : {price}</h6>
          <h6>Discount : {discountAmt}</h6>
          {message && <p className="cartTotalMessage">{message}</p>}
          <input
            type="text"
            value={couponInput}
            placeholder="Enter Coupon Code"
            onChange={(e) => setCouponInput(e.target.value)}
          />
        </div>

        <div className="cartTotal">
          <h4>Total Amount:{totalAmt}</h4>
        </div>
        <button>Place Order</button>
      </div>
    </>
  );
};
export default CartTotal;
