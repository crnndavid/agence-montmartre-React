import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import styles from "./BreadCrumb.module.css";
const BreadCrumb = ({ url }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item
        linkProps={{ to: `/` }}
        linkAs={Link}
        className={styles.breadcrumbItem}
      >
        ACCUEIL
      </Breadcrumb.Item>
      <Breadcrumb.Item
        linkProps={{ to: `/${url}` }}
        linkAs={Link}
        className={styles.breadcrumbItem}
      >
        {url.toUpperCase()}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumb;
