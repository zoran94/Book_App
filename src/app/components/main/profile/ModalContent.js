import React from "react";
import InputField from "./InputField";
import { Button } from "react-materialize";

const ModalContent = (props) => {
  return (
    <form className="row">
      <div className="row">
        <h4 className="col s5 offset-s1">Update profile</h4>
      </div>

      <InputField type="text" name="Enter full name" />
      <InputField type="url" name="Enter image url" />
      <InputField type="text" name="Enter description" />
      <Button onClick={props.click}>Edit</Button>
      <Button onClick={props.click} className="right">Close</Button>
    </form>
  );

};

export default ModalContent;
