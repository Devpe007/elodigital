import Slider from "./Slider";

export default function SectionTools() {
  return (
    <section id="tools" className="flex flex-col items-center justify-center bg-primary-blue">
      <div className="lg:w-[1000px] px-4 mt-16 mb-16">
        <h3 className="text-white text-2xl text-center">
          Além de acompanhar cada etapa da sua jornada de vendas, oferecemos um conjunto de soluções tecnológicas que maximizam a eficiência e os resultados. Nossas ferramentas incluem:
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row w-full  lg:ml-0 lg:w-[1000px]">
        <Slider />
      </div>

      <div className="lg:w-[500px] px-6 mt-16 mb-16">
        <h4 className="text-white text-xl text-center">
          Esses diferenciais são integrados à nossa consultoria, garantindo que você tenha todas as ferramentas necessárias para impulsionar suas vendas de forma eficiente e escalável.
        </h4>
      </div>
    </section>
  )
}
