import React from 'react';
import { Activity } from '../types';

const activitiesData: Activity[] = [
  {
    id: '1',
    name: 'سفاري صحراء دبي مع عشاء شواء',
    location: 'دبي, الإمارات العربية المتحدة',
    price: 350,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8gbFHnMvaEh7D3UsHp5n2oqcJnM2Qvx-_eN8cP3inrqLzGxQojraC4aEsg7tga45_R5w9ZC7-uranMGK-W34PH9OKk-J-0_05UiyloLh28g7jB5QbSjFpuEwsOgC_JYfEWsbV5nZpTD29YMdch1KE3rdc8AsMsV4xXkpa3VzbIv2x83ys7112YvtIAxz27gtJVbl6IyNevOFmEO-wz0Pf433mdwFacHspxrSa2wUYmYkIR0a0yFSaKW21dqxTz6ea3GkUWuu6ZEg',
    description: 'استمتع بتجربة مثيرة بالسيارات الرباعية على الكثبان الرملية، وركوب الجمال، وعشاء فاخر تحت النجوم.'
  },
  {
    id: '2',
    name: 'رحلة بالجمال عند شروق الشمس',
    location: 'الرياض, المملكة العربية السعودية',
    price: 280,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAkEtnXtQkUWPN_voHeBu5s9em5nPPb0MPZe4xcZyl6ReBDPyEvkvCYDTXURFCopAcJFjIWylvM9J0hqrOcmDfmMHYBMatE8FvuhHoj9WE2t1U4RPbFDGyOzCq6YYQXPmV1ymdxPsMV8FQiw9grRNnErhkfR0VgpBODpDDJBGBtjk_jNwOnAw34AhPINNTPwkW1DlSUft6QjldoAZa8_hYirKAwEC4MAGu9eLMypip5AwPsvOj8Nh-oE5GMyY_WIYlvLiIUu_idow',
    description: 'شاهد المنظر الخلاب لشروق الشمس فوق الصحراء أثناء ركوبك للجمل في جولة هادئة.'
  },
  {
    id: '3',
    name: 'مغامرة الدراجات الرباعية في الصحراء',
    location: 'الشرقية, المملكة العربية السعودية',
    price: 450,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApSUFraKAwa9cbHf8YTbEu0rxCiCa_a2PMCktJCqt62OCYf9h4t4A-PnVqOyTWrPpMOAeKsrjj2khuA93KVJ9Q5sOFNhe7-TOJtBid7EZzRmZn4fcnSRrrSkv-3JjfTqzCvfmwlKPzp9bfF_zDcVnN2-oxy5eWQxeSCn7dmm-LUl57szsv3ZUp8dfBgMsQxCS1JIUfZXOw-LTQnJWLDJuHmprdlasuRJL3mbGDK90P4eREJ0xUjm110nNOPRjrCkfE7WInYQSRj3o',
    description: 'انطلق عبر الكثبان الرملية في مغامرة مليئة بالأدرينالين على دراجة رباعية قوية.'
  },
  {
    id: '4',
    name: 'جولة في مدينة الرياض التاريخية والحديثة',
    location: 'الرياض, المملكة العربية السعودية',
    price: 400,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMDTKuXwDLLifB0CPKG9eDU56WzYdBXECt-xY3e-XsMZqWN9ypkv6H31DA5nk6rWBwXTvWmp8QY7xuAOzN_NaQwjCx-uUa5zaKed_C3XTC2LIccu6bUrLlknRwNtyK2VsGeQfc0cPv9SLkx4-4LTR6OTF28zGLOfKD8YEhL6fwiAAgOvoiMuJjvBDOQhE8ynZ0gL6h9LT3Q5GnEy1xYtRP-mUGQub9IrSbdSlwa9D3gaYRm9IDMxjCql1BXYAvnyB_oSismgsLcyw',
    description: 'اكتشف تاريخ الرياض الغني ومعالمها الحديثة المذهلة في جولة ليوم كامل.'
  },
  {
    id: '5',
    name: 'جولة في جدة التاريخية (البلد)',
    location: 'جدة, المملكة العربية السعودية',
    price: 320,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpd4eaFi-ERmIAc2WhdCtC3ni2-CVkUOmxIwp2PBH4HsNxIRPG9DTgFWv4_86cBBcqWO46S5BiULeFvbmNP5s45eIv4tHERNJz3LbVIF8QxUUTEsPyQ3hca1_cS_CAjlsLzTPxLODne-71pA1oVJe-DgHqcm5KSjwdZMuFg4imWuupcPNx6rQycVGbY3NyD3PPplrymjSpEZ-PKUPPd34AF7LC0jaZEWP_7aI2ZEzz-zvctNeZ0IoJnT_cahki2xj1DehPxx7131s',
    description: 'تجول في أزقة جدة القديمة الساحرة واكتشف كنوزها المعمارية المخفية.'
  },
  {
    id: '6',
    name: 'رحلة بحرية في مرسى دبي',
    location: 'دبي, الإمارات العربية المتحدة',
    price: 250,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOZojRjmrJPPcBc_qntTHYWK9orVJbjcQV_bVepXsnUpvMq93u58x04ck6wGHUeFkJXDK6KuFAi7xLIKP4aqGflFnoTgu8ETe0GCYD3dAgDDpIA_am6g1BzAmwV4fD8cVWK9OFG3pEa1s9fFzZmeafHuGkzEDpLt58UtP6tO-6uxuuKC7IG_XeQQRR8e8evfHoZV6nuAMjFuv1lKL_DLHWy3yupttumUt0lSkzlXSPc0tyWGzvSMkA1iRZr67r9GQ86z60OaHJ45A',
    description: 'شاهد أفق دبي المذهل من الماء في رحلة بحرية فاخرة مع عشاء.'
  }
];

