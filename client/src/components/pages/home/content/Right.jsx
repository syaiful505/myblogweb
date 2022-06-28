import React from 'react'
import { Tag, FollowPage, PopularArticle, CategoryList, SearchBox } from '../../../molecules';

export const Right = () => {
  return (
    <div className="col-4">
        <div className="search-category-tag">
            <SearchBox />
            <PopularArticle/>
            <FollowPage />
            <CategoryList />
            <Tag />
        </div>
    </div>
  )
}
