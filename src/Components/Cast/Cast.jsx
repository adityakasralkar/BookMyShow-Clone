import React from 'react'

const Cast = (props) => {
  return (
        <div>
            <div className="flex flex-col items-center">
                <div className="w-32 h-32 mb-2">
                    <img 
                        src={`https://image.tmdb.org/t/p/original${props.image}`} 
                        alt="Cast and Crew Members"
                        className="w-full h-full rounded-full object-center object-cover" />
                </div>

                <h1 className="text-xl font-semibold text-gray-700">{props.castName}</h1>
                <h4 className="text-sm font-semibold text-gray-500">as {props.role}</h4>
            </div>
        </div>
  );
}

export default Cast