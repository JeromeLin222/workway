import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { ButtonComponent } from "../components/ui/Button";

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
      <div className="py-12 md:py-20">
        <div className="container grid grid-cols-3 gap-6">
          <div className>
            <img className="mb-6" src="/images/logo-icon.svg" alt="logo icon" />
            <h2 className="text-title-5xl mb-6">
              他們已經踏上職旅<br />
              聽聽他們的故事
            </h2>
            <p className="text-natural-50 text-body-lg">每一段職涯轉型都有獨特挑戰，這些曾經與你有相同疑惑的夥伴，現在正過著他們嚮往的生活</p>
          </div>
          <div className="col-span-2 overflow-visible">
            <Swiper
              // install Swiper modules
              modules={[Navigation, A11y]}
              spaceBetween={24}
              slidesPerView="auto"
              freeMode={true}
            >
              <SwiperSlide style={{ width: 'calc((100% + 50%) / 3 - 16px)' }}>
                <div className='rounded-3xl shadow-sm'>
                  <img className='rounded-t-3xl' src="/images/index/story-cover-1.png" alt="" />
                  <div className='p-4 pb-6'>
                    <h3 className='text-title-2xl mb-4'>轉型成功的設計師</h3>
                    <p className='text-natural-50 mb-4'>從企業設計師轉職自由接案，比我想的難太多。收入不穩時我幾乎想放棄，是職旅顧問幫我找回方向與差異化。半年後，我不僅維持收入，還能自由挑案，最重要的是，我終於有時間陪爸媽。</p>
                    <div className='flex'>
                      <p className='font-bold pr-2 border-r border-natural-85'>視覺設計師</p><span className='ml-2'>郭敏迪 (34y)</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ width: 'calc((100% + 50%) / 3 - 16px)' }}>
                <div className='rounded-3xl shadow-sm'>
                  <img className='rounded-t-3xl' src="/images/index/story-cover-1.png" alt="" />
                  <div className='p-4 pb-6'>
                    <h3 className='text-title-2xl mb-4'>轉型成功的設計師</h3>
                    <p className='text-natural-50 mb-4'>從企業設計師轉職自由接案，比我想的難太多。收入不穩時我幾乎想放棄，是職旅顧問幫我找回方向與差異化。半年後，我不僅維持收入，還能自由挑案，最重要的是，我終於有時間陪爸媽。</p>
                    <div className='flex'>
                      <p className='font-bold pr-2 border-r border-natural-85'>視覺設計師</p><span className='ml-2'>郭敏迪 (34y)</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ width: 'calc((100% + 50%) / 3 - 16px)' }}>
                <div className='rounded-3xl shadow-sm'>
                  <img className='rounded-t-3xl' src="/images/index/story-cover-1.png" alt="" />
                  <div className='p-4 pb-6'>
                    <h3 className='text-title-2xl mb-4'>轉型成功的設計師</h3>
                    <p className='text-natural-50 mb-4'>從企業設計師轉職自由接案，比我想的難太多。收入不穩時我幾乎想放棄，是職旅顧問幫我找回方向與差異化。半年後，我不僅維持收入，還能自由挑案，最重要的是，我終於有時間陪爸媽。</p>
                    <div className='flex'>
                      <p className='font-bold pr-2 border-r border-natural-85'>視覺設計師</p><span className='ml-2'>郭敏迪 (34y)</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              
            </Swiper>
          </div>
        </div>
      </div>

    </main>
  ); 
}

export default HomePage;