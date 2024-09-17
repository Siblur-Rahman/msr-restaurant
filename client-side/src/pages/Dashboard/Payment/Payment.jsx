import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from './../../../components/SectionTitle';
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {

  

  return (
        <>
        <SectionTitle heading={'Payment'} subHeading={'Please pay to eat'}/>
          <Elements stripe={stripePromise}>
            <CheckoutForm/>
          </Elements>
          </>
  );
};

export default Payment;
