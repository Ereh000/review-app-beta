import {
  Card,
  ProgressBar,
  Button,
  Text,
  Page,
  Collapsible,
  Grid,
  InlineStack,
  Divider,
  Link,
  Avatar,
  BlockStack,
  LegacyCard,
} from "@shopify/polaris";
import {
  ArrowRightIcon,
  CalendarIcon,
  PlusCircleIcon,
} from "@shopify/polaris-icons";
import { useState, useCallback } from "react";

import "../assets/output.css";
import Alert from "../components/Alert";

export default function SetupGuide() {
  // Collasible Logic
  const [expanded, setExpanded] = useState(true);
  const toggleExpanded = useCallback(() => setExpanded((prev) => !prev), []);


  return (
    <div className="dashboardPage">
      <Page title="Dashboard">
        <Grid>
          {/* Left Column */}
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 8, xl: 8 }}>
            <div className="leftColumn">
              <Grid>
                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 12, xl: 12 }}>
                  <Alert
                    title={"Remove Audien logo from the widgets"}
                    message={
                      "Contact us to verify your store in order to remove the branding from the widgets."
                    }
                  />
                </Grid.Cell>
                {/*  */}
                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 12, xl: 12 }}>
                  <Card title="Setup guide" sectioned>
                    <div className="tw-flex tw-justify-between">
                      <div className="">
                        <Text variant="headingMd">Setup guide</Text>
                        <p>All completed</p>
                      </div>

                      {/* Expand/Collapse Button */}
                      <div className="tw-flex tw-gap-2">
                        <Button
                          onClick={toggleExpanded}
                          variant="plain"
                          disclosure={expanded ? "up" : "down"}
                        ></Button>
                        <Button variant="plain" icon={PlusCircleIcon}></Button>
                      </div>
                    </div>
                    {/* Collapsible Section */}
                    <CollasibleBlock />
                    {/* Collapsible Section Ends */}
                  </Card>
                </Grid.Cell>
                {/*  */}
                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 12, xl: 12 }}>
                  <Last30Days />
                </Grid.Cell>
                {/*  */}
                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 12, xl: 12 }}>
                  <RatingDistribution />
                </Grid.Cell>
              </Grid>
            </div>
          </Grid.Cell>
          {/* right column */}
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 4, xl: 4 }}>
            <div className="rightColumn">
              <Grid>
                <Grid.Cell
                  columnSpan={{ xs: 6, sm: 12, md: 12, lg: 12, xl: 12 }}
                >
                  <Card>
                    <InlineStack align="space-between">
                      <Button variant="plain">
                        <div className="tw-flex tw-gap-2 tw-items-center !tw-text-black ">
                          <Text variant="bodyMd" fontWeight="bold">
                            Starter
                          </Text>
                          <div className="tw-w-4">
                            <ArrowRightIcon />
                          </div>
                        </div>
                      </Button>
                    </InlineStack>
                    <Text variant="bodySm" tone="subdued">
                      Rediving / Total
                    </Text>
                    <Text variant="bodyMd" fontWeight="bold">
                      50 / 50
                    </Text>
                    <ProgressBar progress={100} size="small" color="critical" />
                  </Card>
                </Grid.Cell>
              </Grid>
              {/*  */}
              <Grid.Cell columnSpan={{ xs: 6, sm: 12, md: 12, lg: 12, xl: 12 }}>
                <NeedHelp />
              </Grid.Cell>
              {/*  */}
              <Grid.Cell columnSpan={{ xs: 6, sm: 12, md: 12, lg: 12, xl: 12 }}>
                <UpdateLog />
              </Grid.Cell>
            </div>
          </Grid.Cell>
        </Grid>

        {/* Section One */}
        <section className="tw-mb-3"></section>
        {/* Section One Ends */}

        {/* Section Two */}
        <Grid></Grid>
        {/* Section Two Edns */}
        {/*  */}
        {/* Section Three */}
        <Divider borderColor="transparent" />
        <Grid></Grid>
        {/* Section Three Start */}
        {/* Section Four */}
        <Grid></Grid>

        {/* Section Four Start */}
      </Page>
    </div>
  );
}

