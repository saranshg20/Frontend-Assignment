import { useState } from "react";
import { timeMap } from "../utils/utils";
import { Link } from "react-router-dom";

/**
 * Navbar component.
 * @param {Object} props - The component props.
 * @param {boolean} props.showMetrics - Flag indicating whether to show metrics.
 * @param {string} props.duration - The duration value.
 * @param {function} props.setDuration - The function to set the duration.
 * @returns {JSX.Element} The Navbar component.
 */
function Navbar({ showMetrics, duration, setDuration }) {
    const [dropdownOpen, setDropdown] = useState(false);

    /**
     * Click handler for the dropdown.
     */
    const dropdownClickHandler = () => {
        setDropdown(!dropdownOpen);
    }

    return (
        <div className="flex items-center w-full pl-[32px] pr-[32px] pb-[17px] pt-[17px]">
            <div>
                <img src="/logo.svg" alt="TrueFoundry" />
            </div>
            <div className="flex w-full ml-[40px] items-center pt-[6px]">
                <div className="flex-col">
                    <Link to="/metrics">
                        <div className="flex cursor-pointer pr-[4px] items-center">
                            <img
                                className="w-[14px] h-[12px]"
                                src={`${showMetrics ? 'Sidepane/metrics.png' : 'Sidepane/metrics-gray.png'}`}
                                alt=""
                            />
                            <span className={`${showMetrics ? 'font-bold' : ''} ml-[7px]`}>Metrics</span>
                        </div>
                    </Link>
                    {
                        showMetrics ?
                            <div className="h-[3px] bg-purple-800 rounded-full"></div>
                            : null
                    }
                </div>
                <div className="w-full flex items-center justify-between">
                    <div className="flex-col">
                        <Link to="/logs">
                            <div className="flex cursor-pointer ml-[20px] items-center">
                                <img
                                    className="w-[12px] h-[12px]"
                                    src={`${showMetrics ? 'Sidepane/list.png' : 'Sidepane/list-active.png'}`}
                                    alt=""
                                />
                                <span className={`${!showMetrics ? 'font-bold' : ''} ml-[7px]`}>Logs</span>
                            </div>
                        </Link>
                        {
                            showMetrics ?
                                null :
                                <div className="ml-4 h-[3px] bg-purple-800 rounded-full"></div>
                        }
                    </div>
                    <div className="relative">
                        <div>
                            <button type="button" className="flex w-full gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={dropdownClickHandler}>
                                {timeMap[duration]}
                                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        {
                            dropdownOpen ?
                                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                    <div className="py-1" role="none">
                                        <div className="text-gray-700 block cursor-pointer px-4 py-2 text-sm" onClick={() => { setDuration("5"); setDropdown(false) }}>Last 5 minutes</div>
                                        <div className="text-gray-700 block cursor-pointer px-4 py-2 text-sm" onClick={() => { setDuration("15"); setDropdown(false) }}>Last 15 minutes</div>
                                        <div className="text-gray-700 block cursor-pointer px-4 py-2 text-sm" onClick={() => { setDuration("30"); setDropdown(false) }}>Last 30 minutes</div>
                                        <div className="text-gray-700 block cursor-pointer px-4 py-2 text-sm" onClick={() => { setDuration("60"); setDropdown(false) }}>Last 1 hour</div>
                                        <div className="text-gray-700 block cursor-pointer px-4 py-2 text-sm" onClick={() => { setDuration("180"); setDropdown(false) }}>Last 3 hours</div>
                                        <div className="text-gray-700 block cursor-pointer px-4 py-2 text-sm" onClick={() => { setDuration("360"); setDropdown(false) }}>Last 6 hours</div>
                                    </div>
                                </div> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
