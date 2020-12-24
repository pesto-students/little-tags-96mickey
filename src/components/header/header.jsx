import React from "react";

//styles
import {
  HeaderStyled,
  HeaderWrapperStyled,
  HeaderBrandNameStyled,
  HeaderComponentInputWrapperStyled,
} from "./header.styled";

// components
import DrawerContainer from "./../drawer/drawer-component";
import IconComponent from "./../icon-component/icon-component";
import Input from "./../input";

const menuList = [
  {
    name: "Categories",
    subMenu: [
      {
        name: "Accessories",
        goTo: "",
      },
      {
        name: "Shirts",
        goTo: "",
      },
      {
        name: "Pants",
        goTo: "",
      },
      {
        name: "Jackets",
        goTo: "",
      },
    ],
  },
];

export const Header = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

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
    <HeaderWrapperStyled scrollPosition={scrollPosition}>
      <DrawerContainer
        isOpen={isOpen}
        onClose={toggleDrawer}
        menuList={menuList}
        username={"Karan"}
        sidebarTitle={"Little Tags"}
      />

      <HeaderStyled>
        <IconComponent
          name="fa-bars"
          size="40px"
          color={isHeaderInverse ? "black" : "white"}
          handleClick={toggleDrawer}
        />
        <HeaderBrandNameStyled isHeaderInverse={isHeaderInverse}>
          Little Tags
        </HeaderBrandNameStyled>
        <HeaderComponentInputWrapperStyled>
          <Input
            iconName="fa-search"
            placeholder="Search..."
            handleInputChange={handleInputChange}
          />
        </HeaderComponentInputWrapperStyled>
      </HeaderStyled>
    </HeaderWrapperStyled>
  );
};
