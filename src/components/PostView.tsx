import { FC, memo } from 'react';

import { PostTypes } from '../types';
import { formatCreated } from '../utilites';

type PropsTypes = PostTypes & {
  toggleEdit: () => void;
  onDeletePost: (id?: number) => () => Promise<void>;
};

export const PostView: FC<PropsTypes> = memo(({ toggleEdit, onDeletePost, id, content, created }) => {
  return (
    <div className="post">
      <div className="post__top">
        <img
          className="post__top-img"
          alt=''
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/913b3326786729.5635a73b2f440.jpg"
        />
        <div>
          <h3 className="post__top-title">Кто-то</h3>
          <p className="post__top-info">
            Основатель группы • <span className="post__top-info_created">{formatCreated(created)}</span>
          </p>
        </div>
      </div>
      <p className="post__content">{content}</p>
      <div className="post__actions">
        <button className="post__actions-btn" type="button">
          Нравится
        </button>
        <button className="post__actions-btn" type="button">
          Комментировать
        </button>
      </div>
      <div className="post__bottom">
        <button className="post__bottom-btn-edit btn" onClick={toggleEdit}>
          Изменить
        </button>
        <button className="post__bottom-btn-delete btn" onClick={onDeletePost(id)}>
          Удалить
        </button>
      </div>
    </div>
  );
});
