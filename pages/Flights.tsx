import React from 'react';
import { Flight } from '../types';

const flightsData: Flight[] = [
  {
    id: '1',
    airline: 'الخطوط السعودية',
    flightNumber: 'SV 550',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXAs5HU1qv-ovi_U52rn7BhDXCEzIH5-9oYLf0wZ2XA_Ynwy9IAgWB6pJqEATgsPfq2r3DEp5KlXUK8pre7QoUgXHowfjVrwzA9YPpl9uHBiOwzF8-Mnxcp4KN-RBubruXPAuzu_Zj8sICT1gQVqkQ25oGUDdBB57_qZJo1mdCgQUiJwY7bkDWQ7LrVOHM8tSqSnY-jqySqkdGHKXEQ9Lef1n3NdAHDxT_MSJ-DkBs8LUbk9Aps4Iu5UzD_cuKwfd0mmqEN1lT7iQ',
    departureTime: '10:30',
    departureAirport: 'RUH',
    arrivalTime: '12:35',
    arrivalAirport: 'DXB',
    duration: 'ساعتان و 5 دقائق',
    stops: 0,
    price: 850
  },
  {
    id: '2',
    airline: 'طيران ناس',
    flightNumber: 'XY 221',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz_VC-HOPT6WbZCeW2Pa2TM5Oj_DnHH7wPj5T6axDhRLjtClcxgb4kyIK0qCBsTU7Jkka6z7Fb3WBbPnS_YEYV4JmTBGl-B-2bOk7hCvgwnUt_80_R-jxtqagghA_Pg6yj29mCNBc6_HtbbmOXolUuFk_EH8xbacDEw-u5ka2OT4_KZmjnN45T-tcCRj8ZJhJqIPFu1UJBjBufL2fxIxTi3yGazlry8iC4Ym-Aqwj_z-qnDGna_mhJTUuWT6EcJX_kIPCgy8ahOlA',
    departureTime: '14:00',
    departureAirport: 'RUH',
    arrivalTime: '16:10',
    arrivalAirport: 'DXB',
    duration: 'ساعتان و 10 دقائق',
    stops: 0,
    price: 799
  },
  {
    id: '3',
    airline: 'طيران الإمارات',
    flightNumber: 'EK 818',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC11sXgS5JYb2AJiBJrX4FvNdhUoDqZwYttEleOiv5cuqoK1DdokLIfkcFuq2AQDQ0XDr8wGLRkZjGJnBLB9sfTKgVYaa4plQNDIwC_hueP0QFXfh2lq7Hn6CNeqoNKuVKLPZFmhJ9uRfnRem8ImamLW8oEhM8JLVXWm3X3DfWRh_8cysvqE4xX4V1z06jfn39FeXrpbQYNFppceso0TU1a9R51NXQHBDQ5CaUCOINVembioWQW35979BYLNqcXr9Dlz347ddcrmBE',
    departureTime: '18:50',
    departureAirport: 'RUH',
    arrivalTime: '20:50',
    arrivalAirport: 'DXB',
    duration: 'ساعتان',
    stops: 0,
    price: 920
  },
  {
    id: '4',
    airline: 'الخطوط القطرية',
    flightNumber: 'QR 1165',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg0u32cnbfWOuNQk1SZJO5wHnTlIAmpvC3gvza0CSjfx1_Q3QZLuI_ccnahZnnNpg9T1eoE17fVCKh0UHDHfjSFWxZBgcEy_kpmUvb37ESUEax07EE8idRdr9rWl5dApBNLKG_ZzwmpKgber9hBCiWV7_Kl1Ja02Oof-MkrPTqtNlXZjM23i55MUhUVkobojd3_L1-OswYbod-eyJknsozoaz6kDofmuXisHS82ryJ3mGPl-7cP-C2ZkBqBBzdXsE8Hb3LWRkW6Eg',
    departureTime: '04:45',
    departureAirport: 'RUH',
    arrivalTime: '09:15',
    arrivalAirport: 'DXB',
    duration: '4 ساعات و 30 دقيقة',
    stops: 1,
    price: 1150
  }
];

