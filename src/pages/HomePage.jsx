import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { ButtonComponent } from "../components/ui/Button";
import { StoryCard } from '../components/ui/StoryCard';

import { storyData } from '../data/mockData';

function HomePage() {
  return (
    <main>
      {/* hero section */}
      <div className="mx-auto py-12 md:py-20 px-[clamp(0.75rem,1vw,4.5rem)] bg-[url(/images/index/gradient-ball.png)] bg-top bg-size-[800px_800px] bg-no-repeat flex justify-center items-center flex-col">
        <div>
          <h1 className="text-title-4xl md:text-display text-center mb-6">
            一起陪伴、探索<br />
            還有你那些未完成的夢
          </h1>
          <div className="flex flex-col items-center md:flex-row md:justify-between mb-10">
            <p className="text-natural-50 mb-4 text-center md:text-left">
              自由工作很美，也很難。<br />
              我們用 1 對 1 陪伴，陪你從第一步開始，直到夢想變成日常
            </p>
            <ButtonComponent
              color="secondary"
              iconUrl="/images/icon/chevron.svg"
              size="custom"
              className="p-3 md:px-4"
            >
              <p className="text-xl md:text-2xl font-bold">開始你的職旅</p> 
            </ButtonComponent>
          </div>
        </div>
        <div>
          <img className="block lg:hidden" src="/images/index/hero-4.png" alt="hero image 4" />
          <div className="hidden lg:grid grid-cols-3 gap-6">
            <img src="/images/index/hero-1.png" alt="hero image 1" />
            <div>
              <img className="mb-6" src="/images/index/hero-2.png" alt="hero image 2" />
              <img src="/images/index/hero-3.png" alt="hero image 3" />
            </div>
            <img src="/images/index/hero-4.png" alt="hero image 4" />
          </div>
        </div>
      </div>
      {/* story section */}
      <div className="py-12 md:py-20 relative">
        <div className="container md:grid md:grid-cols-3 gap-6 flex flex-col">
          <div>
            <img className="mb-6" src="/images/logo-icon.svg" alt="logo icon" />
            <h2 className="text-title-5xl mb-6">
              他們已經踏上職旅<br />
              聽聽他們的故事
            </h2>
            <p className="text-natural-50 text-body-lg">每一段職涯轉型都有獨特挑戰，這些曾經與你有相同疑惑的夥伴，現在正過著他們嚮往的生活</p>
          </div>
          <div className="col-span-2">
            <Swiper
              // install Swiper modules
              modules={[Navigation, A11y]}
              spaceBetween={16}
              slidesPerView={1.2}
              freeMode={true}
              breakpoints={{
                768: {
                  slidesPerView: 2.8,
                  spaceBetween: 24
                }
              }}
            >
              {storyData.map((story) => (
                <SwiperSlide
                  key={story.id}
                  // style={{ width: 'calc((100% + 50%) / 3 - 16px)' }}
                >
                  <StoryCard {...story} />
                </SwiperSlide>
              ))}
              
            </Swiper>
          </div>
        </div>
        <div className="bg-natural-95 h-[200px] w-full absolute bottom-0"></div>
      </div>  
      {/* choose section */}
      <div className="py-12 bg-natural-95">
        <div className="container">
          <div className='flex flex-col items-center mb-12'>    
            <img src="/images/index/why-workway.svg" alt="why icon" className="mb-1" />
            <h2 className="font-bold text-title-5xl">選擇職旅 WorkWay</h2>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className='relative'>
              <img className='rounded-3xl' src="/images/index/adv-1.png" alt="adv image" />
              <span className='py-3 pl-3 pr-6 text-natural-50 font-bold text-title-2xl flex absolute bottom-0 bg-natural-95 rounded-tr-xl'>
                <img className='mr-2' src="/images/icon/ads.svg" />
                實戰經驗
              </span>
            </div>
            <div className='relative'>
              <img className='rounded-3xl' src="/images/index/adv-2.png" alt="adv image" />
              <span className='py-3 pl-3 pr-6 text-natural-50 font-bold text-title-2xl flex absolute bottom-0 bg-natural-95 rounded-tr-xl'>
                <img className='mr-2' src="/images/icon/ads.svg" />
                全方位支持
              </span>
            </div>
            <div className='relative'>
              <img className='rounded-3xl' src="/images/index/adv-3.png" alt="adv image" />
              <span className='py-3 pl-3 pr-6 text-natural-50 font-bold text-title-2xl flex absolute bottom-0 bg-natural-95 rounded-tr-xl'>
                <img className='mr-2' src="/images/icon/ads.svg" />
                社群力量
              </span>
            </div>
           
          </div>
        </div>
      </div>

    </main>
  ); 
}

export default HomePage;