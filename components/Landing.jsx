import React from 'react';
import Image from "next/image";

const Landing = () => {
    return (
        <section id="landing" className='bg-black- flex items-center justify-center p-6' >
            <div id="landing-content" className='max-w-screen-lg flex items-center justify-center flex-col lg:flex-row '>
                <div id="landing-texts" className='max-w-[500px] h-full break-words flex flex-col items-center justify-center lg:mr-24 sm:mr-0  lg:items-start md:items-center'>
                    <h1 className='text-h3  text-grayish font-semibold lg:text-h1 sm:text-center lg:text-left md:text-h2 '>Elevate your expertise with Craftsmith</h1>
                    <p className='text-grayish mt-4'>Craftsmith fosters a vibrant marketplace that connects artisans with a diverse clientele - where passion meets opportunity.</p>
                    <button className='button-hover mt-12 bg-grayish text-black- p-3 rounded-md'>Get Started</button>
                </div>

                <Image
                    src="/assets/tools.png"
                    alt="worker"
                    width={450}
                    height={450}
                    className='rounded-md mt-8 lg:mt-0'
                />
            </div>
        </section>
    );
}

export default Landing;