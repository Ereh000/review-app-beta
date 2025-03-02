import { json, useLoaderData } from "@remix-run/react";
import {
  ActionList,
  Button,
  ButtonGroup,
  Card,
  Link,
  Page,
  Popover,
  Text,
} from "@shopify/polaris";
import React, { useCallback, useState } from "react";

import { authenticate } from "../shopify.server";
import CustomizeReviewList from "../components/CustomizeReviewList";

export const loader = async ({ request }) => {
  const { admin } = await authenticate.admin(request);

  // Fetch Customizer PDP Page
  const response = await admin.graphql(
    `#graphql
      {
      themes(first: 1, roles: MAIN) {
        edges {
          node {
            id
          }
        }
      }
    }`,
  );
  const responseJson = await response.json();
  return json(responseJson);
};

const DisplayReviewPage = () => {
  const [CustomizeReviewListOpenn, setCustomizeReviewListOpenn] =
    useState(false);
  const CheckCustomizeOpen = () => {
    setCustomizeReviewListOpenn(!CustomizeReviewListOpenn);
  };

  return (
    <div className="displayReviewPage">
      {CustomizeReviewListOpenn ? (
        <Page
          title="Customize reviews list "
          backAction={{ content: "Products", onAction: CheckCustomizeOpen }}
          primaryAction={{ content: "Save" }}
          secondaryActions={[
            {
              content: "Edit Position",
              accessibilityLabel: "Secondary action label",
              onAction: () => alert("Edit Position"),
            },
            {
              content: "View on store",
              onAction: () => alert("View on your store action"),
            },
          ]}
        >
          <CustomizeReviewList />
        </Page>
      ) : (
        <>
          <Page title="Display reviews">
            <ReviewCard CheckCustomizeOpen={CheckCustomizeOpen} />
            <StarRating />
            <StarRating2 />
            <CardCarousel />
          </Page>
        </>
      )}
    </div>
  );
};

export default DisplayReviewPage;

