
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const SubmissionSuccess = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-dark-bg flex items-center justify-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto">
          <Card className="bg-dark-surface border-dark-border text-center animate-fade-in">
            <CardHeader>
              <div className="mx-auto bg-cyan-soft p-3 rounded-full w-fit">
                <CheckCircle className="h-12 w-12 text-cyan" />
              </div>
              <CardTitle className="text-3xl font-display font-bold mt-6">Submission Received!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-dark-text-secondary">
                Thank you for filling the form. Please check your email for a confirmation and next steps.
              </p>
              <Button asChild size="lg" className="w-full bg-gradient-to-r from-cyan to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-dark-bg font-mono uppercase tracking-wide py-6">
                <Link to="/">Return to Homepage</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default SubmissionSuccess;
