import { animation } from '@/helper/helper'
import React from 'react'
import { Fade } from 'react-reveal'

export const Section_02_About_Picture = () => {
  return (
    <div className="bg-black ">

                <div className="max-w-7xl mx-auto px-5 py-20">
                    <Fade delay={animation.delay} duration={animation.duration} bottom>


                        <div className="text-white space-y-5" >
                            <h1 className="text-6xl uppercase fontBlack">
                                More Than Just a Pretty Picture!
                            </h1>



                            <div className="flex justify-start items-center">
                                <div className="space-y-6 text-xl leading-relaxed flex-1 fontLight lineHeight5">
                                    <p className="tracking-wider">
                                        {`Picture this: Your Amazon listings, A+ content, and storefront are transformed into engaging, persuasive, and unforgettable experiences. Shoppers don't just glance at your products; they immerse themselves in your brand story. They trust you, they buy from you, and they come back for more.`}
                                    </p>
                                    <p className="tracking-wider">
                                        {`Sure, our designs are visually stunning, but they're also purposeful. We go beyond surface-level beauty, focusing on the psychology of consumer behavior. Every color, every element, and every layout choice is carefully curated to guide your potential customers on a journey from curiosity to conversion.`}
                                    </p>
                                </div>
                                <div>
                                    <img
                                        src={'/assets/images/home-section-02.gif'}
                                        className="h-80"
                                    // alt={`Image ${index + 1}`}
                                    // className="w-[12rem] lg:w-[15rem] h-auto mb-4 mx-auto"
                                    />
                                    {/* <Image width={70} src='/assets/images/noiseGif.gif' /> */}
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>

            </div>
  )
}
