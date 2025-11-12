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
            <br className="hidden md:block"/>
            無論你是剛開始探索期，還是已在轉型路上遇到瓶頸，我們都能提供適合你的專業指導。
          </>
        }
      />
    


      <CTASection />
    </main>
);
  }

  export default AboutPage;