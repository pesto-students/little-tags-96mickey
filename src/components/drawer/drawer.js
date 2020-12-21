import React from "react";
import DrawerContainer from "./drawer-container";
const menuList = [
  {
    name: "Categories",
    navigateTo: "",
    subMenu: [
      {
        name: "Accessories",
        navigateTo: "",
      },
      {
        name: "Shirts",
        navigateTo: "",
      },
      {
        name: "Pants",
        navigateTo: "",
      },
      {
        name: "Jackets",
        navigateTo: "",
      },
    ],
  },
];

const Drawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);
  return (
    <div>
      <button onClick={toggleDrawer}>Toggle Drawer</button>
      <DrawerContainer
        isOpen={isOpen}
        onClose={toggleDrawer}
        menuList={menuList}
        username={"Karan"}
        sidebarTitle={"Little Tags"}
      />
    </div>
  );
};

export default Drawer;
