import React from 'react';
import styled from 'styled-components';

type BookmarkProps = {
  hasBookmarked: boolean;
  bookmarkItem: () => void;
  removeBookmark: () => void;
};

const StyleBookmark = styled.div`
  display: flex;
  flex-direction: row;
  width: 50px;
`;

export default ({
  hasBookmarked,
  bookmarkItem,
  removeBookmark,
}: BookmarkProps): JSX.Element => {
  return (
    <StyleBookmark>
      <input
        type='checkbox'
        checked={hasBookmarked}
        onChange={() => (hasBookmarked ? removeBookmark() : bookmarkItem())}
        value='Bookmark'
      />
      <label>Bookmark</label>
    </StyleBookmark>
  );
};
