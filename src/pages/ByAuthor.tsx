import React, { useState} from 'react';
import _ from 'lodash';

import ArticleList from '../components/ArticleList'

import site from '../site.json';

import { RawItem } from '../models/Item'

export default () => {
    const [selectedAuthor, setSelectedAuthor] = useState('');
    
    const authors = _.uniq(
        site.items, 
        // @ts-ignore
        // TODO: huh?
        ({ authorId }) => authorId
    ).map(({ author }) => (
        author
    ));

    const articlesByAuthor = site.items.filter(({ authorId }) => (
        !selectedAuthor || authorId === selectedAuthor
    ));

    return (
        <>
            <select 
                value={selectedAuthor} 
                onChange={({ target }) => {
                    setSelectedAuthor(target.value)
                }}
            >
                <option></option>
                {authors.map(({ id, displayName }) => (
                    <option value={id}>{displayName}</option>
                ))}
            </select>
     
        <ArticleList items={articlesByAuthor.map(({ 
            title,
            fullUrl,
            assetUrl,
        }) => ({
            title,
            image: assetUrl,
            link: fullUrl,
            caption: '',
        }))}
        />
    </>
  );
}