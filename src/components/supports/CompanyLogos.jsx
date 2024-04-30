import React from 'react'
import { companyLogos } from '../../constants'

const CompanyLogos = ({ className }) => {
    return (
        <div className={className}>
            <h5 className='tagline mb-6 text-center text-n-1/50 '>helping people create beautiful content at</h5>
            <ul className="flex">
                {companyLogos.map((item, idx) => (
                    <li className='flex items-center justify-center flex-1 h-[8.5rem]' key={idx}>
                        <h6 className='h6 tracking-widest'>{item.name}</h6>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CompanyLogos