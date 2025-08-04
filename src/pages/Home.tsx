import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import CountdownTimer from "@/components/CountdownTimer";
import { Globe, Heart, Trophy, Users, Camera, Share2, Calendar, Upload, FileText, Image } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    console.log('Attempting to scroll to section:', sectionId);
    const element = document.getElementById(sectionId);
    console.log('Found element:', element);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      console.log('Scrolling to element');
    } else {
      console.log('Element not found!');
    }
  };

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

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] bg-orange-50 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-orange-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-yellow-200 rounded-full opacity-40"></div>
        <div className="absolute bottom-20 right-40 w-20 h-20 bg-orange-300 rounded-full opacity-30"></div>
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="min-h-[80vh] bg-cover bg-center bg-no-repeat rounded-2xl" style={{backgroundImage: `url('/lovable-uploads/15c207b9-477e-400d-bbbf-54789cbc53d4.png')`}}>
          </div>
        </div>
      </section>

      {/* About Contest Section */}
      <section id="about" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-festival-gradient mb-4">About Contest</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a global celebration that bridges distances through devotion and tradition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-festival transition-festival bg-card/80 backdrop-blur-sm">
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="participate" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-festival-gradient mb-4">How to Participate</h2>
            <p className="text-lg text-muted-foreground">
              Simple steps to share your Ganesh Utsav celebration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-festival">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => scrollToSection('gallery')}
              variant="festival" 
              size="lg"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </section>


      {/* Global Gallery Section */}
      <section id="gallery" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-festival-gradient mb-4">Global Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how Ganesh Utsav is celebrated around the world
            </p>
          </div>

          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="h-12 w-12 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Coming Soon!</h3>
              <p className="text-muted-foreground mb-6">
                We're preparing to showcase beautiful celebrations from around the world. 
                Submit your entry to be featured in our global gallery.
              </p>
              <Button 
                onClick={() => scrollToSection('participate')}
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-50"
              >
                Submit Your Celebration
              </Button>
            </div>
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
          <Button 
            onClick={() => scrollToSection('participate')}
            variant="outline" 
            size="lg" 
            className="bg-white text-festival-red border-white hover:bg-white/90"
          >
            Submit Your Entry Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;