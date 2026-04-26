import { ChevronRight, Calendar, ClipboardCheck, MessageCircle, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const news = [
    {
      id: 1,
      tag: 'ข่าวด่วน',
      title: 'กิจกรรมกีฬาสี สานสัมพันธ์พี่น้อง',
      description: 'ขอเชิญผู้ปกครองเข้าร่วมชมการแข่งขันกีฬาและเชียร์น้องๆ ในกิจกรรมกีฬาสีประจำปีนี้...',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdlmcrnVdFPVPLKjERSNhmKrtt2SPgKfh9bT1jq4YHwZn6rTD7xuqJ-VJtNSpCvn7O5mFUL1YuM55Mp5DNrEm2p-xFAEIp5dZ78TomV7fpUakHQKAte_oqTXgDI1kHbh1cEl8qTQFnP9FDiH3eVkPHw4O0FU2-22nNhAxk7qPvZacLKv2alo8ucgbQUgRF8Wn11HW6qhQjjva2IRdkyq1cP0aYtofBgq4KQZyYrtSuhZiHkXUeWQ5JMHO5ORMXb42o_RgbTHjLJ8J8',
      type: 'main'
    },
    {
      id: 2,
      tag: 'วิชาการ',
      title: 'โครงการรักการอ่าน',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyrQCUzcOiWiRX0oKpSADAoj4z9COlUvsyyj6vmNh3ijQEpOhVp48jw4ocHfFnCJudpHtrBYu8KuRoBUgW5sIUvxHmxZLaNSpP_thpMErKWlJ5yYFuR6rKCbD6ff_xVew9nrsv10Al-z54uPZ28Y9xt3-9yNwa8CK4RqcZeE-9TNev6LNcd1S9zrobtLTT0EheddXCylLRC9EfN-vMTOVijEQolFz16UXrxWDTYEoL6QG32cjiSmFN4tTPEXWekxSDmpLJLGAo8Nd0',
      type: 'small'
    },
    {
      id: 3,
      tag: 'อัปเดตครู',
      title: 'พบปะคุณครูประจำชั้น',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3I8rpw9LDEErSqdluXgvQcLwlXFpIVnLQYki3Pdgqaph2Ito12bm5sdMNtYJGdxrkEmfujAHbhKQm1bwHDGJ_PSrV5Cmnwl1rrTHJl7q8ynQweRYLgCuiqI7ByYqBbOIU9IZGWY2rWiyIN2Wg60yxHpc7qU9fxU-iI4NeWavKFecd9aRxLWfRjDH9JtcWs2gpJhbodLb_FJ6QzyaoW4rugQNHhJ0YVF37IWqNclSAGUPuJk2uPzqUOzmdpj2jsmbPsQTMz1gdQA_q',
      type: 'small'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 py-4"
    >
      {/* Hero Header */}
      <div className="relative h-48 rounded-[32px] overflow-hidden shadow-lg">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaWhOghX66KFZXhsuIAGXjOSn19YOVDnHeYVY6U6wxmgcZ9SZqT98-XOpo1xhhjTIcu9EuVs9Vo3OP3mjMQ-BbrztYSA47eyYCS6CeNCjzDpKkL6QigtU_tZ540CbV_0ep63_q89oZfPCb-ijjHsKciNjbChjMixo3Gn9J6VQySGMZS5K_cNyug2wQSuQxeWtAv14A7dwGZdnrYHVQYgU4qwjnzILVb3HcjibOX2oaFS4yH4l4D2Rx2wjR-bPdHIXuvAat6SdvB1Tv" 
          alt="Classroom" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6">
          <h1 className="text-3xl text-white font-bold">สวัสดีตอนเช้า!</h1>
          <p className="text-white/90">ยินดีต้อนรับสู่รั้วโรงเรียนเทศบาล 2</p>
        </div>
      </div>

      {/* News Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-primary dark:text-[#E0D0F0]">ข่าวสารและประกาศ</h2>
          <button className="text-xs text-primary/60 dark:text-[#E06C4A] flex items-center gap-1">
            ดูทั้งหมด <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {news.map((item) => (
            <div 
              key={item.id} 
              className={`bg-white dark:bg-[#1A161F] rounded-[24px] p-3 shadow-sm border-2 border-transparent hover:border-secondary-container transition-all ${
                item.type === 'main' ? 'col-span-2' : 'col-span-1'
              }`}
            >
              <div className={`relative rounded-xl overflow-hidden mb-3 ${item.type === 'main' ? 'h-40' : 'aspect-square'}`}>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 bg-[#E06C4A] text-white px-3 py-1 rounded-full text-[10px] font-bold">
                  {item.tag}
                </span>
              </div>
              <div className="space-y-1 text-left">
                <h3 className={`font-bold text-primary dark:text-white leading-tight ${item.type === 'main' ? 'text-lg' : 'text-sm'}`}>
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-xs text-primary/60 dark:text-white/60 line-clamp-2">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="space-y-4 pb-8">
        <h2 className="text-2xl font-bold text-primary dark:text-[#E0D0F0]">เมนูเร่งด่วน</h2>
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: 'ตารางเรียน', icon: Calendar, color: 'bg-[#f4e656]' },
            { label: 'การบ้าน', icon: ClipboardCheck, color: 'bg-[#ffd8e7]' },
            { label: 'เข้าเรียน', icon: Clock, color: 'bg-[#f1daff]' },
            { label: 'ติดต่อ', icon: MessageCircle, color: 'bg-[#e4e2e3]' },
          ].map((action) => (
            <div key={action.label} className="flex flex-col items-center gap-2">
              <button className={`${action.color} w-14 h-14 rounded-2xl flex items-center justify-center shadow-md active:scale-90 transition-transform`}>
                <action.icon className="w-7 h-7 text-primary/80" />
              </button>
              <span className="text-xs font-bold text-primary dark:text-white/80">{action.label}</span>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