const Flights: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-1/4">
          <div className="sticky top-28 space-y-6">
            <div className="bg-background-white dark:bg-background-dark rounded-xl shadow p-6 border border-gray-100">
              <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-primary">تصفية النتائج</h3>
                <button className="text-sm font-medium text-text-secondary hover:text-primary">إعادة تعيين</button>
              </div>
              <div className="py-6 border-b border-gray-200 dark:border-gray-700">
                <h4 className="font-bold mb-4">عدد التوقفات</h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3"><input defaultChecked className="form-checkbox rounded text-primary focus:ring-primary/50" type="checkbox"/><span>مباشر</span></label>
                  <label className="flex items-center gap-3"><input className="form-checkbox rounded text-primary focus:ring-primary/50" type="checkbox"/><span>توقف واحد</span></label>
                </div>
              </div>
              <div className="py-6 border-b border-gray-200 dark:border-gray-700">
                <h4 className="font-bold mb-4">شركات الطيران</h4>
                <div className="space-y-3">
                  {['الخطوط السعودية', 'طيران ناس', 'طيران الإمارات', 'الخطوط القطرية'].map((airline, idx) => (
                    <label key={idx} className="flex items-center gap-3"><input defaultChecked className="form-checkbox rounded text-primary focus:ring-primary/50" type="checkbox"/><span>{airline}</span></label>
                  ))}
                </div>
              </div>
               <div className="pt-6">
                <h4 className="font-bold mb-4">نطاق السعر</h4>
                <input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-primary" max="5000" min="500" type="range" defaultValue="2500"/>
                <div className="flex justify-between text-sm text-text-secondary mt-2">
                  <span>500 ر.س</span>
                  <span>5000 ر.س</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div className="w-full lg:w-3/4">
          <div className="bg-background-white dark:bg-background-dark rounded-xl shadow p-4 mb-6 border border-gray-100">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="font-bold text-text-primary flex items-center gap-2">
                الرياض (RUH) <span className="material-symbols-outlined text-xl rotate-180">arrow_right_alt</span> دبي (DXB) - <span className="text-text-secondary font-medium">15 أغسطس، مسافر واحد</span>
              </p>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-text-secondary">الترتيب حسب:</span>
                <button className="px-4 py-2 rounded-full text-sm font-bold bg-primary text-white shadow-sm">الأقل سعراً</button>
                <button className="px-4 py-2 rounded-full text-sm font-bold bg-background-light text-text-secondary hover:bg-gray-200 transition-colors">الأسرع</button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {flightsData.map((flight) => (
              <div key={flight.id} className="bg-background-white dark:bg-background-dark rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row items-stretch border border-gray-100 hover:shadow-xl transition-all">
                <div className="p-6 flex-grow">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <img alt={flight.airline} className="h-10 w-10 object-contain" src={flight.logo} />
                      <div>
                        <p className="font-bold">{flight.airline}</p>
                        <p className="text-sm text-text-secondary">{flight.flightNumber}</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold">{flight.departureTime}</p>
                      <p className="text-sm font-medium text-text-secondary">{flight.departureAirport}</p>
                    </div>
                    <div className="text-center flex-shrink-0 flex flex-col items-center">
                      <p className="text-sm text-text-secondary mb-1">{flight.duration}</p>
                      <div className="relative w-32 h-px bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                         {flight.stops > 0 ? (
                           <span className="absolute -top-3 bg-white px-1 text-xs text-text-secondary border rounded-full">DOH</span>
                         ) : null}
                         <div className="absolute right-0 w-2 h-2 rounded-full bg-gray-300"></div>
                         <div className="absolute left-0 w-2 h-2 rounded-full bg-gray-300"></div>
                      </div>
                      <p className={`text-sm font-bold mt-1 ${flight.stops === 0 ? 'text-green-600' : 'text-secondary'}`}>
                        {flight.stops === 0 ? 'مباشر' : 'توقف واحد'}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold">{flight.arrivalTime}</p>
                      <p className="text-sm font-medium text-text-secondary">{flight.arrivalAirport}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-background-light dark:bg-gray-800 p-6 flex flex-col items-center justify-center min-w-[200px] border-t md:border-t-0 md:border-r border-gray-100">
                  <p className="text-2xl font-extrabold text-primary">{flight.price.toLocaleString()} <span className="text-base font-bold text-text-secondary">ر.س</span></p>
                  <p className="text-xs text-text-secondary mb-3">للشخص الواحد</p>
                  <button className="w-full flex cursor-pointer items-center justify-center rounded-lg h-12 px-5 bg-secondary hover:bg-secondary/90 text-text-primary text-base font-bold transition-colors">اختر الرحلة</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flights;