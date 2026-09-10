"use client"

import React, {useEffect, useState} from 'react';

import Link from 'next/link';

function Home(){
  	return(
		<div id="intro-page" className='bg-cream'>
			<div className='intro-container'>
				<h1 className='intro-title text-4xl text-text-dark mb-6'>Future Post</h1>
				<p className='intro-desc text-text-mid mb-4'>Send a post to future yourself</p>
				<div className='flex flex-row gap-3'>
					<Link href={'/write'} className='btn-start bg-brown text-white shadow-xl rounded-full px-4 py-2'>Send Post</Link>
					<Link href={'/read'} className='btn-start bg-brown text-white shadow-xl rounded-full px-4 py-2'>Read Post</Link>
				</div>
			</div>
		</div>
  	)
}

export default Home;