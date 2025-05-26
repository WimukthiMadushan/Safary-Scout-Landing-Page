"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Map, Plane } from "lucide-react";
import Image from "next/image";
import peacock from "./Images/Peacock.png"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-amber-50 to-orange-50 custom-cursor">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Plane className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent cursor-pointer">
              Safari Scout
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-emerald-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 transition-colors">How It Works</a>
            <a href="#Explorers" className="text-gray-700 hover:text-emerald-600 transition-colors">Explorers</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
          </nav>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer">
            Get Started
          </Button>
        </div>
      </header>


      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 cursor-pointer">
              🚁 Revolutionary Wildlife Tracking
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-700 via-amber-600 to-orange-600 bg-clip-text text-transparent leading-tight">
              Safari Scout
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the future of wildlife tracking with drone-powered real-time animal location data 
              delivered directly to your safari vehicle's intelligent mapping system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg cursor-pointer">
                Start Your Safari <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg cursor-pointer">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
        </div>
      </section>

      {/* What is Safari Scout Section */}
      <section className="py-16 px-4 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                  🌿 About Safari Scout
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-700 via-amber-600 to-orange-600 bg-clip-text text-transparent">
                  What is Safari Scout?
                </h2>
              </div>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Safari Scout is a <span className="font-semibold text-emerald-700">guidance drone</span> designed to 
                  enhance the safety, connectivity, and overall experience of tourists exploring 
                  safari areas in Sri Lanka by integrating advanced technologies.
                </p>
                <p>
                  Safari Scout provides <span className="font-semibold text-amber-700">real-time information</span> and 
                  emergency assistance, ensuring a seamless and enriching travel experience.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  <span className="text-emerald-700 font-medium">Enhanced Safety</span>
                </div>
                <div className="flex items-center space-x-2 bg-amber-50 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  <span className="text-amber-700 font-medium">Real-time Connectivity</span>
                </div>
                <div className="flex items-center space-x-2 bg-orange-50 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span className="text-orange-700 font-medium">Emergency Assistance</span>
                </div>
              </div>
            </div>

            {/* Right Side - Image Gallery */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Large Image - Cheetah */}
                <div className="col-span-2 relative overflow-hidden rounded-2xl shadow-2xl group">
                  <img 
                    src="https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?auto=format&fit=crop&w=800&q=80" 
                    alt="Majestic elephant in Sri Lankan safari"
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Majestic Cheetah</p>
                    <p className="text-sm opacity-90">Sri Lankan Wildlife</p>
                  </div>
                </div>

                {/* Peacock Image */}
                <div className="relative overflow-hidden rounded-xl shadow-lg group">
                  <Image
                    src={peacock}
                    alt="Colorful peacock displaying feathers"
                    className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ width: '100%', height: '128px', objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 text-white">
                    <p className="text-sm font-medium">Peacocks</p>
                  </div>
                </div>

                {/* Safari Landscape */}
                <div className="relative overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=400&q=80" 
                    alt="Sri Lankan safari landscape"
                    className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 text-white">
                    <p className="text-sm font-medium">Safari Views</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-amber-200 rounded-full opacity-60 animate-pulse animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-white/50 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
  <div className="absolute inset-0 relative">
    <Image
      src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80"
      alt="Data broadcasting background"
      fill
      className="object-cover opacity-10 blur-sm"
    />
    <div className="absolute inset-0 bg-white/70"></div>
  </div>
</div>

        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              How Safari Scout Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced three-step system revolutionizes wildlife tracking for an unparalleled safari experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 cursor-pointer">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-emerald-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-emerald-800">1. Drone Launch</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-lg text-gray-700">
                  At the beginning of your journey, our advanced drones launch from each safari jeep to scout the terrain and locate wildlife in real-time.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-amber-50 to-amber-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Map className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-amber-800">2. Data Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-lg text-gray-700">
                  Drones collect precise location data of animals and instantly transmit this information to our central monitoring station for processing.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-orange-800">3. Real-Time Broadcast</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-lg text-gray-700">
                  The main station broadcasts live animal locations to all registered safari jeeps, displaying on in-vehicle maps for optimal wildlife viewing.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience wildlife like never before with our cutting-edge technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Plane className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Autonomous Drones</h3>
              <p className="text-gray-600">Advanced AI-powered drones that automatically scout and track wildlife movements across vast safari territories.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <Map className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Live Mapping</h3>
              <p className="text-gray-600">Real-time interactive maps displaying animal locations, updated continuously for the most accurate safari experience.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <ArrowRight className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Instant Updates</h3>
              <p className="text-gray-600">Immediate data transmission to all safari vehicles, ensuring no wildlife encounter is missed.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-emerald-600 font-bold">📡</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Central Hub</h3>
              <p className="text-gray-600">Sophisticated main station that processes and distributes wildlife data across the entire safari network.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-amber-600 font-bold">🚙</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">In-Vehicle Integration</h3>
              <p className="text-gray-600">Seamless integration with safari jeep systems, displaying data on easy-to-read in-vehicle displays.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-orange-600 font-bold">🦁</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Wildlife Identification</h3>
              <p className="text-gray-600">Advanced AI recognition system that identifies and categorizes different animal species automatically.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="Explorers" className="bg-white py-20 px-4">
  <div className="container mx-auto max-w-6xl text-center">
    <h2 className="text-4xl font-bold mb-10 text-gray-800">What Explorers Are Saying</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { quote: "The drones helped us spot a leopard!", name: "Amara Ndlovu" },
        { quote: "Truly revolutionary technology.", name: "Liam Patterson" },
        { quote: "It made our safari unforgettable!", name: "Zara Mbeki" },
        { quote: "We tracked a pride of lions with stunning accuracy.", name: "Elijah Thompson" },
        { quote: "This technology redefines adventure tourism.", name: "Sophia Mwangi" },
        { quote: "Absolutely breathtaking experience!", name: "Noah van der Merwe" },
      ].map((review, idx) => (
        <div
          key={idx}
          className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer"
        >
          <p className="text-lg italic text-gray-700 relative">
            <span className="text-3xl text-gray-400 mr-1">“</span>{review.quote}
            <span className="text-3xl text-gray-400 ml-1">”</span>
          </p>
          <div className="mt-4 text-sm text-gray-500 font-semibold">– {review.name}</div>
        </div>
      ))}
    </div>
  </div>
</section>

    
      
      <section className="py-20 px-4 bg-emerald-50">
  <div className="container mx-auto max-w-4xl">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
    <div className="space-y-6">
      {[
        ["How do the drones track animals?", "Our AI-powered drones use infrared and movement tracking to locate and follow wildlife in real-time."],
        ["Is the service safe for animals?", "Absolutely. Our system is designed to be non-intrusive and respectful to natural habitats."],
        ["Can I access the map from my phone?", "Yes, every user gets a mobile dashboard for live tracking."],
      ].map(([q, a], idx) => (
        <div key={idx} className="bg-white p-6 rounded-lg shadow cursor-pointer">
          <h3 className="text-lg font-semibold text-emerald-700">{q}</h3>
          <p className="text-gray-600 mt-2">{a}</p>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 via-amber-600 to-orange-600 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Safari?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the revolution in wildlife tracking and experience the most advanced safari technology available today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold cursor-pointer">
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10 px-8 py-4 text-lg cursor-pointer">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Plane className="h-8 w-8 text-emerald-400" />
                <span className="text-2xl font-bold">Safari Scout</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Revolutionizing wildlife tracking with cutting-edge drone technology and real-time mapping systems for the ultimate safari experience.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sales</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partnership</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Safari Scout. All rights reserved. Revolutionizing wildlife experiences worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
