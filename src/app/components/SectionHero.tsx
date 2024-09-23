import Image from "next/image";

import graffic from '../assets/graffic.svg'

export default function SectionHero() {
  return (
    <div id="section-hero" className="flex justify-center bg-primary-beige">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center mt-4 mb-4 w-9/12 lg:w-[1000px] h-screen">
        <section className="mb-16 lg:mb-0 lg:w-[400px]">
          <h1 className="text-4xl lg:text-5xl mb-4 text-primary-blue">Alavanque seus resultados</h1>

          <p className="text-sm lg:text-lg text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </section>

        <Image src={graffic} alt="grafico" className="mt-4 lg:mt-0 lg:h-[450px] lg:w-[450px]" />
      </div>
    </div>
  )
}
