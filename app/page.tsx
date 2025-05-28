"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Map, Plane } from "lucide-react";
import Alwis from "./Images/Alwis.jpg"
import Dinithi from "./Images/Dinithi.jpg"
import Indunuwan from "./Images/Indunuwan.jpg"
import Rajapakshe from "./Images/Rajapakshe.jpg"
import Shashika from "./Images/Shashika.jpg"
import Vaffa from "./Images/Vaffa.jpg"

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

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-white/50 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80" 
            alt="Data broadcasting background"
            className="w-full h-full object-cover opacity-10 blur-sm"
          />
          <div className="absolute inset-0 bg-white/70"></div>
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

      {/*About Us */}
      <section className="py-20 bg-white" id="about-us">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-16">About Us</h2>

    {/* Supervisors */}
    <div className="grid md:grid-cols-2 gap-12 mb-20">
      <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
        <div className="flex flex-col items-center space-y-4">
          <img src={Shashika.src} alt="Ms. Shashika Lokuliyana" className="rounded-full w-32 h-32 object-cover shadow" />
          <h3 className="text-xl font-semibold text-gray-800">Ms. Shashika Lokuliyana</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Project Supervisor<br/>
            Senior Lecturer<br/>
            Faculty of Computing<br/>
            Computer Systems Engineering
          </p>
        </div>
      </div>
      <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
        <div className="flex flex-col items-center space-y-4">
          <img src={Dinithi.src} alt="Ms. Dinithi Pandithage" className="rounded-full w-32 h-32 object-cover shadow" />
          <h3 className="text-xl font-semibold text-gray-800">Ms. Dinithi Pandithage</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Project Co-Supervisor<br/>
            Lecturer<br/>
            Faculty of Computing<br/>
            Computer Systems Engineering
          </p>
        </div>
      </div>
    </div>

    {/* Team Members */}
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
      <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition-all duration-300">
        <img src={Rajapakshe.src} alt="Rajapaksha P- K-" className="mx-auto rounded-full w-24 h-24 object-cover mb-3 shadow" />
              <h4 className="text-lg font-medium text-gray-800">Rajapaksha P.K</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
            Faculty of Computing<br/>
            Computer Systems Engineering
          </p>
        <p className="text-gray-600 text-sm">IT21255724<br/>(Leader)</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition-all duration-300">
        <img src={Vaffa.src} alt="vaffa M.A.M.A" className="mx-auto rounded-full w-24 h-24 object-cover mb-3 shadow" />
              <h4 className="text-lg font-medium text-gray-800">Vaffa M.A.M.A</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
            Faculty of Computing<br/>
            Computer Systems Engineering
          </p>
        <p className="text-gray-600 text-sm">IT21307812</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition-all duration-300">
        <img src={Indunuwan.src} alt="Indunuwan KMLG-U" className="mx-auto rounded-full w-24 h-24 object-cover mb-3 shadow" />
              <h4 className="text-lg font-medium text-gray-800">Indunuwan K.M.L.G.U</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
            Faculty of Computing<br/>
            Computer Systems Engineering
          </p>
        <p className="text-gray-600 text-sm">IT21454578</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition-all duration-300">
        <img src={Alwis.src} alt="Alwis.M.A.M.D.S" className="mx-auto rounded-full w-24 h-24 object-cover mb-3 shadow" />
              <h4 className="text-lg font-medium text-gray-800">Alwis M.A.M.D.S</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
            Faculty of Computing<br/>
            Computer Systems Engineering
          </p>
        <p className="text-gray-600 text-sm">IT21260360</p>
      </div>
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
