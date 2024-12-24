import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// Validation Schema
const validationSchema = Yup.object({
    name: Yup.string()
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});

const Forms = () => {

    const handleSubmit = (values, { resetForm }) => {
        console.log('Form Submitted:', values);
        alert('Form submitted successfully!');
        resetForm();
    };

    return (
        <div className="formik-form-container">
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        {/* Name Field */}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <Field
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                className="form-input"
                            />
                            <ErrorMessage name="name" component="div" className="error-text" />
                        </div>

                        {/* Email Field */}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="form-input"
                            />
                            <ErrorMessage name="email" component="div" className="error-text" />
                        </div>

                        {/* Password Field */}
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="form-input"
                            />
                            <ErrorMessage name="password" component="div" className="error-text" />
                        </div>

                        {/* Submit Button */}
                        <button type="submit" disabled={isSubmitting} className="form-button">
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Forms