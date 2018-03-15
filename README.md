# react-web-input-field-with-label

Input field with label and validation error messages for the web, useful with [redux-form](https://redux-form.com/7.3.0/).

[![scepter-logo](http://res.cloudinary.com/source-4-society/image/upload/v1519221119/scepter_hzpcqt.png)](https://github.com/source4societyorg/SCEPTER-core)

[![redux-logo](https://raw.githubusercontent.com/reactjs/redux/master/logo/logo-title-dark.png)](https://github.com/reactjs/redux)

[![react-boilerplate](https://github.com/react-boilerplate/brand/blob/master/assets/logo.png)](https://gihub.com/react-boilerplate)

[![airbnb-codestyle](https://camo.githubusercontent.com/1c5c800fbdabc79cfaca8c90dd47022a5b5c7486/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64652532307374796c652d616972626e622d627269676874677265656e2e7376673f7374796c653d666c61742d737175617265)](https://github.com/airbnb/javascript)

[![Build Status](https://travis-ci.org/source4societyorg/react-input-field-with-label.svg?branch=master)](https://travis-ci.org/source4societyorg/react-input-field-with-label)

[![codecov](https://codecov.io/gh/source4societyorg/react-input-field-with-label/branch/master/graph/badge.svg)](https://codecov.io/gh/source4societyorg/react-input-field-with-label)

# Installation

    npm install @source4society/react-input-field-with-label

or

    yarn add @source4society/react-input-field-with-label

# Usage

If you have a redux-form setup, and you are using the `Field` component, you can pass this in as the `component` prop as follows:

    <Field labelText="Your label text here" name="fieldName" id="fieldId" component={InputFieldWithLabel} type="email" />

The different props are as follows:

    labelText // Defines the text used in the label
    labelClasses // Add custom label classes to the label
    labelAttributes // Attributes for the label tag, such as `for`
    input // The input field object, provided by redux-form
    type  // The type of input field, defaults to text
    className // Custom class for the entire component
    meta: // an object containing the 'touched' and 'error' properties, supplied by redux-form
    readOnly: // Whether or not the form is readOnly

