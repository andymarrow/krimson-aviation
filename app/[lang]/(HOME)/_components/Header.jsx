"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// REMOVED: Social media icons not used in this header
// import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

// UPDATED: Removed Cart and Wishlist icons, kept what's needed
import {
	IoMenuOutline,
	IoCloseOutline,
	IoChevronDownOutline,
	IoChevronUpOutline,
} from "react-icons/io5";
import ThemeToggle from "@/components/Themetoggle"; // Adjust path if necessary

// REMOVED: WishlistCartDropdown component is no longer needed

// REMOVED: All dummy data and initial state for cart/wishlist are gone

function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

	// REMOVED: State for dropdowns (isWishlistOpen, isCartOpen) is gone
    // REMOVED: State for items (wishlistItems, cartItems) is gone

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
		if (isMobileMenuOpen) { // If closing the menu
			setOpenMobileDropdown(null);
		}
	};

	const toggleMobileDropdown = (name) => {
		setOpenMobileDropdown(openMobileDropdown === name ? null : name);
	};

    // REMOVED: All dropdown logic for cart/wishlist is gone (closeDropdowns, toggles, handleRemoveItem)

	// UPDATED: The navLinks array is now tailored to the new system
	const navLinks = [
		{ name: "Home", href: "/" },
		{
			name: "Features", // Changed from "Courses"
			href: "/#modules", // Links to the Modules section on the homepage
			dropdown: [
				{ name: "Dashboard", href: "/#modules" },
				{ name: "Membership", href: "/#modules" },
				{ name: "Events", href: "/#modules" },
				{ name: "Reporting", href: "/#modules" },
				{ name: "Leagues", href: "/#modules" },
			],
		},
		{
			name: "News", // Changed from "Blog" for better context
			href: "/#news", // Assumes an ID on your News/Events timeline section
			dropdown: [
				{ name: "All Updates", href: "/Blog" }, // Link to the full blog page
				{ name: "Announcements", href: "/Blog?category=Announcements" },
			],
		},
		{ name: "About", href: "/about" }, // Assumes an ID on your About The System section
		{ name: "Contact", href: "/Contact" },
	];

	return (
		<header className="relative bg-white dark:bg-gray-900 shadow-sm z-50">
			{/* Main Header Content */}
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 md:h-24">
				{/* Logo */}
				<Link href="/">
					<div className="flex items-center">
						<Image
							src="/images/logo.jpg" // You can keep your logo
							alt="Organization Logo"
							width={40}
							height={40}
							className="mr-2 rounded-md"
						/>
						<span className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-cyan-400">
							Centeral hub
						</span>
					</div>
				</Link>

				{/* Desktop Navigation (Hidden on Mobile) */}
				<nav className="hidden md:flex flex-grow justify-center space-x-8 lg:space-x-12">
					{navLinks.map((link) =>
						link.dropdown ? (
							// Dropdown Trigger
							<div key={link.name} className="relative group cursor-pointer">
								<div className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 font-semibold transition-colors duration-200 inline-flex items-center py-2">
									{link.name}
									<IoChevronDownOutline className="ml-1 h-3 w-3 group-hover:rotate-180 transition-transform duration-200" />
								</div>
								{/* Dropdown Content */}
								<div className="absolute left-0 mt-0 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto z-50 overflow-hidden ring-1 ring-black ring-opacity-5">
									{link.dropdown.map((dropItem) => (
										<Link
											key={dropItem.name}
											href={dropItem.href}
											className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-200"
										>
											{dropItem.name}
										</Link>
									))}
								</div>
							</div>
						) : (
							// Simple Nav Item
							<Link
								key={link.name}
								href={link.href}
								className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 font-semibold transition-colors duration-200 py-2"
							>
								{link.name}
							</Link>
						)
					)}
				</nav>

				{/* Desktop Right Side Icons & Button - UPDATED */}
				<div className="hidden md:flex items-center space-x-6 lg:space-x-8">
					{/* REMOVED: Wishlist Icon */}
					{/* REMOVED: Cart Icon */}

					{/* Theme Toggle */}
					<div className="cursor-pointer">
						<ThemeToggle />
					</div>

					{/* Sign In Button */}
					<Link
						href="/#"
						className="ml-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
					>
						Sign in →
					</Link>
				</div>

				{/* Mobile Icons & Burger Menu (Visible on Mobile) - UPDATED */}
				<div className="md:hidden flex items-center space-x-5">
                    {/* Mobile Theme Toggle */}
                    <div className="cursor-pointer">
						<ThemeToggle />
					</div>
                    {/* REMOVED: Mobile Wishlist Icon */}
                    {/* REMOVED: Mobile Cart Icon */}

                    {/* Mobile Menu Toggle */}
					<button
						onClick={toggleMobileMenu}
						className="text-gray-700 dark:text-gray-300 focus:outline-none"
						aria-label="Toggle mobile menu"
					>
						{isMobileMenuOpen ? (
							<IoCloseOutline className="h-8 w-8" />
						) : (
							<IoMenuOutline className="h-8 w-8" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu (Animated) - No structural changes needed, updates from navLinks array */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.2 }}
						className="md:hidden fixed top-20 left-0 w-full bg-white dark:bg-gray-800 shadow-lg py-4 z-40 border-t border-gray-200 dark:border-gray-700 max-h-[calc(100vh-80px)] overflow-y-auto"
					>
						<nav className="flex flex-col items-center space-y-4 px-4">
							{navLinks.map((link) => (
								<div key={link.name} className="w-full">
									{link.dropdown ? (
										<>
											<button
												className="flex items-center justify-center gap-2 w-full text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400 text-lg font-medium transition-colors duration-200 py-2 text-left"
												onClick={() =>
													toggleMobileDropdown(
														link.name
													)
												}
											>
												<span>{link.name}</span>
												{openMobileDropdown ===
												link.name ? (
													<IoChevronUpOutline className="ml-2 h-4 w-4" />
												) : (
													<IoChevronDownOutline className="ml-2 h-4 w-4" />
												)}
											</button>
											<AnimatePresence>
												{openMobileDropdown ===
													link.name && (
													<motion.div
														initial={{ opacity: 0, height: 0 }}
														animate={{ opacity: 1, height: "auto" }}
														exit={{ opacity: 0, height: 0 }}
														transition={{ duration: 0.2 }}
														className="flex flex-col items-start space-y-2 pl-4 border-l border-gray-300 dark:border-gray-600 mt-2 overflow-hidden"
													>
														{link.dropdown.map(
															(dropItem) => (
																<Link
																	key={dropItem.name}
																	href={dropItem.href}
																	className="w-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 text-base transition-colors duration-200 py-1"
																	onClick={toggleMobileMenu}
																>
																	{dropItem.name}
																</Link>
															)
														)}
													</motion.div>
												)}
											</AnimatePresence>
										</>
									) : (
										<Link
											key={link.name}
											href={link.href}
											className="block w-full text-center text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400 text-lg font-medium transition-colors duration-200 py-2"
											onClick={toggleMobileMenu}
										>
											{link.name}
										</Link>
									)}
								</div>
							))}

							{/* Mobile Auth Buttons */}
							<div className="flex flex-col items-center space-y-3 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 w-full">
								<Link
									href="/#"
									className="w-full text-center bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
									onClick={toggleMobileMenu}
								>
									Sign up
								</Link>
								<Link
									href="/#"
									className="w-full text-center border border-blue-500 dark:border-cyan-500 text-blue-600 dark:text-cyan-400 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-700 text-lg"
									onClick={toggleMobileMenu}
								>
									Log in
								</Link>
							</div>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}

export default Header;