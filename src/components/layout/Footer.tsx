import { Facebook, Instagram, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="section-container mr-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div >
            <h3 className="text-xl font-bold mb-4 ">خدام ديلفري</h3>
            <p className="mb-4 opacity-80">
              نُوصِّل رسالة الخلاص بكل مكان، بكل وقت، وبكل قلب ❤️
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100070693035679&locale=ar_AR" className="bg-blue-800 p-2 rounded-full hover:bg-gold-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-gold-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-gold-500 transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="/" className="opacity-80 hover:opacity-100 transition-opacity">الرئيسية</a></li>
              <li><a href="/about" className="opacity-80 hover:opacity-100 transition-opacity">من نحن</a></li>
              <li><a href="/activities" className="opacity-80 hover:opacity-100 transition-opacity">الأنشطة</a></li>
              <li><a href="/media" className="opacity-80 hover:opacity-100 transition-opacity">الوسائط</a></li>
              <li><a href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">اتصل بنا</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3  ">
                <MapPin size={20} className="text-gold-400" />
                <span>القاهرة، مصر</span>
              </div>
              <div className="flex items-center space-x-3  ">
                <Phone size={20} className="text-gold-400" />
                <span>+201111111111</span>
              </div>
              <div className="flex items-center space-x-3  ">
                <Mail size={20} className="text-gold-400" />
                <span>info..khaddamdelivery.org</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 text-center opacity-75">
          <p>© {new Date().getFullYear()} خدام ديلفري. جميع الحقوق محفوظة.</p>
          <p className="mt-2">"نُوصِّل رسالة الخلاص، بقلبٍ لا بسرعة ❤️"</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
