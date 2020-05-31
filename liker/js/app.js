'use strict';

const post = {
  id: 1,
  userLiked: false,
  img: {
    url: './img/unliked.svg'
  },
};

const postEl = document.querySelector('[data-action="like"]');
const imgEl = postEl.querySelector('[data-id="image"]');

const postWidget = {
  rootEl: postEl,
  imgEl,
};

postWidget.imgEl.onclick = () => {
  if (post.userLiked == false) {
    imgEl.src = './img/liked.svg';
    post.userLiked = true;
    return;
  }
postWidget.imgEl.src = './img/unliked.svg';
post.userLiked = false;
};
