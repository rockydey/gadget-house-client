import React from 'react';
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

const override = css`
  display: block;
`;

const Spinner = () => {
    return (
        <div className='h-40 flex items-center justify-center'>
            <HashLoader color='#e5b94a' css={override} size={50} />
        </div>
    );
};

export default Spinner;