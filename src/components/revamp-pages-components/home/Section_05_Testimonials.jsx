
import TestimonialSlider from "@/components/landing/TestimonialSlider";
import { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";



const Testimonial_images_animation = ({ images_arr }) => {
  'use client'
  const [active_index, setActive_index] = useState(0)

  // console.log(active_index)


  useEffect(() => {
    const intervalId = setInterval(() => {
      setActive_index(prevIndex => {
        if (prevIndex === images_arr.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 3000);

    // Clear the interval when the component unmounts or when the dependency array changes
    return () => clearInterval(intervalId);
  }, [images_arr]);



  return <div className="relative" >
    <img className="w-full" src="/assets/svgs/chat_bubble.svg" />
    <div className="absolute top-7  left-7 right-7  grid place-items-center rounded-3xl  ">

      <img className="w-full" src={images_arr[active_index]} />

    </div>
  </div>
}




export const Section_05_Testimonials = () => {

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="w-full bg-black flex text-white justify-center py-20">
        <div className="w-[95%] max-w-[1500px] flex flex-col gap-8 items-center">
          <p className="font-light hidden lg:block lg:text-[20px] mb-2 border-b-white text-white border-b pb-2 self-start pr-9 uppercase relative uppercase">
            what our clients say
            <span className=" h-2 w-2 bg-[#C317FF] absolute right-0 -bottom-1 rounded-full border border-black outline outline-1 outline-offset-1 outline-[#C317FF]" />
          </p>



          <div className="w-full ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative ">
              <img src="/assets/images/quotes.png" className="w-20 lg:w-[110px] absolute -top-4 lg:-top-2 -left-5 lg:-left-10" alt="" />
              <div className=" w-full">
                <div
                  // ref={sliderRef}
                  className=" w-full"
                >
                  <div className="" >
                    <p className="text-white text-lg md:text-xl  fontLight leading-7 tracking-wide">
                      {`Our collaboration with Shahrukh and his team on our Amazon product launches was exceptional. Their lead designer and team brilliantly enhanced our 3D renders, demonstrating professionalism, creativity, and attention to detail. They understood our vision, delivering high-quality PDP & A+ images that significantly elevated our product's appeal. We highly recommend their services for their outstanding ability to bring concepts to life and look forward to future projects.`}
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-10">
                    <div className="flex items-center gap-4 ">
                      <img className="w-20" src="/assets/images/testimonial-client-image.png" />
                      <div className="space-y-2 text-lg">
                        <h1 className="font-bold">
                          Pavel Smirnov
                        </h1>
                        <p>Co-Founder at Cooper Cases</p>
                      </div>
                    </div>

                    <div className="flex gap-5 items-center">
                      <div
                        className="pointer-events-auto cursor-pointer h-10 w-10 rounded-full border-[0.7px] border-white flex items-center justify-center -rotate-180"
                      // onClick={(e) =>
                      //   e.stopPropagation() || instanceRef.current?.prev()
                      // }
                      >
                        <GrNext />
                      </div>
                      <div
                        className="pointer-events-auto cursor-pointer h-10 w-10 rounded-full border-[0.7px] border-white flex items-center justify-center"
                      // onClick={(e) =>
                      //   e.stopPropagation() || instanceRef.current?.next()
                      // }
                      >
                        <GrNext />
                      </div>
                    </div>
                  </div>


                </div>
              </div>



              <div>

                <Testimonial_images_animation
                  images_arr={['/assets/images/client-testimonial-img-1.png', '/assets/images/client-testimonial-img-2.png', '/assets/images/client-testimonial-img-3.png']}

                />



              </div>


            </div>
          </div>











          {/* <h3 className="text-white text-4xl lg:text-6xl !uppercase fontBlack w-full">
            TESTIMONIALS
          </h3> */}
          {/* <TestimonialSlider /> */}
        </div>
      </div>
    </div>
  );
};

