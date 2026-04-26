import { GraduationCap, Calendar, FileText, MessageSquare, BookOpen, ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Dashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 py-4"
    >
      {/* Student Profile Card */}
      <div className="bg-primary-container rounded-[32px] p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-2xl font-bold mb-1">สวัสดีจ๊ะ สมชาย</h1>
          <p className="opacity-90">ชั้น ป.4/1 • เลขที่ 12</p>
          <div className="mt-4 inline-flex items-center gap-2 bg-secondary-container text-primary px-4 py-1 rounded-full text-xs font-bold">
            <Sparkles className="w-4 h-4 fill-current" />
            มาเรียนวันนี้แล้ว
          </div>
        </div>
        <div className="absolute bottom-0 right-0 p-4 opacity-20">
          <GraduationCap className="w-32 h-32 rotate-12" />
        </div>
      </div>

      {/* Bento Grid Menu */}
      <div className="grid grid-cols-2 gap-4">
        <button className="col-span-1 bg-[#E06C4A] text-white p-6 rounded-[28px] shadow-[0_6px_0_0_#A04A32] flex flex-col items-center justify-center gap-3 active:translate-y-[4px] active:shadow-none transition-all">
          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
            <GraduationCap className="w-10 h-10 fill-current" />
          </div>
          <span className="text-lg font-bold">เช็คคะแนน</span>
        </button>

        <button className="col-span-1 bg-[#DCCE40] text-[#472F5B] p-6 rounded-[28px] shadow-[0_6px_0_0_#9E9025] flex flex-col items-center justify-center gap-3 active:translate-y-[4px] active:shadow-none transition-all">
          <div className="w-14 h-14 bg-[#472F5B]/10 rounded-2xl flex items-center justify-center">
            <Calendar className="w-10 h-10 fill-current" />
          </div>
          <span className="text-lg font-bold">ตารางเรียน</span>
        </button>

        <button className="col-span-2 bg-[#CCA4B4] text-[#472F5B] p-6 rounded-[28px] shadow-[0_6px_0_0_#9E7B8A] flex items-center justify-between px-8 active:translate-y-[4px] active:shadow-none transition-all">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/40 rounded-2xl flex items-center justify-center">
              <FileText className="w-10 h-10 fill-current" />
            </div>
            <div className="text-left">
              <span className="text-lg font-bold block leading-tight">สถานะงาน</span>
              <span className="text-xs opacity-70">มี 2 งานที่รอส่ง</span>
            </div>
          </div>
          <ChevronRight className="w-8 h-8" />
        </button>

        <button className="col-span-1 bg-primary text-white p-6 rounded-[28px] shadow-[0_6px_0_0_#1F0E2D] flex flex-col items-center justify-center gap-3 active:translate-y-[4px] active:shadow-none transition-all">
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
            <MessageSquare className="w-10 h-10 fill-current" />
          </div>
          <span className="text-lg font-bold">ติดต่อคุณครู</span>
        </button>

        <button className="col-span-1 bg-[#e4e2e3] text-[#472F5B] p-6 rounded-[28px] shadow-[0_6px_0_0_#D1CED0] flex flex-col items-center justify-center gap-3 active:translate-y-[4px] active:shadow-none transition-all">
          <div className="w-14 h-14 bg-[#472F5B]/10 rounded-2xl flex items-center justify-center">
            <BookOpen className="w-10 h-10 fill-current" />
          </div>
          <span className="text-lg font-bold">ระเบียบการ</span>
        </button>
      </div>

      {/* Progress Section */}
      <div className="bg-white dark:bg-[#1A161F] border-2 border-primary/10 dark:border-white/10 rounded-[28px] p-6 shadow-sm">
        <h2 className="text-xl font-bold text-primary dark:text-[#E0D0F0] mb-6 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-secondary-container fill-current" />
          ความก้าวหน้าเทอมนี้
        </h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-bold">
              <span className="dark:text-white/70">การเข้าเรียน</span>
              <span className="text-primary dark:text-secondary-container">95%</span>
            </div>
            <div className="h-4 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: '95%' }} transition={{ duration: 1 }} className="h-full bg-secondary-container rounded-full" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-bold">
              <span className="dark:text-white/70">คะแนนเฉลี่ยปัจจุบัน</span>
              <span className="text-primary dark:text-secondary-container">3.85</span>
            </div>
            <div className="h-4 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-[#E06C4A] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
