import {
  BlockStack,
  Box,
  Button,
  ButtonGroup,
  Card,
  ColorPicker,
  Grid,
  InlineStack,
  Popover,
  ProgressBar,
  Icon,
  RadioButton,
  Select,
  Text,
  TextField,
  Thumbnail,
  Divider,
  Checkbox,
} from "@shopify/polaris";
import {
  AlertDiamondIcon,
  HeartIcon,
  LayoutHeaderIcon,
  NatureIcon,
  StarFilledIcon,
  StarIcon,
  TextInColumnsIcon,
} from "@shopify/polaris-icons";
import { useCallback, useState } from "react";

const CustomizeReviewList = () => {
  const [layout, setLayout] = useState("grid");
  const [color, setColor] = useState("light");
  const [reviewStyle, setReviewStyle] = useState("multiple-steps");
  const [sorting, setSorting] = useState("featured");

  const handleLayoutChange = useCallback((value) => setLayout(value), []);
  const handleColorChange = useCallback((value) => setColor(value), []);

  return (
    <section className="customizeReviewListSection">
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <Card title="Appearance" sectioned>
            {/* Layout Selection */}
            <div style={{ marginBottom: "16px" }}>
              <ButtonGroup >
                <Button
                  icon={TextInColumnsIcon}
                  pressed={layout === "grid"}
                  onClick={() => handleLayoutChange("grid")}
                >
                  Grid
                </Button>
                <Button
                  icon={LayoutHeaderIcon}
                  pressed={layout === "list"}
                  onClick={() => handleLayoutChange("list")}
                >
                  List
                </Button>
              </ButtonGroup>
            </div>

            {/* Color Selection */}
            <div style={{ marginBottom: "16px" }}>
              <RadioButton
                label="Light"
                checked={color === "light"}
                onChange={() => handleColorChange("light")}
              />
              <p
                style={{
                  marginLeft: "24px",
                  fontSize: "12px",
                  color: "#6d7175",
                }}
              >
                Better for themes with bright color
              </p>

              <RadioButton
                label="Dark"
                checked={color === "dark"}
                onChange={() => handleColorChange("dark")}
              />
              <p
                style={{
                  marginLeft: "24px",
                  fontSize: "12px",
                  color: "#6d7175",
                }}
              >
                Better for themes with dark color
              </p>

              <RadioButton
                label="Custom"
                checked={color === "custom"}
                onChange={() => handleColorChange("custom")}
              />
            </div>

            {/* Dropdowns */}
            <div style={{ marginBottom: "16px" }}>
              <Select
                label="Write a review style"
                options={[
                  { label: "Multiple steps", value: "multiple-steps" },
                  { label: "Single step", value: "single-step" },
                ]}
                value={reviewStyle}
                onChange={setReviewStyle}
              />
            </div>

            <div>
              <Select
                label="Default sorting"
                options={[
                  { label: "Featured", value: "featured" },
                  { label: "Most recent", value: "recent" },
                ]}
                value={sorting}
                onChange={setSorting}
              />
            </div>
          </Card>
          <Divider />
          <br />
          <RatingSettings />
          <br />
          <ButtonSettings />
          <br />
          <ReviewContentSettings />
          <br />
          <UpsellAndCSSSettings />
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <CustomerReviews />
        </Grid.Cell>
      </Grid>
    </section>
  );
};

export default CustomizeReviewList;

export function CustomerReviews() {
  return (
    <Card title="Preview" sectioned>
      <Card></Card>
    </Card>
  );
}

