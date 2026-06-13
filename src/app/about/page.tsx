import { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CallToAction from '@/components/sections/CallToAction';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | BrightSide Solutions',
  description: 'Learn about BrightSide Solutions - our story, mission, values, and team. Discover how we\'ve been helping businesses scale with professional virtual assistant services since 2018.',
  openGraph: {
    title: 'About Us | BrightSide Solutions',
    description: 'Learn about our story, mission, values, and team.',
  },
};

export default function AboutPage() {
  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering high-quality work that exceeds expectations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty and transparency, building trust through reliable and ethical practices.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Innovation',
      description: 'We embrace new technologies and methods to continuously improve our services and deliver better results.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, understanding their goals and contributing to their success.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  const team = [
    {
      name: 'Jennifer Martinez',
      role: 'Founder & CEO',
      bio: 'Jennifer founded BrightSide Solutions with a vision to help businesses scale through efficient virtual support. With over 15 years in operations management, she leads our team with expertise and passion.',
    },
    {
      name: 'David Chen',
      role: 'Head of Operations',
      bio: 'David oversees all client operations and ensures our virtual assistants deliver exceptional service. His background in process optimization helps clients achieve maximum efficiency.',
    },
    {
      name: 'Sarah Williams',
      role: 'Client Success Manager',
      bio: 'Sarah is dedicated to ensuring every client achieves their goals with our services. She works closely with clients to understand their needs and provide tailored solutions.',
    },
    {
      name: 'Michael Brown',
      role: 'Training & Development Lead',
      bio: 'Michael leads our training programs, ensuring all virtual assistants are equipped with the latest skills and best practices to serve our clients effectively.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-100 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                About BrightSide Solutions
              </h1>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Empowering businesses with professional virtual assistant services since 2018. We're committed to helping you achieve operational excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-black mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    BrightSide Solutions was founded in 2018 with a simple mission: to help businesses focus on what they do best by taking care of the rest. We noticed that many business owners, entrepreneurs, and professionals were spending countless hours on administrative tasks that prevented them from growing their businesses.
                  </p>
                  <p>
                    What started as a small team of two virtual assistants has grown into a comprehensive service provider supporting hundreds of clients across various industries. We've worked with realtors, contractors, property managers, healthcare professionals, and small business owners to streamline their operations.
                  </p>
                  <p>
                    Today, we're proud to be a trusted partner for businesses looking to scale efficiently. Our team of skilled virtual assistants is trained to handle everything from basic administrative tasks to complex project coordination, allowing our clients to reclaim their time and focus on strategic growth.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-400 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-500 rounded-full opacity-20 translate-y-1/2 -translate-x-1/2" />
                <div className="relative bg-white rounded-xl p-8 shadow-lg">
                  <div className="text-5xl font-bold text-black mb-4">6+</div>
                  <div className="text-xl font-semibold text-black mb-2">Years of Excellence</div>
                  <p className="text-gray-700">Serving businesses with dedication and expertise since 2018</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center text-black mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-black mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide exceptional virtual assistant services that empower businesses to operate more efficiently, scale effectively, and achieve their full potential. We're committed to being the trusted partner that enables our clients to focus on what matters most.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center text-black mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-black mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the leading virtual assistant service provider known for reliability, excellence, and transformative business impact. We envision a future where every business has access to professional support that enables growth and success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                The principles that guide everything we do and how we serve our clients.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-black mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                The dedicated professionals behind BrightSide Solutions who work tirelessly to support your success.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-semibold text-black text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-center mb-4 font-medium">
                    {member.role}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed text-center">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
