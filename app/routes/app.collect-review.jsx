import React, { useCallback, useState } from 'react';
import {
  Tabs,
  LegacyCard,
  LegacyTabs,
  Icon,
  Text,
  EmptyState,
  Button,
  InlineStack,
  Box,
  Page,
  Banner,
  Badge,
  Card,
  Avatar,
  Link,
  Grid,
  TextContainer,
  Divider,
  BlockStack,
} from '@shopify/polaris';
import { SearchIcon, FilterIcon, PlayIcon, NotificationIcon, EditIcon, StoreIcon, CalendarCheckIcon } from '@shopify/polaris-icons';

// Main Orders Section Component
export default function OrdersSection() {
  const [selected, setSelected] = useState(0);
  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );
  // console.log('selected', selected)

  return (
    <div>
      <Page title='Collect Reviews'>
        <TabsNavigation selected={selected} setSelected={handleTabChange} />
        {selected === 0 ? (
          <LegacyCard>
            <div className="">
              <OrderStatusTabs />
              <EmptyOrdersState />
            </div>
          </LegacyCard>
        ) : selected === 1 ? (
          <EmailSectionMain />
        ) : (
          <div className="">
            <StatsCard />
            <br/>
            <OfferDiscountCard />
          </div>
        )}
      </Page>
    </div>
  );
}

// Tabs Navigation Component
function TabsNavigation({ selected, setSelected }) {
  const tabs = [
    { id: 'orders', content: 'Orders', },
    { id: 'emails', content: 'Emails', },
    { id: 'discount', content: 'Discount' },
  ];

  return <Tabs tabs={tabs} selected={selected} onSelect={setSelected} />;
}

// Order Status Tabs Component
export function OrderStatusTabs() {
  const [selected, setSelected] = useState(0);

  const tabs = [
    {
      id: 'all-orders',
      content: 'All (0)',
      accessibilityLabel: 'All orders',
      panelID: 'all-orders-panel',
    },
    {
      id: 'sent-orders',
      content: 'Sent (0)',
      accessibilityLabel: 'Sent orders',
      panelID: 'sent-orders-panel',
    },
    {
      id: 'opened-orders',
      content: 'Opened (0)',
      accessibilityLabel: 'Opened orders',
      panelID: 'opened-orders-panel',
    },
    {
      id: 'reviewed-orders',
      content: 'Reviewed (0)',
      accessibilityLabel: 'Reviewed orders',
      panelID: 'reviewed-orders-panel',
    },
    {
      id: 'cancelled-orders',
      content: 'Cancelled (0)',
      accessibilityLabel: 'Cancelled orders',
      panelID: 'cancelled-orders-panel',
    },
  ];

  return (
    <Box paddingBlockStart="3" paddingBlockEnd="3" paddingInlineStart="3" paddingInlineEnd="3">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <LegacyTabs tabs={tabs} selected={selected} onSelect={setSelected} />
        <Button
          icon={FilterIcon}
          accessibilityLabel="Filter"
          variant="tertiary"
        />
      </div>
    </Box>
  );
}

// Empty Orders State Component
export function EmptyOrdersState() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 0',
      textAlign: 'center'
    }}>
      <div style={{
        backgroundColor: '#F6F6F7',
        borderRadius: '50%',
        width: '64px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '16px'
      }}>
        <Icon source={SearchIcon} color="subdued" />
      </div>
      <Text as="h2" variant="headingLg">Noo orders found</Text>
      <Box paddingBlockStart="3">
        <Text as="p" variant="bodyMd" color="subdued">Try changing the filters or search term</Text>
      </Box>
    </div>
  );
}

export function EmailSettings() {
  return (
    <Box display="flex" gap="4">
      {/* Emails Section */}
      <Card sectioned title="Emails">
        {/* Banner for Email Limit */}
        <Banner title="Email Sending Limit" status="warning">
          The free plan allows up to 50 emails per month. <a href="#">Upgrade your plan</a>
        </Banner>

        {/* Email Options */}
        <Box display="grid" gap="4" paddingBlockStart="4">
          <EmailOption
            icon={PlayIcon}
            title="Review request"
            description="Encourage customers to leave a review"
          />
          <EmailOption
            icon={NotificationIcon}
            title="Review reminder"
            description="Remind customers to leave a review"
          />
        </Box>
      </Card>
    </Box>
  );
}

// Reusable Email Option Component
function EmailOption({ icon, title, description }) {
  return (
    <Box display="flex" alignItems="center" gap="3" padding="3" borderRadius="3" background="bg-surface-secondary">
      <Icon source={icon} color="base" />
      <Box flex="1">
        <Text fontWeight="bold">{title}</Text>
        <Text color="subdued">{description}</Text>
      </Box>
      <Badge status="success">On</Badge>
      <Button size="slim">Turn off</Button>
      <Button size="slim">Customize</Button>
    </Box>
  );
}


