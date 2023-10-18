import Image from 'next/image'

const Guide = () => {
  return (
    <section id="guide" className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>

        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Guide you to easy path</h2>
          <p>
            Only with Travella application will you no longer get lost again and again, 
            because we already support offline maps when there is no internet connection 
            in the field. Invite your friends, relatives and friends to have fun touring 
            through various remarkable sites.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container realtive w-full">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-3xl"
        />

        <div className="absolute z-20 flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl shadow-lg md:left-[5%] max-xl:left-[15%] xl:left-[30%]">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50 ml-[2px]">48 mins</p>
              </div>
              <p className="bold-16 mt-2">Agua Calientes</p>
            </div>
            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Abuja Central</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide