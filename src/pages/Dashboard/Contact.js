import React from "react";
import { Formik, Field, Form } from "formik";
function Contact() {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          message: ""
        }}
        onSubmit={values => {
          console.log(JSON.stringify(values));
        }}
      >
        <Form className="form">
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" placeholder="Jane" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="Doe" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <Field
              id="message"
              name="message"
              placeholder="Your message ... "
              type="message"
            />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Contact;
