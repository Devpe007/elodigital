import Card from "./Card";

export default function SectionServices() {
  return (
    <section id="services" className="flex flex-col items-center justify-center bg-primary-orange">
      <div className="lg:w-[1000px] px-4 mt-16 mb-16">
        <h3 className="text-white text-2xl text-center">Nós oferecemos muito mais do que a simples gestão de anúncios. Com foco em toda a jornada de venda, nossos serviços abrangem desde a criação de estratégias personalizadas até a implementação de soluções práticas que impactam diretamente os resultados financeiros da sua empresa.</h3>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 justify-between items-center lg:w-[1000px] ">
        <Card title="Consultoria Estratégica">
          Desenvolvemos <span className="text-primary-orange">planos de ação</span> completos, ajustados à sua realidade de mercado, garantindo que cada passo seja <span className="text-primary-orange">otimizado</span> para gerar <span className="text-primary-orange">resultado</span>.
        </Card>

        <Card title="Acompanhamento Contínuo">
          Estamos ao seu lado em cada etapa da jornada de <span className="text-primary-orange">venda</span>, ajustando e otimizando conforme necessário para que você <span className="text-primary-orange">alcance</span> o máximo de <span className="text-primary-orange">potencial</span>.
        </Card>

        <Card title="Otimização da Experiência do Consumidor">
          Atuamos em cada um dos <span className="text-primary-orange">5 As</span> da jornada do consumidor, melhorando a <span className="text-primary-orange">interação</span> em cada ponto de contato e <span className="text-primary-orange">maximizando as conversões</span>.
        </Card>
      </div>

      <div className="lg:w-[500px] px-6 mt-16 mb-16">
        <h4 className="text-white text-xl text-center">Transformamos a forma como sua empresa vende online, oferecendo mais do que soluções. Somos parceiros no seu crescimento.</h4>
      </div>

    </section>
  )
}
