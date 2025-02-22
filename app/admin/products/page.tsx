import ProductTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";


async function getProducts() {
  const products = await prisma.product.findMany({
    take: 10,
    include: {
      category: true,
    },
  });

  return products;
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>;

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <Heading>Administrar productos</Heading>

      <ProductTable products={products} />
    </>
  );
}