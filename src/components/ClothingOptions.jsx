import React from 'react';

const ClothingOptions = () => {
  // Array com os dados dos cards
  const cardsData = [
    {
      id: 'camisetas',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6c07ba99-3f99-4f73-815f-eba691fbf8a3/jordan-air-mens-stretch-t-shirt-fW22Sk.png',
      description: 'Camisetas'
    },
    {
      id: 'agasalhos',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2521edb2-0481-4d22-9b6f-b4f6dabb3e70/jordan-sport-jam-warm-up-jacket-7G3LPt.png',
      description: 'Agasalhos'
    },
    {
      id: 'mochilas',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d0468fe0-4818-4ffb-bded-34145dbbc4b4/jordan-level-backpack-4045l-lxrMM8.png',
      description: 'Mochilas'
    },
    {
      id: 'Bermudas',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3c6ddb43-fcb0-47ed-9888-f2843bf0ba44/jordan-flight-mvp-mens-fleece-shorts-wx2z52.png',
      description: 'Bermudas'
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
          {card.description}
        </div>
      ))}
    </div>
  );
};

export default ClothingOptions;
