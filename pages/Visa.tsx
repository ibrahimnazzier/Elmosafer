import React from 'react';

const Visa: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary">عملية طلب التأشيرة</h1>
        <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">احصل على تأشيرتك بسهولة. اتبع خطواتنا البسيطة لتقديم طلبك اليوم.</p>
      </div>

      <div className="max-w-4xl mx-auto mb-16">
        <div className="flex items-center justify-between relative">
           {/* Connecting Line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-200 -z-10 hidden md:block" style={{ top: '32px' }}></div>
          
          <div className="flex flex-col items-center text-center w-1/3 z-10">
            <div className="flex items-center justify-center size-16 rounded-full bg-primary text-white text-2xl font-bold mb-3 shadow-lg ring-4 ring-background-light">1</div>
            <h3 className="font-bold text-lg text-text-primary">اختر الدولة</h3>
            <p className="text-sm text-text-secondary">وقم بتعبئة الطلب</p>
          </div>
          <div className="flex flex-col items-center text-center w-1/3 z-10">
            <div className="flex items-center justify-center size-16 rounded-full bg-background-light border-2 border-primary text-primary text-2xl font-bold mb-3 shadow-lg ring-4 ring-background-light">2</div>
            <h3 className="font-bold text-lg text-text-primary">ارفع المستندات</h3>
            <p className="text-sm text-text-secondary">بشكل آمن ومباشر</p>
          </div>
          <div className="flex flex-col items-center text-center w-1/3 z-10">
            <div className="flex items-center justify-center size-16 rounded-full bg-background-light border-2 border-gray-300 text-gray-400 text-2xl font-bold mb-3 shadow-lg ring-4 ring-background-light">3</div>
            <h3 className="font-bold text-lg text-text-primary">المراجعة والدفع</h3>
            <p className="text-sm text-text-secondary">واستلم تأشيرتك</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 bg-background-white dark:bg-background-dark p-8 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-text-primary mb-6">ابدأ طلبك</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="md:col-span-2">
              <label className="block text-base font-medium text-text-primary pb-2" htmlFor="destination">دولة الوجهة</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary">public</span>
                <select className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-primary focus:outline-0 focus:ring-2 focus:ring-primary/50 border-gray-200 dark:border-gray-700 bg-neutral-light dark:bg-gray-800 focus:border-primary/50 h-14 placeholder:text-text-secondary p-4 pr-12 text-base font-normal appearance-none cursor-pointer" id="destination">
                  <option>اختر الدولة</option>
                  <option>تركيا</option>
                  <option>المملكة المتحدة</option>
                  <option>تأشيرة شنغن</option>
                  <option>تايلاند</option>
                </select>
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none">expand_more</span>
              </div>
            </div>
            <div>
              <label className="block text-base font-medium text-text-primary pb-2" htmlFor="nationality">الجنسية</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary">flag</span>
                <select className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-primary focus:outline-0 focus:ring-2 focus:ring-primary/50 border-gray-200 dark:border-gray-700 bg-neutral-light dark:bg-gray-800 focus:border-primary/50 h-14 placeholder:text-text-secondary p-4 pr-12 text-base font-normal appearance-none cursor-pointer" id="nationality">
                  <option>اختر الجنسية</option>
                  <option>المملكة العربية السعودية</option>
                  <option>الإمارات العربية المتحدة</option>
                  <option>مصر</option>
                </select>
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none">expand_more</span>
              </div>
            </div>
            <div>
              <label className="block text-base font-medium text-text-primary pb-2" htmlFor="visa-type">نوع التأشيرة</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary">description</span>
                <select className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-primary focus:outline-0 focus:ring-2 focus:ring-primary/50 border-gray-200 dark:border-gray-700 bg-neutral-light dark:bg-gray-800 focus:border-primary/50 h-14 placeholder:text-text-secondary p-4 pr-12 text-base font-normal appearance-none cursor-pointer" id="visa-type">
                  <option>اختر النوع</option>
                  <option>سياحية</option>
                  <option>عمل</option>
                  <option>دراسة</option>
                </select>
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none">expand_more</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <button className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-5 bg-secondary hover:bg-secondary/90 text-text-primary text-lg font-bold transition-colors">
                <span className="truncate">التحقق من المتطلبات والتقديم الآن</span>
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-background-white dark:bg-background-dark p-6 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-4">المستندات المطلوبة</h3>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <span>جواز سفر ساري المفعول (صلاحية 6 أشهر على الأقل)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <span>صور شخصية حديثة بخلفية بيضاء</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <span>إثبات حجز طيران وفندق</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <span>كشف حساب بنكي لآخر 3 أشهر</span>
              </li>
            </ul>
            <p className="text-xs text-text-secondary/70 mt-4">*قد تختلف المتطلبات حسب الدولة المختارة.</p>
          </div>
          <div className="bg-background-white dark:bg-background-dark p-6 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-4">وقت المعالجة والرسوم</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="font-medium text-text-primary">وقت المعالجة القياسي:</p>
                <p className="font-bold text-text-dark">5-7 أيام عمل</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-medium text-text-primary">وقت المعالجة السريع:</p>
                <p className="font-bold text-text-dark">1-2 أيام عمل</p>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 my-3"></div>
              <div className="flex justify-between items-center">
                <p className="font-medium text-text-primary">رسوم التأشيرة:</p>
                <p className="font-bold text-text-dark">تبدأ من 350 ر.س</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-medium text-text-primary">رسوم الخدمة:</p>
                <p className="font-bold text-text-dark">150 ر.س</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visa;