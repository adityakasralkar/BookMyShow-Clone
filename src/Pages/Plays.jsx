import React from 'react';
import DefaultLayout from "../Layout/DefaultLayout";

import Poster from "../Components/Poster/PosterComponent";
import PlayFilter from "../Components/PlayFilter/PlayFilter";


const Plays = () => {
  return (
    <>
    <div className="container mx-auto px-0 my-10">
      <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-8 ">
       
        <div className="lg:w-3/4 p-4 bg-white rounded-md shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Plays in Ahmedabad</h2>
          <div className="flex flex-wrap">
            
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster  isPlay={true} 
                       src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00341297-tggpnraaln-portrait.jpg" 
                       title="KING - India Tour Ahmedabad" 
                       subtitle="Music Shows | English, Hindi | 16yrs + | 4hrs"
                       />
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster  isPlay={true} 
                       src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMSBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00344783-ftpzrnwpjh-portrait.jpg" 
                       title="Badshah Paagal India Tour - Ahmedabad" 
                       subtitle="Bollywood, Punjabi | Hindi | 16yrs + | 5hrs"
                       />
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster  isPlay={true} 
                       src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNSBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343640-uzpjbdxqva-portrait.jpg" 
                       title="ARIJIT SINGH LIVE #ASNeverB4" 
                       subtitle="Bollywood, Romantic | Hindi | 3hrs"
                       />
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster  isPlay={true} 
                       src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOCBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00344514-yamxvxkjme-portrait.jpg" 
                       title="SACHET-PARAMPARA CONCERT " 
                       subtitle="Bollywood | English, Hindi | 16yrs + | 2hrs"
                       />
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster  isPlay={true} 
                       src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMSBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00338470-bcsantrrap-portrait.jpg" 
                       title="Gaurav Kapoor Live-Gujarat Tour" 
                       subtitle="Comedy Shows | Hindi, English | 18yrs + | 1h"
                       />
            </div>

          </div>
        </div>

        <div className="lg:w-1/4 ml-0 p-4 bg-white rounded-md shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          
          <div>
            <PlayFilter title="Date" tags={["Today" , "Tomorrow" , "This Weekend"]}/>
          </div>

          <div>
            <PlayFilter title="Language" tags={["English" , "Hindi" , "Telugu"]}/>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default DefaultLayout(Plays);