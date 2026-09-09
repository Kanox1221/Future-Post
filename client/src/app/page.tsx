"use client"

import React, {useEffect, useState} from 'react';

function Home(){
  return(
		<div id="intro-page" className='bg-cream'>
			<div className='intro-container'>
				<h1 className='intro-title text-4xl text-text-dark mb-6'>Future Post</h1>
				<p className='intro-desc text-text-mid mb-4'>Send a post to future yourself</p>
				<button className='btn-start bg-brown text-white shadow-xl rounded-full px-4 py-2'>Send Post</button>
			</div>
		</div>
  )
}

export default Home;