import video1 from '../assets/video1.mp4' 
import video2 from '../assets/video2.mp4' 

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className='text-4xl sm:text-6xl text-center lg:text-7xl tracking-wider'>
            VirtaulR build tools
            <span className='bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text'>
             {" "}for developers  
            </span> 
        </h1>
        <p className='text-center text-lg mt-10 max-w-4xl text-neutral-500'>
            Empower your creativity and bring your VR apps ideas to life with our intuitive development tools.Get started today and turn your imagination
            into immersive reality!  
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className='bg-gradient-to-r from-orange-400 to-orange-800 rounded-md py-3 px-4 mx-3'>
                Start for Free
            </a>
            <a href="#" className='py-3 px-4 rounded-md border'>Documentation</a>
        </div>
        <div className='flex mt-10 justify-center'>
            <video loop muted autoPlay className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
            <source src={video1} type='video/mp4'/>
            Your Browser does not support the video tag
            </video>
            <video loop muted autoPlay className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
            <source src={video2} type='video/mp4'/>
            Your Browser does not support the video tag 
            </video>
        </div>
    </div>
  )
}

export default HeroSection