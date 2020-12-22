import React from "react";
import Drawer from "components/drawer/drawer";
import { CategoryCard } from "components/category-card/category-card";
import { FixedHeightDiv } from "./home.styled";
export const Home = () => {
  return (
    <div>
      <Drawer></Drawer>
      <FixedHeightDiv>
        <CategoryCard 
          displayText="Sample Text" 
          image={process.env.PUBLIC_URL + '/yellow-jacket.png'} 
          link="/prod"
        />
      </FixedHeightDiv>
    </div>
  );
};
