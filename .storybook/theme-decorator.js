import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    // Fonts
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');

    // Making the components flush against the iframe
    body {
        margin: 0;

        // overwrite storybook's padding
        padding: 0 !important;

        // from Squarespace
        line-height: 33px;
    }

    h2 {
        font-size: calc(3.12vh + 1rem);
        font-family: 'Roboto Slab', serif;
    }
    body {
        margin: 0;

        // overwrite storybook's padding
        padding: 0 !important;

        // from Squarespace
        line-height: 33px;
    }

    h2 {
        font-size: calc(3.12vh + 1rem);
        font-family: 'Roboto Slab', serif;
    }
    body {
        margin: 0;

        // overwrite storybook's padding
        padding: 0 !important;

        // from Squarespace
        line-height: 33px;
    }

    h2 {
        font-size: calc(3.12vh + 1rem);
        font-family: 'Roboto Slab', serif;
    }
    body {
        margin: 0;

        // overwrite storybook's padding
        padding: 0 !important;

        // from Squarespace
        line-height: 33px;
    }

    h2 {
        font-size: calc(3.12vh + 1rem);
        font-family: 'Roboto Slab', serif;
    }
    body {
        margin: 0;

        // overwrite storybook's padding
        padding: 0 !important;

        // from Squarespace
        line-height: 33px;
    }

    h2 {
        font-size: calc(3.12vh + 1rem);
        font-family: 'Roboto Slab', serif;
    }
    body {
        margin: 0;

        // overwrite storybook's padding
        padding: 0 !important;

        // from Squarespace
        line-height: 33px;
    }

    h2 {
        font-size: calc(3.12vh + 1rem);
        font-family: 'Roboto Slab', serif;
    }
    body {
        margin: 0;

        // overwrite storybook's padding
        padding: 0 !important;

        // from Squarespace
        line-height: 33px;

        font-family: 'Roboto' sans-serif;
    }

    h2 {
        font-size: calc(3.12vh + 1rem);
        font-family: 'Roboto Slab', serif;
    }
`;

export default (Story) => (
    <Fragment>
        <GlobalStyle />
        <Story />
    </Fragment>
);