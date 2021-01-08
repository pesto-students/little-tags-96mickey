// vendor
import { StyledLink } from "components";
import React from "react";

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
    <FooterCategoryLinkStyled key={index} goTo={contact.goTo}>
      <StyledLink to={contactInfoData.goTo}>
        <FooterCategoryTextStyled
          key={`FooterContactInfo-${index}`}
        >{`${contact.key} ${contact.value}`}</FooterCategoryTextStyled>
      </StyledLink>
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
