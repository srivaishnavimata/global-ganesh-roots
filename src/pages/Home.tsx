import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CountdownTimer from "@/components/CountdownTimer";
import { Globe, Heart, Trophy, Users, Camera, Share2, Calendar } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
const Home = () => {
  const features = [{
    icon: <Heart className="h-8 w-8 text-festival-red" />,
    title: "Reconnect with Your Roots",
    description: "Missing the vibrant energy of Ganesh Utsav back home? Share your heartfelt celebrations wherever you are in the world."
  }, {
    icon: <Camera className="h-8 w-8 text-festival-blue" />,
    title: "Showcase Your Unique Celebrations",
    description: "From grand community pujas in London to intimate home celebrations in New York, show us how you keep the spirit alive."
  }, {
    icon: <Users className="h-8 w-8 text-festival-green" />,
    title: "Be Part of a Global Community",
    description: "Join thousands of fellow NRIs worldwide. Discover diverse traditions and foster belonging in our Ganesh family."
  }, {
    icon: <Trophy className="h-8 w-8 text-festival-marigold" />,
    title: "Win Exciting Prizes",
    description: "Cultural experiences, vouchers for Indian stores, and featured recognition await the most inspiring submissions."
  }];
  const steps = [{
    number: "1",
    title: "Create & Capture",
    description: "Celebrate Ganesh Utsav in your unique way and capture those special moments."
  }, {
    number: "2",
    title: "Submit Your Entry",
    description: "Upload your photos, videos, or stories through our simple submission form."
  }, {
    number: "3",
    title: "Share & Inspire",
    description: "Be part of our global gallery and inspire others with your devotion."
  }];
  return <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-orange-50 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-orange-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-yellow-200 rounded-full opacity-40"></div>
        <div className="absolute bottom-20 right-40 w-20 h-20 bg-orange-300 rounded-full opacity-30"></div>
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Small badge */}
              <div className="flex items-center gap-2 text-orange-600">
                <Calendar className="h-5 w-5" />
                <span className="text-sm font-medium">Global Celebration 2025</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-orange-600 block">Celebrate Ganesh</span>
                <span className="text-orange-600 block">Utsav Globally!</span>
              </h1>
              
              {/* Countdown Timer */}
              <div className="bg-orange-100 rounded-2xl p-6 max-w-md border border-orange-200">
                <CountdownTimer />
              </div>
              
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-8 py-3 text-lg font-semibold">
                <Link to="/submit">
                  Participate Now! →
                </Link>
              </Button>
              
              {/* Unity badge */}
              <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-200 max-w-xs">
                <div className="text-orange-600 font-semibold">Unity</div>
                <div className="text-sm text-gray-600">in Diversity</div>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative">
              <div className="text-right mb-8">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  <span className="text-teal-600 block">GLOBAL</span>
                  <span className="text-orange-500 block">GANESH</span>
                  <span className="text-teal-600 block text-3xl lg:text-4xl">UTSAV 2025</span>
                </h2>
              </div>
              
              <div className="relative flex justify-center">
                <img 
                  src="/lovable-uploads/a8c0a101-82dd-4ebc-bf9c-f1517e0100c1.png" 
                  alt="Ganesh celebration character" 
                  className="w-80 h-auto object-contain"
                />
                
                {/* Share your celebrations badge */}
                <div className="absolute bottom-0 right-0 bg-orange-500 text-white rounded-2xl px-6 py-4 transform rotate-3 shadow-lg">
                  <div className="text-lg font-bold">SHARE YOUR</div>
                  <div className="text-lg font-bold">CELEBRATIONS</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom feature cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="border-2 border-orange-200 rounded-2xl p-6 bg-white/80">
              <h3 className="font-bold text-orange-600 text-lg mb-2">Open to All</h3>
              <p className="text-gray-600">NRIs Worldwide</p>
            </Card>
            
            <Card className="border-2 border-orange-200 rounded-2xl p-6 bg-white/80">
              <h3 className="font-bold text-orange-600 text-lg mb-2">Easy Upload</h3>
              <p className="text-gray-600">Photos & Videos</p>
            </Card>
            
            <Card className="border-2 border-yellow-200 rounded-2xl p-6 bg-white/80">
              <h3 className="font-bold text-orange-600 text-lg mb-2">Global Unity</h3>
              <p className="text-gray-600">Cultural Bridge</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Participate Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-festival-gradient mb-4">
              Why Participate?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a global celebration that bridges distances through devotion and tradition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => <Card key={index} className="text-center p-6 hover:shadow-festival transition-festival bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-festival-gradient mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple steps to share your Ganesh Utsav celebration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-festival">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>)}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="festival" size="lg">
              <Link to="/submit">
                Get Started Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cultural-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Share Your Celebration?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of participants from around the world in celebrating 
            Ganesh Utsav globally. Your story matters.
          </p>
          <Button asChild variant="outline" size="lg" className="bg-white text-festival-red border-white hover:bg-white/90">
            <Link to="/submit">
              Submit Your Entry Today
            </Link>
          </Button>
        </div>
      </section>
    </div>;
};
export default Home;