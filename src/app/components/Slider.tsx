'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCards } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import Card from './Card';

export default function Slider() {
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
        <SwiperSlide className='w-[40px]'>
          <Card title="Programação Personalizada">
            Criamos <span className='text-primary-orange'>soluções</span> sob medida que <span className='text-primary-orange'>otimizam</span> seus processos e melhoram a <span className='text-primary-orange'>experiência</span> do cliente.
          </Card>
        </SwiperSlide>

        <SwiperSlide className='w-[40px]'>
          <Card title="Automação de Atendimento">
            Implementamos <span className='text-primary-orange'>sistemas</span> que garantem um <span className='text-primary-orange'>atendimento rápido e eficiente, 24/7</span>.
          </Card>
        </SwiperSlide>

        <SwiperSlide className='w-[40px]'>
          <Card title="Automação de Processos Internos">
            Simplificamos e aceleramos seus <span className='text-primary-orange'>fluxos de trabalho</span>, permitindo que sua equipe foque no que realmente importa.
          </Card>
        </SwiperSlide>

        <SwiperSlide className='w-[40px]'>
          <Card title="Integração com IA">
            Usamos <span className='text-primary-orange'>inteligência artificial</span> para criar <span className='text-primary-orange'>atendimentos inteligentes e personalizados</span>, otimizando a conversão e a retenção de <span className='text-primary-orange'>clientes</span>.
          </Card>
        </SwiperSlide>
      </Swiper>
    </div >
  )
}
