import { storeImages } from "@/lib/data";

export function BrandValues() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-8">
              Why Legacy Gadgets?
            </h2>
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p>
                In a world of disposable tech, we choose permanence.
              </p>
              <p>
                Every product in our collection is curated not just for how it looks, but for how it lasts. 
                We believe your accessories should be as reliable as the devices they enhance.
              </p>
              <p>
                Quality, durability, and timeless design aren't just features—they are our standard.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden mt-12">
              <img src={storeImages.open} alt="We are open" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img src={storeImages.front} alt="Legacy Gadgets Store Front" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
