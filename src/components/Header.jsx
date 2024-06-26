import { Navbar, TextInput, Button, Dropdown, Avatar } from "flowbite-react"
import { Link ,useLocation} from "react-router-dom"
import { AiOutlineSearch } from 'react-icons/ai'
import {FaMoon,FaSun} from 'react-icons/fa'


function Header() {
    var path = useLocation().pathname;
    
    
    
    return (
        <Navbar className="border-b-2">
            <Link to='/'className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white
          '>
                <span className='px-2 py-1 bg-gradient-to-r from-blue-500 to-orange-500
          rounded-lg text-white'>MED</span>
                Lock
            </Link>
            <form action="">
                <TextInput
                    type="text"
                    placeholder="Search..."
                    rightIcon={AiOutlineSearch}
                    className="hidden lg:inline"
                />
            </form>
            
            <Button className="w-12 h-10 lg:hidden" color="gray" pill> <AiOutlineSearch /></Button>
             
            <div className='flex gap-2 md:order-2'>
                
                    <Link to='/signin'>
                      <Button gradientDuoTone='purpleToBlue' outline>
                        Sign In
                      </Button>
                    </Link>
                  
                <Navbar.Toggle/>
            </div>
            <Navbar.Collapse>
                    <Navbar.Link active={path === '/'} as={'div'}>
                        <Link to='/'>
                          Home
                        </Link>
                    </Navbar.Link>
                    <Navbar.Link active={path === '/about'} as={'div'}>
                        <Link to='/about'>
                          About
                        </Link>
                    </Navbar.Link>
                    <Navbar.Link active={path === '/project'} as={'div'}>
                        <Link to='/project'>
                          Project
                        </Link>
                    </Navbar.Link>
             </Navbar.Collapse> 
           
        </Navbar>
    )
}

export default Header