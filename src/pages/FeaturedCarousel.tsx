import React from 'react';
import useAxios from 'axios-hooks'

import Carousel from '../components/Carousel'

import site from '../site.json';
import { title } from 'process';

export default () => {
//   const [{ data, loading, error }] = useAxios(
//     'site.json'
//   );

  return (
    <Carousel items={site.items.map(({ 
        title,
        fullUrl,
        excerpt,
        assetUrl 
    }) => ({
        title,
        link: fullUrl,
        image: assetUrl,
        caption: excerpt || ''
    }))}
    />
  )
}
