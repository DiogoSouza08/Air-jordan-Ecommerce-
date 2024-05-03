import React from 'react';

const ProductCard = ({ limit = 4 }) => {
  // Array com os dados dos cards
  const cardsData = [
    {
      id: '1',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1d0f6af5-f607-4761-9bcf-a058d291ea66/air-jordan-1-hi-flyease-mens-shoes-VjGcGX.png',
      productName : 'Air Jordan 1 Hi FlyEase'
    },
    {
      id: '2',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3914f9b5-be4f-4a18-8a2c-c03a65158ffa/jordan-true-flight-mens-shoes-9TwpBF.png',
      productName : 'Jordan True Flight'
    },
    {
      id: '3',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ebd23c0d-581d-4bf2-a4a4-3cd7dd3af5f9/jumpman-mvp-womens-shoes-ps9nxH.png',
      productName : 'Jumpman MVP'
    },
    {
      id: '4',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/495a78c4-8384-48bc-9881-8ccf8034719c/jordan-6-rings-big-kids-shoes-fMSFMP.png',
      productName : 'Jordan 6 Rings'
    },
    {
      id: '5',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f4bf6fe1-bc68-4af7-903c-b4354e4f89d5/jordan-air-ship-pe-sp-mens-shoes-5KVzjX.png',
      productName : 'Jordan Air Ship PE SP'
    },
    {
      id: '6',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/aff63355-b2e9-47fb-adae-4b60ba1f602e/air-jordan-1-mid-mens-shoes-X5pM09.png',
      productName : 'Air Jordan 1 Mid'
    },
    {
      id: '7',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fc394abe-784e-4b5f-9c56-43f741d3fc1a/air-jordan-9-retro-powder-blue-big-kids-shoes-xPJ9wC.png',
      productName : 'Air Jordan 9 Retro '
    },
    {
      id: '8',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3190981f-a3f8-4196-a919-16fb51ee44dc/tatum-2-vortex-basketball-shoes-vxD2dS.png',
      productName : 'Tatum 2 "Vortex"'
    },
    {
      id: '9',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b82f5434-4836-4709-9d70-c18795288a38/jumpman-two-trey-womens-shoes-VKM3mw.png',
      productName : 'Jumpman Two Trey'
    },
    {
      id: '10',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/67b77b5a-3069-4a37-a309-1546333bad34/air-jordan-11-cmft-low-big-kids-shoes-sRmZ82.png',
      productName : 'Air Jordan 11 CMFT Low'
    },
    {
      id: '11',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/22c34a13-44d9-40cc-b3f4-100de0d4a402/air-jordan-1-zoom-cmft-2-womens-shoes-DdXxlf.png',
      productName : 'Air Jordan 1 Zoom CMFT 2'
    },
    {
      id: '12',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b62791e2-3828-4e05-941b-6cb8783e6dae/luka-2-team-bank-basketball-shoes-qvvhqz.png',
      productName : 'Luka 2 Team Bank'
    },
 
    {
      id: '13',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ccd4b41d-9e19-4caf-8755-8611ee0ccca2/jordan-jumpman-pro-mens-shoes-L3X3Sk.png',
      productName : 'Jordan Jumpman Pro'
    },
 
    {
      id: '14',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/96e2c937-2f9c-4952-bea3-ff234c767d0a/air-jordan-1-mid-se-craft-mens-shoes-5VjD18.png',
      productName : 'Air Jordan 1 Mid SE Craft'
    },
 
    {
      id: '15',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0e6648ed-4722-4085-8fcb-882cc674454f/air-jordan-i-high-g-mens-golf-shoes-ZgQdl6.png',
      productName : 'Air Jordan I High G'
    },
    {
      id: '16',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d7f5cf27-1c68-4a1d-bf58-81919ef7c6d4/jordan-spizike-low-big-kids-shoes-t6s9lN.png',
      productName : 'Jordan Spizike Low'
    },
 
  
  ];

  const limitedCardsData = cardsData.slice(0, limit);

  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 gap-5">
      {limitedCardsData.map((card) => (
        <div key={card.id} id={card.id} className="cursor-pointer relative">
          <img
            src={card.imageUrl}
            alt=""
            className="w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            dsd
          </div>
          <p className="text-gray-300 pt-2.5 text-lg">{card.productName}</p>

        </div>
      ))}
    </div>
  );
};

export default ProductCard;
