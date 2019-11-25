import React, { useState } from "react";
import {
  Input,
  Icon,
  Label,
  Responsive,
  Form,
  Button
} from "semantic-ui-react";

const Searchbar = () => {
  const [value, setValue] = useState("");

  const handleChange = event => setValue(event.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    value !== ""
      ? (window.location.href = `https://google.com/search?q=${encodeURIComponent(
          value
        )}`)
      : null;
  };

  const handleMouseEnter = e => {
    const parent = e.target.parentNode;
    const label = parent.querySelector(".label");
    label.style.boxShadow = "5px 0px 10px 0px rgba(0,0,0,0.30)";
    e.target.style.boxShadow = "-5px 0px 10px 0px rgba(0,0,0,0.30)";
  };

  const handleMouseLeave = e => {
    const parent = e.target.parentNode;
    const label = parent.querySelector(".label");
    label.style.boxShadow = "";
    e.target.style.boxShadow = "";
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Responsive
        {...Responsive.onlyMobile}
        style={{
          display: "flex"
        }}
      >
        <Input labelPosition="right" iconPosition="left">
          <input
            style={{
              borderRadius: "100px 0 0 100px"
            }}
            value={value}
            onChange={handleChange}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <Icon name="search" />
          <Label
            as="a"
            basic
            content={<Icon name="microphone" color="blue" />}
            style={{ borderRadius: "0 100px 100px 0" }}
          />
        </Input>
      </Responsive>
      <Responsive
        minWidth={769}
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Input
          fluid
          labelPosition="right"
          iconPosition="left"
          style={{
            minWidth: "584px",
            maxWidth: "768px"
          }}
        >
          <input
            style={{
              borderRadius: "100px 0 0 100px"
            }}
            value={value}
            onChange={handleChange}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <Icon name="search" />
          <Label
            as="a"
            basic
            content={<Icon name="microphone" color="blue" />}
            style={{ borderRadius: "0 100px 100px 0" }}
          />
        </Input>
      </Responsive>
      <Button
        basic
        active
        content="Google Search"
        style={{ opacity: "0.8", margin: "30px 15px 0 0" }}
        onSubmit={handleSubmit}
      />
      <Button
        basic
        active
        content="I'm Feeling Lucky"
        style={{ opacity: "0.8" }}
        onSubmit={handleSubmit}
      />
    </Form>
  );
};

export default Searchbar;
