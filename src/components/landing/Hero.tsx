import React from 'react'

const Hero = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center gap-5'>
            <div className='px-4 py-2 border border-purple-600 rounded-full'>
                Preview UI components before you build
            </div>
            <h1>
                Design, preview, and refine UI interactions — before development
            </h1>
            <h3>
                CompoLab lets teams visualize components, motion, and interaction states early — so frontend decisions are faster, clearer, and less risky.
            </h3>
            <button>
                Get Started
            </button>
        </div>
    )
}

export default Hero
