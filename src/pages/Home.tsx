import React, { useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getHomePageVideos } from '../store/reducers/getHomePageVideos'
import InfiniteScroll from "react-infinite-scroll-component"
import Spinner from '../components/Spinner'
import { HomePageVideos } from '../Types'
import Card from '../components/Card'
import { Link } from 'react-router-dom'


const Home = () => {



  const dispatch = useAppDispatch()
  const videos = useAppSelector((state) => state.youtubeApp.videos)

  useEffect(() => {
    dispatch(getHomePageVideos(false))
    console.log("videos", videos)
  }, [dispatch])

  return (
    <div className='max-h-screen overflow-hidden'>
      <div style={{ height: "8.5vh" }}>
        <Navbar />
      </div>
      <div className='flex mt-1' style={{ height: "91.5vh" }}>
        <Sidebar />
        {
          videos.length ?
            <InfiniteScroll dataLength={videos.length}
              next={() => dispatch(getHomePageVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              height={650}
            >
              <div className="grid lg:gap-y-20 gap-y-6 gap-x-10 lg:grid-cols-3 grid-cols-2 p-8   ">
                {videos.map((video: HomePageVideos) => {
                  return <Link to={`/watch/${video.videoId}`}><Card data={video} key={video.videoId} /></Link>
                })}
              </div>
            </InfiniteScroll>
            :
            <Spinner />
        }
      </div>
    </div>
  )
}

export default Home