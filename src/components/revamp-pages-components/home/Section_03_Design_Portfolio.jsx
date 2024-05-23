import { Schedule_Discover_Call_Button } from '@/components/common/Schedule_Discover_Call_Button'
import { animation } from '@/helper/helper'
import React from 'react'
import { Fade } from 'react-reveal'

const images_arr = [
    {
        url: '/assets/images/design-portfolio-image-01.png'
    },
    {
        url: '/assets/images/design-portfolio-image-02.png'
    },
    {
        url: '/assets/images/design-portfolio-image-03.png'
    },
    {
        url: '/assets/images/design-portfolio-image-04.png'
    },
    {
        url: '/assets/images/design-portfolio-image-05.png'
    },
    {
        url: '/assets/images/design-portfolio-image-06.png'
    },
]

export const Section_03_Design_Portfolio = () => {
    return (
        <div className="bg-white ">

            <div className="max-w-7xl mx-auto px-5 py-20">
                <Fade delay={animation.delay} duration={animation.duration} bottom>


                    <div className="text-center space-y-10" >

                        <div className='space-y-5'>
                            <h1 className="text-5xl uppercase fontBlack">
                                Our Design Portfolio Raises the Bar
                            </h1>
                            <p>
                                From product listings that demand attention to A+ content that leaves jaws on the floor, each creation in our portfolio is a masterpiece in its own right.
                            </p>
                        </div>



                        <div className='grid  md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10'>

                            {images_arr.map((elem,ind) => {
                                const { url } = elem
                                return <div key={ind} >
                                    <img src={url} />
                                </div>
                            })}


                        </div>



                        <div className='pt-8'>
                            <Schedule_Discover_Call_Button />
                        </div>




                    </div>
                </Fade>
            </div>

        </div>
    )
}
