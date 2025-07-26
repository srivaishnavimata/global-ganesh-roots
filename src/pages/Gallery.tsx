import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Heart, Share2, Eye, MapPin, Calendar } from "lucide-react";

// Mock data for gallery submissions
const mockSubmissions = [
  {
    id: 1,
    title: "Community Ganesh Celebration in London",
    participant: "Rajesh Sharma",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e3?w=500&h=300&fit=crop",
    description: "Our local community came together to celebrate Ganesh Utsav in the heart of London...",
    likes: 124,
    date: "2024-09-15",
    type: "photo"
  },
  {
    id: 2,
    title: "Home Puja in New York Apartment",
    participant: "Priya Patel",
    country: "United States",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
    description: "Maintaining traditions in our small Manhattan apartment with my family...",
    likes: 89,
    date: "2024-09-12",
    type: "photo"
  },
  {
    id: 3,
    title: "Eco-Friendly Ganesha in Sydney",
    participant: "Arjun Krishnan",
    country: "Australia",
    image: "https://images.unsplash.com/photo-1583391733222-aa1a8b56a1d9?w=500&h=300&fit=crop",
    description: "Creating an eco-friendly clay Ganesha with my children in Sydney...",
    likes: 156,
    date: "2024-09-18",
    type: "video"
  },
  {
    id: 4,
    title: "Temple Celebration in Toronto",
    participant: "Meera Singh",
    country: "Canada",
    image: "https://images.unsplash.com/photo-1578662996154-bf8f6e4f4c3c?w=500&h=300&fit=crop",
    description: "Grand celebration at our local temple with the Indo-Canadian community...",
    likes: 203,
    date: "2024-09-20",
    type: "photo"
  },
  {
    id: 5,
    title: "Modak Making Session in Germany",
    participant: "Vikram Reddy",
    country: "Germany",
    image: "https://images.unsplash.com/photo-1583391733844-57b6b4b2a1e0?w=500&h=300&fit=crop",
    description: "Teaching my German neighbors how to make traditional modaks...",
    likes: 78,
    date: "2024-09-10",
    type: "photo"
  },
  {
    id: 6,
    title: "Cultural Dance Performance in UAE",
    participant: "Neha Gupta",
    country: "UAE",
    image: "https://images.unsplash.com/photo-1583391734000-b8b4e8b4c3e0?w=500&h=300&fit=crop",
    description: "Traditional Bharatanatyam performance during Ganesh festival in Dubai...",
    likes: 167,
    date: "2024-09-16",
    type: "video"
  }
];

const Gallery = () => {
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [sortBy, setSortBy] = useState("latest");

  // Get unique countries from submissions
  const countries = ["all", ...Array.from(new Set(mockSubmissions.map(sub => sub.country)))];

  // Filter and sort submissions
  const filteredSubmissions = mockSubmissions
    .filter(sub => selectedCountry === "all" || sub.country === selectedCountry)
    .sort((a, b) => {
      if (sortBy === "likes") return b.likes - a.likes;
      if (sortBy === "latest") return new Date(b.date).getTime() - new Date(a.date).getTime();
      return 0;
    });

  const handleLike = (id: number) => {
    // In a real app, this would update the database
    console.log(`Liked submission ${id}`);
  };

  const handleShare = (submission: any) => {
    // In a real app, this would open share dialog
    console.log(`Sharing submission: ${submission.title}`);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-festival-gradient mb-4">
            Global Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how our global community celebrates Ganesh Utsav around the world
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Filter by country" />
                </SelectTrigger>
                <SelectContent className="bg-popover border border-border">
                  <SelectItem value="all">All Countries</SelectItem>
                  {countries.slice(1).map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-popover border border-border">
                  <SelectItem value="latest">Latest First</SelectItem>
                  <SelectItem value="likes">Most Liked</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            Showing {filteredSubmissions.length} submissions
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSubmissions.map((submission) => (
            <Card key={submission.id} className="overflow-hidden hover:shadow-festival transition-festival bg-card/80 backdrop-blur-sm group">
              <div className="relative">
                <img
                  src={submission.image}
                  alt={submission.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant={submission.type === 'video' ? 'destructive' : 'secondary'} className="text-xs">
                    {submission.type === 'video' ? 'Video' : 'Photo'}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Button variant="outline" size="sm" className="bg-white/90 text-black border-white">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg leading-tight">{submission.title}</h3>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{submission.country}</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{submission.participant}</span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {submission.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike(submission.id)}
                      className="text-muted-foreground hover:text-festival-red"
                    >
                      <Heart className="h-4 w-4 mr-1" />
                      {submission.likes}
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleShare(submission)}
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <span className="text-xs text-muted-foreground">
                    {new Date(submission.date).toLocaleDateString()}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Submissions
          </Button>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-muted/30 rounded-lg p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-festival-gradient mb-2">
              Global Participation Stats
            </h2>
            <p className="text-muted-foreground">
              See how our community spans across the globe
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">156</div>
              <div className="text-sm text-muted-foreground">Total Submissions</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">32</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">1.2K</div>
              <div className="text-sm text-muted-foreground">Total Likes</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-success">847</div>
              <div className="text-sm text-muted-foreground">Participants</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;