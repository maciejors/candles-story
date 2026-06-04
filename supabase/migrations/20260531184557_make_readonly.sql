-- 1. Enable RLS on all tables
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE fragrances ENABLE ROW LEVEL SECURITY;
ALTER TABLE colors ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE tiered_pricing ENABLE ROW LEVEL SECURITY;
ALTER TABLE packaging_options ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_display_order ENABLE ROW LEVEL SECURITY;

-- 2. Create policies allowing public read-only access (SELECT only)
CREATE POLICY "Allow public read-only access" ON categories FOR SELECT USING (true);
CREATE POLICY "Allow public read-only access" ON fragrances FOR SELECT USING (true);
CREATE POLICY "Allow public read-only access" ON colors FOR SELECT USING (true);
CREATE POLICY "Allow public read-only access" ON products FOR SELECT USING (true);
CREATE POLICY "Allow public read-only access" ON tiered_pricing FOR SELECT USING (true);
CREATE POLICY "Allow public read-only access" ON packaging_options FOR SELECT USING (true);
CREATE POLICY "Allow public read-only access" ON product_display_order FOR SELECT USING (true);