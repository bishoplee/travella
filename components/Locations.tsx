
interface LocationProps {
  backgroundImage: string
  name: string
  subtitle: string
  visitCount: string
}

const Places = ({ name, backgroundImage, subtitle, visitCount }: LocationProps) => {
  return (
    <div>
      Location {name}
    </div>
  )
}

const Locations = () => {
  return (
    <section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <Places
          name="Asokoro"
          backgroundImage="bg-bg-img-1"
          subtitle="Prigen, Pasuruan"
          visitCount="50+ Visited"
        />
      </div>
    </section>
  )
}

export default Locations