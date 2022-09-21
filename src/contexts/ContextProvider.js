import { MODEL_CHANGED_PLUGIN } from "@syncfusion/ej2-react-richtexteditor";
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
	const setMode =(e) => {
		setCurrentMode(e.target.value);
		localStorage.setItem('themeMode', e.target.value);
		setThemeSettings(false)
	}
	// change color on settings
		const setColor = (color) => {
			setCurrentColor(color);
			localStorage.setItem("colorMode",color);
			setThemeSettings(false)
	}
		
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
				setColor,
				currentMode,
				setMode,
				themeSettings,
				setThemeSettings,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
