import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white dark:bg-black mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold">عنا</h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li><a className="hover:text-white transition-colors" href="#">من نحن</a></li>
              <li><a className="hover:text-white transition-colors" href="#">الوظائف</a></li>
              <li><a className="hover:text-white transition-colors" href="#">الصحافة</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">الدعم</h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li><a className="hover:text-white transition-colors" href="#">اتصل بنا</a></li>
              <li><a className="hover:text-white transition-colors" href="#">الأسئلة الشائعة</a></li>
              <li><a className="hover:text-white transition-colors" href="#">الشروط والأحكام</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">تابعنا</h3>
            <div className="flex mt-4 space-x-4 space-x-reverse">
              {/* Using generic SVGs for social icons to avoid extra libs */}
              <a className="text-gray-300 hover:text-white transition-colors" href="#">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
              </a>
              <a className="text-gray-300 hover:text-white transition-colors" href="#">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">حمل التطبيق</h3>
            <div className="mt-4 flex flex-col space-y-3">
              <a className="inline-block hover:opacity-80 transition-opacity" href="#">
                <img className="h-10" alt="Download on the App Store" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpd4eaFi-ERmIAc2WhdCtC3ni2-CVkUOmxIwp2PBH4HsNxIRPG9DTgFWv4_86cBBcqWO46S5BiULeFvbmNP5s45eIv4tHERNJz3LbVIF8QxUUTEsPyQ3hca1_cS_CAjlsLzTPxLODne-71pA1oVJe-DgHqcm5KSjwdZMuFg4imWuupcPNx6rQycVGbY3NyD3PPplrymjSpEZ-PKUPPd34AF7LC0jaZEWP_7aI2ZEzz-zvctNeZ0IoJnT_cahki2xj1DehPxx7131s"/>
              </a>
              <a className="inline-block hover:opacity-80 transition-opacity" href="#">
                <img className="h-10" alt="Get it on Google Play" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOZojRjmrJPPcBc_qntTHYWK9orVJbjcQV_bVepXsnUpvMq93u58x04ck6wGHUeFkJXDK6KuFAi7xLIKP4aqGflFnoTgu8ETe0GCYD3dAgDDpIA_am6g1BzAmwV4fD8cVWK9OFG3pEa1s9fFzZmeafHuGkzEDpLt58UtP6tO-6uxuuKC7IG_XeQQRR8e8evfHoZV6nuAMjFuv1lKL_DLHWy3yupttumUt0lSkzlXSPc0tyWGzvSMkA1iRZr67r9GQ86z60OaHJ45A"/>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>© 2024 رحلاتي. جميع الحقوق محفوظة.</p>
          <div className="flex mt-4 md:mt-0 space-x-4 space-x-reverse text-2xl font-bold font-sans">
            <span className="opacity-70">VISA</span>
            <span className="opacity-70">Mastercard</span>
            <span className="opacity-70">Mada</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;