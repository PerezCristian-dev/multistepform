import { InfoForm } from "../components/InfoForm";

export const InfoPage = () => {
  return (
    <div className="displayed__page">
      <div className="title__section">
        <h1 className="page__title">Personal Info</h1>
        <p className="page__desc">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <InfoForm />
    </div>
  );
};