// RatingSettings Component
export function RatingSettings() {
  const [bgColor, setBgColor] = useState("#303030");
  const [textColor, setTextColor] = useState("#FFFFFF");
  const [popoverActive, setPopoverActive] = useState(false);
  const [popoverTextActive, setPopoverTextActive] = useState(false);
  const [cornerRadius, setCornerRadius] = useState("Rounded");

  const togglePopover = useCallback(
    () => setPopoverActive((active) => !active),
    [],
  );
  const toggleTextPopover = useCallback(
    () => setPopoverTextActive((active) => !active),
    [],
  );
  return (
    <Card padding="400">
      <Box padding="4">
        <Text as="h3" variant="headingMd" fontWeight="bold">
          Rating
        </Text>
        <Text as="p">Rating icon shape</Text>
        <div
          style={{ width: "40%", margin: ".4rem 0", display: "flex" }}
          className="starIconWrapper tw-flex tw-items-center tw-gap-1 tw-justify-start tw-w-4/6"
        >
          <Icon source={StarFilledIcon} color="warning" />
          <Icon source={StarIcon} color="subdued" />
          <Icon source={StarIcon} color="subdued" />
          <Icon source={StarIcon} color="subdued" />
          <Icon source={StarIcon} color="subdued" />
        </div>

        <Box paddingBlockStart="200">
          <Text as="p">Rating icon color</Text>
          {/* <TextField
            prefix={
              <Box
                as="span"
                background="warning"
                width="6"
                height="6"
                borderRadius="full"
              />
            }
            value="#FFB800"
          /> */}
          <Popover
            active={popoverActive}
            activator={
              <Button onClick={togglePopover}>
                <Box
                  as="span"
                  display="inlineBlock"
                  background="surface"
                  width="5"
                  height="5"
                  borderRadius="full"
                  marginInlineEnd="2"
                  style={{ backgroundColor: bgColor }}
                />
                {bgColor}
              </Button>
            }
            onClose={togglePopover}
          >
            <ColorPicker
              onChange={(color) => setBgColor(color)}
              color={bgColor}
            />
          </Popover>
        </Box>
        <div className="!tw-mt-2"> </div>
        <Box paddingBlockStart="200">
          <Text as="p">Rating icon color</Text>
          <Popover
            active={popoverTextActive}
            activator={
              <Button onClick={togglePopover}>
                <Box
                  as="span"
                  display="inlineBlock"
                  background="surface"
                  width="5"
                  height="5"
                  borderRadius="full"
                  marginInlineEnd="2"
                  style={{ backgroundColor: bgColor }}
                />
                {bgColor}
              </Button>
            }
            onClose={toggleTextPopover}
          >
            <ColorPicker
              onChange={(color) => setTextColor(color)}
              color={textColor}
            />
          </Popover>
        </Box>
      </Box>
    </Card>
  );
}

// ButtonSettings Component
export function ButtonSettings() {
  const [bgColor, setBgColor] = useState("#303030");
  const [textColor, setTextColor] = useState("#FFFFFF");
  const [popoverActive, setPopoverActive] = useState(false);
  const [popoverTextActive, setPopoverTextActive] = useState(false);
  const [cornerRadius, setCornerRadius] = useState("Rounded");

  const togglePopover = useCallback(
    () => setPopoverActive((active) => !active),
    [],
  );
  const toggleTextPopover = useCallback(
    () => setPopoverTextActive((active) => !active),
    [],
  );

  return (
    <Card>
      <Box padding="4">
        <Text as="h3" variant="headingMd" fontWeight="bold">
          Button
        </Text>

        {/* Button Background */}
        <Box paddingBlockStart="200">
          <Text as="p">Button background</Text>
          <Popover
            active={popoverActive}
            activator={
              <Button onClick={togglePopover}>
                <Box
                  as="span"
                  display="inlineBlock"
                  background="surface"
                  width="5"
                  height="5"
                  borderRadius="full"
                  marginInlineEnd="2"
                  style={{ backgroundColor: bgColor }}
                />
                {bgColor}
              </Button>
            }
            onClose={togglePopover}
          >
            <ColorPicker
              onChange={(color) => setBgColor(color)}
              color={bgColor}
            />
          </Popover>
        </Box>

        {/* Button Text */}
        <Box paddingBlockStart="200">
          <Text as="p">Button text</Text>
          <Popover
            active={popoverTextActive}
            activator={
              <Button onClick={toggleTextPopover}>
                <Box
                  as="span"
                  display="inlineBlock"
                  background="surface"
                  width="5"
                  height="5"
                  borderRadius="full"
                  marginInlineEnd="2"
                  style={{ backgroundColor: textColor }}
                />
                {textColor}
              </Button>
            }
            onClose={toggleTextPopover}
          >
            <ColorPicker
              onChange={(color) => setTextColor(color)}
              color={textColor}
            />
          </Popover>
        </Box>

        {/* Corner Radius */}
        <Box paddingBlockStart="200">
          <Text as="p">Corner radius</Text>
          <Select
            options={["Rounded", "Sharp", "Pill"]}
            value={cornerRadius}
            onChange={setCornerRadius}
          />
        </Box>
      </Box>
    </Card>
  );
}

