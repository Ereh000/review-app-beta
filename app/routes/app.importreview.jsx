import {
  Banner,
  Box,
  Button,
  Card,
  DataTable,
  Icon,
  Layout,
  Page,
  ResourceItem,
  ResourceList,
  Text,
  TextContainer,
  TextField,
  Thumbnail,
} from "@shopify/polaris";
import {
  AlertTriangleIcon,
  ImportIcon,
  PageDownIcon,
  QuestionCircleIcon,
  SearchIcon,
  ViewIcon,
  ViewportTallIcon,
} from "@shopify/polaris-icons";
import { useState } from "react";

const ImportReview = () => {
  return (
    <section className="ImportReviewSection">
      <Page title="Import Reviews ">
        <AliExpressImportSection />
        <br />
        <UpgradeBanner />
        <br />
        <ProductReviewTable />
        <br />
      </Page>
    </section>
  );
};

export default ImportReview;

export function AliExpressImportSection() {
  return (
    <Box paddingBlockStart="4">
      <Card>
        <Box padding="4">
          {/* Section Title */}
          <Text as="h3" variant="headingMd" fontWeight="bold">
            AliExpress One-Click Import
          </Text>

          {/* Import Button */}
          <div className="" style={{ width: "10rem" }}>
            <Box paddingBlockStart="200">
              <Button fullWidth primary icon={ImportIcon}>
                Import to Audien
              </Button>
            </Box>
          </div>

          {/* Instructions */}
          <Box paddingBlockStart="300">
            <div
              className=""
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            ></div>
            <div
              className=""
              style={{ display: "flex", alignItems: "center", gap: ".3rem" }}
            >
              <Text as="p" fontWeight="">
                1. Drag the "Import to Audien" button to your bookmarks bar{" "}
              </Text>
              <div className="" style={{ width: "1.2rem" }}>
                <QuestionCircleIcon />
              </div>
            </div>
            <Text as="p" fontWeight="">
              2. Go to the AliExpress product page
            </Text>
            <Text as="p" fontWeight="">
              3. Click the "Import to Audien" button on the bookmarks bar
            </Text>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export function UpgradeBanner() {
  return (
    <Box paddingBlockStart="4">
      <Banner
        title="Upgrade to Show More Reviews"
        status="warning"
        icon={AlertTriangleIcon}
      >
        <Text as="p">
          You've hit the limit of 6 reviews per product. To display more,
          consider upgrading your plan.
        </Text>
        <Box paddingBlockStart="2">
          <Button primary>Upgrade</Button>
        </Box>
      </Banner>
    </Box>
  );
}

// ProductReviewTable Component
export function ProductReviewTable() {
  const [searchValue, setSearchValue] = useState("");

  const allProducts = [
    {
      id: "1",
      title: "2XM Optical Doubler",
      image: "",
      rating: 4.9,
      reviews: "12 / 12",
      lastUpdated: "Jan 16, 2025",
    },
    {  
      id: "2",
      title: "Binocular - B1.2 - 8x42",
      image: "https://via.placeholder.com/50", // Replace with actual image URL
      rating: 4.9,
      reviews: "12 / 12",
      lastUpdated: "Jan 16, 2025",
    },
    {
      id: "3",
      title: "Binocular - C.1 - 12x42",
      image: "https://via.placeholder.com/50",
      rating: 0,
      reviews: "0",
      lastUpdated: "-",
    },
  ];

  // Filter products based on search input
  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  // Format table rows
  const rows = filteredProducts.map((item) => [
    <div className="rowWrapper" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {item.image ? (
        <Thumbnail source={item.image} size="small" alt={item.title} />
      ) : (
        <div
          style={{
            width: "40px",
            height: "40px",
            background: "#f0f0f0",
            borderRadius: "5px",
          }}
        />
      )}
      <Text>{item.title}</Text>
    </div>,
    <Text>
      {"⭐".repeat(Math.round(item.rating)) || "☆"} {item.rating}
    </Text>,
    <Text>{item.reviews}</Text>,
    <Text>{item.lastUpdated}</Text>,
    <div style={{ display: "flex", gap: "10px" }}>
      <Button icon={PageDownIcon}>Import from Ali</Button>
      <Button icon={ViewportTallIcon} />
    </div>,
  ]);

  return (
    <Card>
      {/* Search Field */}
      <div style={{ padding: "10px" }}>
        <TextField
          value={searchValue}
          onChange={setSearchValue}
          placeholder="Search products..."
          prefix={<Icon source={SearchIcon} />}
          autoComplete="off"
        />
      </div>

      {/* Data Table */}
      <DataTable
        columnContentTypes={["text", "numeric", "numeric", "text", "text"]}
        headings={[
          "Product",
          "Ratings",
          "Published / Total reviews",
          "Last updated",
          "Actions",
        ]}
        rows={rows.length > 0 ? rows : [["No products found", "", "", "", ""]]}
      />
    </Card>
  );
}
