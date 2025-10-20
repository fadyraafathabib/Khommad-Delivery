import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';

const Activities = () => {
  const activities = [
    {
      title: "لقاءات الشباب الأسبوعية",
      description: "اجتماعات أسبوعية للصلاة، العبادة، والدراسة الكتابية في جو شبابي حماسي.",
      image: "/bible-study-group-discussion.jpg"
    },
    {
      title: "معسكرات الخدمة",
      description: "معسكرات صيفية وشتوية للشباب لتنمية مهارات الخدمة والقيادة الروحية.",
      image: "/evangelical-campaign-outdoor-event.jpg"
    },
    {
      title: "مبادرات المجتمع",
      description: "مشاريع خدمة مجتمعية مثل توزيع الوجبات، زيارة المرضى، ودعم الأسر المحتاجة.",
      image: "/community-service-helping-people.jpg"
    },
    {
      title: "ورش العمل الإبداعية",
      description: "ورش لتعليم الفنون، الموسيقى، والدراما كوسيلة للتعبير عن الإيمان.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <div className="min-h-screen py-16 mr-8 ml-8">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title text-3xl font-bold text-blue-900 mb-6">أنشطتنا</h2>
          <p className="text-center text-xl text-gray-700 max-w-3xl mx-auto mb-16">
            نقدم مجموعة متنوعة من الأنشطة التي تهدف إلى بناء الإيمان، وتنمية المهارات، 
            وخدمة المجتمع، كل ذلك في جو شبابي مليء بالفرح والحماس.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <AnimatedItem key={index} className="h-full">
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={activity.image} 
                        alt={activity.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-900">{activity.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{activity.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="mt-24">
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">هل تريد أن تكون جزءًا من فريقنا؟</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              نبحث دائمًا عن شباب متحمسين للانضمام إلى فريق "خدام ديلفري" والمشاركة في أنشطتنا.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-gold-500 hover:bg-gold-600 text-white-900 font-bold py-3 px-8 rounded-full transition-colors border-2"
            >
              تواصل معنا الآن
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Activities;
