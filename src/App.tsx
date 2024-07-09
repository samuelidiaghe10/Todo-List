import faqsIcon from '../src/images/icons8-faq-80.png'
import arrowDown from '../src/images/icons8-arrow-down-50.png'
import arrowUp from '../src/images/icons8-send-letter-50.png'
import { useState } from 'react'

function App() {
  const faqs = [
    {
      id: 1,
      question: 'Is there a free trial availble?',
      answer: "Yes you can try us for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get up and running."
    },

    {
      id: 2,
      question: 'Can i change my plan later?',
      answer: 'Of course you can! Our pricing scales with your company. Chat to our friendly team to find a solution that works for you as you grow.'
    },

    {
      id: 3,
      question: 'What is your cancellation policy?',
      answer: "We understand that things change, You can cancel your plan at any time and we'll refund you the difference you paid."
    },

    {
      id: 4,
      question: 'Can other info be added to an invoice?',
      answer: 'At the moment, there are no other ways for additional info to be added to an invoice.'
    },
  ]

  const [show, setShow] = useState<null | number>(null)

  const handleToggle = (index:number) => {
    if(show === index){
      return setShow(null)
    }

    setShow(index)
  }

  return (
    <div className='flex flex-col items-center py-8 gap-20 md:py-20'>
      <div className='flex flex-col items-center gap-5'>
        <div>
          <img src={faqsIcon} alt="" />
        </div>

        <h1 className='md:text-5xl text-3xl text-center font-semibold'>
          Frequently asked questions
        </h1>
      </div>

      <ul className='flex flex-col w-[22rem] divide-y-2 md:w-[35rem]'>
        {faqs.map((faq, index) =>
          <li key={index} className='flex py-7 flex-col gap-5'>
            <div className='flex items-center justify-between'>
              <h3 className='lg:text-xl font-medium text-md'>
                {faq.question}
              </h3>

              <button onClick={() => handleToggle(index)}>
                <img className='w-[23px]' src={show === index ? arrowUp : arrowDown} alt="" />
              </button>
            </div>

            <p className={`${show === index ? 'inline-block': 'hidden'} lg:text-md text-sm`}>
              {faq.answer}
            </p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default App
