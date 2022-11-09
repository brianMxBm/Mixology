import React from 'react';
import { Formik } from 'formik';

const CustomFormik = ({ children, initialValues, validationSchema, onSubmit }) => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {() => {
        return children;
      }}
    </Formik>
  );
};

export default CustomFormik;
