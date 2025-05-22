import LayoutContainer from "../ui/LayoutContainer";
import Modal from "../ui/Modal";

const LoginModal = () => {
  const { loginModal } = LayoutContainer.useContainer();
  return (
    <Modal modal={loginModal}>
      <div className="flex flex-col items-center w-full h-full justify-center gap-6">
        <div className="text-2xl font-bold text-[#1A1A33]">로그인</div>
        <div className="text-base text-[#666680] text-center mb-2">
          간편하게 로그인하고 나만의 지식 저장소를 만들어보세요
        </div>
        <div className="w-[320px] h-[1px] bg-[#E6E6E6] my-2" />
        <button className="w-[320px] h-12 flex items-center justify-center gap-3 bg-white border border-[#E6E6E6] rounded-lg mb-2">
          <img src="/icons/google.svg" alt="Google Logo" className="w-5 h-5" />
          <span className="text-[#424242] font-medium text-base">
            Google로 계속하기
          </span>
        </button>
        <button className="w-[320px] h-12 flex items-center justify-center gap-3 bg-white border border-[#E6E6E6] rounded-lg">
          <img src="/icons/apple.svg" alt="Apple Logo" className="w-5 h-5" />
          <span className="text-[#424242] font-medium text-base">
            Apple로 계속하기
          </span>
        </button>
        <div className="text-xs text-[#808099] text-center mt-4">
          로그인 시 이용약관 및 개인정보 처리방침에 동의하게 됩니다.
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
