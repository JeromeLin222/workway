import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { ButtonComponent } from "../components/ui/Button";
import { StoryCard } from '../components/ui/StoryCard';
import { AdvantageCard } from '../components/ui/AdvantageCard';
import { ServeCard } from '../components/ui/ServeCard';

import { storyData } from '../data/mockData';
import { advantageData } from '../data/mockData';
import {serveData} from '../data/mockData';

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
        <div className="container lg:grid lg:grid-cols-3 gap-6 flex flex-col">
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
      <div className="py-12 md:py-20 bg-natural-95">
        <div className="container relative">
          <div className='flex flex-col items-center mb-12'>    
            <img src="/images/index/why-workway.svg" alt="why icon" className="mb-1" />
            <h2 className="font-bold text-title-4xl lg:text-title-5xl">選擇職旅 WorkWay</h2>
          </div>
          <div className="lg:grid lg:grid-cols-3 flex flex-col items-center gap-4 lg:gap-6 mb-12 relative z-10">
            {
              advantageData.map((advantage) => 
                <AdvantageCard key={advantage.id} {...advantage} />
              )
            }
          </div>
          <div className='flex items-center'>
            <span className='text-natural-50 mr-auto'>不是套模板的建議，而是為你量身打造的陪伴！</span>
            <div className='hidden lg:block border-b border-natural-85 w-[70%]'></div>
          </div>
          <img src="/images/index/adv-vectors.svg" className='hidden lg:block absolute top-0 right-[1rem] z-0' />
        </div>
      </div>
      {/* partner section */}
      <div className="py-12 md:py-20 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="lg:grid lg:grid-cols-2 gap-6">
            <div>
              <img className='rounded-xl mb-4 lg:md-0' src="/images/index/team.png" alt="team image" />
            </div>
            <div className='px-3 lg:px-4 flex flex-col gap-4 md:gap-6 items-center md:items-start'>
              <h2 className="text-title-4xl lg:text-title-5xl">遇見你的職涯夥伴</h2>
              <span className="text-body-lg text-natural-50">每位顧問都有獨特專長，更重要的是：</span>
              <h3 className="text-title-xl md:text-title-2xl text-primary bg-natural-95 p-2">“他們都曾面對你正在經歷的挑戰”</h3>
              <p className="text-natural-50 text-body-lg">職旅 WorkWay 匯集了來自不同領域、擁有豐富實戰經驗的自由工作者與數位遊牧專家。我們的顧問不只教授理論，更分享親身經歷的挑戰與解決之道。</p>
              <p className="text-natural-50 text-body-lg">我們相信，最好的指導來自於那些已經走過你想走的路，並願意伸出手拉你一把的人。</p>
              <ButtonComponent
                color="primary"
              >
                了解更多職旅夥伴
              </ButtonComponent>
            </div>
          </div>
        </div>
        <div className='absolute top-[530px] right-[-160px] w-[400px] h-[400px] lg:top-[140px] lg:right-[-180px] lg:w-[800px] lg:h-[800px] z-0 bg-[url(/images/index/gradient-ball.png)] bg-cover bg-center'></div>
      </div>
      {/* flow section */}
      <div className="py-12 md:py-20 bg-primary">
        <div className="container flex flex-col items-center">
          <h2 className='text-title-4xl md:text-title-5xl text-white mb-4 lg:mb-6'>服務流程</h2>
          <p className='text-white text-body-md md:text-body-lg mb-6 lg:mb-12'>簡單四步，踏上你的職旅</p>
          <div className="hidden md:grid md:grid-cols-4 md:gap-6">
            {serveData.map((serve, index) => (
              <ServeCard
                key={serve.id}
                {...serve}
                index={index}
               />
            ))}
          </div>
        </div>
        <div className="md:hidden px-3 flex items-stretch">
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={16}
            slidesPerView={1.2}
            freeMode={true}
          >
            {serveData.map((serve, index) => (
              <SwiperSlide
                key={serve.id}
              >         
                <ServeCard
                  {...serve}
                  index={index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  ); 
}

export default HomePage;