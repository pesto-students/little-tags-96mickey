import React from "react";

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
} from "./drawer.styled";

const RenderSubMenu = ({ name, navigateTo }) => {
  return (
    <DrawerItemStyled onClick={() => console.log("Clicked Label" + name)}>
      {name}
    </DrawerItemStyled>
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

const DrawerContents = ({ onClose, menuList, username, sidebarTitle }) => (
  <DrawerContentWrapperStyled>
    <DrawerContentTitleWrapperStyled>
      <DrawerContentTitleStyled>{sidebarTitle}</DrawerContentTitleStyled>
      <DrawerContentsIconWrapperStyled>
        <IconComponent
          name={"fa-times"}
          size="30px"
          handleClick={() => onClose()}
        />
      </DrawerContentsIconWrapperStyled>
    </DrawerContentTitleWrapperStyled>{" "}
    <DrawerContentUsernameBoxWrapperStyled>
      <DrawerContentUsernameIconStyled>
        <IconComponent name={"fa-user"} size="25px" />
      </DrawerContentUsernameIconStyled>
      <DrawerContentUsernameContentWrapperStyled>
        Hey, {username}
      </DrawerContentUsernameContentWrapperStyled>
    </DrawerContentUsernameBoxWrapperStyled>
    <div>
      {menuList.map((menu, index) => {
        return <DrawerItem {...menu} key={`DrawerContentMenu-${index}`} />;
      })}
    </div>
    <div style={{ border: "solid 1px #707070", margin: "20px" }}></div>
  </DrawerContentWrapperStyled>
);

const DrawerContainer = ({
  isOpen,
  onClose,
  menuList,
  username,
  sidebarTitle,
}) => {
  const buttonConfig = {
    onClick: onClose,
    label: "Logout",
    type: "GHOST",
  };

  return (
    <DrawerContainerOverlayStyled isOpen={isOpen}>
      <DrawerContainerWrapperStyled isOpen={isOpen}>
        <DrawerContents
          onClose={onClose}
          menuList={menuList}
          username={username}
          sidebarTitle={sidebarTitle}
        />
        <DrawerButtonWrapper>
          <Button {...buttonConfig}>{buttonConfig.label}</Button>
        </DrawerButtonWrapper>
      </DrawerContainerWrapperStyled>
    </DrawerContainerOverlayStyled>
  );
};

export default DrawerContainer;
