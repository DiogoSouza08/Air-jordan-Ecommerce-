import React, { useState } from 'react';
import AddSacolaBtn from './AddSacolaBtn';
import SearchIcon from '@mui/icons-material/Search';

const ProductCardRoupas = ({ limit = 4 }) => {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const cardsData = [
        {
      id: '21',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/df8c7503-d023-4fff-9031-f9c53db1cc2f/jordan-brooklyn-fleece-mens-printed-pullover-hoodie-KCkbvd.png',
      productName : 'Jordan Brooklyn Fleece',
      price: '399',
      gender: 'masculino'
    },
    {
      id: '22',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1640b28a-2850-4caf-bc51-be6a1b18660d/jordan-air-mens-t-shirt-5LpNh6.png',
      productName : 'Camiseta Jordan',
      price: '199',
      gender: 'masculino'

    },
    {
      id: '23',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8483fa6c-d707-41f3-bead-a6e909ff4cb8/jordan-brand-mens-t-shirt-htj6fT.png',
      productName : 'Jordan Brand',
      price: '199',
      gender: 'masculino'
    },
    {
      id: '24',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e5c2cc8e-3cc6-4d3a-a8ed-569d98a2022b/jordan-flight-essentials-mens-t-shirt-l7MxF5.png',
      productName : 'Jordan Flight Essentials',
      price: '199',
      gender: 'masculino'
    },
    {
      id: '25',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e6372910-8c88-4cf9-ad70-2e262bae0205/jordan-dri-fit-adv-sport-mens-golf-polo-flgVNX.png',
      productName : 'Camisa Jordan ADV ',
      price: '269',
      gender: 'masculino'
    },
    {
      id: '26',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/77781c80-9585-472a-b651-87bc6e9dd78b/jordan-sport-mens-dri-fit-t-shirt-rk45Vb.png',
      productName : 'Jordan Sport t-shirt',
      price: '219',
      gender: 'masculino'
    },
    {
      id: '27',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/83fdd90c-4b91-4cf2-80bf-f5336317e139/jordan-womens-slim-t-shirt-v27jNg.png',
      productName : 'Jordan womens t-shirt ',
      price: '199',
      gender: 'feminino'
    },
    {
      id: '28',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b0ffbef7-9d59-4c6c-b9e3-e2053161dceb/jordan-23-jersey-womens-tank-Tb1kZd.png',
      productName : 'Jordan 23 Jersey"',
      price: '199',
      gender: 'feminino'
    },
    {
      id: '29',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1e6c5594-4c83-45c9-8975-fee05f8c8734/jordan-sport-womens-diamond-shorts-KTG0Ql.png',
      productName : 'Jordan Sport short',
      price: '159',
      gender: 'feminino'
    },
    {
      id: '30',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e918d3df-6bbe-494a-91e2-13d16599d3f1/jordan-womens-oversized-graphic-t-shirt-MPz2MX.png',
      productName : 'Jordan Womens Oversized',
      price: '199',
      gender: 'feminino'
    },
    {
      id: '31',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b7969582-65e4-464f-a0ec-81b8cce07845/jordan-essentials-mens-renegade-jacket-VpCtGC.png',
      productName : 'Jaqueta Jordan Essentials',
      price: '399',
      gender: 'masculino'
    },
    {
      id: '32',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/307fdb4b-a76a-47d6-b5f2-e38dde3e2706/jordan-velocity-backpack-backpack-38l-p4q9g3.png',
      productName : 'Jordan Velocity Backpack',
      price: '149',
      gender: 'masculino'
    },
 
    {
      id: '33',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/439a93a4-a4a2-48e9-9f3f-544265da870e/jordan-dri-fit-sport-mens-woven-diamond-shorts-BjKw7f.png',
      productName : 'Short Jordan Dri-FIT',
      price: '159',
      gender: 'masculino'
    },
 
    {
      id: '34',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0db5b2bb-6d41-42b5-afe2-78e7898d2481/jordan-brooklyn-fleece-womens-crewneck-sweatshirt-L9TbSg.png',
      productName : 'Jordan Brooklyn Fleece',
      price: '299',
      gender: 'feminino'
    },
 
    {
      id: '35',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e5ee2ea8-fcf4-45ea-9dac-22f2b73fdea7/jordan-essentials-mens-statement-top-mv19Qf.png',
      productName : 'Camisa Jordan Essentials',
      price: '199',
      gender: 'masculino'
    },
    {
      id: '36',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/389d0e51-df74-41a6-ba0b-d63b27ad4967/jordan-flight-heritage-mens-denim-jacket-ZQ9h5p.png',
      productName : 'Jordan Flight Heritage',
      price: '269',
      gender: 'masculino'
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
      <div className=' gap-5  flex-col sm:flex-row items-center flex  mb-6 justify-end'>
        <div className='flex gap-2 justify-center items-center'>
        <span>Filtrar por:</span>
        <select onChange={handleFilterChange} value={filter} className='py-2 rounded-none bg-red-700 border border-gray-400 text-white  px-2.5'>
          <option value="all">Todas</option>
          <option value="feminino">Feminino</option>
          <option value="masculino">Masculino</option>
        </select>
        </div>
        <div className='bg-white relative w-full sm:w-auto border border-gray-400 '>
        <input
        type="text"
        placeholder="Buscar produto..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="py-2 px-4 focus:outline-none w-full  " 
        />
        <SearchIcon className="absolute right-3 top-2 h-5 w-5 text-gray-400" /> 
      </div>
      </div>
     
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-x-5 gap-y-12 md:gap-y-14 ">
        {limitedCardsData.map((card) => (
          <div key={card.id} id={card.id} className="cursor-pointer relative">
            <img
              src={card.imageUrl}
              alt=""
              className="w-full border h-auto"
            />
            <div className="absolute inset-0 flex items-center  justify-between flex-col">
              <p className="py-1 border border-gray-300 lg:min-h-0 min-h-12 bg-zinc-700 w-full justify-center flex items-center text-center text-sm text-white font-semibold sm:text-md lg:text-lg">{card.productName}</p>
              <div className='text-white pl-2  border border-gray-300 bg-zinc-700 flex w-full items-center justify-between sm:text-md font-normal lg:text-xl'>
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

export default ProductCardRoupas;
