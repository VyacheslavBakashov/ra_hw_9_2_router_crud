import { FC, FormEventHandler } from 'react';

import { PostTypes } from '../types';

type PropsTypes = PostTypes & {
  toggleEdit: () => void;
  onEditPost: FormEventHandler<HTMLFormElement>;
};

export const PostEdit: FC<PropsTypes> = ({ toggleEdit, onEditPost, content }) => {
  return (
    <form className="post-edit" onSubmit={onEditPost}>
      <div className="post-edit__top">
        <h2 className="post-edit__title">Редактировать публикацию</h2>
        <button className="post-edit__top-btn-close" type="button" onClick={toggleEdit}>
          ✖
        </button>
      </div>
      <div className="post-edit__wrapper">
        <img
          className="post-edit__top-img"
          alt=''
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/913b3326786729.5635a73b2f440.jpg"
        />
        <textarea className="post-edit__textarea" name="content" defaultValue={content} />
      </div>
      <div className="post-edit__info">
        <p className="post-edit__info-text">Фото/видео</p>
        <p className="post-edit__info-text">Отметить друзей</p>
        <p className="post-edit__info-text">Чувства/действия</p>
        <p className="post-edit__info-text">Отметить посещение</p>
        <p className="post-edit__info-text">GIF</p>
      </div>
      <button className="post-edit__btn-add btn">Сохранить</button>
    </form>
  );
};