// Email Section Component
export function EmailsSection() {
  return (
    <Card>
      <div style={{ padding: '16px' }}>
        <h3>Emails</h3>
        <div style={{ backgroundColor: '#fff9f4', padding: '16px', borderRadius: '4px', marginBottom: '16px' }}>
          <span style={{ color: '#e07a5f', fontWeight: 'bold' }}>Email Sending Limit</span>
          <br />
          The free plan allows up to 50 emails per month.{' '}
          <Link url="#">Upgrade your plan</Link>
        </div>

        {/* Review Request */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <Button plain onClick={() => { }}>
            <img src="/path/to/icon.svg" alt="Icon" style={{ width: '32px', height: '32px' }} />
          </Button>
          <div style={{ flex: 1, marginLeft: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <strong>Review request</strong>
              <Badge status="success" style={{ marginLeft: '8px' }}>On</Badge>
            </div>
            <div style={{ color: '#637381', fontSize: '14px' }}>Encourage customers to leave a review</div>
          </div>
          <div>
            <Button>Turn off</Button>
            <Button>Customize</Button>
          </div>
        </div>

        {/* Review Reminder */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button plain onClick={() => { }}>
            <img src="/path/to/icon.svg" alt="Icon" style={{ width: '32px', height: '32px' }} />
          </Button>
          <div style={{ flex: 1, marginLeft: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <strong>Review reminder</strong>
              <Badge status="success" style={{ marginLeft: '8px' }}>On</Badge>
            </div>
            <div style={{ color: '#637381', fontSize: '14px' }}>Remind customers to leave a review</div>
          </div>
          <div>
            <Button>Turn off</Button>
            <Button>Customize</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
export function SenderSection() {
  return (
    <Card sectioned title="Sender">
      <div className="" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text fontWeight='semibold'>Sender</Text>
        {/* Edit Button */}
        <Button plain icon={EditIcon} />
      </div>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        {/* Sender Details */}
        <Box display="flex" alignItems="center" gap="3">
          <div className="" style={{ display: 'flex', gap: '10px' }}>
            <Avatar size="xl" icon={StoreIcon} />
            <Box>
              <Text fontWeight="bold">Anikard</Text>
              <Text color="subdued">erehuchiha00@gmail.com</Text>
            </Box>
          </div>
        </Box>

      </Box>
    </Card>
  );
}
export function EmailSectionMain() {
  return (
    <Grid>
      <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 4, lg: 8, xl: 8 }}>
        <EmailsSection />
      </Grid.Cell>
      <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 4, lg: 4, xl: 4 }}>
        <SenderSection />
      </Grid.Cell>
    </Grid>
  )
}

// Discount Section Component
export function StatsCard() {
  return (
    <>
      <Card>
        <BlockStack gap="500">
          <div className="" style={{ display: 'flex', flex: 1, flexDirection: 'row', gap: 0, alignItems: 'center' }}>
            {/* <Icon source={CalendarCheckIcon} style={{ marginRight: '8px' }} /> */}
            <div className="" style={{ flex: 0.5, display: 'flex', gap: '4px', alignItems: 'center' }}>
              <div className="" style={{ width: '1.6rem' }}>
                <CalendarCheckIcon />
              </div>
              <span style={{ color: '#637381', fontSize: '12px' }}>30 days</span>
            </div>
            {/* <Divider /> */}
            <div style={{ flex: 1, borderLeft: '1px solid #ccc', paddingLeft: '10px' }}>
              <span style={{ color: '#637381', fontSize: '12px' }}>Granted</span>
              <br />
              <span style={{ fontSize: '20px' }}>0</span>
            </div>
            {/* <Divider borderColor="border" /> */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', borderLeft: '1px solid #ccc', paddingLeft: '10px' }}>
              <div>
                <strong>Redeemed</strong>
                <br />
                <span style={{ fontSize: '20px' }}>0</span>
              </div>
            </div>
            {/* <Divider borderColor="border-inverse" /> */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', borderLeft: '1px solid #ccc', paddingLeft: '10px' }}>
              <div>
                <strong>Redeemed</strong>
                <br />
                <span style={{ fontSize: '20px' }}>0</span>
              </div>
            </div>
            {/* <Divider borderColor="transparent" /> */}
          </div>
        </BlockStack>
      </Card>
    </>
  );
}
export function OfferDiscountCard() {
  return (
    <Card>
      <div style={{ padding: '16px', display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <TextContainer>
            <strong>Offer discount for reviews</strong>
            <p>Incentivize customers to leave reviews by offering discounts for their next purchase</p>
          </TextContainer>
          {/* <Toggle
            checked={false}
            onChange={() => { }}
            labelOn="On"
            labelOff="Off"
            disabled={false}
          /> */}
        </div>
        <img src="https://audien.ai/assets/discount-7ea94159.png" alt="Image" style={{ width: '300px', height: 'auto', marginLeft: '16px' }} />
      </div>
    </Card>
  );
}