import "./style.scss";
import { useModal } from "@/hooks";
import AlertModal from "@/components/ModalContainer/Modals/AlertModal";

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
    </div>
  );
}
