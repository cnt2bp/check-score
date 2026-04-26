import { ReactNode } from 'react';
import { Bell, Home, LayoutDashboard, GraduationCap, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Layout({ children, activeTab, onTabChange }: LayoutProps) {
  const tabs = [
    { id: 'home', label: 'หน้าแรก', icon: Home },
    { id: 'dashboard', label: 'แดชบอร์ด', icon: LayoutDashboard },
    { id: 'grades', label: 'คะแนน', icon: GraduationCap },
    { id: 'profile', label: 'โปรไฟล์', icon: User },
  ];

  return (
    <div className="min-h-screen pb-24 dark:bg-black">
      {/* Top App Bar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#F3F0F5] dark:bg-[#1A161F] border-b-2 border-primary/10 dark:border-white/10 shadow-sm flex justify-between items-center px-4 py-2">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-10 h-10 shrink-0">
            <img 
              src="https://yt3.googleusercontent.com/ytc/AIdro_kc8l2i5g-zbXx4EtCdqt_7yG44sVnEFrF2g4Ec2GVs-g=s900-c-k-c0x00ffffff-no-rj" 
              alt="School Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-primary dark:text-[#E0D0F0] font-bold text-sm sm:text-base line-clamp-2 leading-tight">
            โรงเรียนเทศบาล 2 อนุบาลสาธิตเทศบาลเมืองบ้านไผ่
          </h1>
        </div>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10">
            <Bell className="w-6 h-6 text-primary dark:text-[#E0D0F0]" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 px-5 max-w-2xl mx-auto">
        {children}
      </main>

      {/* Bottom Nav Bar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 bg-white dark:bg-[#1A161F] border-t-2 border-primary/10 dark:border-white/10 shadow-[0_-4px_20px_0_rgba(0,0,0,0.05)] rounded-t-[32px] flex justify-around items-center px-2 pt-3 pb-8">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center transition-all duration-200 active:scale-90 ${
                isActive 
                  ? 'text-primary dark:text-secondary-container' 
                  : 'text-[#A697B5] dark:text-[#635970]'
              }`}
            >
              <Icon className={`w-7 h-7 ${isActive ? 'fill-current' : ''}`} />
              <span className="text-xs mt-1">{tab.label}</span>
              {isActive && <div className="w-1.5 h-1.5 bg-secondary-container rounded-full mt-1" />}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
