import illustration from '../images/illustration-thank-you.svg'

export const ThankYou = ({rate} : {rate:string}) => {

  return (
    <div className='flex flex-col gap-7 rounded-3xl bg-Dark-Blue w-[22rem] md:w-[30rem] md:p-10 p-5'>
        <div className='flex flex-col items-center gap-5'>
            <div>
                <img src={illustration} alt="" />
            </div>
            
            <span className=' rounded-full bg-light-dark-blue w-fit py-2 px-5 text-Orange'>
                You selected {rate} out of 5
            </span>
        </div>

        <div className='flex flex-col items-center gap-5'>
            <h1 className='text-4xl text-white font-semibold'>
                Thank you!
            </h1>

            <p className='text-md text-center md:text-lg text-Light-Grey'>
                We appreciate you taking the time to give a rating.
                If you ever need more support, don't hesitate to 
                get in touch!
            </p>
        </div>
    </div>
  )
}
