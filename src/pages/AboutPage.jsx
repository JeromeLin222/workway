

import { CTASection } from "../components/ui/CTASection";
import { PageBanner } from "../components/ui/PageBanner";

function AboutPage() {
  return (
    <main>
      {/* banner section */}
      <PageBanner
        title="關於職旅"
        description={
          <>
            職旅 WorkWay 匯集了來自不同領域、擁有豐富實戰經驗的自由工作者與數位遊牧專家。根據你的需求和階段，我們提供一對一諮詢，
            <br className="hidden md:block" />
            無論你是剛開始探索期，還是已在轉型路上遇到瓶頸，我們都能提供適合你的專業指導。
          </>
        }
      />
      <div className="py-12 md:py-20">
        <div className="container">
          <div className="text-center mb-6 md:mg-12">
            <h2 className="text-title-3xl md:text-title-4xl mb-4 md:mb-6">精實的職旅夥伴</h2>
            <p className="text-body-md md:text-body-lg text-natural-50">我們相信，最好的指導來自於那些已經走過你想走的路，並願意伸出手拉你一把的人。</p>
          </div>

            <div className="flex gap-6 overflow-x-auto w-screen"
              style={{
                marginLeft: 'calc(-1 * clamp(0.75rem, 1vw, 4.5rem))'
              }}
            >
              <div className="w-[320px] flex-shrink-0 rounded-2xl shadow-card overflow-hidden">
                <img src="/images/about/mentor-1.png" alt="mentor 1" />
                <div className="p-4">
                  <p className="text-body-sm md:text-body-md text-natural-50 mb-2">數位遊牧先驅</p>
                  <h3 className="text-title-xl md:text-title-2xl mb-4">陳志遠 Ethan Chen</h3>
                  <div>
                    <ul className="flex text-natural-50 gap-2 text-body-sm flex-wrap">
                      <li className="border border-natural-85 rounded-full px-2 py-1"># 遠端工作策略</li>
                      <li className="border border-natural-85 rounded-full px-2 py-1"># 數位遊牧生活設計</li>
                      <li className="border border-natural-85 rounded-full px-2 py-1"># 數位遊牧生活設計</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-[320px] flex-shrink-0 rounded-2xl shadow-card overflow-hidden">
                <img src="/images/about/mentor-1.png" alt="mentor 1" />
                <div className="p-4">
                  <p className="text-body-sm md:text-body-md text-natural-50 mb-2">數位遊牧先驅</p>
                  <h3 className="text-title-xl md:text-title-2xl mb-4">陳志遠 Ethan Chen</h3>
                  <div>
                    <ul className="flex text-natural-50 gap-2 text-body-sm flex-wrap">
                      <li className="border border-natural-85 rounded-full px-2 py-1"># 遠端工作策略</li>
                      <li className="border border-natural-85 rounded-full px-2 py-1"># 數位遊牧生活設計</li>
                      <li className="border border-natural-85 rounded-full px-2 py-1"># 數位遊牧生活設計</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-[320px] flex-shrink-0 rounded-2xl shadow-card overflow-hidden">
                <img src="/images/about/mentor-1.png" alt="mentor 1" />
                <div className="p-4">
                  <p className="text-body-sm md:text-body-md text-natural-50 mb-2">數位遊牧先驅</p>
                  <h3 className="text-title-xl md:text-title-2xl mb-4">陳志遠 Ethan Chen</h3>
                  <div>
                    <ul className="flex text-natural-50 gap-2 text-body-sm flex-wrap">
                      <li className="border border-natural-85 rounded-full px-2 py-1"># 遠端工作策略</li>
                      <li className="border border-natural-85 rounded-full px-2 py-1"># 數位遊牧生活設計</li>
                      <li className="border border-natural-85 rounded-full px-2 py-1"># 數位遊牧生活設計</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-[320px] flex-shrink-0 rounded-2xl shadow-card overflow-hidden">
                <img src="/images/about/mentor-1.png" alt="mentor 1" />
                <div className="p-4">
                  <p className="text-body-sm md:text-body-md text-natural-50 mb-2">數位遊牧先驅</p>
                  <h3 className="text-title-xl md:text-title-2xl mb-4">陳志遠 Ethan Chen</h3>
                  <div>
                    <ul className="flex text-natural-50 gap-2 text-body-sm flex-wrap">
                      <li className="border border-natural-85 rounded-full px-2 py-1"># 遠端工作策略</li>
                      <li className="border border-natural-85 rounded-full px-2 py-1"># 數位遊牧生活設計</li>
                      <li className="border border-natural-85 rounded-full px-2 py-1"># 數位遊牧生活設計</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-[320px] flex-shrink-0 rounded-2xl shadow-card overflow-hidden">
                <img src="/images/about/mentor-1.png" alt="mentor 1" />
                <div className="p-4">
                  <p className="text-body-sm md:text-body-md text-natural-50 mb-2">數位遊牧先驅</p>
                  <h3 className="text-title-xl md:text-title-2xl mb-4">陳志遠 Ethan Chen</h3>
                  <div>
                    <ul className="flex text-natural-50 gap-2 text-body-sm flex-wrap">
                      <li className="border border-natural-85 rounded-full px-2 py-1"># 遠端工作策略</li>
                      <li className="border border-natural-85 rounded-full px-2 py-1"># 數位遊牧生活設計</li>
                      <li className="border border-natural-85 rounded-full px-2 py-1"># 數位遊牧生活設計</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-[320px] flex-shrink-0 rounded-2xl shadow-card overflow-hidden">
                <img src="/images/about/mentor-1.png" alt="mentor 1" />
                <div className="p-4">
                  <p className="text-body-sm md:text-body-md text-natural-50 mb-2">數位遊牧先驅</p>
                  <h3 className="text-title-xl md:text-title-2xl mb-4">陳志遠 Ethan Chen</h3>
                  <div>
                    <ul className="flex text-natural-50 gap-2 text-body-sm flex-wrap">
                      <li className="border border-natural-85 rounded-full px-2 py-1"># 遠端工作策略</li>
                      <li className="border border-natural-85 rounded-full px-2 py-1"># 數位遊牧生活設計</li>
                      <li className="border border-natural-85 rounded-full px-2 py-1"># 數位遊牧生活設計</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>





        </div>
        
      </div>



      <CTASection />
    </main>
  );
}

export default AboutPage;