import { supabase } from '../config';
import type Product from '$lib/models/Product';

export async function fetchAllProducts(): Promise<Product[]> {
	const { data, error } = await supabase
		.from('product_display_order')
		.select(
			`
      sort_order,
      is_visible,
      products (
        id,
        name,
        category_id,
        weight_grams,
        base_price,
        height_cm,
        width_cm,
        diameter_cm,
        length_cm,
        customization_allowed,
        description,
        categories (
          id,
          name
        ),
        tiered_pricing (
          min_quantity,
          max_quantity,
          unit_price
        ),
        packaging_options (
          type,
          additional_cost
        )
      )
    `
		)
		.eq('is_visible', true)
		.order('sort_order', { ascending: true });

	if (error) {
		console.error('Error fetching products from the database:', error);
		throw error;
	}

	return (data || [])
		.map((item) => {
			const p = item.products;
			if (!p) return null;

			const { data: mainPictureUrlData } = supabase.storage
				.from('default')
				.getPublicUrl(`products/${p.id}/1_720.png`);
			const mainPictureUrl = mainPictureUrlData.publicUrl;

			const dimensions = {
				heightCm: p.height_cm ? Number(p.height_cm) : undefined,
				widthCm: p.width_cm ? Number(p.width_cm) : undefined,
				diameterCm: p.diameter_cm ? Number(p.diameter_cm) : undefined,
				lengthCm: p.length_cm ? Number(p.length_cm) : undefined,
			};

			return {
				id: p.id,
				name: p.name,
				categoryId: p.category_id,
				category: {
					id: p.categories.id,
					name: p.categories.name,
				},
				weightGrams: p.weight_grams ?? undefined,
				basePrice: p.base_price ? Number(p.base_price) : undefined,
				customizationAllowed: p.customization_allowed,
				description: p.description ?? undefined,

				mainPictureUrl,
				dimensions,

				tieredPricing:
					p.tiered_pricing && p.tiered_pricing.length > 0
						? p.tiered_pricing.map((t) => ({
								minQuantity: t.min_quantity,
								maxQuantity: t.max_quantity ?? undefined,
								unitPrice: Number(t.unit_price),
							}))
						: undefined,

				packagingOptions:
					p.packaging_options && p.packaging_options.length > 0
						? p.packaging_options.map((pkg) => ({
								type: (pkg.type as 'tulle' | 'cellophane' | 'none') || 'none',
								additionalCost: Number(pkg.additional_cost),
							}))
						: undefined,
			} as unknown as Product;
		})
		.filter((p): p is Product => p !== null);
}
