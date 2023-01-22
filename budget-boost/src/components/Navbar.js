import {Frame, Navigation} from '@shopify/polaris';
import {
  HomeMinor,
  OrdersMinor,
  ProductsMinor,
  OnlineStoreMinor,
} from '@shopify/polaris-icons';
// import { navigationBarCollapsed } from '@shopify/polaris/build/ts/latest/src/utilities/breakpoints';
import React from 'react';


function Navbar() {
  return (
    <Frame>
      <Navigation location="/">
        <Navigation.Section
          items={[
            {
              url: '/path/to/place',
              label: 'Home',
              icon: HomeMinor,
            },
            {
              url: '/path/to/place',
              label: 'Orders',
              icon: OrdersMinor,
            },
            {
              url: '/path/to/place',
              label: 'Products',
              icon: ProductsMinor,
            },
          ]}
        />
        <Navigation.Section
          items={[
            {
              url: '/path/to/place',
              label: 'Online Store',
              icon: OnlineStoreMinor,
            },
          ]}
          separator
        />
      </Navigation>
    </Frame>
  );
}

export default Navbar;