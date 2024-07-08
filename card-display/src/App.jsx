import { useState } from 'react';
import Card from "./components/Card";

export default function App() {

  const [sortOrder, setSortOrder] = useState('none');
  
  const products = [
    {
      id: 1,
      name: 'Rolex Datejust 41',
      href: 'https://www.rolex.com/watches/datejust/m126334-0003',
      imageSrc: 'https://cdn.watchcharts.com/removebg/e464ebc7-4988-4a2d-bae0-3180578225a2.png',
      imageAlt: "The Oyster Perpetual Datejust 41 in Oystersteel and white gold features a silver dial and an Oyster bracelet.",
      price: '$10,350',
      reference: "126334",
      color: 'White Gold Dial with Fluted Bezel',
    },
    {
      id: 2,
      name: 'Rolex GMT-Master II',
      href: 'https://www.rolex.com/watches/gmt-master-ii/m126710grnr-0004',
      imageSrc: 'https://cdn.watchcharts.com/removebg/25055b42-6880-41e4-b2a2-e83c0f5794df.png?d=400x600',
      imageAlt: "The Oyster Perpetual GMT-Master II in Oystersteel with a black dial and an Oyster bracelet.",
      price: '$11,175',
      reference: "126710GRNR",
      color: 'Black Dial with Rotatable Bezel',
    },
    {
      id: 3,
      name: 'Rolex Yacht-Master 40',
      href: 'https://www.rolex.com/watches/yacht-master/m126622-0001',
      imageSrc: 'https://cdn.watchcharts.com/removebg/b45d99bf-cfb2-4c49-a61b-8c64d9569f8b.png?d=400x600',
      imageAlt: "The Oyster Perpetual Yacht-Master 40 in Oystersteel and platinum with an Oyster bracelet.",
      price: '$12,300',
      reference: "126622",
      color: 'Slate Dial with Rotatable Bezel',
    },
    {
      id: 4,
      name: 'Rolex Oyster Perpetual 28',
      href: 'https://www.rolex.com/watches/oyster-perpetual/m276200-0004',
      imageSrc: 'https://cdn.watchcharts.com/removebg/ca98cc8a-799f-4004-af83-622d09157274.png?d=400x600',
      imageAlt: "The Oyster Perpetual 28 with a pink dial and an Oyster bracelet.",
      price: '$5,550',
      reference: "276200",
      color: 'Pink Dial with Smooth Bezel',
    },
    {
      id: 5,
      name: 'Rolex Explorer 40',
      href: 'https://www.rolex.com/en-us/watches/explorer/m224270-0001',
      imageSrc: 'https://cdn.watchcharts.com/removebg/fc738a56-2ab0-425c-8374-caa7d9d1bc95.png?d=400x600',
      imageAlt: "The Oyster Perpetual Explorer 40 in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display.",
      price: '$7,700',
      reference: "224270",
      color: 'Black Dial with Smooth Bezel',
    },
    {
      id: 6,
      name: 'Rolex Cosmograph Daytona',
      href: 'https://www.rolex.com/watches/cosmograph-daytona/m126508-0002',
      imageSrc: 'https://cdn.watchcharts.com/removebg/281c1b5d-1a38-45eb-91f4-e8fd52060557.png?d=400x600',
      imageAlt: "This Oyster Perpetual Cosmograph Daytona in 18 ct yellow gold, with an intense black and champagne-colour dial and an Oyster bracelet, features an 18 ct yellow gold bezel with an engraved tachymetric scale.",
      price: '$41,200',
      reference: "126508",
      color: 'Intense Black and Champagne Dial with Tachymetric Scale Bezel',
    },
    {
      id: 7,
      name: 'Rolex Submariner Date',
      href: 'https://www.rolex.com/watches/submariner/m126610lv-0002',
      imageSrc: 'https://cdn.watchcharts.com/removebg/686e3680-b2d9-4965-837c-055c545a791a.png',
      imageAlt: "The Oyster Perpetual Submariner Date in Oystersteel with a Cerachrom bezel insert in green ceramic and a black dial with large luminescent hour markers.",
      price: '$10,800',
      reference: "126610LV",
      color: 'Black Dial with Rotatable Bezel',
    },
    {
      id: 8,
      name: 'Rolex Datejust 41',
      href: 'https://www.rolex.com/watches/datejust/m126333-0012',
      imageSrc: 'https://cdn.watchcharts.com/removebg/aed422ea-6494-4adf-946e-26ae7bbe545a.png?d=400x600',
      imageAlt: "This Oyster Perpetual Datejust 41 in Oystersteel and yellow gold features a champagne colour, diamond-set dial and a Jubilee bracelet.",
      price: '$14,150',
      reference: "126333",
      color: 'Champagne Dial with Diamonds and Fluted Bezel',
    }
  ];

  const sortedProducts = [...products].sort((a, b) => {
    const priceA = parseFloat(a.price.replace('$', '').replace(',', ''));
    const priceB = parseFloat(b.price.replace('$', '').replace(',', ''));
    if (sortOrder === 'lowToHigh') {
      return priceA - priceB;
    } else if (sortOrder === 'highToLow') {
      return priceB - priceA;
    } else {
      return 0;
    }
  });

  return (
    <>
      <div className='bg-rolexGreen'>
        <h2 className="text-4xl font-semibold text-center text-white py-6">Rolex Watches</h2>
      </div>  
        <div className="flex justify-end py-8 pr-10 bg-black">
          <select onChange={(e) => setSortOrder(e.target.value)} className="rounded-3xl p-2 bg-rolexGreen text-white">
            <option value="none">Default</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      
      <Card products={sortedProducts}/>
    
    </>
  );
}
