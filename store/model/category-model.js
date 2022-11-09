import { action, thunk } from 'easy-peasy'



const CategoryModel = {
    data: [
        {
            url: "/category/mobile",
            title: "Mobile",
            image: "https://cdn-icons-png.flaticon.com/512/545/545245.png",
        },
        {
            url: "/category/computer",
            title: "Computer",
            image: "https://cdn-icons-png.flaticon.com/512/3067/3067260.png"
        },
        {
            url: "/category/headphone",
            title: "Headphone",
            image: "https://i.pinimg.com/originals/b7/92/d5/b792d55e849e4543b6d29c2d3b6295bf.jpg"
        },
        {
            url: "/category/speaker",
            title: "Speaker",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4TClWM6B1yYbb2QG9SgdhfV4dM7qd1zlIg&usqp=CAU"
        },
        {
            url: "/category/camera",
            title: "Camera",
            image: "https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-camera-icon-png-image_696326.jpg"
        },
    ],
    getData: thunk((actions, payload) => {
    }),
    setData: action((state, payload) => {
        state.data = payload.data
    }),
    clearData: action((state, payload) => {
        state.data = []
    })
}

export default CategoryModel