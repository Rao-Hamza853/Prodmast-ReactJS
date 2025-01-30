

const MultiDivs = () => {
    const array = Array.from({ length: 80 }, (_, index) => index);
  return (
    <div className="grid grid-cols-8 w-full hover:skew-12 transition-all duration-100">
      {
            array.map((item)=>(
             <div class="w-full border h-16 bg-[#70C217] "></div>
            ))
        }
    </div>
  )
}

export default MultiDivs
