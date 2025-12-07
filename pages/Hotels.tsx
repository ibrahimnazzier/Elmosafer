import React, { useState } from 'react';
import { Hotel } from '../types';

const hotelsData: Hotel[] = [
  {
    id: '1',
    name: 'فندق فور سيزونز الرياض',
    location: 'يقع في برج المملكة، ويوفر إطلالات بانورامية على المدينة.',
    rating: 9.2,
    stars: 5,
    price: 1800,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmvTN2P2EAY7_RCg8f3K3FjUqXru39vLlg3kX2bswuT6CoXlg3g5ufjpa0jj700RQxVONbtCIeIdfMaE-kAKgs6U-OCxzGt_Gxyky9jt7A6ou5LoFkStBVlgL-G_8BXTKMFLMP2mJ16K10pn2YaEdHjZ8yone2CMMCvXP4d5e9lVhJymBgByVDhaAD_1aa9Kdx1SiXF4quw1Vq0jBKt3IhgXK0VRZxO_4pfr0yOBGOhnfAi_2Pfcd5H3o_n5XnAdgG04M05m5eidw',
    description: 'تقييم 9.2 (ممتاز)'
  },
  {
    id: '2',
    name: 'فندق حياة ريجنسي الرياض العليا',
    location: 'فندق فاخر في قلب حي العليا التجاري والأعمال.',
    rating: 8.8,
    stars: 5,
    price: 950,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-zlm9-sCTo4hCBPMSKX1KCUkswYSDsU18sAolfY9AZIYQ-s1vPsl3S7Rhv6PlQxF2mnjcJrApTrj2MAkV08p-L3UomHTxUZsl3dTrxQYiGOBm3xXrKq3gxSrel3g8D5xo-f_srTGbo454fBgBHcc7ub_vYpaq8RT05AeHlcjNNZQ9ySVah5UcLUUwFRvYrNEF1KNeLOskl9klCp33ocxVywG8DxJVEoXdghzCrISudl4psuM8SvZm1wd9G9_-d1qrwC21gkuL3UM',
    description: 'تقييم 8.8 (جيد جدًا)'
  },
  {
    id: '3',
    name: 'إيبيس الرياض شارع العليا',
    location: 'خيار اقتصادي ومريح للمسافرين بغرض العمل والترفيه.',
    rating: 7.5,
    stars: 3,
    price: 350,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-6kd4NV6hXLPaU8ziEqZEyuton9KtfcXrAb0W_1O7_x6Bf0YQlDi-2ZrQ5vRftf9wW5MykVhuubtxKpazukoOygmi25vTNNhUqmR0zHx0zY8WFwIhfyTDGOX7sVCJtNkBVOLZAEgzxvaD_174OAdUcm4bcvjdtI7pHjgJYM8vuXNLOyI9Oa4-cf1gadkRAqWwVE2xho2JSjNq73PmdiIJZyFg6TSDjT2KOsUPlzG61I2OJIIjtxjjEDaUWoaY2zSr9W-LxKZ2WiQ',
    description: 'تقييم 7.5 (جيد)'
  },
  {
    id: '4',
    name: 'نارسيس الرياض فندق وسبا',
    location: 'تجربة إقامة فاخرة مع مرافق سبا عالمية المستوى ومسبح.',
    rating: 9.0,
    stars: 5,
    price: 1550,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9y-2QcwUWM05PSnQopVnH9k75Hcaghdrk4LCJWmGnFoJkj45TYjZf1A3QQDErXyLODpLdRU5DolUePbDyWx5uuV_sjcs0S3EjqAU6y7aRH_liqkE_ewFuUbygvbrIs_PyRCisUmgClmOjECIwItsakM6pFknf1QQ2CqhTNJ5ursPQZMF4dJuINh2lyn1vQCovBfu1Hhi82sCnceCYWRs59EL1GrN8gHEZ6wxLMnbLBbPNNqymqNROQ2ec1TqWGqm0WTteuiujMyA',
    description: 'تقييم 9.0 (ممتاز)'
  }
];

