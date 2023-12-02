import { Component, ReactNode } from "react";
import styled from "styled-components";
import qrUrl from "../img/qr-code.png";

const CardQR = styled.div`
  border: 1px solid #979797;
  width: 320px;
  height: 497px;
  margin: 0 auto;
  border-radius: 18px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const QrBox = styled.div`
  width: 288px;
  height: 288px;
  background-color: #2c7dfa;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  margin: 17px;
  padding-top: 15px;

  /* Mobile screen */
  @media (max-width: 375px) {
    background-color: #3685ff;
  }
`;
const ContentBox = styled(QrBox)`
  height: auto;
  background-color: white;
  margin: 0 auto;
  display: grid;
  * {
    margin: 5px;
    text-align: center;
  }
  :nth-child(1) {
    color: #3685ff;
  }

  :nth-child(2) {
    color: #7d889e;
  }
`;

export const Container = styled.div`
  background-color: #d5e1ef;
  height: 1000px;
  width: 100%;
  margin: 0 auto;

  // Mobile size screen
  @media (max-width: 375px) {
    height: 667px;
  }
`;

interface ImgQrProps {
  imgUrl: string;
}

const StyledImgQr = styled.img`
  width: 77%;
  height: 77%;
  border-radius: 18px;
  padding: 30px;
  margin-top: 20px;
`;

export const Circle1 = styled.div`
  width: 135px;
  height: 135px;
  background-color: white;
  opacity: 0.089;
  border-radius: 50%;
  position: absolute;
  top: 48.7%;
  left: 53.9%;
  transform: translate(-50%, -50%);

  // 1/4 circle
  border-top-left-radius: 100%;
  border-top-right-radius: 0%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 11%;

  /* Screen size */
  @media (max-width: 1920px), (max-height: 1080px) {
    top: 48.8%;
    left:53.7%;
    width: 150px;
    height: 150px;
  }

  @media (max-width: 375px) {
    background-color: #2c7dfa;
    opacity: 0.5;
  }

`;

export const Circle2 = styled(Circle1)`
  top: 4%;
  left: 42.5%;
  transform: rotate(180deg);
  width: 150px;
  height: 150px;
  
  /* @media (max-width: 375px) {
    top: 15%;
  } */

  /* Detop screen size */
  @media (max-width: 1280px), (max-height: 720px) {
    top: 18.2%;
    left:39%;
    transform: rotate(180deg);
    width: 150px;
    height: 150px;
  }

  @media (max-width: 1280px), (max-height: 1040px) {
    top: 28.1%;
    left:38.4%;
    transform: rotate(180deg);
    width: 150px;
    height: 150px;
  }

  @media (max-width: 1366px), (max-height: 768px) {
    top: 20.1%;
    left:38.4%;
    transform: rotate(180deg);
    width: 150px;
    height: 150px;
  }

  @media (max-width: 1440px), (max-height: 900px) {
    top: 29.1%;
    left:39.7%;
    transform: rotate(180deg);
    width: 150px;
    height: 150px;
  }

  @media (max-width: 1920px), (max-height: 1080px) {
    top: 25.3%;
    left:42.7%;
    transform: rotate(180deg);
    width: 150px;
    height: 150px;
  }

`;

class ImageQR extends Component<ImgQrProps> {
  render(): ReactNode {
    return <StyledImgQr src={this.props.imgUrl} alt="Image address" />;
  }
}

export default class QrCode extends Component {
  render(): ReactNode {
    return (
      <div>
        <CardQR>
          <QrBox>
            <ImageQR imgUrl={qrUrl} />
          </QrBox>
          <ContentBox>
            <h3>Improve your front-end skills by building projects</h3>
            <p>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </ContentBox>
        </CardQR>
      </div>
    );
  }
}