const Activities: React.FC = () => {
  return (
    <>
      <section className="relative pt-12 pb-12 bg-primary/10">
        <div className="absolute inset-0 bg-cover bg-center opacity-5" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCAkEtnXtQkUWPN_voHeBu5s9em5nPPb0MPZe4xcZyl6ReBDPyEvkvCYDTXURFCopAcJFjIWylvM9J0hqrOcmDfmMHYBMatE8FvuhHoj9WE2t1U4RPbFDGyOzCq6YYQXPmV1ymdxPsMV8FQiw9grRNnErhkfR0VgpBODpDDJBGBtjk_jNwOnAw34AhPINNTPwkW1DlSUft6QjldoAZa8_hYirKAwEC4MAGu9eLMypip5AwPsvOj8Nh-oE5GMyY_WIYlvLiIUu_idow")' }}></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">الأنشطة والتجارب</h1>
          <p className="mt-3 text-lg md:text-xl max-w-3xl mx-auto text-text-secondary">اكتشف وحجز تجارب لا تُنسى في وجهتك القادمة.</p>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="bg-background-white dark:bg-background-dark rounded-xl shadow-lg p-4 sm:p-6 lg:p-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
              <div className="lg:col-span-2">
                <label className="block text-text-primary text-base font-medium pb-2" htmlFor="destination-search">ابحث عن وجهة أو نشاط</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary">search</span>
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-primary focus:outline-0 focus:ring-2 focus:ring-primary/50 border-gray-200 dark:border-gray-700 bg-neutral-light dark:bg-gray-800 focus:border-primary/50 h-14 placeholder:text-text-secondary p-4 pr-12 text-base font-normal" id="destination-search" placeholder="مثال: دبي، سفاري الصحراء" type="text" />
                </div>
              </div>
              <div>
                <label className="block text-text-primary text-base font-medium pb-2" htmlFor="activity-type">نوع النشاط</label>
                <select className="form-select flex w-full min-w-0 flex-1 cursor-pointer overflow-hidden rounded-lg text-text-primary focus:outline-0 focus:ring-2 focus:ring-primary/50 border-gray-200 dark:border-gray-700 bg-neutral-light dark:bg-gray-800 focus:border-primary/50 h-14 p-4 text-base font-normal" id="activity-type">
                  <option>جميع الأنواع</option>
                  <option>جولات في المدينة</option>
                  <option>رحلات السفاري الصحراوية</option>
                  <option>تجارب ثقافية</option>
                  <option>مغامرات بحرية</option>
                </select>
              </div>
              <div>
                <label className="block text-text-primary text-base font-medium pb-2" htmlFor="price-range">نطاق السعر</label>
                <select className="form-select flex w-full min-w-0 flex-1 cursor-pointer overflow-hidden rounded-lg text-text-primary focus:outline-0 focus:ring-2 focus:ring-primary/50 border-gray-200 dark:border-gray-700 bg-neutral-light dark:bg-gray-800 focus:border-primary/50 h-14 p-4 text-base font-normal" id="price-range">
                  <option>أي سعر</option>
                  <option>أقل من 200 ر.س</option>
                  <option>200 - 500 ر.س</option>
                  <option>500 - 1000 ر.س</option>
                  <option>أكثر من 1000 ر.س</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {activitiesData.map((activity) => (
              <div key={activity.id} className="flex flex-col rounded-xl shadow-md bg-background-white dark:bg-background-dark overflow-hidden group transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <div className="w-full bg-center bg-no-repeat aspect-video bg-cover transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url("${activity.image}")` }}></div>
                </div>
                <div className="flex w-full grow flex-col p-5">
                  <h3 className="text-text-primary text-lg font-bold line-clamp-2">{activity.name}</h3>
                  <div className="flex items-center gap-2 mt-2 text-text-secondary text-sm">
                    <span className="material-symbols-outlined text-base">location_on</span>
                    <span>{activity.location}</span>
                  </div>
                  <p className="text-sm text-text-secondary mt-3 flex-grow line-clamp-3">{activity.description}</p>
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-text-secondary">ابتداءً من</p>
                      <p className="text-xl font-bold text-secondary">{activity.price} <span className="text-sm font-medium">ر.س</span></p>
                    </div>
                    <button className="flex cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-colors">
                      <span className="truncate">احجز الآن</span>
                    </button>
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

export default Activities;