// write your custom hook here to control your checkout form
import React, { useState } from "react";
//const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//const [values, setValues] = useState(initialValue);

//const handleChanges = (e) => {
//  setValues({ ...values, [e.target.name]: e.target.value });
//};

const useForm = (initialValue) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue);
  
    const handleChanges = (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
    }
    return([values, showSuccessMessage, handleChanges, handleSubmit]);

}
export default useForm;