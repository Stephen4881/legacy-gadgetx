import { useRoute } from "wouter";
import { products, categories } from "@/lib/data";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import NotFound from "./not-found";

export default function Category() {
  const [match, params] = useRoute("/category/:id");
  const categoryId = params?.id;
  
  const category = categories.find(c => c.id === categoryId);
  if (!category && categoryId !== "iphone" && categoryId !== "audio" && categoryId !== "speakers" && categoryId !== "gaming" && categoryId !== "power") {
     // Check if it's a valid ID from our list
     return <NotFound />;
  }

  // Find the category name from the ID
  const categoryName = category?.name || categoryId?.charAt(0).toUpperCase() + categoryId?.slice(1) + " Accessories";
  
  const filteredProducts = products.filter(p => 
    p.category.toLowerCase().includes(categoryId?.toLowerCase() || "")
  );

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">{categoryName}</h1>
            <p className="text-muted-foreground text-lg">Premium essentials for your daily setup.</p>
          </div>
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group flex flex-col">
                  <Link href={`/product/${product.id}`}>
                    <a className="block relative aspect-square overflow-hidden rounded-xl bg-white mb-4">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </a>
                  </Link>
                  <div className="flex-1 flex flex-col">
                    <Link href={`/product/${product.id}`}>
                      <a className="font-heading font-medium text-lg mb-1 hover:text-primary transition-colors">
                        {product.name}
                      </a>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-4">{product.category}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="font-semibold">${product.price.toFixed(2)}</span>
                      <Button variant="outline" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity rounded-full">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-xl text-muted-foreground">No products found in this category.</p>
              <Link href="/shop">
                <Button className="mt-8 rounded-full">Browse All Products</Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
