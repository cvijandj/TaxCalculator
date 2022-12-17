import React from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function DropDownTab(props) {
	const classNames = (...classes) => {
		return classes.filter(Boolean).join(' ');
	};

	return (
		<Menu
			as="div"
			className=" relative w-[7.5rem] mt-0.5 inline-block text-center"
		>
			<div>
				<Menu.Button className="inline-flex w-full justify-center rounded-md text-sm font-semibold text-gray-700 shadow-sm bg-opacity-95 bg-white hover:shadow-md hover:text-black focus:outline-none">
					{props.period}
					<ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-red shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						<Menu.Item>
							{({ active }) => (
								<a
									onClick={() => props.setPeriod('Weekly')}
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'block px-4 py-2 text-sm'
									)}
								>
									Weekly
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a
									onClick={() => props.setPeriod('Fortnightly')}
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'block px-4 py-2 text-sm'
									)}
								>
									Fortnightly
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a
									onClick={() => props.setPeriod('Monthly')}
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'block px-4 py-2 text-sm'
									)}
								>
									Monthly
								</a>
							)}
						</Menu.Item>

						<Menu.Item>
							{({ active }) => (
								<a
									onClick={() => props.setPeriod('Annualy')}
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'block px-4 py-2 text-sm'
									)}
								>
									Annualy
								</a>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
