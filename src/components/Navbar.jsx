import React, { useEffect } from 'react';
import { AiOutlineMenu, AiOutlinePlus } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Plus, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize,setActiveMenu]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-3 md:ml-6 md:mr-6 relative">

      
      <div className='flex'>
        <NavButton title="Menu" customFunc={handleActiveMenu} color="black" icon={<AiOutlineMenu />} />
          <div className='ml-5'>
            <p>Your organization</p>
            <p style={{fontWeight:"bold"}}>FAWR Business Solutions</p>
          </div>
      </div>
      <div className="flex">
        <div className='bg-amber-300 rounded-full mr-3'>
          <NavButton title="plus" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('plus')} color="black" icon={<AiOutlinePlus />} />
        </div>
        <div className='bg-slate-300 rounded-full mr-3'>
        <NavButton title="Notification" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('notification')} color="black" icon={<RiNotification3Line />} />
        </div>
        
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
          </div>
        </TooltipComponent>

        {isClicked.plus && (<Plus />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)}
      </div>
    </div>
  );
};

export default Navbar;