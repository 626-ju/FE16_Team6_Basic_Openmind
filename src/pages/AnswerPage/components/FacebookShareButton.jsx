import IconFacebookShare from '@assets/icons/IconFacebookShare.svg?react';
import { Link } from 'react-router-dom';

function FacebookShareButton() {
  const ShareURL = `https://www.facebook.com/sharer/sharer.php?u=${location.href}`;

  return (
    <>
      <Link to={ShareURL} target='_blank'>
        <IconFacebookShare
          width='40'
          height='40'
          aria-label='페이스북 공유 아이콘'
        />
      </Link>
    </>
  );
}

export default FacebookShareButton;
