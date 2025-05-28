import LayoutContainer from "@/common/ui/LayoutContainer";
import Modal from "@/common/ui/Modal";
import AuthContainer from "./AuthContainer";

const LoginModal = () => {
  const { loginModal } = LayoutContainer.useContainer();
  const { signInWithGoogle, loading } = AuthContainer.useContainer();

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      loginModal.close();
    } catch (error) {
      console.error("로그인 중 오류 발생:", error);
      // TODO: 에러 토스트 메시지 표시
    }
  };

  return (
    <Modal modal={loginModal}>
      <div className="flex flex-col items-center w-full h-full justify-center gap-6">
        <div className="text-2xl font-bold text-[#1A1A33]">Login</div>
        <div className="text-base text-[#666680] text-center mb-2">
          Log in easily and create your own knowledge repository
        </div>
        <div className="w-[320px] h-[1px] bg-[#E6E6E6] my-2" />
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-[320px] h-12 flex items-center justify-center gap-3 bg-white border border-[#E6E6E6] rounded-lg mb-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-gray-300 border-t-[#4285f4] rounded-full animate-spin" />
          ) : (
            <img
              src="/icons/google.svg"
              alt="Google Logo"
              className="w-5 h-5"
            />
          )}
          <span className="text-[#424242] font-medium text-base">
            {loading ? "Signing in..." : "Continue with Google"}
          </span>
        </button>
        <div className="text-xs text-[#808099] text-center mt-4">
          By logging in, you agree to the Terms of Service and Privacy Policy.
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
