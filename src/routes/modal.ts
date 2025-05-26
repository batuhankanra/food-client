import CreateModal from "../modal/components/createModal";
import DeleteModal from "../modal/components/deleteModal";
import FoodModal from "../modal/components/FoddItem";
import RecipesModal from "../modal/components/repicesModal";
import UpdateModal from "../modal/components/updateModal";


export const routeModal=[
    {
        path:'create-food',
        element:CreateModal,
        title:"Oluştur"
    },
    {
        path:'update-food',
        element:UpdateModal,
        title:"Güncelle"
    },
    {
        path:'delete-food',
        element:DeleteModal,
        title:"Sil"
    },
    {
        path:'recipes-food',
        element:RecipesModal
    },
    {
        path:'food',
        element:FoodModal
    }
]