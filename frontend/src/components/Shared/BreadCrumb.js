import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "@react-icons/all-files/fa/FaHome";

const BreadCrumb = (props) => {
  const { title } = props;
  return (
    <div className="w-full text-center py-8">
      <div className="container">
            <p className="flex items-center justify-center mb-0">
              <Link to="/" className="flex items-center">
                <FaHome className="mr-1"/>
                Home &nbsp;
              </Link>
             <span> / {title}</span>
            </p>
          </div>
    </div>
  );
};

export default BreadCrumb;