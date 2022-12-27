import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useOrderContext } from "../store/OrderContext";

interface FormState {
  name: string;
  email: string;
  phone: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
}

export const InfoForm = () => {
  const { order, setOrder } = useOrderContext();
  const navigate = useNavigate();

  const initialValues: FormState = { name: "", email: "", phone: "" };




  const validation = (values: FormState) => {
    const errors: Errors = { name: "", email: "", phone: "" };

    if (!values.email) {
      errors.email = "*Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.phone) {
      errors.phone = "*Required";
    } else if (
      !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(
        values.phone
      )
    ) {
      errors.phone = "Invalid phone number";
    }
    if (!values.name) {
      errors.name = "*Required";
    }
    return errors;
  };




  const handleSubmit = (values: FormState, { setSubmitting }: any) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };


  const handleNext = (values: FormState, errors: Errors) => {
    const vals = Object.values(values).map((val) => !!val);
    const errs = Object.values(errors).map((err) => !!err);
    if (!errs.includes(true) && !vals.includes(false)) {
      setOrder((prev) => ({ ...prev, client: { ...values } }));
      navigate("/plans");
    }
  };

  return (
    <>
      <div>
        <Formik
          initialValues={order.client || initialValues}
          validate={validation}
          onSubmit={handleSubmit}
        >
          {({ values, errors }) => {
            return (
              <Form className="info__form">
                <div className="label__section">
                  <label htmlFor="name" className="form__label">
                    Name
                  </label>
                  <ErrorMessage
                    className="error__message"
                    name="name"
                    component="span"
                  />
                </div>
                <Field
                  className="form__input"
                  type="text"
                  name="name"
                  placeholder="e.g. Stephen King"
                />
                <div className="label__section">
                  <label htmlFor="email" className="form__label">
                    Email Address
                  </label>
                  <ErrorMessage
                    className="error__message"
                    name="email"
                    component="span"
                  />
                </div>
                <Field
                  className="form__input"
                  name="email"
                  type="email"
                  placeholder="e.g. stephenking@lorem.com"
                />
                <div className="label__section">
                  <label htmlFor="phone" className="form__label">
                    Phone Number
                  </label>
                  <ErrorMessage
                    className="error__message"
                    name="phone"
                    component="span"
                  />
                </div>
                <Field
                  className="form__input"
                  type="tel"
                  name="phone"
                  placeholder="e.g. +1 234 567 8900"
                />
                <button
                  type="submit"
                  className="form__btn__forward"
                  onClick={() => handleNext(values, errors)}
                >
                  Next Step
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};
