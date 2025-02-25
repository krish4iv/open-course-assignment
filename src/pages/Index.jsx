import Layout from "@/components/Layout";
import { Helmet } from "react-helmet";
const Index = () => {
  return (
    <Layout
      title="Welcome"
      description="Transform your skills with premium online courses at OpenCourse. Learn from industry experts and advance your career."
    >
      <Helmet>
        <title>OpenCourse</title>
        <meta name="description" 
        content="Transform your skills with premium online courses at OpenCourse. Learn from industry experts and advance your career." />
        
        <meta  name="keywords" 
        content="Courses, Online Courses, Professional Courses, Expert-Led Courses, Self-Paced Learning, Certified Courses, Career Advancement, Industry Experts, Premium Courses, OpenCourse" />
      </Helmet>
      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-gradient-to-b from-secondary to-white relative overflow-hidden">
        {/* Animated Background Element */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full animate-float" 
            style={{animationDuration: '6s'}}
          ></div>
          <div 
            className="absolute top-40 right-10 w-48 h-48 bg-highlight/20 rounded-full animate-float" 
            style={{animationDelay: '1s', animationDuration: '8s'}}
          ></div>
          <div 
            className="absolute bottom-20 left-1/4 w-32 h-32 bg-primary/5 rounded-full animate-float" 
            style={{animationDelay: '2s', animationDuration: '7s'}}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
              Transform Your Skills with Premium Courses
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-up">
              Join thousands of learners worldwide and advance your career with expert-led courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <a
                href="/courses"
                className="px-8 py-4 rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors text-lg font-semibold"
              >
                Explore Courses
              </a>
              <a
                href="/pricing"
                className="px-8 py-4 rounded-lg bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-colors text-lg font-semibold"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Why Choose OpenCourse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Courses Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Featured Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-accent font-semibold">{course.price}</span>
                    <button className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our community of learners and start your journey today.
            </p>
            <a
              href="/courses"
              className="px-8 py-4 rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors text-lg font-semibold inline-block"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
const features = [
  {
    icon: <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
    title: "Expert-Led Courses",
    description: "Learn from industry professionals with years of experience.",
  },
  {
    icon: <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: "Self-Paced Learning",
    description: "Study at your own pace and on your own schedule.",
  },
  {
    icon: <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: "Certified Courses",
    description: "Earn certificates recognized by top companies worldwide.",
  },
];
const featuredCourses = [
  {
    title: "Web Development Masterclass",
    description: "Learn modern web development from scratch.",
    price: "$99",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  {
    title: "Digital Marketing Essential",
    description: "Master the fundamentals of digital marketing.",
    price: "$89",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    title: "Data Science Fundamentals",
    description: "Start your journey in data science and analytics.",
    price: "$129",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
];
export default Index;