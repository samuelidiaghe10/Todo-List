import { SetStateAction, useState } from 'react'
import image1 from '../images/image-product-1.jpg'
import image2 from '../images/image-product-2.jpg'
import image3 from '../images/image-product-3.jpg'
import image4 from '../images/image-product-4.jpg'
import thumbnail1 from '../images/image-product-1-thumbnail.jpg'
import thumbnail2 from '../images/image-product-2-thumbnail.jpg'
import thumbnail3 from '../images/image-product-3-thumbnail.jpg'
import thumbnail4 from '../images/image-product-4-thumbnail.jpg'
import minus from '../images/icon-minus.svg'
import plus from '../images/icon-plus.svg'
import cart from '../images/icon-cart.svg'
import trash from '../images/icon-delete.svg'

type productType = {
  productid: number
  company:string,
  productName:  string,
  description: string,
  price: number,
  previousPrice: string,
  discount: string
}

export const Product = ({count, tog, setCount, handleAdd, cartNumber} :
   {count:number, tog:boolean,setCount: React.Dispatch<SetStateAction<number>>,
     handleAdd: () => void, cartNumber:number,},  ) => {

  const product: productType[] = [
    {
      productid: 1,
      company: 'sneaker company',
      productName: 'Fall Limited Edition Sneakers',
      description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
      
      price: 125,
      previousPrice: '$250.00',
      discount: '50%'
    }
  ]

  const [tab, setTab] = useState<number>(1);
  

  return (
    <main className='lg:px-20  flex flex-col  gap-10'>
        <ul>
          {product.map((item, index) =>
          <div className='flex items-start justify-center lg:justify-end'>
            <li key={index} className={`grid grid-cols-1 relative lg:grid-cols-2 '}
                items-center gap-10 lg:gap-24`}>
              <div className='flex flex-col gap-11'>
                <div>
                  <img className={`lg:w-[34rem] lg:rounded-3xl `} 
                  src={tab === 1 ? image1 : ''} alt="" />
                  <img className='lg:w-[34rem] lg:rounded-3xl' 
                  src={tab === 2 ? image2 : ''} alt="" />
                  <img className='lg:w-[34rem] lg:rounded-3xl' 
                  src={tab === 3 ? image3 : ''} alt="" />
                  <img className='lg:w-[34rem] lg:rounded-3xl' 
                  src={tab === 4 ? image4 : ''} alt="" />
                </div>

                <div className='hidden lg:flex lg:gap-12'>
                  <button className={`${tab === 1 ? 'opacity-80 border-2 border-Orange' : ''} rounded-2xl`} onClick={() => setTab(1)}>
                    <img className={`rounded-xl w-[100px] `} 
                    src={thumbnail1} alt="" />
                  </button>

                  <button className={`${tab === 2 ? 'opacity-80 border-2 border-Orange' : ''} rounded-2xl`} onClick={() => setTab(2)}>
                    <img className={`rounded-xl w-[100px] `} 
                    src={thumbnail2} alt="" />
                  </button>

                  <button className={`${tab === 3 ? 'opacity-80 border-2 border-Orange' : ''} rounded-2xl`} onClick={() => setTab(3)}>
                    <img className={`rounded-xl w-[100px] `} 
                    src={thumbnail3} alt="" />
                  </button>

                  <button className={`${tab === 4 ? 'opacity-80 border-2 border-Orange' : ''} rounded-2xl`} onClick={() => setTab(4)}>
                    <img className={`rounded-xl w-[100px] `} 
                    src={thumbnail4} alt="" />
                  </button>
                  
                </div>
              </div>

              <div className='flex flex-col p-5 gap-5 lg:gap-10'>
                <div className='flex flex-col gap-3'>
                  <h4 className='text-lg uppercase tracking-widest font-semibold'>
                    {item.company}
                  </h4>

                  <h3 className='md:text-5xl text-3xl font-bold lg:font-semibold'>
                    {item.productName}
                  </h3>
                </div>

                <div className='flex flex-col gap-5'>
                  <p className='md:text-lg'>
                    {item.description}
                  </p>

                  <div className='flex items-start gap-5'>
                    <div className='flex flex-col gap-3'>
                      <h3 className='text-3xl font-semibold'>
                        ${Math.floor(item.price).toFixed(2)}
                      </h3>

                      <p className='line-through'>
                        {item.previousPrice}
                      </p>
                    </div>

                    <p  className='text-sm p-1 rounded-lg font-semibold bg-Very-dark-blue text-white'>
                      {item.discount}
                    </p>
                  </div>
                </div>

                <div className='flex lg:flex-row flex-col gap-5 items-center justify-between'>
                  <div className='flex w-7/12 lg:w-fit justify-between bg-Light-grayish-blue lg:gap-12   p-3 rounded-xl'>
                    <button onClick={() => setCount(count - 1)}>
                      <img src={minus} alt="" />
                    </button>

                    <p className='text-lg font-semibold'>
                      {count}
                    </p>

                    <button onClick={() => setCount(count + 1)}>
                      <img src={plus} alt="" />
                    </button>
                  </div>

                  <button onClick={handleAdd}
                   className='flex bg-Orange gap-3 py-3 w-7/12 lg:w-fit justify-center lg:px-20 rounded-xl'>
                    <div>
                      <img className='cart'  src={cart} alt="" />
                    </div>

                    <p className='font-semibold'>
                      Add to cart
                    </p>
                  </button>
                </div>
              </div>
            </li>

            <div className={`w-[23rem] h-[15.5rem] p-5 absolute translate-y-2 lg:-translate-y-24 ${tog ? 'hidden' : ''}
               bg-white lg:translate-x-20 z-10 shadow-2xl rounded-xl flex flex-col gap-5`}>
              <p className='text-lg font-bold border-b-2 pb-4'>
                Cart
              </p>

              <div className={`${cartNumber === 0 ? 'hidden' : ''} flex flex-col gap-10`}>
                <div className='flex items-center gap-4'>
                  <div><img className='w-[52px] rounded-lg' src={thumbnail1} alt="" /></div>
                  <div className='flex text-Dark-grayish-blue flex-col gap-1'>
                    <h4 className='text-lg'>
                      {item.productName}
                    </h4>

                    <div className=' flex items-center justify-between '>
                      <div className='  flex items-center gap-3'>
                        <p>
                        ${Math.floor(item.price).toFixed(2)} X {cartNumber}
                        </p>

                        <p className=' text-black font-semibold'>
                          ${Math.floor(item.price * cartNumber).toFixed(2)}
                        </p>
                      </div>

                      <button>
                        <img src={trash} alt="" />
                      </button>
                    </div>
                  </div>
                </div>

                <button className=' bg-Orange text-Very-dark-blue font-bold rounded-lg py-3'>
                  Checkout
                </button>
              </div>

              <div className={`text-center text-Dark-grayish-blue ${cartNumber !== 0 ? 'hidden' : ''}
                flex justify-center translate-y-12 lg:translate-y-14 self-center font-bold`}>
                <p>
                  Your cart is empty
                </p>
              </div>
            </div>
          </div>
          )}
        </ul>

        
    </main>
  )
}
