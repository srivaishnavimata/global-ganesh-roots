import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Heart, Users, Trophy, Camera, FileText, CheckCircle } from "lucide-react";

const About = () => {
  const contestRules = [
    "Open to participants worldwide, with special invitation to NRIs",
    "Submit photos, short videos (max 2 minutes), or written stories",
    "Maximum file size: 50MB for videos, 10MB for photos",
    "One entry per participant (but can include multiple files)",
    "Content must be original and taken/created during Ganesh Utsav 2024",
    "Submissions must be family-friendly and culturally appropriate",
    "By submitting, you grant permission for display on website and promotional materials",
  ];

  const judgingCriteria = [
    { title: "Creativity & Uniqueness", description: "Original approach to celebrating Ganesh Utsav in your location" },
    { title: "Cultural Authenticity", description: "Adherence to traditional values while showcasing global adaptations" },
    { title: "Visual Appeal", description: "Quality and composition of photos/videos" },
    { title: "Emotional Resonance", description: "Story's ability to connect and inspire others" },
    { title: "Global Celebration", description: "How well it showcases Ganesh Utsav in an international context" },
  ];

  const prizes = [
    { place: "1st Place", prize: "₹50,000 + Cultural Heritage Trip Voucher", icon: <Trophy className="h-8 w-8 text-yellow-500" /> },
    { place: "2nd Place", prize: "₹25,000 + Indian Store Vouchers", icon: <Trophy className="h-8 w-8 text-gray-400" /> },
    { place: "3rd Place", prize: "₹15,000 + Traditional Art Collection", icon: <Trophy className="h-8 w-8 text-amber-600" /> },
    { place: "People's Choice", prize: "₹10,000 + Social Media Feature", icon: <Heart className="h-8 w-8 text-festival-red" /> },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-festival-gradient mb-4">
            About the Contest
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bridging geographical distances through devotion and celebration
          </p>
        </div>

        {/* Vision & Purpose */}
        <Card className="mb-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Globe className="h-6 w-6 text-primary" />
              Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg leading-relaxed">
            <p className="mb-4">
              The <strong>Global Ganesh Utsav</strong> contest aims to create a digital tapestry of celebrations, 
              showcasing the enduring spirit of Lord Ganesha among the worldwide Indian community. 
            </p>
            <p className="mb-4">
              This platform serves as a cultural bridge for Non-Resident Indians (NRIs), allowing them to 
              share their unique adaptations and continuations of Ganesh Utsav traditions abroad. Whether 
              you're celebrating in a small apartment in New York or organizing a community gathering 
              in London, your devotion transcends borders.
            </p>
            <p>
              We believe that festivals are not bound by geography. Through this contest, we celebrate 
              the diversity of traditions while honoring the timeless essence of Ganesh Utsav.
            </p>
          </CardContent>
        </Card>

        {/* Contest Rules */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <FileText className="h-6 w-6 text-accent" />
              Contest Rules & Eligibility
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {contestRules.map((rule, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{rule}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Submission Guidelines */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Camera className="h-6 w-6 text-secondary" />
              Submission Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Photos</h3>
                <p className="text-sm text-muted-foreground">High-quality images of your celebrations. JPEG/PNG format, max 10MB.</p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <FileText className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Videos</h3>
                <p className="text-sm text-muted-foreground">Short clips up to 2 minutes. MP4 format, max 50MB.</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary/10 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Stories</h3>
                <p className="text-sm text-muted-foreground">Written narratives about your celebration experience and cultural context.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Judging Criteria */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Users className="h-6 w-6 text-festival-blue" />
              Judging Criteria
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {judgingCriteria.map((criteria, index) => (
                <div key={index} className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-primary">{criteria.title}</h3>
                  <p className="text-sm text-muted-foreground">{criteria.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Prizes */}
        <Card className="mb-8 bg-gradient-to-r from-festival-marigold/5 to-festival-saffron/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Trophy className="h-6 w-6 text-festival-marigold" />
              Prizes & Recognition
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {prizes.map((prize, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-lg border">
                  {prize.icon}
                  <div>
                    <h3 className="font-semibold">{prize.place}</h3>
                    <p className="text-sm text-muted-foreground">{prize.prize}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Share Your Celebration?</h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of participants from around the world in celebrating Ganesh Utsav globally.
          </p>
          <Button asChild variant="festival" size="lg">
            <Link to="/submit">
              Submit Your Entry Now
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;