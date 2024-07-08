import logo from '../images/logo.svg'
import cart from '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'
import menu from '../images/icon-menu.svg'
import close from '../images/icon-close.svg'
import { Drawer } from 'antd'
import { SetStateAction, useState } from 'react'

export const Navbar = ({cartNumber, setTog, tog}: {cartNumber:number, setTog: React.Dispatch<SetStateAction<boolean>>, tog:boolean }) => {
    const lists = ['Collections', 'Men', 'Women', 'About', 'Contact']
    const [toggle, setToggle] = useState(false)

  return (
    <div className='flex items-center p-5 lg:p-0 lg:border-b-2 lg:pb-7 justify-between'>
        <nav className='flex gap-20'>
            <div className='flex gap-5 items-center'>
                <button onClick={() => setToggle(true)}>
                    <img className='lg:hidden' src={menu} alt="" />
                </button>

                <div>
                    <img src={logo} alt="" />
                </div>
            </div>
            
            <ul className='lg:flex  hidden gap-10 '>
                {lists.map((list, index) =>
                    <li key={index}>
                        <a className='hover:text-Very-dark-blue duration-200 border-Orange hover:border-b-4 pb-10 text-Dark-grayish-blue' href="">
                            {list}
                        </a>
                    </li>
                )}
            </ul>

            
        </nav>

        <Drawer 
            visible={toggle} 
            maskClosable={false}
            onClose={() => {setToggle(true)}}
            closable={false} width={'60%'} placement='left'>
                <button className='self-end' onClick={() => setToggle(false)}>
                    <img src={close} alt="" />
                </button>


                <ul className='flex flex-col mt-10 items-start gap-10 '>
                {lists.map((list, index) =>
                    <li key={index}>
                        <a className=' text-Dark-grayish-blue' href="">
                            {list}
                        </a>
                    </li>
                )}
            </ul>

        </Drawer>
        
        <div>
            <div className='flex items-center gap-5 lg:gap-10'>
                <div className='flex justify-end '>
                    <button onClick={() => setTog(!tog)} className='relative'>
                        <img src={cart} alt="" />
                    </button>

                    <span className='text-[10px] translate-x-3 text-white font-semibold px-2 absolute -translate-y-2 bg-Orange rounded-full'>
                        {cartNumber <= 0 ? '' : cartNumber}
                    </span>

                </div>

                <div onClick={() => setTog(!tog)}>
                    <img className={`w-[50px] ${cartNumber !== 0 ? 'border-Orange' : ''} border-2 rounded-full`} src={avatar} alt="" />
                </div>
            </div>
            
            <div>
                
            </div>
        </div>
    </div>
  )
}
