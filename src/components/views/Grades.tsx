import { Languages, BookText, History, TestTube, Info } from 'lucide-react';
import { motion } from 'motion/react';

export default function Grades() {
  const gradeData = [
    { title: 'วิชาภาษาจีน', score: '18/20', status: 'ส่งแล้ว', statusColor: 'bg-emerald-100 text-emerald-700', icon: Languages },
    { title: 'วิชาภาษาอังกฤษเพิ่มเติม', score: '15/20', status: 'ยังไม่ส่ง', statusColor: 'bg-red-100 text-red-700', icon: BookText },
    { title: 'วิชาประวัติศาสตร์', score: '19/20', status: 'รอดำเนินการ', statusColor: 'bg-amber-100 text-amber-700', icon: History },
    { title: 'วิชาวิทยาศาสตร์', score: '16/20', status: 'ส่งแล้ว', statusColor: 'bg-emerald-100 text-emerald-700', icon: TestTube },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-6 py-4"
    >
      {/* Grade Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-primary dark:text-[#E0D0F0]">คะแนนและสถานะงาน</h2>
        <div className="text-sm text-primary/60 dark:text-white/60">ภาคเรียนที่ 1/2566</div>
      </div>

      {/* Grade Cards */}
      <div className="space-y-4">
        {gradeData.map((item, idx) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white dark:bg-[#1A161F] rounded-[24px] p-5 shadow-sm border-b-4 border-tertiary-accent flex items-center justify-between group active:scale-[0.98] transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-tertiary-accent/10 flex items-center justify-center text-tertiary-accent">
                <item.icon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="font-bold text-primary dark:text-white">{item.title}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-primary/60 dark:text-white/60">สถานะ:</span>
                  <span className={`${item.statusColor} px-2 py-0.5 rounded-lg text-[10px] font-bold`}>
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-primary dark:text-secondary-container">{item.score}</p>
              <p className="text-[10px] text-primary/60 dark:text-white/40">คะแนนเก็บ</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <div className="bg-white dark:bg-[#1A161F]/50 rounded-[24px] p-6 border-2 border-primary/5">
        <div className="flex items-center gap-2 mb-4 text-primary dark:text-white/80">
          <Info className="w-4 h-4" />
          <h3 className="text-sm font-bold">หมายเหตุสถานะการส่งงาน</h3>
        </div>
        <div className="flex flex-wrap gap-4">
          {[
            { label: 'ส่งแล้ว', color: 'bg-emerald-500' },
            { label: 'รอดำเนินการ', color: 'bg-amber-500' },
            { label: 'ยังไม่ส่ง', color: 'bg-red-500' },
          ].map((status) => (
            <div key={status.label} className="flex items-center gap-2">
              <div className={`w-2.5 h-2.5 rounded-full ${status.color}`} />
              <span className="text-xs dark:text-white/60">{status.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
