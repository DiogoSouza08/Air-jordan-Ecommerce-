import React, { useState } from 'react';
import AddSacolaBtn from './AddSacolaBtn';
import SearchIcon from '@mui/icons-material/Search';

const ProductCard = ({ limit = 4, isCalçadosPage }) => {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

    const cardsData = [
      {
        id: '1',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1d0f6af5-f607-4761-9bcf-a058d291ea66/air-jordan-1-hi-flyease-mens-shoes-VjGcGX.png',
        productName : 'Air Jordan 1 Hi FlyEase',
        price: '599',
        gender: 'masculino'
      },
      {
        id: '2',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3914f9b5-be4f-4a18-8a2c-c03a65158ffa/jordan-true-flight-mens-shoes-9TwpBF.png',
        productName : 'Jordan True Flight',
        price: '899',
        gender: 'masculino'
      },
      {
        id: '3',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ebd23c0d-581d-4bf2-a4a4-3cd7dd3af5f9/jumpman-mvp-womens-shoes-ps9nxH.png',
        productName : 'Jumpman MVP',
        price: '1299',
        gender: 'masculino'
      },
      {
        id: '4',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/495a78c4-8384-48bc-9881-8ccf8034719c/jordan-6-rings-big-kids-shoes-fMSFMP.png',
        productName : 'Jordan 6 Rings',
        price: '789',
        gender: 'masculino'
      },
      {
        id: '5',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f4bf6fe1-bc68-4af7-903c-b4354e4f89d5/jordan-air-ship-pe-sp-mens-shoes-5KVzjX.png',
        productName : 'Jordan Air Ship PE SP',
        price: '899',
        gender: 'masculino'
      },
      {
        id: '6',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/aff63355-b2e9-47fb-adae-4b60ba1f602e/air-jordan-1-mid-mens-shoes-X5pM09.png',
        productName : 'Air Jordan 1 Mid',
        price: '699',
        gender: 'masculino'
      },
      {
        id: '7',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fc394abe-784e-4b5f-9c56-43f741d3fc1a/air-jordan-9-retro-powder-blue-big-kids-shoes-xPJ9wC.png',
        productName : 'Air Jordan 9 Retro ',
        price: '1499',
        gender: 'masculino'
      },
      {
        id: '8',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3190981f-a3f8-4196-a919-16fb51ee44dc/tatum-2-vortex-basketball-shoes-vxD2dS.png',
        productName : 'Tatum 2 "Vortex"',
        price: '999',
        gender: 'masculino'
      },
      {
        id: '9',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b82f5434-4836-4709-9d70-c18795288a38/jumpman-two-trey-womens-shoes-VKM3mw.png',
        productName : 'Jumpman Two Trey',
        price: '799',
        gender: 'masculino'
      },
      {
        id: '10',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/67b77b5a-3069-4a37-a309-1546333bad34/air-jordan-11-cmft-low-big-kids-shoes-sRmZ82.png',
        productName : 'Air Jordan 11 CMFT Low',
        price: '899',
        gender: 'masculino'
      },
      {
        id: '11',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/22c34a13-44d9-40cc-b3f4-100de0d4a402/air-jordan-1-zoom-cmft-2-womens-shoes-DdXxlf.png',
        productName : 'Air Jordan 1 Zoom CMFT 2',
        price: '499',
        gender: 'masculino'
      },
      {
        id: '12',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b62791e2-3828-4e05-941b-6cb8783e6dae/luka-2-team-bank-basketball-shoes-qvvhqz.png',
        productName : 'Luka 2 Team Bank',
        price: '899',
        gender: 'masculino'
      },
   
      {
        id: '13',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ccd4b41d-9e19-4caf-8755-8611ee0ccca2/jordan-jumpman-pro-mens-shoes-L3X3Sk.png',
        productName : 'Jordan Jumpman Pro',
        price: '1399',
        gender: 'masculino'
      },
   
      {
        id: '14',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/96e2c937-2f9c-4952-bea3-ff234c767d0a/air-jordan-1-mid-se-craft-mens-shoes-5VjD18.png',
        productName : 'Air Jordan 1 Mid SE Craft',
        price: '599',
        gender: 'masculino'
      },
   
      {
        id: '15',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0e6648ed-4722-4085-8fcb-882cc674454f/air-jordan-i-high-g-mens-golf-shoes-ZgQdl6.png',
        productName : 'Air Jordan I High G',
        price: '999',
        gender: 'masculino'
      },
      {
        id: '16',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d7f5cf27-1c68-4a1d-bf58-81919ef7c6d4/jordan-spizike-low-big-kids-shoes-t6s9lN.png',
        productName : 'Jordan Spizike Low',
        price: '1299',
        gender: 'masculino'
      },
      {
        id: '17',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/201dcdbc-3c5c-4b69-9401-c5e927a63788/air-jordan-1-mid-se-womens-shoes-wkMdft.png',
        productName : 'Air Jordan 1 Mid SE',
        price: '1299',
        gender: 'feminino'
      },
      {
        id: '18',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1fcccc5c-b4ee-4765-9ba1-d2a9a6c08bc6/air-jordan-1-low-womens-shoes-rJrHLw.png',
        productName : 'Air Jordan 1 Low',
        price: '1299',
        gender: 'feminino'
      },
      {
        id: '19',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ba211a1e-cda0-4296-b3fa-cdb52c0c4985/air-jordan-1-low-method-of-make-womens-shoes-tq9cmG.png',
        productName : 'Air Jordan 1 Low Make',
        price: '1299',
        gender: 'feminino'
      },
      {
        id: '20',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/18feae27-20d6-4ab1-bb12-c02ea4650903/air-jordan-1-elevate-high-womens-shoes-BCspwg.png',
        productName : 'Air Jordan 1 Elevate High',
        price: '1299',
        gender: 'feminino'
      },
   
    
    ];
  


  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    console.log("Produto adicionado ao carrinho:", product);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCardsData = cardsData.filter((card) => {
    return (
      (filter === "all" || card.gender === filter) &&
      card.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const limitedCardsData = filteredCardsData.slice(0, limit);

  return (
    <div>
      {isCalçadosPage && (
        <div className='filterAndSearch gap-5 flex-col sm:flex-row items-center flex mb-6 justify-end'>
          <div className='flex gap-2 justify-center items-center'>
            <span>Filtrar por:</span>
            <select onChange={handleFilterChange} value={filter} className='py-2 bg-red-700 border border-gray-400 text-white px-2.5'>
              <option value="all">Todas</option>
              <option value="feminino">Feminino</option>
              <option value="masculino">Masculino</option>
            </select>
          </div>
          <div className='bg-white relative w-full sm:w-auto border border-gray-400'>
            <input
              type="text"
              placeholder="Buscar produto..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="sm:py-2 py-3 px-4 focus:outline-none w-full" 
            />
            <SearchIcon className="absolute right-3 sm:top-2 top-3 h-5 w-5 text-gray-400" /> 
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-4 grid-cols-2 gap-x-5 gap-y-12 md:gap-y-14">
        {limitedCardsData.map((card) => (
          <div key={card.id} id={card.id} className="cursor-pointer border relative">
            <img
              src={card.imageUrl}
              alt=""
              className="w-full border h-auto"
            />
            <div className="absolute inset-0 flex items-center justify-between flex-col">
              <p className="py-1 border border-gray-300 lg:min-h-0 min-h-12 bg-zinc-700 w-full justify-center flex items-center text-center text-sm text-white font-semibold sm:text-md lg:text-lg">{card.productName}</p>
              <div className='text-white pl-2 border border-gray-300 bg-zinc-700 flex w-full items-center justify-between sm:text-md font-normal lg:text-xl'>
                <div><span>R$</span>{card.price}<span>,99</span></div>
                <AddSacolaBtn onClick={() => handleAddToCart(card)} />
              </div>             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;