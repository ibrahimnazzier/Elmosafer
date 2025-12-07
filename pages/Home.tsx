import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hotels' | 'flights' | 'umrah' | 'visa'>('hotels');
  const navigate = useNavigate();

  const handleSearch = () => {
    switch(activeTab) {
      case 'hotels': navigate('/hotels'); break;
      case 'flights': navigate('/flights'); break;
      case 'umrah': navigate('/packages'); break;
      case 'visa': navigate('/visa'); break;
      default: navigate('/hotels');
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-16 pb-32">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMDTKuXwDLLifB0CPKG9eDU56WzYdBXECt-xY3e-XsMZqWN9ypkv6H31DA5nk6rWBwXTvWmp8QY7xuAOzN_NaQwjCx-uUa5zaKed_C3XTC2LIccu6bUrLlknRwNtyK2VsGeQfc0cPv9SLkx4-4LTR6OTF28zGLOfKD8YEhL6fwiAAgOvoiMuJjvBDOQhE8ynZ0gL6h9LT3Q5GnEy1xYtRP-mUGQub9IrSbdSlwa9D3gaYRm9IDMxjCql1BXYAvnyB_oSismgsLcyw")' }}></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">خطط لرحلتك القادمة</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">أكثر من 1.5 مليون فندق وخدمات تأشيرات شاملة.</p>
        </div>

        {/* Search Widget */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 -mt-20 translate-y-24 z-10">
          <div className="bg-background-white dark:bg-background-dark rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
            <div className="flex border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
              {[
                { id: 'hotels', icon: 'hotel', label: 'الفنادق' },
                { id: 'flights', icon: 'flight_takeoff', label: 'الطيران' },
                { id: 'umrah', icon: 'mosque', label: 'العمرة' },
                { id: 'visa', icon: 'approval_delegation', label: 'التأشيرة' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 justify-center border-b-[3px] pb-3 pt-2 px-6 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-b-primary text-text-primary'
                      : 'border-b-transparent text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <span className="material-symbols-outlined">{tab.icon}</span>
                  <p className="text-base font-bold">{tab.label}</p>
                </button>
              ))}
            </div>
            
            <div className="pt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-end">
              <label className="flex flex-col flex-1 md:col-span-3 lg:col-span-1">
                <p className="text-text-primary text-base font-medium pb-2">الوجهة</p>
                <div className="relative">
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary">location_on</span>
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-primary focus:outline-0 focus:ring-2 focus:ring-primary/50 border-gray-200 dark:border-gray-700 bg-neutral-light dark:bg-gray-800 focus:border-primary/50 h-14 placeholder:text-text-secondary p-4 pr-12 text-base font-normal" placeholder="اسم المدينة أو الفندق" />
                </div>
              </label>
              <label className="flex flex-col flex-1">
                <p className="text-text-primary text-base font-medium pb-2">التاريخ</p>
                <div className="relative">
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary">calendar_month</span>
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-primary focus:outline-0 focus:ring-2 focus:ring-primary/50 border-gray-200 dark:border-gray-700 bg-neutral-light dark:bg-gray-800 focus:border-primary/50 h-14 placeholder:text-text-secondary p-4 pr-12 text-base font-normal" placeholder="اختر التواريخ" />
                </div>
              </label>
              <label className="flex flex-col flex-1">
                <p className="text-text-primary text-base font-medium pb-2">الضيوف</p>
                <div className="relative">
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary">group</span>
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-primary focus:outline-0 focus:ring-2 focus:ring-primary/50 border-gray-200 dark:border-gray-700 bg-neutral-light dark:bg-gray-800 focus:border-primary/50 h-14 placeholder:text-text-secondary p-4 pr-12 text-base font-normal" placeholder="1 غرفة، 2 بالغين" />
                </div>
              </label>
              <button onClick={handleSearch} className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-5 bg-secondary hover:bg-secondary/90 text-text-primary text-lg font-bold transition-colors">
                <span className="truncate">ابحث الآن</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Service Access */}
      <section className="pt-32 pb-16 bg-background-light dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
              { icon: 'airport_shuttle', title: 'النقل من المطار', link: '#' },
              { icon: 'directions_car', title: 'تأجير السيارات', link: '#' },
              { icon: 'approval_delegation', title: 'مساعدة التأشيرة', link: '/visa' },
              { icon: 'gite', title: 'باقات الحج', link: '/packages' },
              { icon: 'mosque', title: 'باقات العمرة', link: '/packages' },
              { icon: 'directions_boat', title: 'رحلات بحرية', link: '/activities' },
            ].map((service, idx) => (
              <Link to={service.link} key={idx} className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition shadow-sm hover:shadow-md cursor-pointer group">
                <div className="flex items-center justify-center size-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <p className="font-bold text-text-primary">{service.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="py-12 bg-white dark:bg-background-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-xl overflow-hidden text-white p-8 flex flex-col justify-between min-h-[250px] bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg transform hover:scale-[1.02] transition-transform">
              <div>
                <h3 className="text-3xl font-bold">عروض الحجز المبكر للحج</h3>
                <p className="mt-2 text-lg">خصومات تصل إلى 20%</p>
              </div>
              <Link to="/packages" className="mt-4 flex max-w-max cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-secondary text-text-primary text-base font-bold hover:bg-white transition-colors">
                <span className="truncate">احجز الآن</span>
              </Link>
              <span className="material-symbols-outlined text-9xl absolute -bottom-4 -left-4 text-white/10 -rotate-12">gite</span>
            </div>
            <div className="relative rounded-xl overflow-hidden text-white p-8 flex flex-col justify-between min-h-[250px] bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg transform hover:scale-[1.02] transition-transform">
              <div>
                <h3 className="text-3xl font-bold">تأشيرتك في 24 ساعة</h3>
                <p className="mt-2 text-lg">خدمة سريعة وموثوقة</p>
              </div>
              <Link to="/visa" className="mt-4 flex max-w-max cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white text-text-primary text-base font-bold hover:bg-gray-100 transition-colors">
                <span className="truncate">قدم الآن</span>
              </Link>
              <span className="material-symbols-outlined text-9xl absolute -bottom-4 -left-4 text-white/10 -rotate-12">approval_delegation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Religious Tourism Section */}
      <section className="py-20 bg-background-light dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary">رحلات إيمانية: الحج والعمرة</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'باقة العمرة الاقتصادية',
                price: '2,500',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8gbFHnMvaEh7D3UsHp5n2oqcJnM2Qvx-_eN8cP3inrqLzGxQojraC4aEsg7tga45_R5w9ZC7-uranMGK-W34PH9OKk-J-0_05UiyloLh28g7jB5QbSjFpuEwsOgC_JYfEWsbV5nZpTD29YMdch1KE3rdc8AsMsV4xXkpa3VzbIv2x83ys7112YvtIAxz27gtJVbl6IyNevOFmEO-wz0Pf433mdwFacHspxrSa2wUYmYkIR0a0yFSaKW21dqxTz6ea3GkUWuu6ZEg',
                features: ['تأشيرة', 'فندق', 'طيران']
              },
              {
                title: 'باقة العمرة المميزة',
                price: '4,800',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAkEtnXtQkUWPN_voHeBu5s9em5nPPb0MPZe4xcZyl6ReBDPyEvkvCYDTXURFCopAcJFjIWylvM9J0hqrOcmDfmMHYBMatE8FvuhHoj9WE2t1U4RPbFDGyOzCq6YYQXPmV1ymdxPsMV8FQiw9grRNnErhkfR0VgpBODpDDJBGBtjk_jNwOnAw34AhPINNTPwkW1DlSUft6QjldoAZa8_hYirKAwEC4MAGu9eLMypip5AwPsvOj8Nh-oE5GMyY_WIYlvLiIUu_idow',
                features: ['تأشيرة', 'فندق 5 نجوم', 'طيران', 'مواصلات']
              },
              {
                title: 'باقة الحج لعام 1446',
                price: '15,000',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApSUFraKAwa9cbHf8YTbEu0rxCiCa_a2PMCktJCqt62OCYf9h4t4A-PnVqOyTWrPpMOAeKsrjj2khuA93KVJ9Q5sOFNhe7-TOJtBid7EZzRmZn4fcnSRrrSkv-3JjfTqzCvfmwlKPzp9bfF_zDcVnN2-oxy5eWQxeSCn7dmm-LUl57szsv3ZUp8dfBgMsQxCS1JIUfZXOw-LTQnJWLDJuHmprdlasuRJL3mbGDK90P4eREJ0xUjm110nNOPRjrCkfE7WInYQSRj3o',
                features: ['تأشيرة', 'فنادق مكة والمدينة', 'طيران مباشر']
              }
            ].map((pkg, idx) => (
              <div key={idx} className="flex flex-col items-stretch justify-start rounded-xl shadow-lg bg-background-white dark:bg-background-dark overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover" style={{ backgroundImage: `url("${pkg.image}")` }}></div>
                <div className="flex w-full grow flex-col gap-3 p-5">
                  <h3 className="text-text-primary text-xl font-bold">{pkg.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-text-secondary">
                    {pkg.features.map((feature, fIdx) => (
                      <span key={fIdx} className="flex items-center gap-1 text-sm bg-background-light px-2 py-1 rounded">
                        <span className="material-symbols-outlined text-base">check_circle</span>
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4 flex justify-between items-center border-t border-gray-100">
                    <p className="text-2xl font-bold text-secondary">{pkg.price} <span className="text-sm font-medium">ر.س</span></p>
                    <Link to="/packages" className="flex cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
                      <span className="truncate">عرض التفاصيل</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;