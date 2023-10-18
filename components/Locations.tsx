import { PEOPLE_URL } from "@/constants"
import Image from "next/image"

interface LocationProps {
  backgroundImage: string
  name: string
  subtitle: string
  visitCount: string
}

const Places = ({ name, backgroundImage, subtitle, visitCount }: LocationProps) => {
  return (
    <div className={`h-[320px] w-full min-w-[640px] bg-cover bg-no-repeat lg:rounded-2xl ${backgroundImage}`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-10 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image
              src="/folded-map.svg"
              alt="map"
              width={28}
              height={28}
            />
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{name}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-3 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-6 w-6 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={32}
                height={32}
              />
            ))}
          </span>

          <p className="bold-16 md:bold-20 text-white">{visitCount}</p>
        </div>
      </div>
    </div>
  )
}

const Locations = () => {
  return (
    <section className='2xl:max-container relative flex flex-col py-10 max-lg:mb-10 lg:py-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto'>
        <Places
          name="Asokoro"
          backgroundImage="bg-bg-img-1"
          subtitle="Prigen, Pasuruan"
          visitCount="50+ Visited"
        />
        <Places
          name="Lugbe Housing"
          backgroundImage="bg-bg-img-1"
          subtitle="Prigen, Pasuruan"
          visitCount="50+ Visited"
        />
        <Places
          name="Lugbe Housing"
          backgroundImage="bg-bg-img-1"
          subtitle="Prigen, Pasuruan"
          visitCount="50+ Visited"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-32 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:rounded-8xl relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 capitalize text-white">
            <strong>Feeling lost</strong> and not knowing the way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Laboriosam magni deleniti, quibusdam at numquam fuga impedit 
            tempora distinctio eveniet, velit ullam.
          </p>
          <Image
            src="/quote.svg"
            alt="place-1"
            width={186}
            height={210}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  )
}

export default Locations