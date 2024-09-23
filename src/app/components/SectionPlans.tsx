import Card from "./Card";

export default function SectionPlans() {
  return (
    <div id="plans" className="flex justify-center bg-primary-gray">
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mt-4 mb-4 w-[1000px] lg:h-screen">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
