import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CountdownTimer from "@/components/CountdownTimer";
import { Globe, Heart, Trophy, Users, Camera, Share2 } from "lucide-react";
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
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[90vh] bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-5 gap-8 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="lg:col-span-3 space-y-8">
              <div className="animate-float">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-festival-gradient">GLOBAL GANESH UTSAV 2025</span>
                  
                </h1>
              </div>
              
              
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="festival" size="lg">
                  <Link to="/submit">
                    <Globe className="mr-2 h-5 w-5" />
                    Participate Now!
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  
                </Button>
              </div>

              {/* Countdown Timer */}
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 max-w-md border shadow-festival">
                <CountdownTimer />
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end">
              <div className="relative">
                <img src="/lovable-uploads/0984f64b-841d-4654-9d16-0f3a2c11d0e6.png" alt="Global Ganesh Utsav 2025 - Share Your Celebrations" className="w-full max-w-lg h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500 perspective-1000 rotate-y-12 hover:rotate-y-0 mix-blend-multiply opacity-90 hover:opacity-100" style={{
                filter: 'drop-shadow(20px 20px 40px rgba(0,0,0,0.3))',
                transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)',
                transformStyle: 'preserve-3d'
              }} />
              </div>
            </div>
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