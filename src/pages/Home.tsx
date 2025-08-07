import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import CountdownTimer from "@/components/CountdownTimer";
import { Globe, Heart, Trophy, Users, Camera, Share2, Calendar, Upload, FileText, Image, Hash, AtSign } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
const Home = () => {
  const scrollToSection = (sectionId: string) => {
    console.log('Attempting to scroll to section:', sectionId);
    const element = document.getElementById(sectionId);
    console.log('Found element:', element);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      console.log('Scrolling to element');
    } else {
      console.log('Element not found!');
    }
  };
  const features = [{
    icon: <Camera className="h-8 w-8 text-primary" />,
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
  const shareSteps = [{
    icon: <Camera className="h-10 w-10 text-white" />,
    title: "Record a Reel or Photo",
    description: "Capture your Ganesh Chaturthi celebration moments"
  }, {
    icon: <Hash className="h-10 w-10 text-white" />,
    title: "Use the Hashtag",
    description: "Post on Instagram using #GlobalGaneshUtsav"
  }, {
    icon: <AtSign className="h-10 w-10 text-white" />,
    title: "Tag Us",
    description: "Tag our Instagram handle to get featured on our site"
  }];
  return <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] bg-orange-50 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-orange-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-yellow-200 rounded-full opacity-40"></div>
        <div className="absolute bottom-20 right-40 w-20 h-20 bg-orange-300 rounded-full opacity-30"></div>
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] bg-cover bg-center bg-no-repeat rounded-lg sm:rounded-xl md:rounded-2xl w-full relative flex items-center justify-center md:bg-[url('/lovable-uploads/65395657-0cc9-4080-92ef-7f0da743ded6.png')] bg-[url('/lovable-uploads/23d77528-61aa-41bb-8110-ce5fce1e52e4.png')]">
            <div className="flex items-center w-full h-full">
              <div className="w-full md:w-1/2 lg:w-1/2 px-4 py-8 backdrop-blur-md bg-transparent rounded">
                <h1 className="md:text-6xl lg:text-7xl text-orange-600 text-left text-xl font-bold">
                  Celebrate Global <br /> Ganesh Utsav
                </h1>
                
              </div>
            </div>
            
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
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

      {/* How to Share Your Celebration Section */}
      <section id="participate" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How to Share Your Celebration</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {shareSteps.map((step, index) => <div key={index} className="text-center">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {step.description}
                </p>
              </div>)}
          </div>

          {/* <div className="text-center mt-12">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold">
              Create a Reel Now
            </Button>
           </div> */}
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
              {/* <Button onClick={() => scrollToSection('participate')} variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                Submit Your Celebration
               </Button> */}
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
          
        </div>
      </section>
    </div>;
};
export default Home;