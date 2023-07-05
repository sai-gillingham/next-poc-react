import React, {useState} from 'react';
import Footer from "./Footer";
import Header from "./Header";
import Contents from "../../components/share/Contents";

/**
 *
 * @param getProfile
 * @param managerProfile
 * @param sidebarLinks
 * @returns {JSX.Element}
 * @constructor
 */
const FrontLayout = ({}) => {
  return (
    <div>
      <Header/>
      <div>
        <div>
          <div>
            <Contents/>
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontLayout;
