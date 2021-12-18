//? m for mock
const mSidebarContext = {
  closeSidebar: jest.fn(),
  isSidebarOpen: false,
};

const mCartContext = {
  removeItem: jest.fn(),
  changeQuantityCartItem: jest.fn(),
};

const mProducts = [
  {
    id: 'recd1jIVIEChmiwhe1',
    name: 'armchair',
    price: 12599,
    images: [
      {
        id: 'attCXM1WJs4moqKZp',
        width: 4541,
        height: 2843,
        url: 'https://dl.airtable.com/.attachments/f38178db557948703cd6b54474f87b79/6215d834/0-pexels-ingo-joseph-609768.jpg',
        filename: '0-pexels-ingo-joseph-609768.jpg',
        size: 1317051,
        type: 'image/jpeg',
        thumbnails: {
          small: {
            url: 'https://dl.airtable.com/.attachmentThumbnails/6b96f8480fc2dfe1e8ff05f12398822d/324ae656',
            width: 58,
            height: 36,
          },
          large: {
            url: 'https://dl.airtable.com/.attachmentThumbnails/530c07c5ade5acd9934c8dd334458b86/cf91397f',
            width: 818,
            height: 512,
          },
        },
      },
      {
        id: 'att2N6lNTbvt0qUAk',
        width: 1000,
        height: 667,
        url: 'https://dl.airtable.com/.attachments/c430d99814aa29f5c14f06e730c01880/1a499653/z-extra-1.jpeg',
        filename: 'z-extra-1.jpeg',
        size: 102108,
        type: 'image/jpeg',
        thumbnails: {
          small: {
            url: 'https://dl.airtable.com/.attachmentThumbnails/d72cae49ae4305e9d60ad1357e627bb0/9732e63d',
            width: 54,
            height: 36,
          },
          large: {
            url: 'https://dl.airtable.com/.attachmentThumbnails/4659487f9eee4a1b43dd3b3eac85261d/efaa36e3',
            width: 768,
            height: 512,
          },
        },
      },
      {
        id: 'attbDnTQoHFYsuXfV',
        width: 1000,
        height: 714,
        url: 'https://dl.airtable.com/.attachments/3bf59de85af438fadedec898afc2e7e0/dfd4c551/z-extra-2.jpeg',
        filename: 'z-extra-2.jpeg',
        size: 84418,
        type: 'image/jpeg',
        thumbnails: {
          small: {
            url: 'https://dl.airtable.com/.attachmentThumbnails/2ddbea8a385f09121016d2475e0c6390/288d39ab',
            width: 50,
            height: 36,
          },
          large: {
            url: 'https://dl.airtable.com/.attachmentThumbnails/357504ee74d55da7ba6b14d857944253/9764e5ae',
            width: 717,
            height: 512,
          },
        },
      },
      {
        id: 'attuWWFVg5cQMtBtG',
        width: 1000,
        height: 650,
        url: 'https://dl.airtable.com/.attachments/74947a0402d5da7c599b893607159608/e54cf694/z-extra-3.jpeg',
        filename: 'z-extra-3.jpeg',
        size: 107838,
        type: 'image/jpeg',
        thumbnails: {
          small: {
            url: 'https://dl.airtable.com/.attachmentThumbnails/7b5fb13aef14257f64ce873221704064/9692f416',
            width: 55,
            height: 36,
          },
          large: {
            url: 'https://dl.airtable.com/.attachmentThumbnails/421d84ee9629ed8a47237f55e74cd594/54a726cc',
            width: 788,
            height: 512,
          },
        },
      },
      {
        id: 'att7Utqea6uV7j1Ba',
        width: 1000,
        height: 667,
        url: 'https://dl.airtable.com/.attachments/af0b67edfa684a5e17127c9a6346c9e7/12938bf1/z-extra-4.jpeg',
        filename: 'z-extra-4.jpeg',
        size: 99481,
        type: 'image/jpeg',
        thumbnails: {
          small: {
            url: 'https://dl.airtable.com/.attachmentThumbnails/36bfcc2025b9c4ff2527d266a303d9f3/1350bd45',
            width: 54,
            height: 36,
          },
          large: {
            url: 'https://dl.airtable.com/.attachmentThumbnails/748e36afe825b9dc9c5770078248a031/f3c00955',
            width: 768,
            height: 512,
          },
          full: {
            url: 'https://dl.airtable.com/.attachmentThumbnails/2abad9b4ab629174789b099024665cf9/7afcbe20',
            width: 3000,
            height: 3000,
          },
        },
      },
    ],
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    colors: ['#000', '#00ff00', '#0000ff'],
    company: 'marcos',
    stock: 3,
    stars: 4.6,
    reviews: 33,
    category: 'bedroom',
    shipping: true,
  },
  {
    id: 'recd1jIVIEChmiwhe2',
    name: 'armchair',
    price: 12599,
    images: [
      {
        id: 'attCXM1WJs4moqKZp',
        width: 4541,
        height: 2843,
        url: 'https://dl.airtable.com/.attachments/f38178db557948703cd6b54474f87b79/6215d834/0-pexels-ingo-joseph-609768.jpg',
        filename: '0-pexels-ingo-joseph-609768.jpg',
        size: 1317051,
        type: 'image/jpeg',
        thumbnails: {
          small: {
            url: 'https://dl.airtable.com/.attachmentThumbnails/6b96f8480fc2dfe1e8ff05f12398822d/324ae656',
            width: 58,
            height: 36,
          },
          large: {
            url: 'https://dl.airtable.com/.attachmentThumbnails/530c07c5ade5acd9934c8dd334458b86/cf91397f',
            width: 818,
            height: 512,
          },
        },
      },
      {
        id: 'att2N6lNTbvt0qUAk',
        width: 1000,
        height: 667,
        url: 'https://dl.airtable.com/.attachments/c430d99814aa29f5c14f06e730c01880/1a499653/z-extra-1.jpeg',
        filename: 'z-extra-1.jpeg',
        size: 102108,
        type: 'image/jpeg',
        thumbnails: {
          small: {
            url: 'https://dl.airtable.com/.attachmentThumbnails/d72cae49ae4305e9d60ad1357e627bb0/9732e63d',
            width: 54,
            height: 36,
          },
          large: {
            url: 'https://dl.airtable.com/.attachmentThumbnails/4659487f9eee4a1b43dd3b3eac85261d/efaa36e3',
            width: 768,
            height: 512,
          },
        },
      },
      {
        id: 'attbDnTQoHFYsuXfV',
        width: 1000,
        height: 714,
        url: 'https://dl.airtable.com/.attachments/3bf59de85af438fadedec898afc2e7e0/dfd4c551/z-extra-2.jpeg',
        filename: 'z-extra-2.jpeg',
        size: 84418,
        type: 'image/jpeg',
        thumbnails: {
          small: {
            url: 'https://dl.airtable.com/.attachmentThumbnails/2ddbea8a385f09121016d2475e0c6390/288d39ab',
            width: 50,
            height: 36,
          },
          large: {
            url: 'https://dl.airtable.com/.attachmentThumbnails/357504ee74d55da7ba6b14d857944253/9764e5ae',
            width: 717,
            height: 512,
          },
        },
      },
      {
        id: 'attuWWFVg5cQMtBtG',
        width: 1000,
        height: 650,
        url: 'https://dl.airtable.com/.attachments/74947a0402d5da7c599b893607159608/e54cf694/z-extra-3.jpeg',
        filename: 'z-extra-3.jpeg',
        size: 107838,
        type: 'image/jpeg',
        thumbnails: {
          small: {
            url: 'https://dl.airtable.com/.attachmentThumbnails/7b5fb13aef14257f64ce873221704064/9692f416',
            width: 55,
            height: 36,
          },
          large: {
            url: 'https://dl.airtable.com/.attachmentThumbnails/421d84ee9629ed8a47237f55e74cd594/54a726cc',
            width: 788,
            height: 512,
          },
        },
      },
      {
        id: 'att7Utqea6uV7j1Ba',
        width: 1000,
        height: 667,
        url: 'https://dl.airtable.com/.attachments/af0b67edfa684a5e17127c9a6346c9e7/12938bf1/z-extra-4.jpeg',
        filename: 'z-extra-4.jpeg',
        size: 99481,
        type: 'image/jpeg',
        thumbnails: {
          small: {
            url: 'https://dl.airtable.com/.attachmentThumbnails/36bfcc2025b9c4ff2527d266a303d9f3/1350bd45',
            width: 54,
            height: 36,
          },
          large: {
            url: 'https://dl.airtable.com/.attachmentThumbnails/748e36afe825b9dc9c5770078248a031/f3c00955',
            width: 768,
            height: 512,
          },
          full: {
            url: 'https://dl.airtable.com/.attachmentThumbnails/2abad9b4ab629174789b099024665cf9/7afcbe20',
            width: 3000,
            height: 3000,
          },
        },
      },
    ],
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    colors: ['#000', '#00ff00', '#0000ff'],
    company: 'marcos',
    stock: 3,
    stars: 4.6,
    reviews: 33,
    category: 'bedroom',
    shipping: true,
  },
];

const mProductContext = {
  product: { colors: ['#000', '#00ff00', '#0000ff'] },
  featured_products: mProducts,
  products_loading: true,
  products_error: false,
};

const mFilterContext = {
  filtered_products: mProducts,
  grid_view: true,
  options: {
    categories: [
      'all',
      'Office',
      'Living Room',
      'Kitchen',
      'Bedroom',
      'Dining',
      'Kids',
    ],
    companies: ['all', 'marcos', 'liddy', 'ikea', 'caressa'],
    colors: ['all', '#ff0000', '#00ff00', '#0000ff', '#000', '#ffb900'],
    highestPrice: 309999,
  },
  selection: {
    shipping: true,
    searchedName: 'searchedWord',
    selectedCategory: 'all',
    selectedCompany: 'all',
    selectedColor: '#ff0000',
    selectedPrice: '309999',
  },
};

export { mSidebarContext, mCartContext, mProductContext, mFilterContext };
