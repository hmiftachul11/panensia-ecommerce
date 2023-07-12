"use client"

import Image from "next/image";

import CustomButton from './customButton'

const Hero = () => {
    const handleScroll = () => {
        const nextSection = document.getElementById("discover");

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className='hero'>
            <div className='flex-1 pt-64 padding-x'>
                <h1 className='text-5xl leading-snug font-bold tracking-wide'>
                    The Best <br /> Food For You
                </h1>
                <p className='leading-normal text-base py-5 font-thin'>
                Innovation, research and development of agricultural products, as well as consulting services for optimizing the processing of agricultural crops.
                </p>
                <div className='flex flex-row gap-6'>
                <CustomButton
                    title="Explore Food"
                    containerStyles="bg-brown text-white rounded-lg mt-10 pr-8"
                    
                />
                <CustomButton
                    title="Add to Cart"
                    containerStyles="border-solid border-2 rounded-lg mt-10"
                    
                />
                </div>
            </div>

            <div className="hero__image-container pr-10">
                <div className="hero__image">
                    <Image src='/food.png' alt="hero" fill className="w-9/10 object-contain" />
                </div>
            </div>
        </div>
    )
}

export default Hero;