export function CollasibleBlock() {
  // Collasible Logic
  const [expanded, setExpanded] = useState(true);
  const toggleExpanded = useCallback(() => setExpanded((prev) => !prev), []);
  return (
    <Collapsible open={expanded}>
      {/* Progress Bar */}
      <div className="" style={{ height: "1.6rem" }}>
        <div className="progress-bar-setup-guide tw-h-2 tw-w-full tw-bg-blue-950 !rounded-sm"></div>
      </div>
      <Divider />
      {/* Task List */}
      <details className="tw-mt-3 tw-mb-3">
        <summary>
          <div
            className="tw-flex tw-items-center !tw-gap-[.4rem]"
            style={{
              paddingLeft: "14px",
              paddingBottom: "0px",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "black",
                color: "white",
                borderRadius: "50%",
                fontSize: "14px",
              }}
            >
              ✓
            </span>
            {/* <Text>Enable App</Text> */}
            <Text variant="bodyMd" fontWeight="bold">
              Enable App
            </Text>
          </div>
        </summary>
        <div
          style={{ cursor: "pointer", padding: "0 20px" }}
          className="tw-items-center tw-gap-3 tw-mt-3 tw-mb-3"
        >
          <Card sectioned>
            <div
              style={{
                display: "flex",
                alignItems: "start",
                gap: "12px",
              }}
            >
              {/* Content Section */}
              <div style={{ flex: "1" }} className="!tw-pl-3">
                <Text variant="bodySm" tone="subdued">
                  Enable our app to see it visible to your storE.{" "}
                  <Link url="#">Learn more</Link>
                </Text>

                {/* Buttons */}
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    marginTop: "12px",
                    alignItems: "center",
                  }}
                >
                  <Button primary>Active app</Button>
                  <Link url="#" monochrome>
                    Refresh status
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </details>
      {/*  */}
      <details className="tw-mt-3 tw-mb-3">
        <summary>
          <div
            // onClick={() => setListOpen(!listOpen)}
            className="tw-flex tw-items-center !tw-gap-[.4rem]"
            style={{
              paddingLeft: "14px",
              paddingBottom: "0px",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "black",
                color: "white",
                borderRadius: "50%",
                fontSize: "14px",
              }}
            >
              ✓
            </span>
            {/* <Text>Enable App</Text> */}
            <Text variant="bodyMd" fontWeight="bold">
              Add star rating widget
            </Text>
          </div>
        </summary>
        <div
          style={{ cursor: "pointer", padding: "0 20px" }}
          className="tw-items-center tw-gap-3 tw-mt-3 tw-mb-3"
        >
          <Card sectioned>
            <div
              style={{
                display: "flex",
                //
                gap: "12px",
                alignItems: "center",
              }}
            >
              {/* Content Section */}
              <div style={{ flex: "1" }}>
                <Text variant="bodyMd" fontWeight="bold">
                  Add review list widget
                </Text>
                <Text variant="bodySm" tone="subdued">
                  Display review widgets on the product page.{" "}
                  <Link url="#">Learn more</Link>
                </Text>

                {/* Buttons */}
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    marginTop: "12px",
                  }}
                >
                  <Button primary> Add to theme </Button>
                  <Link url="#" monochrome>
                    Refresh status
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </details>
      {/*  */}
      <details className="tw-mt-3 tw-mb-3">
        <summary>
          <div
            // onClick={() => setListOpen(!listOpen)}
            className="tw-flex tw-items-center !tw-gap-[.4rem]"
            style={{
              paddingLeft: "14px",
              paddingBottom: "0px",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "black",
                color: "white",
                borderRadius: "50%",
                fontSize: "14px",
              }}
            >
              ✓
            </span>
            {/* <Text>Enable App</Text> */}
            <Text variant="bodyMd" fontWeight="bold">
              Add review list widget
            </Text>
          </div>
        </summary>
        <div
          style={{ cursor: "pointer", padding: "0 20px" }}
          className="tw-items-center tw-gap-3 tw-mt-3 tw-mb-3"
        >
          <Card sectioned>
            <div
              style={{
                display: "flex",
                //
                gap: "12px",
                alignItems: "center",
              }}
            >
              {/* Content Section */}
              <div style={{ flex: "1" }}>
                <Text variant="bodyMd" fontWeight="bold">
                  Add review list widget
                </Text>
                <Text variant="bodySm" tone="subdued">
                  Display review widgets on the product page.{" "}
                  <Link url="#">Learn more</Link>
                </Text>

                {/* Buttons */}
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    marginTop: "12px",
                  }}
                >
                  <Button primary> Add to theme </Button>
                  <Link url="#" monochrome>
                    Refresh status
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </details>
      {/*  */}
      <details className="tw-mt-3 tw-mb-3">
        <summary>
          <div
            // onClick={() => setListOpen(!listOpen)}
            className="tw-flex tw-items-center !tw-gap-[.4rem]"
            style={{
              paddingLeft: "14px",
              paddingBottom: "0px",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "black",
                color: "white",
                borderRadius: "50%",
                fontSize: "14px",
              }}
            >
              ✓
            </span>
            {/* <Text>Enable App</Text> */}
            <Text variant="bodyMd" fontWeight="bold">
              Import reviews
            </Text>
          </div>
        </summary>
        <div
          style={{ cursor: "pointer", padding: "0 20px" }}
          className="tw-items-center tw-gap-3 tw-mt-3 tw-mb-3"
        >
          <Card sectioned background="bg-surface-secondary">
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
              }}
            >
              {/* Content Section */}
              <div style={{ flex: "1" }}>
                <Text variant="bodyMd" fontWeight="bold">
                  Add review list widget
                </Text>
                <Text variant="bodySm" tone="subdued">
                  Display review widgets on the product page.{" "}
                  <Link url="#">Learn more</Link>
                </Text>

                {/* Buttons */}
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    marginTop: "12px",
                  }}
                >
                  <Button primary> Add to theme </Button>
                  <Link url="#" monochrome>
                    Refresh status
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </details>
    </Collapsible>
  );
}

