import { ButtonComponent } from "../components/ui/Button";
import { PlanCard } from "../components/ui/PlanCard";

import { planData } from "../data/mockData";

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
            <div className="flex flex-col gap-6">
              {planData.map((plan) => (
                <PlanCard 
                  key={plan.id}
                  {...plan}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }
  
  export default ServicePage;