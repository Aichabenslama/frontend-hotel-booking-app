import { TRENDING_DESTINATIONS } from '@/config/app.config'
import { getAsserPath } from '@/lib/utils'
import React from 'react'

const TrendingDestination = () => {
  return (
    <div className='container my-16'>
      <div className='mb-4 space-y-1'>
        <h2 className='text-2xl font-bold'>Trending Destination</h2>
        <p className='text-base text-muted-foreground'>Most popular choices for travellers from Tunisia</p>
        <div className='grid grid-cols-6 gap-4'>
          {TRENDING_DESTINATIONS.map((destination,index)=>(
            <div key={index} className={`h-[270px] rounded-lg overflow-hidden relative ${destination.className}`} >
              <img className='object-cover size-full rounded-lg' src={getAsserPath(destination.image)} alt={destination.title} />
              <div>
                <div>
                  <h3>{destination.title}</h3>
                </div>
              </div>
            </div>

          ))}

        </div>
      </div>
    </div>
  )
}

export default TrendingDestination