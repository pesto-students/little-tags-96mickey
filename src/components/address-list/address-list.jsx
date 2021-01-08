import Button from 'components/button/button.component';
import IconComponent from 'components/icon-component/icon-component';
import { StyledLink } from 'components/styled-link';
import React from 'react';
import { useSelector } from 'react-redux';
import { AddAddressWrapper, AddressListWrapper, ProceedButton } from './address-list.styled';

export const AddressList = () => {
    const {addressList} = useSelector((state) => state.address);
    return (
        <AddressListWrapper>
            {
                addressList && addressList.length ? 
                addressList.map((address, index) => <AddressCard key={index} id={index} {...address} />) 
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
            <Button >
                Proceed
            </Button>
        </ProceedButton>
        </AddressListWrapper>
    )
}

export const AddressCard = (props) => {
    return (
        <div class="custom-control custom-radio">
            <input 
                type="radio"
                id={props.id}
                name="address"
                tabIndex={props.id}
                className="radio-input custom-control-input" />
            <label className="custom-control-label" for="customRadioInline1">Toggle this custom radio</label>
        </div>
    )
}
