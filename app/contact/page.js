"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

export default function contactPage() {
  return (
    <div>
        <div>Please Leave Your Information Below And I'll Get Back To You:</div>
        <div>First Name</div>

        {/*TODO: Don't allow submit unless data is entered and type conformed to an email and string for email and name respectively */}
        <input/>

        <div>Email</div>
        <input/>

        <div>
        <Link href="/">Go Back</Link>
        </div>

        
        <Link href= "/submitted">Submit</Link>
        
        
      
    </div>
  )
}
