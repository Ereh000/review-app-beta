import React, { useState } from 'react';
import {
  LegacyCard,
  Tabs,
  TextField,
  Button,
  ButtonGroup,
  ResourceList,
  ResourceItem,
  Avatar,
  Badge,
  Filters,
  Icon,
  LegacyStack,
  Text,
  Checkbox,
  InlineStack,
  Tooltip,
  Page,
} from '@shopify/polaris';
import { ThumbsUpIcon, ReplayIcon, MenuHorizontalIcon } from '@shopify/polaris-icons';

export default function ManageReviewPage() {
  return (
    <div className='ManageReviewPage'>
      <Page>
        <ReviewsSection />
      </Page>
    </div>
  )
}

export function ReviewsSection() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [searchValue, setSearchValue] = useState('');

  const handleTabChange = (selectedTabIndex) => {
    setSelectedTab(selectedTabIndex);
  };

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  const renderItem = (item) => {
    return (
      <ResourceItem
        id={item.id}
        accessibilityLabel={`Review by ${item.author}`}
        verticalAlignment="center"
        media={
          item.productImage && (
            <Avatar
              customer={false}
              size="medium"
              source={item.productImage}
              alt={item.productName}
            />
          )
        }
      >
        <div style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', color: '#ffb400' }}>
                {Array(5).fill().map((_, i) => (
                  <span key={i} style={{ fontSize: '16px' }}>★</span>
                ))}
              </div>
              <div style={{ marginLeft: '8px' }}>
                <Badge status="success">Published</Badge>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button size="slim" onClick={() => { }}>
                <Icon source={ThumbsUpIcon} />
                <Text variant="bodyMd" as="span" visuallyHidden>
                  Unpublish
                </Text>
              </Button>
              <Button size="slim" onClick={() => { }}>
                <Icon source={ReplayIcon} />
                <Text variant="bodyMd" as="span" visuallyHidden>
                  Reply
                </Text>
              </Button>
              <Button size="slim" onClick={() => { }}>
                <Icon source={MenuHorizontalIcon} />
                <Text variant="bodyMd" as="span" visuallyHidden>
                  More actions
                </Text>
              </Button>
            </div>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <Text variant="bodyMd" as="p">{item.content}</Text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Text variant="bodyMd" as="span" color="subdued">
                {item.productName}
              </Text>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Text variant="bodyMd" as="span" color="subdued">
                {item.author} wrote at {item.date}
              </Text>
              <div style={{ display: 'flex', alignItems: 'center', marginLeft: '12px' }}>
                <Icon source={ThumbsUpIcon} />
                <Text variant="bodyMd" as="span" color="subdued" style={{ marginLeft: '4px' }}>
                  {item.likes}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </ResourceItem>
    );
  };

  const tabs = [
    {
      id: 'all',
      content: 'All (24)',
      accessibilityLabel: 'All reviews',
      panelID: 'all-reviews',
    },
    {
      id: 'published',
      content: 'Published (24)',
      accessibilityLabel: 'Published reviews',
      panelID: 'published-reviews',
    },
    {
      id: 'unpublished',
      content: 'Unpublished (0)',
      accessibilityLabel: 'Unpublished reviews',
      panelID: 'unpublished-reviews',
    },
  ];

  const reviewsData = [
    {
      id: '1',
      author: 'Steven Moreno',
      date: '2025-01-07 00:56:00',
      content: 'I choose 2xL and it suits me very well adjusted and loose as I wanted, I measure 173 and weight 70 between 75kg',
      productName: '2XM Optical Doubler',
      productImage: '/images/2XM_Optical_Doubler.jpg',
      likes: 0,
    },
    {
      id: '2',
      author: 'Kimberly Osborne',
      date: '2025-01-07 00:56:00',
      content: 'I choose 2xL and it suits me very well adjusted and loose as I wanted, I measure 173 and weight 70 between 75kg',
      productName: 'Binocular - 8.1.2 - 8x42',
      productImage: '/images/binocular.jpg',
      likes: 0,
    },
    {
      id: '3',
      author: 'John Gonzales',
      date: '2025-01-01 15:05:00',
      content: 'EXACTLY what i was looking for.',
      productName: '2XM Optical Doubler',
      productImage: '/images/2XM_Optical_Doubler.jpg',
      likes: 0,
    },
  ];

  const filteredProducts = reviewsData.filter((data) =>
    data.productName.toLowerCase().includes(searchValue.toLowerCase()) ||
    data.content.toLowerCase().includes(searchValue.toLowerCase())
  );
  // console.log('filteredProducts->', filteredProducts)

  return (
    <div style={{ padding: '20px', fontFamily: '-apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif' }}>
      <LegacyCard>
        <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange} />
        <div style={{ padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ flex: 1, marginRight: '16px' }}>
              <TextField
                label="Search"
                labelHidden
                placeholder="Search by review content,name,email or product"
                value={searchValue}
                onChange={handleSearchChange}
                prefix={
                  <div style={{ padding: '0 8px' }}>
                    <Icon source={() => <span>🔍</span>} />
                  </div>
                }
              />
            </div>
            <ButtonGroup>
              <Button>Ratings</Button>
              <Button>Tag</Button>
              <Button>Product</Button>
              <Button>Clear all</Button>
            </ButtonGroup>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <InlineStack align="start">
              <Checkbox label="Showing 20 reviews" checked={false} />
            </InlineStack>
          </div>

          <ResourceList
            items={filteredProducts}
            renderItem={renderItem}
            showHeader={false}
            alternateTool={
              <ButtonGroup>
                <Button onClick={() => { }}>Reply</Button>
                <Button onClick={() => { }}>Unpublish</Button>
              </ButtonGroup>
            }
          />
        </div>
      </LegacyCard>
    </div>
  );
}