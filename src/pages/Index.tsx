import ProductHeader from "@/components/ProductHeader";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ProductHeader />
      
      {/* Additional content can go here */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Meer informatie over hypothecair krediet
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ontdek alle mogelijkheden voor uw woonproject met onze professionele begeleiding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