const Hotels: React.FC = () => {
  const [priceRange, setPriceRange] = useState(2500);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="lg:w-1/4 xl:w-1/5">
          <div className="sticky top-28 space-y-6">
            <div className="bg-background-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-text-primary mb-4">تصفية النتائج</h3>
            </div>
            <div className="bg-background-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-text-primary mb-4">نطاق السعر (لليلة)</h4>
              <input 
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-primary" 
                id="price-range" max="5000" min="50" type="range" 
                value={priceRange} 
                onChange={(e) => setPriceRange(Number(e.target.value))}
              />
              <div className="flex justify-between text-sm text-text-secondary mt-2">
                <span>50 ر.س</span>
                <span>{priceRange}+ ر.س</span>
              </div>
            </div>
            <div className="bg-background-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-text-primary mb-4">تصنيف النجوم</h4>
              <div className="space-y-3">
                {[5, 4, 3].map(star => (
                  <label key={star} className="flex items-center cursor-pointer">
                    <input className="form-checkbox h-5 w-5 rounded text-primary focus:ring-primary/50 border-gray-300" type="checkbox" />
                    <span className="mr-3 text-text-primary">{star} نجوم</span>
                    <span className="mr-auto text-yellow-500 flex">
                      {[...Array(star)].map((_, i) => <span key={i} className="material-symbols-outlined !text-base filled">star</span>)}
                    </span>
                  </label>
                ))}
              </div>
            </div>
             <div className="bg-background-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-text-primary mb-4">المرافق</h4>
              <div className="space-y-3">
                {['مواقف سيارات', 'شامل الإفطار', 'مسبح', 'Wi-Fi مجاني', 'جيم'].map((amenity, idx) => (
                  <label key={idx} className="flex items-center cursor-pointer">
                    <input className="form-checkbox h-5 w-5 rounded text-primary focus:ring-primary/50 border-gray-300" type="checkbox"/>
                    <span className="mr-3 text-text-primary">{amenity}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Results List */}
        <div className="w-full lg:w-3/4 xl:w-4/5">
          <div className="bg-background-white dark:bg-gray-800 p-4 rounded-xl shadow-sm mb-6 flex items-center justify-between flex-wrap gap-4">
            <p className="text-text-primary font-bold">وجدنا {hotelsData.length} فندق في الرياض</p>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-text-secondary">الترتيب حسب:</span>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20 transition-colors">الموصى به</button>
                <button className="px-4 py-2 rounded-full bg-background-light hover:bg-gray-200 dark:hover:bg-gray-700 text-text-secondary hover:text-text-primary text-sm font-bold transition-colors">السعر (من الأقل)</button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {hotelsData.map(hotel => (
              <div key={hotel.id} className="bg-background-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-300">
                <div className="md:w-1/3 relative">
                  <img className="h-48 w-full object-cover md:h-full transition-transform hover:scale-105 duration-500" src={hotel.image} alt={hotel.name} />
                </div>
                <div className="w-full p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-primary">{hotel.name}</h3>
                      <div className="flex items-center gap-1 text-yellow-500">
                        {[...Array(hotel.stars)].map((_, i) => <span key={i} className="material-symbols-outlined !text-lg filled">star</span>)}
                      </div>
                    </div>
                    <p className="text-sm text-text-secondary mt-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      {hotel.location}
                    </p>
                  </div>
                  <div className="flex items-end justify-between mt-4 pt-4 border-t border-gray-100">
                    <div>
                      <span className={`px-2 py-1 ${hotel.rating >= 8.5 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'} text-xs font-bold rounded`}>
                        {hotel.description}
                      </span>
                      <p className="text-2xl font-bold text-text-primary mt-2">{hotel.price.toLocaleString()} <span className="text-sm font-normal text-text-secondary">ر.س / الليلة</span></p>
                    </div>
                    <button className="flex cursor-pointer items-center justify-center rounded-lg h-11 px-6 bg-secondary hover:bg-secondary/90 text-text-primary text-base font-bold transition-colors">عرض التفاصيل</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;