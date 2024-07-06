import classNames from 'classnames/bind';

import style from './PostDetail.module.scss';
import Button from '/components/atoms/button/Button';

const cx = classNames.bind(style);

const PostDetail = () => {
  return (
    <div className={cx('container')}>
      <article>
        <div>
          <button type="button" className={cx('card', 'back-button')}>
            직무 게시판
          </button>
        </div>
        <div className={cx('card', 'content')}>
          <div>
            <h4>게시글 타이틀입니다.</h4>
          </div>
          <div>
            <span>직무 게시판</span>
          </div>
        </div>
        <div className={cx('card', 'answer')}>
          <div>
            <span>게시글의 답변을 달고 뱃지를 휙득해보세요.</span>
          </div>
          <div>
            <Button width={160} height={50}>
              답변하기
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PostDetail;
