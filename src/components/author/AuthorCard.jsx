import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { CiFacebook } from 'react-icons/ci'
import { FaLinkedinIn } from 'react-icons/fa'

const AuthorCard = () => {
    return (
        <div>
            <div className="p-4 rounded-md border bg-white my-3">
                <div className="flex gap-x-4">
                    <div className="">
                        <img className="w-[200px] rounded-full" src="https://i.pravatar.cc/150?img=47" alt="" />
                    </div>
                    <div>
                        <h1 className="font-semibold">Nadia Usman</h1>
                        <p className='text-gray-600 text-sm font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus sequi necessitatibus ullam, ab et nihil voluptatum modi esse rem illo, ipsa, eum ipsum.</p>
                        <div className="flex gap-x-3 text-xl mt-4">
                            <AiOutlineInstagram />
                            <CiFacebook />
                            <AiOutlineTwitter />
                            <FaLinkedinIn />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorCard