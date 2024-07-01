import React, { SetStateAction } from 'react'
import star from '../images/icon-star.svg'
import { useNavigate } from 'react-router'

export const RatingPage = ({setRate, rate} : {setRate:React.Dispatch<SetStateAction<string>>, rate:string}) => {
    const navigate = useNavigate()

    const handleSubmit = () => {
        if(rate !== '0') {
            navigate('/ThankYou')
        }
    }

  return (
    <div className='flex flex-col gap-7 rounded-3xl bg-Dark-Blue w-[22rem] md:w-[30rem] md:p-10 p-5'>
        <div className=' rounded-full bg-light-dark-blue w-fit p-3'>
            <img src={star} alt="" />
        </div>

        <div className='flex flex-col items-start gap-3'>
            <h3 className='text-white text-4xl'>
                How did we do?
            </h3>

            <p className='md:text-lg text-Light-Grey'>
                Please let us know how we did with your support
                request. All feedback is appreciated to help us
                improve our offering!
            </p>
        </div>

        <div className='flex items-center justify-between'>
            <button onClick={(e) => setRate(e.currentTarget.value)} value={1}
            className='bg-light-dark-blue hover:bg-Orange active:bg-white hover:text-Very-Dark-Blue font-semibold active:text-Very-Dark-Blue duration-300 text-Light-Grey py-3 px-5 rounded-full'>
                1
            </button>

            <button onClick={(e) => setRate(e.currentTarget.value)} value={2}
            className='bg-light-dark-blue hover:bg-Orange active:bg-white hover:text-Very-Dark-Blue font-semibold active:text-Very-Dark-Blue duration-300 text-Light-Grey py-3 px-5 rounded-full'>
                2
            </button>

            <button onClick={(e) => setRate(e.currentTarget.value)} value={3}
            className='bg-light-dark-blue hover:bg-Orange active:bg-white hover:text-Very-Dark-Blue font-semibold active:text-Very-Dark-Blue duration-300 text-Light-Grey py-3 px-5 rounded-full'>
                3
            </button>

            <button onClick={(e) => setRate(e.currentTarget.value)} value={4}
            className='bg-light-dark-blue hover:bg-Orange active:bg-white hover:text-Very-Dark-Blue font-semibold active:text-Very-Dark-Blue duration-300 text-Light-Grey py-3 px-5 rounded-full'>
                4
            </button>

            <button onClick={(e) => setRate(e.currentTarget.value)} value={5}
            className='bg-light-dark-blue hover:bg-Orange active:bg-white hover:text-Very-Dark-Blue font-semibold active:text-Very-Dark-Blue duration-300 text-Light-Grey py-3 px-5 rounded-full'>
                5
            </button>

        </div>

        <button onClick={() => handleSubmit()}
        className='md:text-lg bg-Orange duration-300 hover:bg-white py-3 rounded-full font-semibold tracking-widest'>
            SUBMIT
        </button>
    </div>
  )
}
