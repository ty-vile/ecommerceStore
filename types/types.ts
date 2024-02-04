// ENUM FOR USER
enum Role {
  ADMIN = "ADMIN",
  VIEWER = "VIEWER",
}

interface Account {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string;
  access_token?: string;
  expires_at?: number;
  token_type?: string;
  scope?: string;
  id_token?: string;
  session_state?: string;
  user: User;
}

interface Session {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Date;
  user: User;
}

interface User {
  id: string;
  role: Role;
  name?: string;
  email?: string;
  phone?: string;
  image?: string;
  hashedPassword?: string;
  createdAt: Date;
  updatedAt: Date;
  products: Product[];
  accounts: Account[];
  sessions: Session[];
}

interface Product {
  id: string;
  userId: string;
  user: User;
  name: string;
  description: string;
  isArchived: boolean;
  createdAt: Date;
  updatedAt: Date;
  categories: CategoriesToProducts[];
  sku: ProductSku[];
}

interface ProductSku {
  id: string;
  sku: string;
  productId: string;
  product: Product;
  quantity: number;
  productImage: ProductImage[];
  productAttributeSku: ProductAttributeSku[];
  price: ProductSkuPrice[];
  isDefault: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface ProductSkuPrice {
  id: string;
  skuId: string;
  price: number;
  sku: ProductSku;
  createdAt: Date;
}

interface ProductAttribute {
  id: string;
  name: string;
  productAttributeValues: ProductAttributeValue[];
}

interface ProductAttributeValue {
  id: string;
  name: string;
  hexCode?: string;
  productAttributeId: string;
  productAttribute: ProductAttribute;
  productAttributeSku: ProductAttributeSku[];
}

interface ProductAttributeSku {
  skuId: string;
  sku: ProductSku;
  attributeValueId: string;
  attribute: ProductAttributeValue;
  comment?: string;
}

interface ProductImage {
  id: string;
  url: string;
  productSkuId: string;
  productSku: ProductSku;
}

interface Category {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  products: CategoriesToProducts[];
}

interface CategoriesToProducts {
  product: Product;
  productId: string;
  category: Category;
  categoryId: string;
  createdAt: Date;
  createdBy: string;
}

export type {
  Role,
  Account,
  Session,
  User,
  Product,
  ProductSku,
  ProductSkuPrice,
  ProductAttribute,
  ProductAttributeValue,
  ProductAttributeSku,
  ProductImage,
  Category,
  CategoriesToProducts,
};
