import Layout from "@/components/Layout";
import { Helmet } from "react-helmet";
const Pricing = () => {
  return (
    <Layout 
      title="Pricing" 
      description="Choose the perfect plan for your learning journey"
    >
      <Helmet>
        <title>Pricing | OpenCourse</title>
        <meta name="description" content="Choose the perfect plan for your learning journey" />
      </Helmet>
      <div className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold text-primary mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-primary/80">
              Choose the perfect plan for your learning journey
            </p>
          </div>
          {/* Pricing Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden animate-fade-in-up ${
                  plan.featured
                    ? "bg-primary text-white transform scale-105 shadow-xl"
                    : "bg-white text-primary shadow-lg"
                } hover:transform hover:scale-[1.02] transition-all duration-300`}
                style={{ 
                  animationDelay: `${index * 150}ms` 
                }}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-sm">/{plan.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center transform transition-transform duration-300 hover:translate-x-1">
                        <svg
                          className={`w-5 h-5 mr-2 ${
                            plan.featured ? "text-highlight" : "text-accent"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <button
                      className={`w-full py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                        plan.featured
                          ? "bg-highlight text-primary hover:bg-highlight/90"
                          : "bg-accent text-white hover:bg-accent/90"
                      }`}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '600ms' }}>
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-lg p-6 border border-muted transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <h3 className="text-lg font-semibold mb-3 text-primary">{faq.question}</h3>
                  <p className="text-primary/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
const plans = [
  {
    name: "Basic",
    price: "29",
    period: "month",
    features: [
      "Access to 10 courses",
      "Basic support",
      "Course completion certificates",
      "7-day money-back guarantee",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: "79",
    period: "month",
    features: [
      "Access to all courses",
      "Priority support",
      "Course completion certificates",
      "30-day money-back guarantee",
      "Downloadable resources",
      "1-on-1 mentoring sessions",
    ],
    featured: true,
  },
  {
    name: "Team",
    price: "199",
    period: "month",
    features: [
      "Everything in Pro",
      "Team management dashboard",
      "Custom learning paths",
      "API access",
      "Analytics & reporting",
      "Dedicated account manager",
    ],
    featured: false,
  },
];
const faqs = [
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access until the end of your billing period.",
  },
  {
    question: "Do you offer team discounts?",
    answer: "Yes, we offer special discounts for teams of 5 or more. Contact our sales team for more information.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for team subscriptions.",
  },
  {
    question: "Are the certificates recognized by employers?",
    answer: "Yes, our certificates are industry-recognized and can be verified online by potential employers.",
  },
];
export default Pricing;