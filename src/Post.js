import React from 'react'
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "./css/post.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import SmsIcon from '@mui/icons-material/Sms';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const numberOfPosts = 134;
function Post({name, description, message, photourl}) {
  return (
    <div className='posts'>
	<div className='post_header'>
		<div className='post_headerLeft'>
                  <Avatar src={photourl}/>
		  <div className='post_profile_details'>
			<h3>{name}</h3>
			<p>{description}</p>

		  </div>
		</div>
		<MoreHorizIcon />
	</div>
	{/* const PostsCounter = () => {
  return ( */}
    <div style={{color:"white"}}>
      <p>{numberOfPosts} posts</p>
    </div>
  
	<div className='post__body'>
		<p>{message}</p>

	</div>
	<div className='post_footer'>
		<div className='post_footer_options'>
			<FavoriteIcon style={{color:"white"}}/>
			<span>Like</span>

		</div>
		<div className='post_footer_options'>
			<RepeatOnIcon style={{color:"white"}}/>
			<span>Repost</span>

		</div>
		<div className='post_footer_options'>
			<SmsIcon style={{color:"white"}}/>
			<span>Comment</span>

		</div>
		<div className='post_footer_options'>
			<ShareOutlinedIcon style={{color:"white"}}/>
			<span>Share</span>
			

		</div>
	</div>
      
    </div>
  )
}

export default Post
