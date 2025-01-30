export default function CircularMenu() {
    const innerCircleIcons = [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot-pxXJ3F3U3WfQ3MoyJe1K213wOKCVs2.png",
        alt: "App 1",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot-pxXJ3F3U3WfQ3MoyJe1K213wOKCVs2.png",
        alt: "App 2",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot-pxXJ3F3U3WfQ3MoyJe1K213wOKCVs2.png",
        alt: "App 3",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot-pxXJ3F3U3WfQ3MoyJe1K213wOKCVs2.png",
        alt: "App 4",
      },
    ]
  
    const outerCircleIcons = [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot-pxXJ3F3U3WfQ3MoyJe1K213wOKCVs2.png",
        alt: "App 5",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot-pxXJ3F3U3WfQ3MoyJe1K213wOKCVs2.png",
        alt: "App 6",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot-pxXJ3F3U3WfQ3MoyJe1K213wOKCVs2.png",
        alt: "App 7",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot-pxXJ3F3U3WfQ3MoyJe1K213wOKCVs2.png",
        alt: "App 8",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot-pxXJ3F3U3WfQ3MoyJe1K213wOKCVs2.png",
        alt: "App 9",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot-pxXJ3F3U3WfQ3MoyJe1K213wOKCVs2.png",
        alt: "App 10",
      },
    ]
  
    return (
      <div className="min-h-screen bg-[#e8f4e8] flex flex-col items-center justify-center">
        <div className="relative w-[500px] h-[500px]">
          {/* Outer circle */}
          <div className="absolute inset-0 border-4 border-white/20 rounded-full" />
  
          {/* Inner circle */}
          <div className="absolute inset-[100px] border-4 border-white/20 rounded-full" />
  
          {/* Inner circle icons */}
          {innerCircleIcons.map((icon, index) => {
            const angle = (index * 360) / innerCircleIcons.length
            const radius = 120
            const x = Math.cos((angle * Math.PI) / 180) * radius + 250
            const y = Math.sin((angle * Math.PI) / 180) * radius + 250
  
            return (
              <div
                key={`inner-${index}`}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-2 shadow-lg w-12 h-12 flex items-center justify-center"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                }}
              >
                <img src={icon.src || "/placeholder.svg"} alt={icon.alt} className="w-8 h-8" />
              </div>
            )
          })}
  
          {/* Outer circle icons */}
          {outerCircleIcons.map((icon, index) => {
            // const angle = (index * 360) / outerCircleIcons.length
            // const radius = 220
            // const x = Math.cos((angle * Math.PI) / 180) * radius + 250
            // const y = Math.sin((angle * Math.PI) / 180) * radius + 250
  
            return (
              <div
                key={`outer-${index}`}
                className="absolute transform -translate-x-1/2 -translate-y-1/6 bg-white rounded-lg p-2 shadow-lg w-12 h-12 flex items-center justify-center"
                // style={{
                //   left: `${x}px`,
                //   top: `${y}px`,
                // }}
              >
                <img src={icon.src || "/placeholder.svg"} alt={icon.alt} className="w-8 h-8" />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
  
  