import "./style.scss";
import { useModal } from "@/hooks";
import AlertModal from "@/components/ModalContainer/Modals/AlertModal";
import CustomSVG from "@/components/CustomSVG";

export default function Main() {
  const { openModal } = useModal();
  const handleClick = () => {
    openModal(AlertModal, {
      title: "알림",
      message: <p>테스트</p>,
      onSubmit: () => {
        console.log("final");
      },
    });
  };
  return (
    <div>
      <button onClick={handleClick}>모달 추가</button>
      <div
        style={{
          width: "500px",
          height: "500px",
          backgroundColor: "gray",
          position: "relative",
        }}
      >
        <CustomSVG width={550} height={200} />
        <CustomSVG width={250} height={250} stroke="#FF565D" />
        <CustomSVG width={150} height={200} stroke="#1CB6FF" vCheck />
      </div>
    </div>
  );
}
