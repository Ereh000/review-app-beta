import { Banner } from "@shopify/polaris";
import React from "react";

const Alert = ({title, message}) => {
  return (
    <Banner title={title} onDismiss={() => {}}>
      <p>{message}</p>
    </Banner>
  );
};

export default Alert;