export function NeedHelp() {
  return (
    <div className="tw-mt-4 tw-mb-4">
      <Card sectioned>
        {/* Title & Description */}
        <Text variant="bodyMd" fontWeight="bold">
          Need help?
        </Text>
        <Text variant="bodySm" tone="subdued">
          Along with comprehensive help docs, our team is ready to help whenever
          needed.
        </Text>

        {/* Avatar Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            margin: "12px 0",
          }}
          className="avatarIcon"
        >
          <Avatar
            customer
            size="small"
            source="https://randomuser.me/api/portraits/women/44.jpg"
          />
          <Avatar
            customer
            size="small"
            source="https://randomuser.me/api/portraits/men/45.jpg"
          />
          <Avatar
            customer
            size="small"
            source="https://randomuser.me/api/portraits/women/44.jpg"
          />
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "8px" }}>
          <Button icon={<span>💬</span>}>Contact us</Button>
          <Button>Help center</Button>
        </div>
      </Card>
    </div>
  );
}

export function Last30Days() {
  return (
    <div className="tw-mt-3">
      <LegacyCard sectioned>
        {/* Header */}
        <div className="tw-mb-3">
          {/* <Card>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              // marginBottom: "12px",
            }}
          >
            <div className="tw-w-5">
              <CalendarIcon />
            </div>
            <Text variant="bodyMd" fontWeight="bold">
              Last 30 days
            </Text>
          </div>
        </Card> */}
          <Button icon={CalendarIcon}>Last 30 Days</Button>
        </div>

        {/* Stats Container */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            // justifyContent: "space-between",
          }}
          className="statContainer"
        >
          <Card>
            {/* <BlockStack gap="200"> */}
            <Text as="h3" variant="headingSm" fontWeight="medium">
              Reviews collected
            </Text>
            <Text variant="bodyMd" fontWeight="bold">
              0
            </Text>
            {/* </BlockStack> */}
          </Card>
          <Card>
            <BlockStack gap="200">
              <Text as="h3" variant="headingSm" fontWeight="medium">
                Reviews collected
              </Text>
              <Text variant="bodyMd" fontWeight="bold">
                0
              </Text>
            </BlockStack>
          </Card>
          <Card>
            <BlockStack gap="200">
              <Text as="h3" variant="headingSm" fontWeight="medium">
                Reviews collected
              </Text>
              <Text variant="bodyMd" fontWeight="bold">
                0
              </Text>
            </BlockStack>
          </Card>
        </div>
      </LegacyCard>
    </div>
  );
}

export function RatingDistribution() {
  return (
    <Card sectioned>
      <InlineStack gap="4">
        <Text variant="headingMd" as="h3">
          Rating distribution
        </Text>

        <BlockStack align="space-between">
          <Text as="span">Total</Text>
          <Text as="span">0</Text>
        </BlockStack>

        {[5, 4, 3, 2, 1].map((stars) => (
          <BlockStack key={stars} align="space-between">
            <div style={{ width: "80px" }}>
              <Text as="span">{stars} stars</Text>
            </div>
            <div
              style={{
                flexGrow: 1,
                margin: "0 16px",
                height: "8px",
                backgroundColor: "#f4f6f8",
                borderRadius: "4px",
              }}
            />
            <Text as="span">0</Text>
          </BlockStack>
        ))}
      </InlineStack>
    </Card>
  );
}

export function UpdateLog() {
  const changeLogs = [
    {
      title: "Exciting New Features: Video Reviews and Cards Carousel",
      date: "2024-05-30 09:18:58",
      active: true,
    },
    {
      title:
        "Email/Review list customization, and some interaction optimization",
      date: "2024-03-15 15:43:09",
      active: false,
    },
    {
      title:
        "New style for Write a review, Pop-up customization, and SEO Rich Snippets",
      date: "2024-02-22 15:05:50",
      active: false,
    },
    {
      title: "Review popup, rating widget customization and more",
      date: "2024-01-24 12:07:35",
      active: false,
    },
    {
      title: "Translation feature for reviews",
      date: "2023-12-03 00:54:23",
      active: false,
    },
    {
      title: "Review list widget - homepage integration and customization",
      date: "2023-12-03 00:35:19",
      active: false,
    },
  ];
  return (
    <Card sectioned>
      {/* Title */}
      <Text variant="headingSm" fontWeight="bold">
        What's new from Audien
      </Text>
      <Text variant="bodyMd" fontWeight="bold" style={{ marginTop: "8px" }}>
        Change log
      </Text>

      {/* Log Items */}
      <div style={{ marginTop: "16px" }}>
        {changeLogs.map((log, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "8px",
              marginBottom: "12px",
            }}
          >
            {/* Bullet Icon */}
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: log.active ? "#2563EB" : "#D1D5DB",
                marginTop: "6px",
              }}
            />

            {/* Log Content */}
            <div>
              <Text
                variant="bodyMd"
                fontWeight={log.active ? "bold" : "regular"}
                color={log.active ? "blue" : "default"}
                as="p"
                style={{
                  textDecoration: log.active ? "underline" : "none",
                  cursor: "pointer",
                }}
              >
                {log.title}
              </Text>
              <Text variant="bodySm" tone="subdued">
                {log.date}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
