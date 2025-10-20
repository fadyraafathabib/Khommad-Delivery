import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Form, FormField, FormLabel, FormControl, FormMessage } from '../components/ui/form';
import { Facebook, Instagram, MessageCircle, Phone, Mail } from 'lucide-react';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen py-16 mr-8 ml-8">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title text-3xl font-bold text-blue-900 mb-6">اتصل بنا</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedItem>
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">أرسل لنا رسالة</CardTitle>
                  <p className="text-gray-600">
                    نود أن نسمع منك! املأ النموذج وسنرد عليك في أقرب وقت ممكن.
                  </p>
                </CardHeader>
                <CardContent>
                  <Form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <FormField>
                        <FormLabel>الاسم الكامل</FormLabel>
                        <FormControl
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <FormMessage />
                      </FormField>
                      
                      <FormField>
                        <FormLabel>رقم الهاتف</FormLabel>
                        <FormControl
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                        <FormMessage />
                      </FormField>
                      
                      <FormField>
                        <FormLabel>الرسالة</FormLabel>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="flex h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                        <FormMessage />
                      </FormField>
                      
                      <Button 
                        type="submit" 
                        className="btn-primary w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                      </Button>
                      
                      {submitSuccess && (
                        <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md text-center">
                          تم إرسال رسالتك بنجاح! سنرد عليك قريبًا.
                        </div>
                      )}
                    </div>
                  </Form>
                </CardContent>
              </Card>
            </AnimatedItem>
            
            <AnimatedItem>
              <div className="space-y-8">
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">معلومات الاتصال</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 ">
                        <Phone className="text-gold-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">الهاتف</p>
                          <p className="text-gray-600">+201111111111</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 ">
                        <Mail className="text-gold-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">البريد الإلكتروني</p>
                          <p className="text-gray-600">info..khaddamdelivery.org</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 ">
                        <MessageCircle className="text-gold-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">واتساب</p>
                          <p className="text-gray-600">+201111111111</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">تابعنا على وسائل التواصل الاجتماعي</h3>
                    <div className="flex space-x-4 ">
                      <a 
                        href="https://www.facebook.com/profile.php?id=100070693035679&locale=ar_AR" 
                        className="bg-blue-100 p-3 rounded-full text-blue-700 hover:bg-blue-200 transition-colors"
                        aria-label="فيسبوك"
                      >
                        <Facebook size={24} />
                      </a>
                      <a 
                        href="#" 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full text-white hover:opacity-90 transition-opacity"
                        aria-label="إنستغرام"
                      >
                        <Instagram size={24} />
                      </a>
                      <a 
                        href="#" 
                        className="bg-green-500 p-3 rounded-full text-white hover:bg-green-600 transition-colors"
                        aria-label="واتساب"
                      >
                        <MessageCircle size={24} />
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="bg-gradient-to-r from-blue-500 to-gold-500 rounded-2xl p-8 text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">"نُوصِّل رسالة الخلاص، بقلبٍ لا بسرعة ❤️"</h3>
                  <p>خدام ديلفري - نحن هنا لخدمتك وخدمتك للمسيح</p>
                </div>
              </div>
            </AnimatedItem>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Contact;
