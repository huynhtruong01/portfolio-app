import * as React from 'react'
import { BsArrowDown, BsMouse } from 'react-icons/bs'

export interface ButtonScrollDownProps {}

export function ButtonScrollDown(props: ButtonScrollDownProps) {
    return (
        <div className="flex justify-center items-center px-8">
            <a href="#about">
                <button className="flex items-center gap-2 text-gray-800 dark:text-white">
                    <BsMouse className="text-3xl" />
                    <span className=" font-semibold text-sm flex items-center dark:text-white">
                        Scroll Down <BsArrowDown />
                    </span>
                </button>
            </a>
        </div>
    )
}
