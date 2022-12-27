import confirm from '../assets/images/icon-thank-you.svg'
import { useOrderContext } from '../store/OrderContext';

export const ConfirmationPage = () => {

  const {order}= useOrderContext();
  console.log(order)
  
  return (
    <div className='confirmation__page'>
    <div className='confirmation__message'>
        <img className="confirmation__img" src={confirm} alt="Check Mark" />
      <div className="title__section">
        <h1 className="page__title">Thank you!</h1>
        <p className="page__desc">
          Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
        </p>
      </div>
    </div>
    </div>
  );
};
