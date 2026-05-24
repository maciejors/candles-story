import type Category from './Category';

export interface Dimensions {
	heightCm?: number;
	widthCm?: number;
	diameterCm?: number;
	lengthCm?: number;
}

export interface TieredPrice {
	minQuantity: number;
	maxQuantity?: number;
	unitPrice: number;
}

export interface PackagingOption {
	type: 'tulle' | 'cellophane' | 'none';
	additionalCost: number;
}

export default interface Product {
	id: number;
	name: string;
	categoryId: number;
	category: Category;
	weightGrams?: number;
	basePrice?: number;
	dimensions?: Dimensions;
	tieredPricing?: TieredPrice[];
	packagingOptions?: PackagingOption[];
	customizationAllowed: boolean;
	description?: string;
}
