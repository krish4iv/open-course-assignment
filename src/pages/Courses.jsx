import Layout from "@/components/Layout";
import { Helmet } from "react-helmet";
const Courses = () => {
  return (
    <Layout 
      title="Our Courses" 
      description="Browse our comprehensive selection of professional courses"
    >
      <Helmet>
        <title>Courses | OpenCourse</title>
        <meta name="description" content="Browse our comprehensive selection of professional courses" />
      </Helmet>
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-8 animate-fade-in">
            Our Courses
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
              style={{ 
                animationDelay: `${index * 100}ms` 
              }}
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-accent font-semibold">{course.price}</span>
                  <button className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
const courses = [
  {
    title: "Web Development Masterclass",
    description: "Learn modern web development from scratch with this comprehensive course.",
    price: "$99",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  {
    title: "Digital Marketing Essential",
    description: "Master the fundamentals of digital marketing and grow your business.",
    price: "$89",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    title: "Data Science Fundamentals",
    description: "Start your journey in data science and analytics with practical projects.",
    price: "$129",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    title: "UI/UX Design Workshop",
    description: "Create beautiful and functional user interfaces with modern design principles.",
    price: "$79",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    title: "Mobile App Development",
    description: "Build cross-platform mobile applications with React Native.",
    price: "$149",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  {
    title: "Business Analytics",
    description: "Learn to make data-driven decisions with business analytics.",
    price: "$119",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
];
export default Courses;