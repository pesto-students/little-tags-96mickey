// vendor
import React from "react";
import { Link } from "react-router-dom";

//styles
import {
  FooterStyled,
  FooterWrapperStyled,
  FooterContactInfoStyled,
  FooterCategoriesStyled,
  FooterContactUsStyled,
  FooterTitleStyled,
  FooterCategoryTextStyled,
  FooterCardIconStyled,
  FooterSeparator,
  FooterBottomSeparator,
  FooterCategoryLinkStyled,
} from "./footer.styled";

const renderContactInfoData = (contactInfoData) =>
  contactInfoData.map((contact, index) => (
    <FooterCategoryLinkStyled goTo={contact.goTo}>
      <Link to={contactInfoData.goTo}>
        <FooterCategoryTextStyled
          key={`FooterContactInfo-${index}`}
        >{`${contact.key} ${contact.value}`}</FooterCategoryTextStyled>
      </Link>
    </FooterCategoryLinkStyled>
  ));

const renderCardIcon = (cardUrls) =>
  cardUrls.map((cardUrl, index) => (
    <FooterCardIconStyled
      key={`FooterCardIcon-${index}`}
      src={cardUrl}
    ></FooterCardIconStyled>
  ));

export const Footer = ({ contactInfoData, cardUrls, categories }) => {
  return (
    <FooterStyled>
      <FooterWrapperStyled textColor="black">
        <FooterContactInfoStyled>
          <FooterTitleStyled>Contact Info</FooterTitleStyled>
          {renderContactInfoData(contactInfoData)}
          <FooterCategoryTextStyled>We accept:</FooterCategoryTextStyled>
          {renderCardIcon(cardUrls)}
        </FooterContactInfoStyled>

        <FooterCategoriesStyled>
          <FooterTitleStyled>Categories</FooterTitleStyled>
          {renderContactInfoData(categories)}
        </FooterCategoriesStyled>

        <FooterContactUsStyled>
          <FooterTitleStyled>Let’s stay in touch</FooterTitleStyled>
        </FooterContactUsStyled>
      </FooterWrapperStyled>

      <FooterSeparator />

      <FooterBottomSeparator>
        <FooterCategoryTextStyled isColorLight>
          © 2020, Little Tags Website
        </FooterCategoryTextStyled>
        <FooterCategoryTextStyled isColorLight>
          All Rights Reserved.
        </FooterCategoryTextStyled>
      </FooterBottomSeparator>
    </FooterStyled>
  );
};
