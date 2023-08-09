import React from 'react'


interface props {
    name:string,
    type:string,
    content:string,
    items: string []
}

export function FreeTeam({name, type, content, items}: props) {
    
  items = items

  return (
    <div className='bg-[#fff] border border-[#005AE2] rounded-[12px] hover:pt-[95px] hover:pr-[106px] hover:pb-[148px] hover:translate-y-[-10%] hover:pt-[65px] pt-[24px] pr-[98px] pb-[45px]  pl-[87px] transition-all hover:bg-[#1E3448] text-[#141414] hover:text-[#fff] '>
        <div className=''>
            <p className=' text-[24px] font-[400]'>{name}</p>
            <p className='text-[40px] mt-[34px] font-[500] '>{type}</p>
            <p className='text-[20px] mt-[8px]'>{content}</p>
            {items.map((item,index)=>{
                return(
                    <div key={index} className='flex gap-[8px] items-center mt-[24px] '>
                        <img className="self-start w-[16px] h-[16px]"  src="/check-circle.svg" alt="svg" />
                        <p className='text-[14px]'>{item}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
