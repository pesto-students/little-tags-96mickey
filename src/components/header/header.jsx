// vendor
import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";

//styles
import {
  HeaderStyled,
  HeaderWrapperStyled,
  HeaderBrandNameStyled,
  HeaderComponentInputWrapperStyled,
  HeaderLoginStyled,
  HeaderUserLogo,
} from "./header.styled";

// components
import DrawerContainer from "./../drawer/drawer-component";
import IconComponent from "./../icon-component/icon-component";
import Input from "./../input";
import ModalComponent from "./../login-modal/login-modal.component";

// constants
import { menuList } from "./../../constants/header.constants";
import { StyledLink } from "components/styled-link";

export const Header = ({ isHome }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userDetails = useSelector((state) => state.user.userdetails);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleInputChange = (value) => {
    console.log(value);
  };

  const isHeaderInverse = scrollPosition > 100;
  return (
    <HeaderWrapperStyled scrollPosition={scrollPosition} isHomeRoute={isHome}>
      <DrawerContainer
        isOpen={isOpen}
        onClose={toggleDrawer}
        menuList={menuList}
        sidebarTitle="Little Tags"
        isLoggedIn={isLoggedIn}
        userDetails={userDetails}
      />

      <HeaderStyled>
        <IconComponent
          name="fa-bars"
          size="40px"
          color={isHome ? (isHeaderInverse ? "black" : "white") : "black"}
          handleClick={toggleDrawer}
        />
        <StyledLink to="/">
          <HeaderBrandNameStyled
            isHeaderInverse={isHeaderInverse}
            isHomeRoute={isHome}
          >
            Little Tags
          </HeaderBrandNameStyled>
        </StyledLink>
        <HeaderComponentInputWrapperStyled>
          <Input
            iconName="fa-search"
            placeholder="Search..."
            handleInputChange={handleInputChange}
          />
        </HeaderComponentInputWrapperStyled>

        {isLoggedIn ? (
          <HeaderLoginStyled
            isHeaderInverse={isHeaderInverse}
            isHomeRoute={isHome}
          >
            <HeaderUserLogo
              src={userDetails.imageUrl}
              alt="User Icon"
              srcset=""
            />
            {userDetails.username}
          </HeaderLoginStyled>
        ) : (
          <HeaderLoginStyled
            isHeaderInverse={isHeaderInverse}
            isHomeRoute={isHome}
            onClick={() =>
              dispatch({
                type: "OPEN_LOGIN_MODAL",
              })
            }
          >
            Log in / Sign up
          </HeaderLoginStyled>
        )}
        <ModalComponent />
      </HeaderStyled>
    </HeaderWrapperStyled>
  );
};

const mapStateToProps = (state) => {
  return {
    userState: state,
  };
};

export default connect(mapStateToProps, null)(Header);
