import Layout from "@/components/Layout";
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <Layout 
      title="About Us" 
      description="Learn more about OpenCourse and our mission to provide quality education"
    >
      <Helmet>
        <title>About Us | OpenCourse</title>
        <meta name="description" content="Learn more about OpenCourse and our mission to provide quality education" />
      </Helmet>
      <div className="py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-primary mb-6">
              About OpenCourse
            </h1>
            <p className="text-xl text-gray-600">
              Transforming lives through accessible, high-quality education
            </p>
          </div>
          {/* Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At OpenCourse, we believe that quality education should be accessible to everyone. 
                Our mission is to provide world-class learning experiences that empower individuals 
                to achieve their professional goals and transform their careers.
              </p>
              <p className="text-gray-600">
                Through our carefully curated courses and expert instructors, we're building a 
                community of lifelong learners who are prepared for the challenges of tomorrow.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" 
                alt="Our Mission" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
          {/* Team Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
const values = [
  {
    icon: <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from course content to student support.",
  },
  {
    icon: <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
    title: "Innovation",
    description: "We embrace innovation and continuously adapt to meet evolving learning needs.",
  },
  {
    icon: <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    title: "Community",
    description: "We foster a supportive community where students can learn and grow together.",
  },
];
const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
  {
    name: "Michael Chen",
    role: "Head of Education",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
  {
    name: "Emily Rodriguez",
    role: "Lead Instructor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "David Kim",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
];
export default About;