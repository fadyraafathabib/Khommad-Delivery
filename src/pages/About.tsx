import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';

const About = () => {
  return (
    <div className="min-h-screen py-16 mr-8 ml-8">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title text-3xl font-bold text-blue-900 mb-6">من نحن</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedItem>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  بدأ "خدام ديلفري" كفكرة بسيطة بين مجموعة من الشباب المسيحي المتحمس في عام 2019. 
                  رأينا الحاجة إلى طريقة جديدة وحيوية لنشر رسالة الخلاص بين أقراننا، 
                  فقررنا أن نكون "خُدَّامًا" جددًا في هذا العصر الرقمي.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  الاسم "خدام ديلفري" يرمز إلى استعدادنا الدائم لـ"توصيل" رسالة الخلاص في أي مكان، 
                  في أي وقت، وبأي طريقة ممكنة. نحن لسنا خدمة توصيل تقليدية، 
                  بل نحن خدمة روحية تحمل رسالة الأمل والخلاص إلى كل شاب وشابة.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  مهمتنا هي إلهام الشباب المسيحي، وربطهم ببعضهم البعض، 
                  ومشاركتهم رسالة الخلاص بطريقة إبداعية وحيوية تناسب عصرهم.
                </p>
              </div>
            </AnimatedItem>
            
            <AnimatedItem>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="فريق خدام ديلفري" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
              </div>
            </AnimatedItem>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="mt-24">
          <h2 className="section-title text-3xl font-bold text-blue-900 mb-6">رؤيتنا وقيمنا</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "المحبة",
                description: "نخدم بقلب محب يسعى لخير كل إنسان",
                icon: "💖",
              },
              {
                title: "الشباب",
                description: "نؤمن بقوة الشباب وقدرتهم على تغيير العالم",
                icon: "🙏",
              },
              {
                title: "الإخلاص",
                description: "نقدم خدمتنا بإخلاص وتفانٍ، مقتدين بمثال المسيح الخدام.",
                icon: "🕊️",
              },
              {
                title: "الصدق",
                description: "نتحدث بصراحة عن رسالة الخلاص دون تزيين أو تضليل",
                icon: "✝️",
              },
              {
                title: "الابتكار",
                description: "نستخدم أساليب إبداعية وحديثة لنشر رسالة الخلاص بلغة العصر.",
                  icon: "💡",
              },
              {
                title: "الشغف",
                description: "نخدم بحماس وشغف، لأننا نؤمن بقوة رسالة الخلاص التي نحملها.",
                  icon: "🔥",
              },
              
              
            ].map((value, index) => (
              <AnimatedItem key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;
