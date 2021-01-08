import Button from 'components/button/button.component';
import IconComponent from 'components/icon-component/icon-component';
import { StyledLink } from 'components/styled-link';
import { ProceedToPayments } from 'constants/cart.constants';
import { PaymentAddressStyled, PaymentAddressWrapperStyled, PaymentNameStyled, PaymentPhoneNoStyled } from 'containers/payments/payments.styled';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CHANGE_DEFAULT_DELIVERY_ADDRESS } from 'reducers/types.constants';
import { AddAddressWrapper, AddressListWrapper, AddressOption, ProceedButton } from './address-list.styled';

export const AddressList = () => {
    const {addressList} = useSelector((state) => state.address);
    const [selectedAddress, setAddress] = useState();
    const history = useHistory();

    const proceedToPay = () => {
        if(!selectedAddress && selectedAddress !== 0) {
            alert("Please select an address");
            return;
        }
        history.push(ProceedToPayments);
    }

    const dispatch = useDispatch();
    const selectAddress = (id) => {
        setAddress(id);
        dispatch({ 
            type: CHANGE_DEFAULT_DELIVERY_ADDRESS,
            payload: {
                ...addressList[id]
            }
        });
    }
    
    return (
        <AddressListWrapper>
            {
                addressList && addressList.length ? 
                addressList.map((address, index) => (
                    <AddressCard 
                        key={index} 
                        id={index}
                        selectedAddress={selectedAddress}
                        selectAddress={selectAddress}
                        {...address} />)) 
                : <div>No address found</div>
            }
        <StyledLink to="/address/add">
        <AddAddressWrapper>
            <IconComponent
                name={"fa-plus-circle"}
                size="20px" />
            Add New Address
        </AddAddressWrapper>
        </StyledLink>
        <ProceedButton>
            <Button onClick={proceedToPay}>
                Proceed
            </Button>
        </ProceedButton>
        </AddressListWrapper>
    )
}

export const AddressCard = (props) => {
    return (
        <AddressOption onClick={() => props.selectAddress(props.id)} class="custom-control custom-radio">
            <PaymentAddressWrapperStyled isSelected={props.selectedAddress === props.id}>
                <PaymentNameStyled>{`${props.firstName} ${props.lastName}`}</PaymentNameStyled>
                <PaymentAddressStyled>{`${props.line1}`}</PaymentAddressStyled>
                <PaymentPhoneNoStyled>{props.phone}</PaymentPhoneNoStyled>
            </PaymentAddressWrapperStyled>
        </AddressOption>
    )
}
