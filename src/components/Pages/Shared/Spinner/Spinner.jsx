import React from 'react';
import { css } from "@emotion/react";
import RingLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 2px;
  border-color: #e5b94a;
`;

const Spinner = () => {
    return (
        <div>
            <RingLoader css={override} size={50} />
        </div>
    );
};

export default Spinner;