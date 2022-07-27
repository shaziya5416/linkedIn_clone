import { Avatar } from '@mui/material';
import React ,{ forwardRef }from 'react';
import InputOption from './InputOption';
import './Post.css';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


const Post=forwardRef(({ name, description, message, photoUrl},ref)=> {
  console.log(name);
  return (
    <div ref={ref} className="post">
      <div className="post__header">

        <Avatar src={photoUrl}>  </Avatar>
        <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
          <p>{message}</p>
      </div>
      <div className="post__buttons">
          <InputOption  Icon={ThumbUpOffAltIcon} title="Like" color="gray"/>
          <InputOption  Icon={ChatBubbleOutlineIcon} title="Comment" color="gray"/>
          <InputOption  Icon={ShareIcon} title="Share" color="gray"/>
          <InputOption  Icon={SendOutlinedIcon} title="Send" color="gray"/>
      </div>
    </div>
  );
})

export default Post;
