import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";
export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0" }}>
          <img
            src="/images/logo-social.png"
            alt="logo"
            style={{ display: "block", width: 100 }}
          />
        </div>
        <Header as="h1">Dev.Keravi</Header>
      </div>
      <Gnb />
    </div>
  );
}
