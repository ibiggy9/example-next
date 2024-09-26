import React from 'react'
import Link from 'next/link'

export default function blog() {
    return (
        <div>
            <h1>Blog 1</h1>
            <p className="mb-10 text-black dark:text-black first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-black first-letter:me-3 first-letter:float-start">
                Labore ut id id commodo Lorem esse qui laborum nisi ex. Ut ea deserunt ipsum magna. Ut sunt cupidatat ex incididunt velit amet ullamco nulla aliquip anim. Dolore Lorem nisi magna labore. </p>

            <h1>Blog 2</h1>
            <p className='mb-8'> Labore ut id id commodo Lorem esse qui laborum nisi ex. Ut ea deserunt ipsum magna. Ut sunt cupidatat ex incididunt velit amet ullamco nulla aliquip anim. Dolore Lorem nisi magna labore. </p>
            <h1>Blog 3</h1>
            <p className='mb-8'> Labore ut id id commodo Lorem esse qui laborum nisi ex. Ut ea deserunt ipsum magna. Ut sunt cupidatat ex incididunt velit amet ullamco nulla aliquip anim. Dolore Lorem nisi magna labore. </p>
            <h1>Blog 4</h1>
            <p className='mb-8'> Labore ut id id commodo Lorem esse qui laborum nisi ex. Ut ea deserunt ipsum magna. Ut sunt cupidatat ex incididunt velit amet ullamco nulla aliquip anim. Dolore Lorem nisi magna labore. </p>









            <div className='mt-40'>
                <Link href="/" className="inline-block mt-4 px-4 py-1 text-white bg-blue-500 rounded hover:bg-blue-700 transition">Go Back</Link>
            </div>


        </div>
    )
}