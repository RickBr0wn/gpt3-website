import { FC } from 'react'
import { Brand, CallToAction, Navbar } from './Components'
import {
	Blog,
	Features,
	Footer,
	Header,
	Possibility,
	WhatGPT3
} from './Containers'

type Props = {}

const App: FC<Props> = function () {
	return (
		<div>
			<div className='gradient__bg'>
				<Navbar />
				<Header />
			</div>
			<Brand />
			<WhatGPT3 />
			<Features />
			<Possibility />
			<CallToAction />
			<Blog />
			<Footer />
		</div>
	)
}

export default App

// Path: src/index.tsx
