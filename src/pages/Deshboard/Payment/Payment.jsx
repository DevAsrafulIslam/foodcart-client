import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-[calc(100vh-200px)]">
    <div className="card bg-base-100 w-96 p-4 shadow-xl">
      <div className="card-body">
        <h2 className="text-3xl text-center">Payment!</h2>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
      </div>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
    </div>
  );
};

export default Payment;
