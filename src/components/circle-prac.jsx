import pic1 from '../assets/img/1.png'
import pic2 from '../assets/img/2.png'
import pic3 from '../assets/img/3.png'
import pic4 from '../assets/img/4.png'
import pic5 from '../assets/img/5.png'
import pic6 from '../assets/img/6.png'
import pic7 from '../assets/img/7.png'
import pic8 from '../assets/img/8.png'
import pic9 from '../assets/img/9.png'
import pic10 from '../assets/img/10.png'

const CirclePrac = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full md:w-[600px] bg-gradient-to-b from-[#e3ffcd] to-[#e3ffcd84] rounded-3xl">
        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] md:px-14 translate-x-5 md:translate-x-12">
            <div className="absolute inset-0 border border-black/20 rounded-full" />
            <div className="absolute inset-[50px] md:inset-[75px] border border-black/20 rounded-full" />
            <div className="absolute inset-[100px] md:inset-[150px] border border-black/20 rounded-full" />

            <div className='absolute top-22 left-33  md:top-33 md:left-56 bg-white rounded-lg p-2 shadow-lg w-8 h-8 md:w-12 md:h-12 flex items-center justify-center'>
              <img src={pic1} alt="pic1" className='w-4 h-4 md:w-8 md:h-8' />
            </div>
            <div className='absolute bottom-22 left-33 md:bottom-33 md:left-56 bg-white rounded-lg p-2 shadow-lg w-8 h-8 md:w-12 md:h-12 flex items-center justify-center'>
              <img src={pic2} alt="pic2" className='w-4 h-4 md:w-8 md:h-8' />
            </div>
            <div className='absolute top-34 left-22 md:top-55 md:left-33 bg-white rounded-lg p-2 shadow-lg w-8 h-8 md:w-12 md:h-12 flex items-center justify-center'>
              <img src={pic3} alt="pic3" className='w-4 h-4 md:w-8 md:h-8' />
            </div>
            <div className='absolute top-34 right-22 md:top-55 md:right-33 bg-white rounded-lg p-2 shadow-lg w-8 h-8 md:w-12 md:h-12 flex items-center justify-center'>
              <img src={pic4} alt="pic4" className='w-4 h-4 md:w-8 md:h-8' />
            </div>
            <div className='absolute top-25 left-11 md:top-40 md:left-17 bg-white rounded-lg p-2 shadow-lg w-8 h-8 md:w-12 md:h-12 flex items-center justify-center'>
              <img src={pic5} alt="pic5" className='w-4 h-4 md:w-8 md:h-8' />
            </div>
            <div className='absolute top-25 right-11 md:top-40 md:right-17 bg-white rounded-lg p-2 shadow-lg w-8 h-8 md:w-12 md:h-12 flex items-center justify-center'>
              <img src={pic6} alt="pic6" className='w-4 h-4 md:w-8 md:h-8' />
            </div>
            <div className='absolute bottom-25 left-11 md:bottom-40 md:left-17 bg-white rounded-lg p-2 shadow-lg w-8 h-8 md:w-12 md:h-12 flex items-center justify-center'>
              <img src={pic7} alt="pic7" className='w-4 h-4 md:w-8 md:h-8' />
            </div>
            <div className='absolute bottom-25 right-11 md:bottom-40 md:right-17 bg-white rounded-lg p-2 shadow-lg w-8 h-8 md:w-12 md:h-12 flex items-center justify-center'>
              <img src={pic8} alt="pic8" className='w-4 h-4 md:w-8 md:h-8' />
            </div>
            <div className='absolute top-34 -left-3 md:top-55 md:-left-5 bg-white rounded-lg p-2 shadow-lg w-8 h-8 md:w-12 md:h-12 flex items-center justify-center'>
              <img src={pic9} alt="pic9" className='w-4 h-4 md:w-8 md:h-8' />
            </div>
            <div className='absolute top-34 -right-3 md:top-55 md:-right-5 bg-white rounded-lg p-2 shadow-lg w-8 h-8 md:w-12 md:h-12 flex items-center justify-center'>
              <img src={pic10} alt="pic10" className='w-4 h-4 md:w-8 md:h-8' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default CirclePrac
