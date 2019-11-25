import React from "react";
import { Menu, Container } from "semantic-ui-react";

const Footer = () => {
  return (
    <Menu borderless fixed={"bottom"} style={{ background: "rgba(0,0,0,.05)" }}>
      <Menu.Item>
        <a
          className="link"
          href="https://www.google.com/intl/en_us/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
        >
          Advertising
        </a>
        <a
          className="link"
          href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1"
        >
          Business
        </a>
        <a
          className="link"
          href="https://google.com/search/howsearchworks/?fg=1"
        >
          How Search works
        </a>
      </Menu.Item>
      <Menu.Item position="right" style={{ marginRight: "5px" }}>
        <a
          className="link-right"
          href="https://policies.google.com/privacy?fg=1"
        >
          Privacy
        </a>
        <a className="link-right" href="https://policies.google.com/terms?fg=1">
          Terms
        </a>
        <a
          className="link-right"
          href="https://www.google.com/preferences?hl=en"
        >
          Settings
        </a>
      </Menu.Item>
      <style jsx>{`
        .link,
        .link-right {
          cursor: pointer;
          margin: 0 15px 0 0;
          opacity: 0.8;
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

export default Footer;
