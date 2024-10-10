import React from 'react';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <div className="flex h-screen">
      <div className="w-40 bg-gray-50 p-4">
        <div className="text-xl font-bold">Portfolio</div>
        <div className="mt-4">
          <h3 className="text-lg">Apps</h3>
          <div>App1</div>
          <div>App2</div>
          <div>App3</div>
          <div>App4</div>
          <div>App5</div>
          <div>App6</div>

          <div className="mt-4">
            <Link href="/" className="text-blue-500 underline">Go Back</Link>
          </div>
        </div>
      </div>

      <div className="h-full w-px bg-black" />




      <div className="w-2/3 p-4">
        <div className="text-2xl">Portfolio Overview</div>
        <div className="flex space-x-4 mt-4">

          <div id="Card-1" className="flex flex-col  justify-evenly border items-center rounded shadow border-black border-dashed">
            <div>Some Image</div>
            <div className="text-xl font-semibold">123 Fake St</div>
            <div className="flex flex-row justify-center text-center bg-slate-300" id="Block of features">
              <div className="flex flex-col">
                <div>1 </div> 
                <div>Bed</div>
              </div>
              <div className="flex flex-col">
                <div>1 </div> 
                <div>Bed</div>
              </div>
              <div className="flex flex-col">
                <div>1 </div> 
                <div>Bed</div>
              </div>
            </div>
            <div>View Property</div>
          </div>
          <div className="mt-4 p-2 h-60 w-60 border rounded shadow border-black">
            <div className="text-xl font-semibold">App2</div>

          </div>
          <div className="mt-4 p-2 h-60 w-60 border rounded shadow">
            <div className="text-xl font-semibold">App3</div>
      
          </div>

        </div>

        <div className="flex space-x-4 mt-4">

          <div className="mt-4 p-2 h-60 w-60 border rounded shadow">
            <div className="text-xl font-semibold">App4</div>
          
          </div>
          <div className="mt-4 p-2 h-60 w-60 border rounded shadow">
            <div className="text-xl font-semibold">App5</div>
        
          </div>
          <div className="mt-4 p-2 h-60 w-60 border rounded shadow">
            <div className="text-xl font-semibold">App6</div>
          
          </div>

        </div>






      </div>
    </div>
  );
}
