import { Component, ReactNode } from "react";
import QrCode from "./Components/qr-code-components";
import { Container, Circle1, Circle2 } from "./Components/qr-code-components";
export default class App extends Component {
  render(): ReactNode {
    return (
      <div>
        <Container>
          <QrCode />
          <Circle1 />
          <Circle2 />
        </Container>
      </div>
    );
  }
}