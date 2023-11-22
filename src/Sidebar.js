import React from 'react'
import "./css/sidebar.css"
import { Avatar } from '@mui/material'


function Sidebar() {
  return (
    <div className='sidebar'>
	<div className='sidebar_profile'>
		<img src='https://wallpapers.com/images/high/dumb-ways-to-die-2-celebration-nhypp2bwgfsvb5vd.webp' />
		<div className='profile_details'>
			<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlM4FvfdxemL57Z6wGh9Vj6SlvlD8zVVC8zg&usqp=CAU"/>
			<h4>Sachin choudhary</h4>
			<p>@WebDevloper</p>
		</div>
		<div>
		<div className='profile_status'>
		
	               <span className='status_number'>300</span><br></br>
			<span>Following</span>
			
		</div>
		<div className='profile_status'>
		
	               <span className='status_number'>100k</span><br></br>
			<span>Followers</span>
			
		</div>
		</div>
		<div>
			<span className='new'>Find new peoples</span>
		</div>
	</div>
      
    </div>
  )
}

export default Sidebar
