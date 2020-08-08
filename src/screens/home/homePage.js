import React from 'react';

const Home = () => {
    return (
         <div className="xl:container h-full">
             <div className="xl:content-center w-screen">
                <div class="flex flex-col-reverse md:flex-row jusitfy-between md:mt-10 md:p-6 max-w-sm md:max-w-screen-lg mx-auto h-600">
                    <div class="md:w-6/12 flex flex-col items-center md:items-start text-center md:text-left pt-20">
                        <h1 class="text-5xl text-gray-900 leading-none tracking-wide mb-2">Welcome to Shradha</h1>
                        <p class="text-2lg text-gray-800 leading-relaxed">
                            The combination of <span class="text-red-600">LOVE</span>, <span class="text-green-600">FAITH</span> & <span class="text-orange-600">PEACE</span>.
                        </p> 
                    </div>
                    <div class="w-full mb-16 md:mb-0 mt-8 md:mt-0 md:w-6/12">
                        <img class="h-full" src="assets/images/logo.png" alt="FAQ page"/>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
export default Home;