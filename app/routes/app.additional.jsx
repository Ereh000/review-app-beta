import { useState } from 'react';
import {
  Card,
  Tabs,
  Button,
  Icon,
  Text,
  Box,
  Page,
} from '@shopify/polaris';
import { SearchIcon } from '@shopify/polaris-icons';

// Main Orders Page Component
export default function MainOrdersPage() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Page>
      <Card>
        {/* Tabs Navigation */}
        <TabsNavigation selected={selectedTab} setSelected={setSelectedTab} />

        {/* Filter Tabs */}
        <FilterTabs />

        {/* Empty State */}
        <EmptyStateComponent />
      </Card>
    </Page>
  );
}

// Tabs Navigation Component
function TabsNavigation({ selected, setSelected }) {
  const tabs = [
    { id: 'orders', content: 'Orders' },
    { id: 'emails', content: 'Emails' },
    { id: 'discount', content: 'Discount' },
  ];

  return <Tabs tabs={tabs} selected={selected} onSelect={setSelected} />;
}

// Filter Tabs Component
function FilterTabs() {
  const filters = ['All', 'Sent', 'Opened', 'Reviewed', 'Cancelled'];

  return (
    <Box display="flex" gap="4" padding="2">
      {filters.map((filter) => (
        <Button key={filter} plain>
          {filter} (0)
        </Button>
      ))}
    </Box>
  );
}

// Empty State Component
function EmptyStateComponent() {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '50px',
        background: '#f9fafb',
        borderRadius: '10px',
      }}
    >
      <Icon source={SearchIcon} color="subdued" />
      <Text variant="headingMd" as="p" fontWeight="bold" style={{ marginTop: '10px' }}>
        No orders found
      </Text>
      <Text variant="bodyMd" as="p" color="subdued">
        Try changing the filters or search term
      </Text>
    </div>
  );
}
