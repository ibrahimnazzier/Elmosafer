import React from 'react';
import { Package } from '../types';

const packagesData: Package[] = [
  {
    id: '1',
    name: 'باقة العمرة الاقتصادية',
    type: 'Umrah',
    duration: '7 أيام / 6 ليالي',
    price: 2500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8gbFHnMvaEh7D3UsHp5n2oqcJnM2Qvx-_eN8cP3inrqLzGxQojraC4aEsg7tga45_R5w9ZC7-uranMGK-W34PH9OKk-J-0_05UiyloLh28g7jB5QbSjFpuEwsOgC_JYfEWsbV5nZpTD29YMdch1KE3rdc8AsMsV4xXkpa3VzbIv2x83ys7112YvtIAxz27gtJVbl6IyNevOFmEO-wz0Pf433mdwFacHspxrSa2wUYmYkIR0a0yFSaKW21dqxTz6ea3GkUWuu6ZEg',
    tags: ['طيران', 'فندق', 'مواصلات', 'تأشيرة'],
    isRamadan: true
  },
  {
    id: '2',
    name: 'باقة الحج VIP',
    type: 'Hajj',
    duration: '14 يوم / 13 ليلة',
    price: 22000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAkEtnXtQkUWPN_voHeBu5s9em5nPPb0MPZe4xcZyl6ReBDPyEvkvCYDTXURFCopAcJFjIWylvM9J0hqrOcmDfmMHYBMatE8FvuhHoj9WE2t1U4RPbFDGyOzCq6YYQXPmV1ymdxPsMV8FQiw9grRNnErhkfR0VgpBODpDDJBGBtjk_jNwOnAw34AhPINNTPwkW1DlSUft6QjldoAZa8_hYirKAwEC4MAGu9eLMypip5AwPsvOj8Nh-oE5GMyY_WIYlvLiIUu_idow',
    tags: ['طيران مباشر', 'فندق 5 نجوم', 'مواصلات خاصة', 'تأشيرة'],
    isVIP: true
  },
  {
    id: '3',
    name: 'باقة العمرة المميزة',
    type: 'Umrah',
    duration: '10 أيام / 9 ليالي',
    price: 5500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApSUFraKAwa9cbHf8YTbEu0rxCiCa_a2PMCktJCqt62OCYf9h4t4A-PnVqOyTWrPpMOAeKsrjj2khuA93KVJ9Q5sOFNhe7-TOJtBid7EZzRmZn4fcnSRrrSkv-3JjfTqzCvfmwlKPzp9bfF_zDcVnN2-oxy5eWQxeSCn7dmm-LUl57szsv3ZUp8dfBgMsQxCS1JIUfZXOw-LTQnJWLDJuHmprdlasuRJL3mbGDK90P4eREJ0xUjm110nNOPRjrCkfE7WInYQSRj3o',
    tags: ['طيران', 'إطلالة على الحرم', 'مواصلات', 'تأشيرة'],
    isRamadan: true
  },
  {
    id: '4',
    name: 'باقة الحج الميسر',
    type: 'Hajj',
    duration: '20 يوم / 19 ليلة',
    price: 15000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMDTKuXwDLLifB0CPKG9eDU56WzYdBXECt-xY3e-XsMZqWN9ypkv6H31DA5nk6rWBwXTvWmp8QY7xuAOzN_NaQwjCx-uUa5zaKed_C3XTC2LIccu6bUrLlknRwNtyK2VsGeQfc0cPv9SLkx4-4LTR6OTF28zGLOfKD8YEhL6fwiAAgOvoiMuJjvBDOQhE8ynZ0gL6h9LT3Q5GnEy1xYtRP-mUGQub9IrSbdSlwa9D3gaYRm9IDMxjCql1BXYAvnyB_oSismgsLcyw',
    tags: ['طيران', 'فنادق مكة والمدينة', 'مواصلات', 'تأشيرة'],
    isPopular: true
  }
];

