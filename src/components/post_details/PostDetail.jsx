import React, { useState } from 'react';
import cssClasses from './Post.module.css';

const PostDetail = ({
  id,
  title,
  body,
  deletedHandle,
  updatedHandleTitle,
  updatedHandleBody,
}) => {
  const [showTitle, setShowTitle] = useState(false);
  const [showBody, setShowBody] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [eidtBody, setEditBody] = useState(body);

  let elementTitle = title;
  let elementBody = body;
  const handleUpdateTitle = () => {
    setShowTitle(false);
    updatedHandleTitle({ id, title: editTitle, body: '' });
  };

  const handleUpdateBody = () => {
    setShowBody(false);
    updatedHandleBody({ id, title: '', body: eidtBody });
  };

  if (showTitle) {
    elementTitle = (
      <>
        <input
          className={cssClasses.txtEditTitle}
          type='text'
          value={editTitle}
          onChange={e => setEditTitle(e.target.value)}
        />
        <button className={cssClasses.btnEditOne} onClick={handleUpdateTitle}>
          Update Title
        </button>
        <button
          className={cssClasses.btnDelete}
          onClick={e => setShowTitle(!showTitle)}
        >
          x
        </button>
      </>
    );
  }
  if (showBody) {
    elementBody = (
      <>
        <input
          className={cssClasses.txtEditBody}
          type='text'
          value={eidtBody}
          onChange={e => setEditBody(e.target.value)}
        />
        <button className={cssClasses.btnEditOne} onClick={handleUpdateBody}>
          Update Body
        </button>
        <button
          className={cssClasses.btnDelete}
          onClick={e => setShowBody(!showBody)}
        >
          x
        </button>
      </>
    );
  }

  return (
    <div>
      <div className={cssClasses.divList}>
        <li>
          <div className={cssClasses.listTitle}>{elementTitle}</div>
          <div className={cssClasses.listBody}>{elementBody}</div>
        </li>
      </div>
      <div className={cssClasses.divButton}>
        <button
          className={cssClasses.btnEdit}
          onClick={e => setShowTitle(!showTitle)}
        >
          Edit Title
        </button>
        <button
          className={cssClasses.btnEdit}
          onClick={e => setShowBody(!showBody)}
        >
          Edit Body
        </button>
        <button
          className={cssClasses.btnDelete}
          onClick={deletedHandle.bind(this, id)}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
