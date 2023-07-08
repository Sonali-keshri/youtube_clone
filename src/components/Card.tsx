import React from 'react'
import { HomePageVideos } from '../Types'
import { Link } from 'react-router-dom'

const Card = ({ data }: { data: HomePageVideos }) => {
  return (
    <div className='w-auto h-60 flex flex-col gap-3 '>
      <div className='relative '>
        <span className='absolute bottom-2 right-2 text-sm bg-gray-900 px-2 py-0.2 rounded-md z-10 '>{data.videoDuration}</span>
        <Link to={`/watch/${data.videoId}`}>
          <img src={data.videoThumbnail} className='h-38 rounded-lg' alt="thumbnail" />
        </Link>
      </div>
      <div className='flex gap-4'>
        <div className="min-w-fit">
          <a href="#"> <img src={data.channelInfo.image} alt="channel-img" className='rounded-full w-10' /></a>
        </div>
        <div >
          <h3><a href="#" className='line-clamp-2'>{data.videoTitle}</a></h3>
          <div  className='text-sm text-gray-400'>
            <div>
               <a href="#" className='hover:text-white'>{data.channelInfo.name}</a>
            </div>
            <div>
              <span className="after:content-['•'] after:mx-1 "><a href="#">
                {data.videoViews} views
              </a></span>
              <span>
                <a>
                  {data.videoAge}
                </a>
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Card