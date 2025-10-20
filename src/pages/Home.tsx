import { Button } from '../components/ui/button';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';

const Home = () => {
  return (
    <div className="min-h-screen mr-8 ml-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection delay={0.2}>
              <AnimatedItem>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  مستعدين نوصّل رسالة الخلاص... في كل مكان!
                </h1>
              </AnimatedItem>
              
              <AnimatedItem>
                <p className="text-xl mb-8 opacity-90">
                  خدام ديلفري - نُوصِّل رسالة الخلاص، بقلبٍ لا بسرعة ❤️
                </p>
              </AnimatedItem>
              
              <AnimatedItem>
                <p className="text-lg mb-10 max-w-2xl mx-auto">
                  نحن مجموعة من الشباب المسيحي المتحمس لنشر محبة المسيح ورسالة الخلاص في كل مكان، 
                  من خلال أنشطة مبتكرة وروح مفعمة بالحياة.
                </p>
              </AnimatedItem>
              
              <AnimatedItem>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    className="btn-primary px-8 py-4 text-lg"
                    asChild
                  >
                    <a href="/about">انضم إلينا</a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="bg-white/20 hover:bg-white/30 text-white border-white px-8 py-4 text-lg"
                    asChild
                  >
                    <a href="/activities">تعرف على أنشطتنا</a>
                  </Button>
                </div>
              </AnimatedItem>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <AnimatedSection className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedItem>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                مهمتنا
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-xl text-gray-700 leading-relaxed">
                نحن ملتزمون بإلهام الشباب المسيحي، وربطهم ببعضهم البعض، 
                ومشاركتهم رسالة الخلاص بطريقة إبداعية وحيوية. 
                نؤمن أن كل شاب لديه القدرة على أن يكون سفيرًا لمحبة المسيح في عالمه.
              </p>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="py-16 bg-gradient-to-r from-blue-50 to-gold-50">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "160K+", label: "شاب مشارك" },
              { number: "50K+", label: "فعالية سنوية" },
              { number: "10+", label: "مشاريع خدمة" },
              { number: "5", label: "سنوات من الخدمة" }
            ].map((stat, index) => (
              <AnimatedItem key={index} className="p-6">
                <div className="text-4xl font-bold text-blue-900 mb-2">{stat.number}</div>
                <div className="text-lg text-gray-700">{stat.label}</div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;
