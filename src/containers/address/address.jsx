import Button from "components/button/button.component";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_DELIVERY_ADDRESS,
  OPEN_LOGIN_MODAL,
} from "reducers/types.constants";
import {
  AddressStyled,
  SubmitButtonWrapper,
  AddressFormWrapper,
  AddressFormInputStyled,
  AddressLabelStyled,
  AddressAsterikMarker,
} from "./address.styled";
import { useHistory } from "react-router-dom";

export const Address = () => {
  const history = useHistory();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const [submittedWithError, setError] = useState(false);
  const [address, setAddress] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    line1: "",
    line2: "",
    state: "",
    pin: undefined,
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const addAddress = () => {
    if (!isLoggedIn) {
      dispatch({
        type: OPEN_LOGIN_MODAL,
      });
      return;
    }
    if (
      !address.firstName ||
      !address.lastName ||
      !address.line1 ||
      !address.line2 ||
      !address.phone ||
      !address.pin ||
      !address.state
    ) {
      setError(true);
      return;
    }
    dispatch({
      type: ADD_DELIVERY_ADDRESS,
      payload: {
        ...address,
      },
    });

    history.push("/address/list");
  };

  return (
    <AddressStyled>
      <AddressFormWrapper className="row no-gutters register-form">
        <div className="row no-gutters  w-75 m-auto">
          <div className="col-md-6">
            <AddressLabelStyled for="username" class="text-info">
              Firstname <AddressAsterikMarker>*</AddressAsterikMarker>:
            </AddressLabelStyled>
            <br />
            <AddressFormInputStyled
              onChange={handleChange}
              type="text"
              className={`form-control col-md-8 mr-3 ${
                submittedWithError && !address.firstName ? "is-invalid" : ""
              }`}
              placeholder="First Name"
              value={address.firstName}
              name="firstName"
            />
          </div>

          <div className="col-md-6">
            <AddressLabelStyled for="username" class="text-info">
              Lastname <AddressAsterikMarker>*</AddressAsterikMarker>:
            </AddressLabelStyled>
            <br />
            <AddressFormInputStyled
              onChange={handleChange}
              type="text"
              className={`form-control col-md-8 mr-3 ${
                submittedWithError && !address.lastName ? "is-invalid" : ""
              }`}
              placeholder="Last Name"
              value={address.lastName}
              name="lastName"
            />
          </div>
        </div>

        <div className="row no-gutters w-75 m-auto">
          <div className="col-md-6">
            <AddressLabelStyled for="email" class="text-info">
              Email <AddressAsterikMarker>*</AddressAsterikMarker>:
            </AddressLabelStyled>
            <br />
            <AddressFormInputStyled
              onChange={handleChange}
              type="email"
              className={`form-control col-md-8 mr-3 ${
                submittedWithError && !address.email ? "is-invalid" : ""
              }`}
              placeholder="Email ID"
              value={address.email}
              name="email"
            />
          </div>

          <div className="col-md-6">
            <AddressLabelStyled for="username" class="text-info">
              Phone Number <AddressAsterikMarker>*</AddressAsterikMarker>:
            </AddressLabelStyled>
            <br />
            <AddressFormInputStyled
              onChange={handleChange}
              type="text"
              minLength="10"
              maxLength="10"
              className={`form-control col-md-8 mr-3 ${
                submittedWithError && !address.phone ? "is-invalid" : ""
              }`}
              placeholder="Phone Number"
              value={address.phone}
              name="phone"
            />
          </div>
        </div>

        <div className="row no-gutters w-75 m-auto">
          <div className="col-md-6">
            <AddressLabelStyled for="Addressline1" class="text-info">
              Address line 1 <AddressAsterikMarker>*</AddressAsterikMarker>:
            </AddressLabelStyled>
            <br />
            <AddressFormInputStyled
              onChange={handleChange}
              type="text"
              className={`form-control col-md-8 mr-3 ${
                submittedWithError && !address.line1 ? "is-invalid" : ""
              }`}
              placeholder="Address line 1"
              value={address.line1}
              name="line1"
            />
          </div>

          <div className="col-md-6">
            <AddressLabelStyled for="username" class="text-info">
              Address line 2 <AddressAsterikMarker>*</AddressAsterikMarker>:
            </AddressLabelStyled>
            <br />
            <AddressFormInputStyled
              onChange={handleChange}
              type="text"
              className={`form-control col-md-8 mr-3 ${
                submittedWithError && !address.line2 ? "is-invalid" : ""
              }`}
              placeholder="Address line 2"
              value={address.line2}
              name="line2"
            />
          </div>
        </div>

        <div className="row no-gutters w-75 m-auto">
          <div className="col-md-6">
            <AddressLabelStyled for="Addressline1" class="text-info">
              State <AddressAsterikMarker>*</AddressAsterikMarker>:
            </AddressLabelStyled>
            <br />
            <AddressFormInputStyled
              onChange={handleChange}
              type="text"
              className={`form-control col-md-8 mr-3 ${
                submittedWithError && !address.state ? "is-invalid" : ""
              }`}
              placeholder="State"
              value={address.state}
              name="state"
            />
          </div>

          <div className="col-md-6">
            <AddressLabelStyled for="username" class="text-info">
              Pincode <AddressAsterikMarker>*</AddressAsterikMarker>:
            </AddressLabelStyled>
            <br />
            <AddressFormInputStyled
              onChange={handleChange}
              type="text"
              className={`form-control col-md-8 mr-3 ${
                submittedWithError && !address.pin ? "is-invalid" : ""
              }`}
              placeholder="Pincode"
              value={address.pin}
              name="pin"
            />
          </div>
        </div>
      </AddressFormWrapper>
      <SubmitButtonWrapper>
        <Button onClick={addAddress}>Submit</Button>
      </SubmitButtonWrapper>
    </AddressStyled>
  );
};
