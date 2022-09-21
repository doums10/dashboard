import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
};
export const ContextProvider = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [isClicked, setIsClicked] = useState(initialState);
	const [screenSize, setScreenSize] = useState(undefined);
	const [currentColor, setCurrentColor] = useState('#03C9D7');
	const [currentMode, setCurrentMode] = useState('Light');
	const [themeSettings, setThemeSettings] = useState(false)

	// change the mode on settings
	const setMode =(mode) => {
		setCurrentMode(mode);
		localStorage.setItem('themeMode');
	}
	// change color on settings
		const setColor = (mode) => {
			setCurrentColor(mode);
			localStorage.setItem("colorMode");
		};
	const handleClick = (clicked) => {
		setIsClicked({ ...initialState, [clicked]: true });
	};
	return (
		<StateContext.Provider
			value={{
				activeMenu,
				setActiveMenu,
				isClicked,
				setIsClicked,
				handleClick,
				screenSize,
				setScreenSize,
				currentColor,
				setCurrentColor,
				currentMode,
				setCurrentMode,
				themeSettings,
				setThemeSettings,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
