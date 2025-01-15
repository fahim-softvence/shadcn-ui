import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Demo from "../../assets/demo.png.jpg"
import Demo1 from "../../assets/demo1.png.jpg"


const Slider = () => {
    return (
        <section className='py-20'>
            <div className="container mx-auto w-[700px]">
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>
                            <img src={Demo} alt="Demo" className='h-[500px] w-full rounded-sm' />
                        </CarouselItem>
                        <CarouselItem><img src={Demo1} alt="Demo" className='h-[500px] w-full rounded-sm' /></CarouselItem>
                        <CarouselItem>
                            <img src={Demo} alt="Demo" className='h-[500px] w-full rounded-sm' />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    )
}
export default Slider