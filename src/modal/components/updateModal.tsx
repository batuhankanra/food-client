
import { useState } from "react";
import { categories } from "../../components/dinnerToday";
import clsx from "clsx";
import { FaArrowRight } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../stores/hook";
import {  UpdateApi } from "../../stores/features/api";
import { toast } from "sonner";



const UpdateModal = () => {
  const {id}=useAppSelector(state=>state.modal)
  const {data}=useAppSelector(state=>state.api)

  const currentData=data.filter(x=>x._id===id)[0]




  const [ingredient, setIngredient] = useState('');
  const [ingredients, setIngredients] = useState<string[]>(currentData.ingredients);
  const [step, setStep] = useState('');
  const [name,setName]=useState(currentData.title)
  const [description,setdescription]=useState(currentData.description)
  const [steps, setSteps] = useState<string[]>(currentData.steps);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [category, setCategory] = useState(currentData.category);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const dispatch=useAppDispatch()

  const handleKeyDown=(e:React.KeyboardEvent<HTMLInputElement>)=>{
     if (e.key === 'Enter' && ingredient.trim() !== '') {
      e.preventDefault();
      setIngredients([...ingredients, ingredient.trim()]);
      setIngredient('');
    }
  }
  const handleStepKeyDown=(e:React.KeyboardEvent<HTMLInputElement>)=>{
     if (e.key === 'Enter' && step.trim() !== '') {
      e.preventDefault();
      setSteps([...steps, step.trim()]);
      setStep('');
    }
  }
  const handleClickDown=()=>{
    setIngredients([...ingredients, ingredient.trim()]);
      setIngredient('');
  }
  const handleClickStepDown=()=>{
    setSteps([...steps, step.trim()]);
    setStep('');
  }
  const handleRemove=(item:String)=>{
    setIngredients(ingredients.filter(x=> x !== item))
  }
  const handleStepRemove=(item:String)=>{
    setSteps(steps.filter(x=> x !== item))
  }
  const handleFile=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const currenFile=e.target.files?.[0]
    if(currenFile){
      setSelectedFile(currenFile)
    }
  }
  const handleCategory=(name:string)=>{
    setCategory(name)
    setIsActive(!isActive)

  }
 




  const submitHandle=async (e:any)=>{
    e.preventDefault()
    const formData=new FormData()
    formData.append('oldImage',`food-website${currentData.image.split('food-website')[1].split('.')[0]}`)
    formData.append('title',name)
    formData.append('description',description)
    formData.append('ingredients',JSON.stringify(ingredients))
    formData.append('category',category)
    formData.append('steps',JSON.stringify(steps))
    if(selectedFile){
      formData.append('file',selectedFile)
    }
    

    toast.promise(dispatch(UpdateApi({formData,id:currentData._id})).unwrap(),{
      loading:'Yükleniyor',
      success:'Başarılı',
      error:'Hata olustu'
    })

  }
  return (
   <form onSubmit={submitHandle} className="mt-4 flex flex-col items-center gap-y-4">
    <input onChange={e=>setName(e.target.value)} value={name} type="text" placeholder="Tarifin ismi" className="w-full outline-none border border-zinc-400 focus:border-zinc-800 focus:bg-white transition-all duration-200 rounded-md py-2 px-1 text-lg" />
    <input onChange={e=>setdescription(e.target.value)} value={description} type="text" placeholder="Tarifin Açıklanması" className="w-full outline-none border border-zinc-400 focus:bg-white transition-all duration-200 focus:border-zinc-800 rounded-md py-2 px-1 text-lg" />
    <div className="w-full relative">
      <input type="text" value={ingredient} onChange={e=>setIngredient(e.target.value)} onKeyDown={handleKeyDown} placeholder="Tarifin Malzemeleri" className="w-full focus:bg-white transition-all duration-200 outline-none border border-zinc-400 focus:border-zinc-800 rounded-md py-2 px-1 text-lg" />
      <button type="button" onClick={handleClickDown} className="absolute right-0 top-0 cursor-pointer hover:text-black text-zinc-700 h-12 rounded-r-md w-12 flex items-center justify-center"><FaArrowRight/></button>
      
    </div>
    <p className="text-sm">Malzemeyi yazıp entera basmanız gerekiyor.</p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4">
      
      {ingredients.length >0 && ingredients.map((item,i)=>(
        <div className="bg-sky-300 px-3 py-3 rounded-lg text-center relative" key={i}>
          {item}
          <button type="button" onClick={()=>handleRemove(item)} className="absolute top-0 right-2 text-xs cursor-pointer hover:text-white">X</button>
        </div>
      ))}
    </div>
    <div className="w-full relative">
      <input type="text" value={step} onChange={e=>setStep(e.target.value)} onKeyDown={handleStepKeyDown} placeholder="Tarifin Adımları" className="w-full outline-none border border-zinc-400 focus:bg-white transition-all duration-200 focus:border-zinc-800 rounded-md py-2 px-1 text-lg" />
      <button type="button" onClick={handleClickStepDown} className="absolute right-0 top-0 cursor-pointer hover:text-black text-zinc-700 h-12 rounded-r-md w-12 flex items-center justify-center"><FaArrowRight/></button>
    </div>
      <p className="text-sm">Adımları yazıp entera basmanız gerekiyor.</p>
    {steps.length >0 && steps.map((item,i)=>(
        <div className="bg-sky-400 px-3 py-3 rounded-lg  relative w-full text-start" key={i}>
          {item}
          <button type="button" onClick={()=>handleStepRemove(item)} className="absolute top-0 right-3 cursor-pointer hover:text-white">X</button>
        </div>
    ))}
    <div className="relative w-full">
      <button type="button" className={clsx(
        'w-full outline-none border border-zinc-400 hover:bg-sky-200 transition-all duration-200 hover:border-zinc-800 text-start rounded-md py-2 px-1 text-lg',
         isActive===true &&'bg-white hover:bg-white'
        
      )} onClick={()=>setIsActive(!isActive)}>
        {category==='' ? 'Kategori Seç' : category}
      </button>
      {isActive && (
        <div className="absolute top-14 left-0 w-full bg-white border border-zinc-400 rounded-md shadow-md z-50">
          
          {categories.map((item, i) => (
            <button
              type="button"
              key={i}
              className="w-full text-start px-3 py-2 hover:bg-sky-200 border-b last:border-b-0 "
              onClick={()=>handleCategory(item.slug)}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}

    </div>
    <input onChange={handleFile} type="file" className="cursor-pointer w-full outline-none border border-zinc-400 hover:bg-sky-200 transition-all duration-200 hover:border-zinc-800 text-start rounded-md py-2 px-1 text-lg " />
    {selectedFile && (
      <img
        src={URL.createObjectURL(selectedFile)}
        alt="Önizleme"
        
        className="mt-3 w-30 h-30 object-cover rounded-md"
      />
    )}
    <button type="submit" className=" cursor-pointer  w-full outline-none border border-zinc-400 hover:bg-sky-200 transition-all duration-200 hover:border-zinc-800 text-center rounded-md py-2 px-1 text-lg font-semibold">Güncelle</button>
      
   </form>
  )
}

export default UpdateModal





// UpdateModal