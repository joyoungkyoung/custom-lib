import { StrictPropsWithChildren } from "@/types/strictPropsWithChildren";
import Bg from "@/assets/images/mainBg.png";
import "./style.scss";

export default function HomeLayout({ children }: StrictPropsWithChildren) {
  return (
    <main className="page-wrapper">
      <img className="page-wrapper-bg" src={Bg} />
      <section className="page-header-section">
        <h1 className="header-section-title">
          속삭이는
          <br />
          자작나무숲
        </h1>
        <p className="header-section-text">인제군 스마트 서비스</p>
      </section>
      <section className="page-cotent-section">{children}</section>
    </main>
  );
}
