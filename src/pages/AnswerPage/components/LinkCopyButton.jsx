import IconCopyLink from '@assets/icons/IconCopyLink.svg?react';
import { useToastContext } from '@context/ToastContext';

const copyLink = () => {
  return new Promise((resolve, reject) => {
    const LINK = location.href;

    if (
      navigator.clipboard &&
      typeof navigator.clipboard.writeText === 'function'
    ) {
      // navigator.clipboard 지원O
      navigator.clipboard
        .writeText(LINK)
        .then(() => {
          resolve();
        })
        .catch(() => {
          reject();
        });
    } else {
      // navigator.clipboard 지원X
      const textArea = document.createElement('textarea');
      textArea.value = LINK;
      textArea.style.position = 'fixed';
      textArea.style.opacity = 0;
      textArea.style.zIndex = -9999;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      const result = document.execCommand('copy');

      if (result) {
        resolve();
      } else {
        reject();
      }

      document.body.removeChild(textArea);
    }
  });
};

function LinkCopyButton() {
  const { createToast } = useToastContext();

  const handleClickLinkCopy = async () => {
    let resultText;
    await copyLink()
      .then(() => {
        resultText = 'URL이 복사되었습니다';
      })
      .catch(() => {
        resultText = 'URL 복사에 실패했습니다. 수동으로 복사해주세요.';
      });

    createToast({
      message: resultText,
    });
  };

  return (
    <>
      <button onClick={handleClickLinkCopy}>
        <IconCopyLink width='40' height='40' aria-label='링크 복사 아이콘' />
      </button>
    </>
  );
}

export default LinkCopyButton;
