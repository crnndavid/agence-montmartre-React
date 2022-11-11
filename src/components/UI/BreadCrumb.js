import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

const BreadCrumb = ({ url }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item linkProps={{ to: `/` }} linkAs={Link}>
        ACCUEIL
      </Breadcrumb.Item>
      <Breadcrumb.Item linkProps={{ to: `/${url}` }} linkAs={Link}>
        {url.toUpperCase()}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumb;
