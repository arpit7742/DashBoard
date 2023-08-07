export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  export const userRows = [
    {
      id: 1,
      username: "Olivia",
      img: "/assets/person/person1.jpg",
      email: "olivia@gmail.com",
      status: "active",
      age: 35,
    },
    {
      id: 2,
      username: "Charlotte",
      img: "/assets/person/person2.jpg",
      email: "charlotte@gmail.com",
      status: "passive",
      age: 21,
    },
    {
      id: 3,
      username: "Amelia",
      img: "/assets/person/person3.jpg",
      email: "amelia@gmail.com",
      status: "pending",
      age: 15,
    },
    {
      id: 4,
      username: "Camila",
      img: "/assets/person/person4.jpg",
      email: "camila@gmail.com",
      status: "active",
      age: 26,
    },
    {
      id: 5,
      username: "Madison Clark",
      img: "/assets/person/person5.jpg",
      email: "madison@gmail.com",
      status: "pending",
      age: 28,
    },
    {
      id: 6,
      username: "Alexander Hall",
      img: "/assets/person/person6.jpg",
      email: "alexander@gmail.com",
      status: "passive",
      age: 20,
    },
    {
      id: 7,
      username: "Nova Garcia",
      img: "/assets/person/person7.jpg",
      email: "nova@gmail.com",
      status: "active",
      age: 30,
    },
    {
      id: 8,
      username: "Sebastian",
      img: "/assets/person/person8.jpg",
      email: "sebastian@gmail.com",
      status: "passive",
      age: 27,
    },
    {
      id: 9,
      username: "Olivia",
      img: "/assets/person/person1.jpg",
      email: "olivia@gmail.com",
      status: "active",
      age: 35,
    },
    {
      id: 10,
      username: "Charlotte",
      img: "/assets/person/person2.jpg",
      email: "charlotte@gmail.com",
      status: "passive",
      age: 21,
    },
    {
      id: 11,
      username: "Amelia",
      img: "/assets/person/person3.jpg",
      email: "amelia@gmail.com",
      status: "pending",
      age: 15,
    },
    {
      id: 12,
      username: "Camila",
      img: "/assets/person/person4.jpg",
      email: "camila@gmail.com",
      status: "active",
      age: 26,
    },
    {
      id: 13,
      username: "Madison Clark",
      img: "/assets/person/person5.jpg",
      email: "madison@gmail.com",
      status: "pending",
      age: 28,
    },
    {
      id: 14,
      username: "Alexander Hall",
      img: "/assets/person/person6.jpg",
      email: "alexander@gmail.com",
      status: "passive",
      age: 20,
    },
    {
      id: 15,
      username: "Nova Garcia",
      img: "/assets/person/person7.jpg",
      email: "nova@gmail.com",
      status: "active",
      age: 30,
    },
    {
      id: 16,
      username: "Sebastian",
      img: "/assets/person/person8.jpg",
      email: "sebastian@gmail.com",
      status: "passive",
      age: 27,
    },
  ];