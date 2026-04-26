import { ArrowRight } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-[radial-gradient(circle_at_top_right,_#CCA4B4_0%,_#fcf8f9_45%)] dark:bg-[radial-gradient(circle_at_top_right,_#472f5b_0%,_#121014_45%)]">
      <div className="w-full max-w-md bg-white/90 dark:bg-[#1A161F]/90 backdrop-blur-md rounded-[40px] p-8 flex flex-col items-center text-center shadow-2xl border-2 border-[#CCA4B4]/20 transition-colors">
        <img 
          src="https://yt3.googleusercontent.com/ytc/AIdro_kc8l2i5g-zbXx4EtCdqt_7yG44sVnEFrF2g4Ec2GVs-g=s900-c-k-c0x00ffffff-no-rj" 
          alt="School Logo" 
          className="w-32 h-32 object-contain mb-6 drop-shadow-md"
        />
        
        <h1 className="text-2xl font-bold text-primary dark:text-[#E0D0F0] leading-tight mb-2">
          โรงเรียนเทศบาล 2 อนุบาลสาธิตเทศบาลเมืองบ้านไผ่
        </h1>
        
        <div className="w-12 h-1 bg-secondary-container rounded-full mb-4" />
        
        <p className="text-primary/70 dark:text-[#E0D0F0]/70 mb-8 px-4">
          ยินดีต้อนรับ<br />เข้าสู่ระบบติดตามผลการเรียน
        </p>

        <form className="w-full space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <div className="flex flex-col items-start gap-1 w-full">
            <label className="text-sm text-primary/60 dark:text-[#E0D0F0]/60 ml-4 mb-1">
              วันเดือนเกิด 4 หลัก เช่น 1508 (15 สิงหาคม)
            </label>
            <input 
              type="text" 
              maxLength={4}
              placeholder="ววดด"
              className="w-full h-14 px-6 bg-tertiary-fixed/30 dark:bg-white/5 border-2 border-transparent focus:border-secondary-container rounded-2xl text-lg outline-none transition-all dark:text-white"
            />
            <p className="text-[10px] text-primary/50 dark:text-white/40 mt-1 ml-4 text-left">
              ตัวเลขหลักเดียวให้ใส่เลข 0 ด้านหน้าด้วยนะคะ
            </p>
          </div>

          <button 
            type="submit"
            className="w-full h-16 bg-secondary-container hover:bg-[#E9D930] active:scale-95 transition-all rounded-2xl flex items-center justify-center gap-2 shadow-[0_6px_0_0_#D1C128] active:shadow-none active:translate-y-[6px]"
          >
            <span className="text-xl font-bold text-primary">เข้าสู่ระบบ</span>
            <ArrowRight className="w-5 h-5 text-primary" />
          </button>
        </form>

        <div className="mt-8 flex flex-col items-center gap-1">
          <p className="text-sm text-primary/60 dark:text-[#E0D0F0]/60">หากพบปัญหาการเข้าสู่ระบบ</p>
          <a href="#" className="text-sm font-bold text-primary dark:text-secondary-container underline decoration-secondary-container decoration-2 underline-offset-4">
            ติดต่อครูออม
          </a>
        </div>
      </div>
    </div>
  );
}
