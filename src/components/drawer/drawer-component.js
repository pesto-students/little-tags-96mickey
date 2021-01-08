import React from "react";
import { useDispatch } from "react-redux";

// component
import Button from "./../button/button.component";
import IconComponent from "./../icon-component/icon-component";

// styles
import {
  DrawerItemStyled,
  DrawerContainerWrapperStyled,
  DrawerContentWrapperStyled,
  DrawerContainerOverlayStyled,
  DrawerContentTitleStyled,
  DrawerButtonWrapper,
  DrawerContentUsernameBoxWrapperStyled,
  DrawerMenuTitleStyled,
  DrawerContentUsernameContentWrapperStyled,
  DrawerContentUsernameIconStyled,
  DrawerContentsIconWrapperStyled,
  DrawerContentTitleWrapperStyled,
  HeaderUserLogo,
} from "./drawer.styled";

// constants
import { LoggedInMenu } from "./../../constants/drawer.constants";
import { StyledLink } from "components";

const RenderSubMenu = ({ name, goTo }) => {
  return (
    <StyledLink to={goTo}>
      <DrawerItemStyled onClick={() => console.log("Clicked Label" + name)}>
        {name}
      </DrawerItemStyled>
    </StyledLink>
  );
};

const DrawerItem = ({ name, subMenu }) => {
  return (
    <>
      <DrawerMenuTitleStyled>{name}</DrawerMenuTitleStyled>
      {subMenu.map((data, index) => {
        return (
          <RenderSubMenu {...data} key={`DrawerContentSubMenu-${index}`} />
        );
      })}
    </>
  );
};

const DrawerContents = ({
  onClose,
  menuList,
  userDetails: { username, imageUrl },
  sidebarTitle,
  isLoggedIn,
}) => (
  <DrawerContentWrapperStyled>
    <DrawerContentTitleWrapperStyled>
      <StyledLink to="/">
        <DrawerContentTitleStyled>{sidebarTitle}</DrawerContentTitleStyled>
      </StyledLink>
      <DrawerContentsIconWrapperStyled>
        <IconComponent
          name={"fa-times"}
          size="30px"
          handleClick={() => onClose()}
        />
      </DrawerContentsIconWrapperStyled>
    </DrawerContentTitleWrapperStyled>{" "}
    {isLoggedIn && (
      <DrawerContentUsernameBoxWrapperStyled>
        <DrawerContentUsernameIconStyled>
          <HeaderUserLogo src={imageUrl} alt="User Icon" srcset="" />
        </DrawerContentUsernameIconStyled>
        <DrawerContentUsernameContentWrapperStyled>
          Hey, {username}
        </DrawerContentUsernameContentWrapperStyled>
      </DrawerContentUsernameBoxWrapperStyled>
    )}
    <div>
      {menuList.map((menu, index) => {
        return <DrawerItem {...menu} key={`DrawerContentMenu-${index}`} />;
      })}
    </div>
    <div style={{ border: "solid 1px #707070", margin: "20px" }}></div>
    {isLoggedIn &&
      LoggedInMenu.map((menu, index) => {
        return <RenderSubMenu {...menu} key={`DrawerContentMenu-${index}`} />;
      })}
  </DrawerContentWrapperStyled>
);

const DrawerContainer = ({
  isOpen,
  onClose,
  menuList,
  userDetails,
  sidebarTitle,
  isLoggedIn,
}) => {
  const dispatch = useDispatch();
  const buttonConfig = {
    onClick: () => {
      dispatch({ type: "LOGOUT" });
      onClose();
    },
    label: "Logout",
    type: "GHOST",
  };

  return (
    <DrawerContainerOverlayStyled isOpen={isOpen} onClick={onClose}>
      <DrawerContainerWrapperStyled isOpen={isOpen}>
        <DrawerContents
          onClose={onClose}
          menuList={menuList}
          userDetails={userDetails}
          sidebarTitle={sidebarTitle}
          isLoggedIn={isLoggedIn}
        />
        {isLoggedIn && (
          <DrawerButtonWrapper>
            <Button {...buttonConfig}>{buttonConfig.label}</Button>
          </DrawerButtonWrapper>
        )}
      </DrawerContainerWrapperStyled>
    </DrawerContainerOverlayStyled>
  );
};

export default DrawerContainer;
