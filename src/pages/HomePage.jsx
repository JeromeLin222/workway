import { ButtonComponent } from "../components/ui/Button";

function HomePage() {
  return (
    <main>
      <div>
        <div className="max-w-7xl px-[clamp(1rem,4vw,4.5rem)] mx-auto flex justify-center items-center flex-col">
          <div className="bg-[url(/images/index/gradient-ball.png)] bg-cover bg-top bg-no-repeat">
            <h1 className="text-title-4xl md:text-display text-center pt-12 md:pt-20 mb-6">
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
        </div>
        <div className="px-[clamp(0.75rem,1vw,4.5rem)]">
          <img className="block lg:hidden pb-12" src="/images/index/hero-4.png" alt="hero image 4" />
          <div className="hidden lg:grid pb-20 grid-cols-3 gap-6">
            <img src="/images/index/hero-1.png" alt="hero image 1" />
            <div>
              <img className="mb-6" src="/images/index/hero-2.png" alt="hero image 2" />
              <img src="/images/index/hero-3.png" alt="hero image 3" />
            </div>
            <img src="/images/index/hero-4.png" alt="hero image 4" />
          </div>
        </div>
      </div>
    </main>
  ); 
}

export default HomePage;