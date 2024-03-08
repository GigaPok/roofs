import { Formik } from "formik";
import { useState, React } from "react";
import "./ContactForm.scss";

export const ContactForm = () => {
  const [sent, setSent] = useState(false);

  return (
    <div id="contactForm">
      <div class="form-wrapper">
        <h6>Free Consultation</h6>
        <h3>Get A Free Quote</h3>

        <Formik
          initialValues={{
            email: "",
            fullname: "",
            eircode: "",
            phone: "",
            message: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            fetch("/api/index.php", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            })
              .then((response) => {
                if (response.ok) {
                  setSent(true);
                }
              })
              .finally(() => {
                setSent(true);
              })
              .catch((error) => {
                console.error("Error:", error);
              });

            setTimeout(() => {
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <>
              {!sent && (
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="fullname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fullname}
                    placeholder="Enter your full name"
                  />
                  <input
                    type="text"
                    name="eircode"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.eircode}
                    placeholder="Eircode"
                  />
                  <input
                    type="number"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    placeholder="Phone number"
                  />
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Your Email"
                  />
                  {errors.email && touched.email && errors.email}
                  <textarea
                    type="text"
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    placeholder="Message"
                  />
                  {errors.password && touched.password && errors.password}
                  <button type="submit" disabled={isSubmitting}>
                    GET A FREE QUOTE
                  </button>
                </form>
              )}

              {sent && (
                <span>
                  Thanks for contacting us! We will be in touch with you
                  shortly.
                </span>
              )}
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};
