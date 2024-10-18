'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCards } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import Card from './Card';

export default function Slider() {
  const data = [
    { id: 1, title: 'Programação Personalizada', description: 'Criamos soluções sob medida que otimizam seus processos e melhoram a experiência do cliente.' },
    { id: 2, title: 'Automação de Atendimento', description: 'Implementamos sistemas que garantem um atendimento rápido e eficiente, 24/7.' },
    { id: 3, title: 'Automação de Processos Internos', description: 'Simplificamos e aceleramos seus fluxos de trabalho, permitindo que sua equipe foque no que realmente importa.' },
    { id: 4, title: 'Integração com IA', description: 'Usamos inteligência artificial para criar atendimentos inteligentes e personalizados, otimizando a conversão e a retenção de clientes.' },
  ]

  return (
    <div className='flex justify-center items-center ml-[36px] lg:w-[1000px]'>
      <Swiper
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        effect='cards'
        slidesPerView={3}
        pagination={{ clickable: true }}
        modules={[Pagination, EffectCards]}
        loop
        centeredSlides
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className='w-[40px]'>
            <Card title={item.title}>
              {item.description}
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
