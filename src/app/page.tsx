import type { NextPage } from 'next';

const RegisterPage: NextPage = () => {
  return (
    <div className="w-full relative bg-ivory overflow-hidden flex flex-row items-start justify-start gap-[114px] tracking-[normal] text-left text-base text-primary font-button-medium mq450:gap-[114px_28px] mq750:gap-[114px_57px] mq1275:flex-wrap">
      <div className="h-[1024px] w-[825px] bg-lightseagreen flex flex-row items-start justify-center py-[237px] px-5 box-border min-w-[825px] max-w-full mq450:pt-[100px] mq450:pb-[100px] mq450:box-border mq1100:pt-[154px] mq1100:pb-[154px] mq1100:box-border mq1100:min-w-full mq1275:flex-1">
        <div className="h-[1024px] w-[825px] relative bg-lightseagreen hidden max-w-full" />
          <img
            className="h-[550px] w-[550px] relative object-cover max-w-full z-[1] mq1275:flex-1"
            loading="lazy"
            alt=""
            src="/images/backgroundwithecologyrecyclingconcept-232148234397removebgpreview-1@2x.png"
          />
      </div>
      <div className="w-[402px] flex flex-col items-start justify-start pt-[261px] px-0 pb-0 box-border min-w-[402px] max-w-full mq450:pt-[110px] mq450:box-border mq450:min-w-full mq750:pt-[170px] mq750:box-border mq1275:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[26px] max-w-full">
          <div className="w-[232px] relative [text-decoration:underline] leading-[24px] font-medium inline-block box-border pr-5 text-lightseagreen">
            Kembali ke halaman awal
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[48px] max-w-full text-41xl text-black mq450:gap-[24px_48px]">
            <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[12px] max-w-full">
              <h1 className="m-0 relative text-inherit leading-[80px] font-semibold font-inherit mq450:text-[36px] mq450:leading-[48px] mq750:text-[48px] mq750:leading-[64px]">
                Register
              </h1>
              <h3 className="m-0 relative text-xl leading-[24px] font-normal font-inherit mq450:text-base mq450:leading-[19px]">
                Silakan masuk dengan akun anda
              </h3>
            </div>
            <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[40px] mq450:gap-[20px_40px]">
              <div className="self-stretch flex flex-col items-end justify-start gap-[8px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[351px] pl-0 gap-[4px] mq450:pr-5 mq450:box-border">
                      <div className="relative text-sm leading-[18px] font-semibold font-button-medium text-base-primary text-left inline-block min-w-[40px]">
                        Email
                      </div>
                      <div className="relative text-xs leading-[18px] font-semibold font-text-12-semibold text-critical-icon text-left inline-block min-w-[7px]">
                        *
                      </div>
                    </div>
                    <div className="self-stretch rounded-md bg-neutral-10 flex flex-row items-start justify-start py-2 px-3 border-[1px] border-solid border-base-inline">
                      <input
                        className="w-[236px] [border:none] [outline:none] font-button-medium text-sm bg-[transparent] h-[18px] relative leading-[18px] text-base-icon text-left inline-block p-0"
                        placeholder="Placeholder"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[321px] pl-0 gap-[4px] mq450:pr-5 mq450:box-border">
                      <div className="relative text-sm leading-[18px] font-semibold font-button-medium text-base-primary text-left inline-block min-w-[70px]">
                        Password
                      </div>
                      <div className="relative text-xs leading-[18px] font-semibold font-text-12-semibold text-critical-icon text-left inline-block min-w-[7px]">
                        *
                      </div>
                    </div>
                    <div className="self-stretch rounded-md bg-neutral-10 flex flex-row items-start justify-start py-2 px-3 border-[1px] border-solid border-base-inline">
                      <input
                        className="w-[236px] [border:none] [outline:none] font-button-medium text-sm bg-[transparent] h-[18px] relative leading-[18px] text-base-icon text-left inline-block p-0"
                        placeholder="Placeholder"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[135px] relative text-sm leading-[18px] font-medium font-button-medium text-black text-left inline-block box-border pl-5">
                  Lupa password?
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start gap-[18px]">
              <button className="cursor-pointer [border:none] py-3 px-5 bg-lightseagreen self-stretch rounded flex flex-row items-center justify-center whitespace-nowrap hover:bg-[#72D4CA]">
                  <div className="relative text-base leading-[24px] font-medium font-button-medium text-neutral-10 text-left inline-block min-w-[74px]">
                    Text Only
                  </div>
                </button>
                <div className="w-[266px] relative text-base leading-[24px] font-medium font-button-medium text-left inline-block box-border pl-5 pr-5">
                  <span className="text-black">{`Belum punya akun? `}</span>
                  <span className="text-lightseagreen">Sign Up</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

/*
export default function Home() {
  return <main>Hello World</main>;
}*/