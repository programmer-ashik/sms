import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom'; // Keep Link for navigation
import { twMerge } from 'tailwind-merge';

import Icon from '@shared/components/Icon'; // Assuming Icon component is correctly imported

export default function DropDownLink({
  data,
  children,
  className,
  buttonClass,
  itemsClass,
  itemClass,
  dividerClass,
}) {
  return (
    <div className={className ? className : `text-right top-16`}>
      <Menu as='div' className='relative inline-block text-left'>
        <Menu.Button
          className={
            buttonClass
              ? buttonClass
              : `btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25`
          }
        >
          {children}
        </Menu.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items
            className={`absolute z-10 right-0 mt-2 origin-top-right divide-y divide-gray-100  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none popper-box w-[180px] rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700 ${itemsClass}`}
          >
            <div className={twMerge('p-1', dividerClass)}>
              {data &&
                data.map((item, i) => (
                  <Menu.Item key={i}>
                    {({ active }) => {
                      // Determine if it's a link (navigation) or a button (action)
                      const isLink = item.link && !item.onClick; // Prioritize onClick if both exist
                      const Component = isLink ? Link : 'button';

                      const sharedClasses = twMerge(
                        `${active ? 'bg-primary  text-gray-300' : 'text-black dark:text-navy-100'} 
                         flex rounded-md items-center w-full p-2 text-sm space-x-4
                         ${isLink ? '' : 'text-left'}`, itemClass
                      );

                      if (isLink) {
                        return (
                          <Component
                            to={item.link}
                            className={sharedClasses}
                          >
                            {item.icon && <Icon icon={item.icon} />}
                            <span>{item.title}</span>
                          </Component>
                        );
                      } else {
                        // This handles items with onClick, including your "Top X" options
                        return (
                          <Component
                            onClick={item.onClick} // Pass the onClick directly
                            className={sharedClasses}
                            type="button" // Important for semantic correctness for buttons
                          >
                            {item.icon && <Icon icon={item.icon} />}
                            <span>{item.title}</span>
                          </Component>
                        );
                      }
                    }}
                  </Menu.Item>
                ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}