const Packages: React.FC = () => {
  return (
    <>
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCAkEtnXtQkUWPN_voHeBu5s9em5nPPb0MPZe4xcZyl6ReBDPyEvkvCYDTXURFCopAcJFjIWylvM9J0hqrOcmDfmMHYBMatE8FvuhHoj9WE2t1U4RPbFDGyOzCq6YYQXPmV1ymdxPsMV8FQiw9grRNnErhkfR0VgpBODpDDJBGBtjk_jNwOnAw34AhPINNTPwkW1DlSUft6QjldoAZa8_hYirKAwEC4MAGu9eLMypip5AwPsvOj8Nh-oE5GMyY_WIYlvLiIUu_idow")' }}></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">باقات الحج والعمرة</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">انطلق في رحلة إيمانية لا تُنسى مع باقاتنا المنسقة بعناية.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-1/4">
            <div className="p-6 bg-background-white dark:bg-background-dark rounded-xl shadow-lg sticky top-28 border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-6">تصفية النتائج</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold mb-3">نوع الباقة</h4>
                  <div className="space-y-2">
                    <label className="flex items-center"><input defaultChecked className="form-checkbox rounded text-primary focus:ring-primary/50" type="checkbox"/><span className="mr-3">الحج</span></label>
                    <label className="flex items-center"><input defaultChecked className="form-checkbox rounded text-primary focus:ring-primary/50" type="checkbox"/><span className="mr-3">العمرة</span></label>
                  </div>
                </div>
                 <div>
                  <h4 className="font-bold mb-3">المدة (أيام)</h4>
                  <div className="space-y-2">
                    {['5 - 7 أيام', '8 - 10 أيام', '11 - 15 يوم', '16+ يوم'].map((d, i) => (
                       <label key={i} className="flex items-center"><input className="form-checkbox rounded text-primary focus:ring-primary/50" type="checkbox"/><span className="mr-3">{d}</span></label>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-3">نطاق السعر (ر.س)</h4>
                  <input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-primary" max="25000" min="2000" type="range" defaultValue="10000"/>
                </div>
              </div>
            </div>
          </aside>

          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {packagesData.map((pkg) => (
                <div key={pkg.id} className="flex flex-col items-stretch justify-start rounded-xl shadow-lg bg-background-white dark:bg-background-dark overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1">
                  <div className="relative">
                    <div className="w-full bg-center bg-no-repeat aspect-video bg-cover transition-transform duration-700 hover:scale-105" style={{ backgroundImage: `url("${pkg.image}")` }}></div>
                    {pkg.isVIP && <div className="absolute top-3 left-3 bg-secondary text-text-primary px-3 py-1 rounded-full text-sm font-bold shadow-md">VIP</div>}
                    {pkg.isRamadan && <div className="absolute top-3 left-3 bg-secondary text-text-primary px-3 py-1 rounded-full text-sm font-bold shadow-md">عمرة رجب</div>}
                    {pkg.isPopular && <div className="absolute top-3 left-3 bg-secondary text-text-primary px-3 py-1 rounded-full text-sm font-bold shadow-md">الأكثر طلباً</div>}
                  </div>
                  <div className="flex w-full grow flex-col gap-4 p-5">
                    <h3 className="text-text-primary text-xl font-bold">{pkg.name}</h3>
                    <div className="flex items-center gap-1 text-text-secondary text-sm">
                      <span className="material-symbols-outlined text-base">calendar_month</span>
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-text-secondary text-sm">
                      {pkg.tags.map((tag, idx) => (
                         <span key={idx} className="flex items-center gap-2"><span className="material-symbols-outlined text-lg text-primary">check</span>{tag}</span>
                      ))}
                    </div>
                    <div className="mt-auto pt-4 flex justify-between items-center border-t border-gray-100">
                      <p className="text-2xl font-bold text-primary">{pkg.price.toLocaleString()} <span className="text-sm font-medium text-text-secondary">ر.س</span></p>
                      <button className="flex cursor-pointer items-center justify-center rounded-lg h-11 px-5 bg-secondary hover:bg-secondary/90 text-text-primary text-base font-bold transition-colors">
                        <span className="truncate">عرض الباقة</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;