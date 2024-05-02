import React from 'react';

const ProductCard = () => {
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
    }
  ];

  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 gap-5">
      {cardsData.map((card) => (
        <div key={card.id} id={card.id} className="cursor-pointer text-center flex flex-col gap-2">
          <img
            src={card.imageUrl}
            alt=""
          />
          <div>
            <p className=' text-lg'>{card.productName}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
