import { db } from './config';
import { collection, getDocs } from 'firebase/firestore';
import type { Product, Category, Color, Fragrance } from '$lib/models';

export async function fetchAllProducts(): Promise<Product[]> {
	try {
		const [productsSnapshot, categoriesSnapshot] = await Promise.all([
			getDocs(collection(db, 'products')),
			getDocs(collection(db, 'categories')),
		]);

		const categoryMap: Record<number, Category> = {};
		categoriesSnapshot.forEach((doc) => {
			categoryMap[parseInt(doc.id)] = doc.data() as Category;
		});

		const products: Product[] = [];
		productsSnapshot.forEach((doc) => {
			const productData = doc.data() as Omit<Product, 'id' | 'category'>;
			const categoryId = productData.categoryId;

			products.push({
				...productData,
				id: Number(doc.id),
				category: {
					id: categoryId,
					name: categoryMap[categoryId].name,
				},
			});
		});

		return products;
	} catch (error) {
		console.error('Error retrieving product catalog: ', error);
		throw error;
	}
}

export async function fetchAllColors(): Promise<Color[]> {
	try {
		const colorsSnapshot = await getDocs(collection(db, 'colors'));
		const colors: Color[] = [];

		colorsSnapshot.forEach((doc) => {
			colors.push({
				...(doc.data() as Omit<Color, 'id'>),
				id: parseInt(doc.id),
			});
		});

		return colors;
	} catch (error) {
		console.error('Error retrieving colors catalog: ', error);
		throw error;
	}
}

export async function fetchAllFragrances(): Promise<Fragrance[]> {
	try {
		const fragrancesSnapshot = await getDocs(collection(db, 'fragrances'));
		const fragrances: Fragrance[] = [];

		fragrancesSnapshot.forEach((doc) => {
			fragrances.push({
				...(doc.data() as Omit<Fragrance, 'id'>),
				id: parseInt(doc.id),
			});
		});

		return fragrances;
	} catch (error) {
		console.error('Error retrieving fragrances catalog: ', error);
		throw error;
	}
}
