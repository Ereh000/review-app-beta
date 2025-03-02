import {
  Box,
  Button,
  Card,
  Icon,
  Layout,
  Page,
  Text,
  TextContainer,
} from "@shopify/polaris";
import { ImportIcon, QuestionCircleIcon } from "@shopify/polaris-icons";

const ImportReview = () => {
  return (
    <section className="ImportReviewSection">
      <Page title="Import Reviews">
        <AliExpressImportSection />
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
            <div className="" style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}></div>
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