// Review Content Settings
export function ReviewContentSettings() {
  const [settings, setSettings] = useState({
    countryFlag: true,
    thumbUp: true,
    reviewDate: true,
    productVariant: true,
    writeReviewButton: true,
    reviewCount: "15",
    authorDisplay: "full",
  });

  const handleChange = (field) => (value) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card>
      <Box padding="4">
        <Text as="h3" variant="headingMd" fontWeight="bold">
          Review content
        </Text>

        <Box paddingBlockStart="200">
          <div
            className=""
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Checkbox
              label="Show reviewer country flag"
              checked={settings.countryFlag}
              onChange={handleChange("countryFlag")}
            />
            <Checkbox
              label="Show thumb up icon"
              checked={settings.thumbUp}
              onChange={handleChange("thumbUp")}
            />
            <Checkbox
              label="Show review date"
              checked={settings.reviewDate}
              onChange={handleChange("reviewDate")}
            />
            <Checkbox
              label="Show product variant"
              checked={settings.productVariant}
              onChange={handleChange("productVariant")}
            />
            <Checkbox
              label="Show “write a review” button"
              checked={settings.writeReviewButton}
              onChange={handleChange("writeReviewButton")}
            />
          </div>
        </Box>

        <Box paddingBlockStart="200">
          <Text as="p">Number of reviews before showing more</Text>
          <Select
            options={["5", "10", "15", "20", "25"]}
            value={settings.reviewCount}
            onChange={handleChange("reviewCount")}
          />
        </Box>

        <Box paddingBlockStart="200">
          <Text as="p">Author name display method</Text>
          <Select
            options={[
              { label: "Show full names (John Smith)", value: "full" },
              {
                label: "Show first name + initial (John S.)",
                value: "initial",
              },
              { label: "Show initials only (J. S.)", value: "initials" },
            ]}
            value={settings.authorDisplay}
            onChange={handleChange("authorDisplay")}
          />
        </Box>
      </Box>
    </Card>
  );
}

// Upsell/CrossSell & Cusrom Css Component
export function UpsellAndCSSSettings() {
  const [showUpsell, setShowUpsell] = useState(false);
  const [upsellInterval, setUpsellInterval] = useState("10");
  const [productSource, setProductSource] = useState("shopify");
  const [customCSS, setCustomCSS] = useState("");

  const productSourceOptions = [
    { label: "Recommendations by Shopify", value: "shopify" },
    { label: "Custom product selection", value: "custom" },
  ];

  return (
    <Box paddingBlockStart="4">
      {/* Upsell and Cross-sell Section */}
      <Card>
        <Box padding="4">
          <Text as="h3" variant="headingMd" fontWeight="bold">
            Upsell and cross sell
          </Text>
          <Text as="p">Display upsell product cards in the review list.</Text>
          <Checkbox
            label="Show"
            checked={showUpsell}
            onChange={setShowUpsell}
          />

          {showUpsell && (
            <Box paddingBlockStart="2">
              <Text as="p">Display a product upsell card every</Text>
              <TextField
                type="number"
                value={upsellInterval}
                onChange={setUpsellInterval}
                autoComplete="off"
                suffix="reviews"
              />

              <Box paddingBlockStart="2">
                <Text as="p">Products source</Text>
                <Select
                  options={productSourceOptions}
                  value={productSource}
                  onChange={setProductSource}
                />
              </Box>
            </Box>
          )}
        </Box>
      </Card>
      <br />
      {/* Custom CSS Section */}
      <Box paddingBlockStart="4">
        <Card>
          <Box padding="4">
            <Text as="h3" variant="headingMd" fontWeight="bold">
              Custom CSS
            </Text>
            <TextField
              label=""
              value={customCSS}
              onChange={setCustomCSS}
              multiline={3}
              autoComplete="off"
            />
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
