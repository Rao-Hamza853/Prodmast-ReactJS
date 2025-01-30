import CirclePrac from "./circle-prac"
import WorkWithUsBtn from "./ui/work-with-btn"

const Integrations = () => {
  return (
    <div className="px-6 lg:px-12 xl:px-16 2xl:px-20 pt-10 lg:pt-20 pb-100 lg:pb-20 flex flex-col gap-y-10 lg:flex-row lg:justify-between lg:items-center 2xl:justify-center 2xl:gap-x-36">
      <div className="space-y-5 2xl:space-y-10 place-items-start md:place-items-center lg:place-items-start">
        <h2 className='text-4xl font-bold text-black/90 leading-12'>Empowering Top Companies <br/> with Seamless Integrations</h2>
        <p className='text-sm text-black/80 opacity-90 tracking-wider'>Experience seamless connections with our innovative solutions, designed <br /> to effortlessly integrate with your existing systems, enhance productivity, <br /> and drive your bussiness towards greater success.</p>
        <WorkWithUsBtn/>
      </div>
      <div>
        <CirclePrac/>
      </div>
    </div>
  )
}

export default Integrations
