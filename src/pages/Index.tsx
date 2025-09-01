import Navbar from "@/components/Navbar";
import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";
import wellnessBackground from "@/assets/wellness-background.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-soft">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-10 z-0"
        style={{ backgroundImage: `url(${wellnessBackground})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-1 flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-md">
            <SignupForm />
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
