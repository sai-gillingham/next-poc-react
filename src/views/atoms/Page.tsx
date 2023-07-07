import React, {forwardRef} from 'react';
import {Helmet} from 'react-helmet';
import PropTypes from 'prop-types';



const Page = forwardRef(({
                             // @ts-ignore
                             children,
                             // @ts-ignore
                             title = '',
                             ...rest
                         }, ref) => {
    return (
        <div
            // @ts-ignore
            ref={ref}
            {...rest}
        >
            <Helmet>
                <title>{title}</title>
            </Helmet>
            {children}
        </div>
    );
});

Page.propTypes = {
    // @ts-ignore
    children: PropTypes.node.isRequired,
    title: PropTypes.string
};

export default Page;
