import { ButtonComponent } from "../components/ui/Button";

function ServicePage() {
    return (
      <main>
        {/* banner section */}
        <div className="py-12 md:py-20 bg-[url(/images/service/banner-bg-pc.png)] bg-cover bg-center">
          <div className="container text-center relative">
            <h1 className="text-title-4xl md:text-title-5xl mb-6 md:mb-12">服務方案</h1>
            <p className="text-body-md md:text-body-lg text-natural-50">我們最全面的服務方案，為您提供從評估、規劃到實踐的完整支持。不再擔心轉型過程中的各種挑戰，<br className="hidden md:block"/>我們的專家團隊將全程陪伴，確保您順利實現職業自由。</p>
            <img className="hidden lg:block absolute bottom-[-88px] right-[128px]" src="/images/service/banner-person.svg" alt="banner person" />
          </div>
        </div>
        {/* plan section */}
        <div className="py-12 md:py-20">
          <div className="container">
            <div className="mb-6 md:md-12 flex flex-col items-center">
              <img className="mb-1 w-[56px] h-[56px]" src="/images/service/goal.svg" />
              <h2 className="text-title-3xl md:text-title-4xl mb-4 md:mb-6">職涯轉型全程計畫</h2>
              <p className="text-body-md md:text-body-lg text-natural-50">從企業到自由，無縫轉型之旅</p>
            </div>
            <div className="border-2 border-secondary rounded-2xl p-12 flex">
              <div className="mr-6 w-full max-w-[876px]">
                <div className="text-primary mb-2">全面方案</div>
                <h3 className="text-title-2xl mb-2">職涯轉型全程計畫</h3>
                <p className="mb-2">針對希望完全改變職業領域的資深專業人士。我們的專家團隊將協助您將過往經驗轉化為新領域的競爭優勢。</p>
                <ul className="flex flex-col gap-1 mb-6">
                  <li className="flex">
                    <span class="material-symbols-outlined text-primary mr-2">stat_0</span>
                    深度職能轉換評估與規劃
                  </li>
                  <li className="flex">
                    <span class="material-symbols-outlined text-primary mr-2">stat_0</span>
                    跨領域技能遷移策略
                  </li>
                  <li className="flex">
                    <span class="material-symbols-outlined text-primary mr-2">stat_0</span>
                    新領域人脈建立指導
                  </li>
                  <li className="flex">
                    <span class="material-symbols-outlined text-primary mr-2">stat_0</span>
                    長期職涯發展藍圖
                  </li>
                </ul>
                <div className="p-6 bg-natural-95 rounded-2xl mb-6">
                  <p className="mb-2">適合對象：<span className="font-bold">從企業職場轉型為自由工作者 / 數位遊牧者的專業人士</span></p>
                  <p>優惠價格：<span className="text-title-2xl text-primary">NT$ 120,000</span></p>
                </div>
                <ButtonComponent>
                  <div className="flex">
                    <p>我有興趣</p>
                    <span className="material-symbols-outlined">chevron_right</span>
                  </div>
                </ButtonComponent>
              </div>
              <div className="shrink max-w-[300px] max-h-[337px]">
                <img className="w-full h-full" src="/images/service/plan-1.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
  
  export default ServicePage;