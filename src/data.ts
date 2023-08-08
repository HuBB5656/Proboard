export const menu = [
{
    id:1,
    title:"main",
    listItem:[
        {
            id:1,
            title:"Home",
            url:"/",
            icon:"home.svg"
        }, 
        {
            id:2,
            title:"Profile",
            url:"/profile",
            icon:"profile.svg"
        }
    ]
},
{
    id:2,
    title:"lists",
    listItem:[
        {
            id:1,
            title:"Users",
            url:"/users",
            icon:"user.svg"
        }, 
        {
            id:2,
            title:"Products",
            url:"/products",
            icon:"product.svg"
        },
        {
            id:2,
            title:"Orders",
            url:"/orders",
            icon:"order.svg"
        }
    ] 
},
{
    id:3,
    title:"general",
    listItem:[
        {
            id:1,
            title:"Elements",
            url:"/elements",
            icon:"element.svg"
        }, 
        {
            id:2,
            title:"Note",
            url:"/notes",
            icon:"note.svg"
        },
        {
            id:2,
            title:"Forms",
            url:"/forms",
            icon:"form.svg"
        }
    ] 
},
{
    id:4,
    title:"maintenance",
    listItem:[
        {
            id:1,
            title:"Settings",
            url:"/settings",
            icon:"setting.svg"
        }, 
        {
            id:2,
            title:"Backups",
            url:"/backup",
            icon:"backup.svg"
        },
    ] 
},
{
    id:5,
    title:"analytics",
    listItem:[
        {
            id:1,
            title:"Charts",
            url:"/charts",
            icon:"chart.svg"
        }, 
        {
            id:2,
            title:"Logs",
            url:"/logs",
            icon:"log.svg"
        },
    ] 
}
];


export const topDeals = [
    {
      "id": 1,
      "username": "John Doe",
      "email": "habibo5@gmail.com",
      "img": "https://th.bing.com/th/id/OIP.ysdd9pBlwnNdnxQoC8y4KQHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "amount": "3.25"
    },
    {
      "id": 2,
      "username": "John Doe",
      "email": "habib@gmail.com",
      "img": "https://th.bing.com/th/id/OIP.ysdd9pBlwnNdnxQoC8y4KQHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "amount": "3.25"
    },
    {
      "id": 3,
      "username": "John Doe",
      "email": "habib@gmail.com",
      "img": "https://th.bing.com/th/id/OIP.ysdd9pBlwnNdnxQoC8y4KQHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "amount": "3.25"
    },
    {
      "id": 4,
      "username": "John Doe",
      "email": "habib@gmail.com",
      "img": "https://th.bing.com/th/id/OIP.ysdd9pBlwnNdnxQoC8y4KQHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "amount": "3.25"
    },
    {
      "id": 5,
      "username": "John Doe",
      "email": "habib@gmail.com",
      "img": "https://th.bing.com/th/id/OIP.ysdd9pBlwnNdnxQoC8y4KQHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "amount": "3.25"
    },
    {
      "id": 6,
      "username": "John Doe",
      "email": "habib@gmail.com",
      "img": "https://th.bing.com/th/id/OIP.ysdd9pBlwnNdnxQoC8y4KQHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "amount": "3.25"
    },

    {
        "id": 7,
        "username": "John Doe",
        "email": "habib@gmail.com",
        "img": "https://th.bing.com/th/id/OIP.ysdd9pBlwnNdnxQoC8y4KQHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "amount": "3.25"
      },
      {
        "id": 8,
        "username": "John Doe",
        "email": "habib@gmail.com",
        "img": "https://th.bing.com/th/id/OIP.ysdd9pBlwnNdnxQoC8y4KQHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "amount": "3.25"
      }
  ];



  export const userDataBox = {
    color:"#8884d8",
    icon:"/userIcon.svg",
    title:"Total Users",
    number:"11.235",
    percentage:45,
    dataKey:"users",
    chartData:[
        {name:"Sun",users:400},
        {name:"Mon",users:600},
        {name:"Tus",users:500},
        {name:"Wen",users:700},
        {name:"Sat",users:400},
        {name:"Fri",users:450},
    ]
  };

  export const conversion = {
    color:"gold",
    icon:"/conversionIcon.svg",
    title:"Total Ratio",
    number:"2.6",
    percentage:12,
    dataKey:"ratio",
    chartData:[
        {name:"Sun",ratio:400},
        {name:"Mon",ratio:600},
        {name:"Tus",ratio:700},
        {name:"Wen",ratio:400},
        {name:"Sat",ratio:500},
        {name:"Fri",ratio:450},
    ]
  };

  export const totalRevenu = {
    color:"teal",
    icon:"/revenueIcon.svg",
    title:"Total Revenue",
    number:"$46,456",
    percentage:-11,
    dataKey:"revenue",
    chartData:[
        {name:"Sun",revenue:400},
        {name:"Mon",revenue:600},
        {name:"Tus",revenue:700},
        {name:"Wen",revenue:400},
        {name:"Sat",revenue:500},
        {name:"Fri",revenue:450},
    ]
  };

  export const totalProducts = {
    color:"skyblue",
    icon:"/productIcon.svg",
    title:"Total Products",
    number:"256",
    percentage:25,
    dataKey:"product",
    chartData:[
        {name:"Sun",product:400},
        {name:"Mon",product:600},
        {name:"Tus",product:700},
        {name:"Wen",product:400},
        {name:"Sat",product:500},
        {name:"Fri",product:450},
    ]
  };