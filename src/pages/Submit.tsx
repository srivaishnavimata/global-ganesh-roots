import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Upload, CheckCircle, AlertCircle } from "lucide-react";

const Submit = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    title: "",
    description: "",
    files: [] as File[],
    termsAccepted: false,
  });

  // Sample countries list (in real app, this would be more comprehensive)
  const countries = [
    "United States", "United Kingdom", "Canada", "Australia", "Germany", 
    "France", "Netherlands", "Singapore", "UAE", "Japan", "South Korea",
    "Italy", "Spain", "Sweden", "Switzerland", "New Zealand", "South Africa",
    "Brazil", "Argentina", "Mexico", "India", "Other"
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({ ...prev, files }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.termsAccepted) {
      toast({
        title: "Terms & Conditions Required",
        description: "Please accept the terms and conditions to proceed.",
        variant: "destructive",
      });
      return;
    }

    if (formData.files.length === 0) {
      toast({
        title: "Media Required",
        description: "Please upload at least one photo or video.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Submission Successful! 🎉",
        description: "Thank you for your entry! Your celebration is now part of our global tapestry.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        country: "",
        title: "",
        description: "",
        files: [],
        termsAccepted: false,
      });

      // Reset file input
      const fileInput = document.getElementById('file-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your entry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-festival-gradient mb-4">
            Submit Your Entry
          </h1>
          <p className="text-lg text-muted-foreground">
            Share your unique Ganesh Utsav celebration with the world
          </p>
        </div>

        <Card className="bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5 text-primary" />
              Contest Entry Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Personal Information</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="country">Country of Residence *</Label>
                  <Select value={formData.country} onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your country of residence" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border border-border max-h-[300px] overflow-y-auto">
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Submission Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Submission Details</h3>
                
                <div>
                  <Label htmlFor="title">Title of Your Submission *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="e.g., 'Ganesh Utsav in Downtown Toronto'"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description & Story *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Tell us about your Ganesh Utsav celebration. What makes it special? How do you maintain traditions in your current country? Share your personal story and cultural context..."
                    rows={6}
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    We encourage you to share personal stories and cultural context behind your celebration.
                  </p>
                </div>
              </div>

              {/* File Upload */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Upload Your Media</h3>
                
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <Label htmlFor="file-upload" className="cursor-pointer">
                    <span className="text-primary font-medium">Click to upload</span> or drag and drop
                  </Label>
                  <Input
                    id="file-upload"
                    type="file"
                    multiple
                    accept="image/*,video/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    Photos: JPEG/PNG (max 10MB) | Videos: MP4 (max 50MB, 2 min max)
                  </p>
                </div>

                {formData.files.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium">Selected Files:</h4>
                    {formData.files.map((file, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm bg-muted p-2 rounded">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span>{file.name}</span>
                        <span className="text-muted-foreground">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Terms & Conditions */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <Checkbox
                    id="terms"
                    checked={formData.termsAccepted}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, termsAccepted: checked as boolean }))}
                  />
                  <div>
                    <Label htmlFor="terms" className="text-sm cursor-pointer">
                      I agree to the Terms & Conditions and Privacy Policy *
                    </Label>
                    <p className="text-xs text-muted-foreground mt-1">
                      By submitting, you grant permission for your content to be displayed on this website 
                      and promotional materials. All submissions will be reviewed before publication.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                variant="festival" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Upload className="h-4 w-4 mr-2" />
                    Submit My Entry
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card className="mt-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-medium text-primary mb-2">Need Help?</h4>
                <p className="text-sm text-muted-foreground">
                  If you encounter any issues while submitting your entry, please contact our support team 
                  at support@globalganeshutsav.com. We're here to help you share your celebration!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Submit;