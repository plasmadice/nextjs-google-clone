import React from "react";
import { Icon, Container, Menu } from "semantic-ui-react";

const Navbar = () => {
  return (
    <Menu fixed={"top"} text style={{ marginTop: "5px" }}>
      <Container>
        <Menu.Item active style={{ marginLeft: "5px" }}>
          <a
            className="link"
            href="https://about.google/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header"
          >
            About
          </a>
          <a
            className="link"
            href="https://store.google.com/US?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-US"
          >
            Store
          </a>
        </Menu.Item>
      </Container>
      <Container>
        <Menu.Item active position="right" style={{ marginRight: "5px" }}>
          <a
            className="link-right"
            href="https://mail.google.com/mail/?tab=wm&ogbl"
          >
            Gmail
          </a>
          <a
            className="link-right"
            href="https://www.google.com/imghp?hl=en&tab=wi&ogbl"
          >
            Images
          </a>
          <Icon
            link
            name="grid layout"
            size={"large"}
            style={{
              opacity: 0.8,
              marginTop: "2px",
              textDecoration: "none"
            }}
          />
        </Menu.Item>
      </Container>
      <style jsx>{`
        .link,
        .link-right {
          cursor: pointer;
          margin: 0 10px;
          font-weight: 500;
        }
        .link:hover,
        .link-right:hover {
          text-decoration: underline;
        }

        a:visited,
        a:link {
          color: black;
        }
      `}</style>
    </Menu>
  );
};

export default Navbar;