export function ReviewCard({ CheckCustomizeOpen }) {
  // Customizer Redirect
  const themeData = useLoaderData();
  console.log("themeData->", themeData.data.themes.edges[0].node.id);
  const themeId = themeData.data.themes.edges[0].node.id;
  const shop = "zest-broke";
  const openCustomizer = () => {
    if (themeId) {
      const themeNumber = themeId.replace(
        "gid://shopify/OnlineStoreTheme/",
        "",
      ); // Extract numeric ID
      const url = `https://${shop}.myshopify.com/admin/themes/${themeNumber}/editor?template=product`;
      console.log(url);
      window.open(url, "_blank"); // Open in new tab
    } else {
      alert("Theme ID not available");
    }
  };

  const [popoverActive, setPopoverActive] = useState(false);
  const togglePopoverActive = () => {
    setPopoverActive(!popoverActive);
  };
  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      Add to theme
    </Button>
  );
  return (
    <div className="" style={{ marginBottom: "16px" }}>
      <Card>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "6px",
            position: "relative",
          }}
        >
          {/* Left Side - Text and Buttons */}
          <div style={{ flex: 1 }}>
            <Text variant="headingSm" fontWeight="bold">
              Review List
            </Text>
            <Text variant="bodyMd" tone="subdued" style={{ marginTop: "4px" }}>
              Collect and showcase your customer reviews on your product page.
            </Text>

            {/* Buttons */}
            <div className="" style={{ paddingTop: "10px" }}>
              <ButtonGroup>
                <div>
                  <Popover
                    active={popoverActive}
                    activator={activator}
                    autofocusTarget="first-node"
                    onClose={togglePopoverActive}
                  >
                    <ActionList
                      actionRole="menuitem"
                      items={[
                        {
                          content: "Add widget for 2.0 theme",
                          onAction: openCustomizer,
                        },
                        { content: "Add widget for Vintage theme" },
                      ]}
                    />
                  </Popover>
                </div>
                <Button onClick={CheckCustomizeOpen}>Customize</Button>
              </ButtonGroup>
            </div>
          </div>

          {/* Right Side - Image */}
          <div
            style={{
              width: "46%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <img
              src="https://audien.ai/assets/reviewList-49b4db49.png"
              alt="Review List Preview"
              style={{
                maxWidth: "100%",
                borderRadius: "4px",
                objectFit: "cover",
                height: "6rem",
              }}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

export function StarRating() {
  const [popoverActive, setPopoverActive] = useState(false);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      Add to theme
    </Button>
  );

  // const [CustomizeReviewListOpen, setCustomizeReviewListOpen] = useState(false);

  return (
    <div className="" style={{ marginBottom: "16px" }}>
      <Card>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "6px",
            position: "relative",
          }}
        >
          {/* Left Side - Text and Buttons */}
          <div style={{ flex: 1 }}>
            <Text variant="headingSm" fontWeight="bold">
              Star rating (Product page)
            </Text>
            <Text variant="bodyMd" tone="subdued" style={{ marginTop: "4px" }}>
              Display product ratings as stars on Product page
            </Text>

            {/* Buttons */}
            <div className="" style={{ paddingTop: "10px" }}>
              <ButtonGroup>
                <div>
                  <Popover
                    active={popoverActive}
                    activator={activator}
                    autofocusTarget="first-node"
                    onClose={togglePopoverActive}
                  >
                    <ActionList
                      actionRole="menuitem"
                      items={[
                        { content: "Add widget for 2.0 theme" },
                        { content: "Add widget for Vintage theme" },
                      ]}
                    />
                  </Popover>
                </div>
                <Button>Customize</Button>
              </ButtonGroup>
            </div>
          </div>

          {/* Right Side - Image */}
          <div
            style={{
              width: "46%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <img
              src="https://audien.ai/assets/reviewList-49b4db49.png"
              alt="Review List Preview"
              style={{
                maxWidth: "100%",
                borderRadius: "4px",
                objectFit: "cover",
                height: "6rem",
              }}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

export function StarRating2() {
  return (
    <div className="" style={{ marginBottom: "16px" }}>
      <Card>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "6px",
            position: "relative",
          }}
        >
          {/* Left Side - Text and Buttons */}
          <div style={{ flex: 1 }}>
            <Text variant="headingSm" fontWeight="bold">
              Star rating (Collection & Home page)
            </Text>
            <Text variant="bodyMd" tone="subdued" style={{ marginTop: "4px" }}>
              Display product ratings as stars on Collection & Home page.
              <Link> Learn more</Link>
            </Text>

            {/* Buttons */}
            <div className="" style={{ paddingTop: "10px" }}>
              <ButtonGroup>
                <Button>Enable</Button>
                <Button>Customize</Button>
              </ButtonGroup>
            </div>
          </div>

          {/* Right Side - Image */}
          <div
            style={{
              width: "46%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <img
              src="https://audien.ai/assets/reviewList-49b4db49.png"
              alt="Review List Preview"
              style={{
                maxWidth: "100%",
                borderRadius: "4px",
                objectFit: "cover",
                height: "6rem",
              }}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

export function CardCarousel() {
  return (
    <div className="" style={{ marginBottom: "16px" }}>
      <Card>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "6px",
            position: "relative",
          }}
        >
          {/* Left Side - Text and Buttons */}
          <div style={{ flex: 1 }}>
            <Text variant="headingSm" fontWeight="bold">
              Cards Carousel
            </Text>
            <Text variant="bodyMd" tone="subdued" style={{ marginTop: "4px" }}>
              Place a container on any page that displays a series of reviews as
              a slideshow.
            </Text>

            {/* Buttons */}
            <div className="" style={{ paddingTop: "10px" }}>
              <ButtonGroup>
                <Button>Add to theme</Button>
                <Button>View in store</Button>
              </ButtonGroup>
            </div>
          </div>

          {/* Right Side - Image */}
          <div
            style={{
              width: "46%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <img
              src="https://audien.ai/assets/homeRating-be1525d7.png"
              alt="Review List Preview"
              style={{
                maxWidth: "100%",
                borderRadius: "4px",
                objectFit: "cover",
                height: "6rem",
              }}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
