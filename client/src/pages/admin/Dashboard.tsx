import { useState } from "react";
import { products, Product } from "@/lib/data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash2, Edit2, Save, X } from "lucide-react";

export default function AdminDashboard() {
  const [productList, setProductList] = useState<Product[]>(products);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState<Partial<Product>>({
    name: "",
    price: 0,
    category: "Smartphones",
    description: "",
    features: [],
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop"
  });

  const handleEdit = (product: Product) => {
    setEditingId(product.id);
    setFormData(product);
  };

  const handleSave = () => {
    if (editingId) {
      setProductList(prev => prev.map(p => p.id === editingId ? { ...p, ...formData } as Product : p));
      toast({ title: "Product Updated", description: "Changes have been saved to local state." });
    } else {
      const newProduct = {
        ...formData,
        id: `prod-${Date.now()}`,
        features: typeof formData.features === 'string' ? (formData.features as string).split(',').map(s => s.trim()) : formData.features
      } as Product;
      setProductList(prev => [newProduct, ...prev]);
      toast({ title: "Product Added", description: "New product added to the catalog." });
    }
    setEditingId(null);
    setIsAdding(false);
    setFormData({});
  };

  const handleDelete = (id: string) => {
    setProductList(prev => prev.filter(p => p.id !== id));
    toast({ title: "Product Removed", variant: "destructive" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-32 pb-20 container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-heading font-bold uppercase tracking-tighter">Admin Dashboard</h1>
          <Button 
            onClick={() => { setIsAdding(true); setEditingId(null); setFormData({ name: "", price: 0, category: "Smartphones", description: "", features: [], image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" }); }}
            className="bg-red-600 hover:bg-red-700 rounded-full"
          >
            <Plus className="mr-2 h-4 w-4" /> Add New Product
          </Button>
        </div>

        {(isAdding || editingId) && (
          <Card className="bg-[#111] border-white/10 text-white mb-12">
            <CardHeader>
              <CardTitle>{editingId ? "Edit Product" : "Add New Product"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Product Name</label>
                  <Input 
                    value={formData.name || ""} 
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="bg-black border-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Price (₦)</label>
                  <Input 
                    type="number"
                    value={formData.price || 0} 
                    onChange={e => setFormData({ ...formData, price: Number(e.target.value) })}
                    className="bg-black border-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Category</label>
                  <select 
                    value={formData.category} 
                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                    className="w-full h-10 rounded-md bg-black border border-white/10 px-3 text-sm"
                  >
                    <option>Smartphones</option>
                    <option>Laptops</option>
                    <option>Games & Consoles</option>
                    <option>Audio & Sound</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Image URL</label>
                  <Input 
                    value={formData.image || ""} 
                    onChange={e => setFormData({ ...formData, image: e.target.value })}
                    className="bg-black border-white/10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Description</label>
                <Textarea 
                  value={formData.description || ""} 
                  onChange={e => setFormData({ ...formData, description: e.target.value })}
                  className="bg-black border-white/10 h-24"
                />
              </div>
              <div className="flex gap-4">
                <Button onClick={handleSave} className="bg-red-600 hover:bg-red-700">
                  <Save className="mr-2 h-4 w-4" /> {editingId ? "Update Product" : "Save Product"}
                </Button>
                <Button variant="ghost" onClick={() => { setEditingId(null); setIsAdding(false); }}>
                  <X className="mr-2 h-4 w-4" /> Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 gap-4">
          {productList.map(product => (
            <div key={product.id} className="flex items-center gap-6 p-4 bg-[#111] rounded-xl border border-white/5 group">
              <img src={product.image} className="w-20 h-20 object-cover rounded-lg bg-[#1a1a1a]" alt={product.name} />
              <div className="flex-1">
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p className="text-red-500 font-bold">₦{product.price.toLocaleString()}</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">{product.category}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" onClick={() => handleEdit(product)} className="hover:bg-blue-600/20 hover:text-blue-500">
                  <Edit2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(product.id)} className="hover:bg-red-600/20 hover:text-red-500">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
