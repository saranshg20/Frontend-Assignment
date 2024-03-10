import { useState } from "react";

function Navbar({ showMetrics = true }) {
    return (
        <div className="flex items-center w-full pl-[32px] pr-[32px] pb-[17px] pt-[17px]">
            <div>
                <img src="/logo.svg" alt="TrueFoundry" />
            </div>
            {showMetrics ? (
                <div className="flex ml-[40px] items-center pt-[6px]">
                    <div className="flex-col">
                        <div className="flex pr-[4px] items-center">
                            <img
                                className="w-[14px] h-[12px]"
                                src="Sidepane/metrics.png"
                                alt=""
                            />
                            <span className="font-semibold ml-[7px]">Metrics</span>
                        </div>
                        <div className="h-[3px] bg-purple-800 rounded-full"></div>
                    </div>

                    <div className="flex ml-[20px] items-center">
                        <img
                            className="w-[12px] h-[12px]"
                            src="Sidepane/list.png"
                            alt=""
                        />
                        <span className="text-gray-600">Logs</span>
                    </div>
                </div>
            ) : (
                <div className="flex items-center">
                    <div className="flex items-center">
                        <img
                            className="w-[12px] h-[12px]"
                            src="Sidepane/metrics-gray.png"
                            alt=""
                        />
                        <span className="text-gray-600">Metrics</span>
                    </div>
                    <div className="flex-col">
                        <div className="flex items-center">
                            <img
                                className="w-[12px] h-[12px]"
                                src="Sidepane/list-active.png"
                                alt=""
                            />
                            <span className="font-semibold">Logs</span>
                        </div>
                        <div className="h-[4px] bg-purple-800 rounded-full"></div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
