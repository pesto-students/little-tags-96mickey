import Modal from "react-modal";
import React from "react";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import config from "./../../config.json";

// styles
import {
  ModalTitle,
  ModalSubTitle,
  ModalIconComponentWrapper,
  ModalIconWrapperStyled,
} from "./login-modal.styled";

// components
import IconComponent from "./../icon-component/icon-component";

Modal.setAppElement("#root");
const ModalContainer = () => {
  const isLoginModalOpen = useSelector((state) => state.user.isLoginModalOpen);
  const dispatch = useDispatch();

  const onFailure = (error) => {
    console.log(error);
  };

  const facebookResponse = ({ name, email, picture, accessToken }) => {
    dispatch({
      type: "LOGGED_IN",
      payload: {
        username: name,
        email,
        imageUrl: picture?.data?.url,
        tokenId: accessToken,
      },
    });
    closeLoginModal();
  };

  const googleResponse = ({
    profileObj: { email, imageUrl, name },
    tokenId,
  }) => {
    dispatch({
      type: "LOGGED_IN",
      payload: {
        username: name,
        email,
        imageUrl,
        tokenId,
      },
    });
    closeLoginModal();
  };

  const closeLoginModal = () => {
    dispatch({
      type: "CLOSE_LOGIN_MODAL",
    });
  };

  return (
    <Modal
      isOpen={isLoginModalOpen}
      shouldCloseOnOverlayClick={true}
      style={{
        overlay: {
          backgroundColor: "rgb(128,128,128, 0.8)",
        },
        content: {
          width: "400px",
          height: "400px",
          margin: 0,
          padding: "20px",
          borderRadius: "20px",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      <ModalTitle>Log in / Sign up</ModalTitle>
      <ModalSubTitle>Log in / Sign up using your</ModalSubTitle>
      <ModalIconWrapperStyled>
        <IconComponent
          color="black"
          name="fa-times"
          handleClick={closeLoginModal}
        />
      </ModalIconWrapperStyled>
      <FacebookLogin
        appId={config.FACEBOOK_APP_ID}
        autoLoad={false}
        buttonText="Facebook"
        fields="name,email,picture"
        callback={facebookResponse}
        textButton={
          <>
            <ModalIconComponentWrapper>
              <IconComponent name="fa-facebook" color="white" />
            </ModalIconComponentWrapper>
            Facebook
          </>
        }
        buttonStyle={{
          backgroundColor: "black",
          outline: "none",
          width: "100%",
          borderRadius: "6px",
          marginTop: "10px",
        }}
      />

      <ModalSubTitle>OR</ModalSubTitle>
      <GoogleLogin
        clientId={config.GOOGLE_CLIENT_ID}
        buttonText={
          <>
            <ModalIconComponentWrapper>
              <IconComponent name="fa-google" color="white" />
            </ModalIconComponentWrapper>
            Google
          </>
        }
        onSuccess={googleResponse}
        onFailure={onFailure}
        className="google-button"
        theme="dark"
      />
    </Modal>
  );
};

export default ModalContainer;
